/* KvízParty – AI-szintek: találati arány, tipppontosság és a Robot Idő Büntetés.
   Szándékosan ÉLES időzítőkkel fut (nincs #fast), mert az időbüntetést méri. */
const { chromium } = require('playwright');
const path = require('path');

const URL = 'file://' + path.join(__dirname, '..', 'index.html');
let failures = 0;
function check(name, ok, detail) {
  if (!ok) failures++;
  console.log((ok ? '  ✔ ' : '  ✘ ') + name + (detail !== undefined ? '  → ' + detail : ''));
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width: 480, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
  await page.goto(URL);

  /* ---- 1) szintek konfigurációja ---- */
  const cfg = await page.evaluate(() => ({
    n: AI_TIERS.length,
    names: AI_TIERS.map(t => t.name),
    d3: AI_TIERS.map(t => t.p[2]),
    spr: AI_TIERS.map(t => t.spr),
    monotonPerTier: AI_TIERS.every(t => t.p.every((v, i) => i === 0 || v <= t.p[i - 1])),
    aboveChance: AI_TIERS.every(t => t.p.every(v => v >= 0.25)),
    think: AI_THINK, lag: AI_LAG,
  }));
  console.log('— konfiguráció —');
  check('három AI-szint van', cfg.n === 3, cfg.names.join(' · '));
  check('közepes (3★) kérdésre 60% / 45% / 30%', JSON.stringify(cfg.d3) === '[0.6,0.45,0.3]', JSON.stringify(cfg.d3));
  check('minden szint görbéje nehézséggel csökken', cfg.monotonPerTier);
  check('egyik szint sem rosszabb a vak tippnél (25%)', cfg.aboveChance);
  check('a butább AI pontatlanabbul tippel', cfg.spr[0] < cfg.spr[1] && cfg.spr[1] < cfg.spr[2], JSON.stringify(cfg.spr));
  check('gondolkodási idő 1–2 mp', JSON.stringify(cfg.think) === '[1000,2000]', JSON.stringify(cfg.think));
  check('Robot Idő Büntetés 5–25 mp', JSON.stringify(cfg.lag) === '[5000,25000]', JSON.stringify(cfg.lag));

  /* ---- 2) valódi scheduleAI-futtatás szintenként (a timerek párhuzamosan járnak le) ---- */
  const N = 800, DUR = 30000;
  const res = await page.evaluate(async ({ N, DUR }) => {
    window.__kv.me = { pid: 'H', isHost: true, name: 'T', avatar: '🦊' };
    const h = makeHost(true); window.__kv.host = h;
    h.phase = 'q'; h.qDur = DUR; h.qCorrectIndex = 2;
    const out = {};
    for (let ti = 0; ti < AI_TIERS.length; ti++) {
      for (const d of [1, 3, 5]) {
        const got = [];
        const orig = window.collectAnswer;
        const t0 = performance.now();
        window.collectAnswer = (pid, value, ms) => got.push({ value, ms, at: performance.now() - t0 });
        const q = { type: 'mc', d, q: 'x', o: ['jó', 'a', 'b', 'c'], c: 0 };
        h.aiTimers = [];
        for (let i = 0; i < N; i++) scheduleAI({ pid: 'AI' + i, isAI: true, ai: ti }, q, DUR);
        await new Promise(r => setTimeout(r, 2600));
        window.collectAnswer = orig;
        out[ti + '_' + d] = {
          hit: got.filter(g => g.value === 2).length / got.length,
          n: got.length,
          minMs: Math.min.apply(null, got.map(g => g.ms)),
          maxMs: Math.max.apply(null, got.map(g => g.ms)),
          wall: Math.round(Math.max.apply(null, got.map(g => g.at))),
        };
      }
    }
    /* tippelős pontosság: átlagos abszolút hiba szintenként */
    out.tip = AI_TIERS.map(t => {
      let e = 0; const a = 1000;
      for (let i = 0; i < 4000; i++) e += Math.abs(aiTip({ type: 'tip', d: 3, a, unit: 'db' }, t) - a);
      return Math.round(e / 4000);
    });
    window.__kv.host = null;
    return out;
  }, { N, DUR });

  console.log('— találati arány (n=' + N + ' / szint / nehézség) —');
  const want = { '0_1': 0.85, '0_3': 0.60, '0_5': 0.32, '1_1': 0.72, '1_3': 0.45, '1_5': 0.27, '2_1': 0.55, '2_3': 0.30, '2_5': 0.25 };
  const nm = ['Robo Róbert', 'Masina Misi', 'Félnótás Fábián'];
  for (const k of Object.keys(want)) {
    const r = res[k], w = want[k], diff = Math.abs(r.hit - w);
    check(nm[+k[0]] + ' · ' + k[2] + '★ ≈ ' + Math.round(w * 100) + '%',
          diff <= 0.06, Math.round(r.hit * 100) + '% (eltérés ' + Math.round(diff * 100) + ' pp)');
  }

  console.log('— Robot Idő Büntetés —');
  const all = Object.keys(want).map(k => res[k]);
  const minMs = Math.min.apply(null, all.map(r => r.minMs));
  const maxMs = Math.max.apply(null, all.map(r => r.maxMs));
  const maxWall = Math.max.apply(null, all.map(r => r.wall));
  check('a felszámolt idő sosem kevesebb 6 mp-nél (1 mp gondolkodás + 5 mp büntetés)', minMs >= 6000, minMs + ' ms');
  check('a felszámolt idő nem lépi túl a kérdés hosszát', maxMs <= DUR, maxMs + ' ms');
  check('a büntetés tényleg 25 mp-ig terjed', maxMs >= 24000, maxMs + ' ms');
  check('viszont VALÓJÁBAN 2 mp-en belül válaszol (nem kell rá várni)', maxWall <= 2200, maxWall + ' ms tényleges válaszidő');

  console.log('— tippelős pontosság (átlagos hiba, a=1000) —');
  check('Robi pontosabb Misinél, Misi Fábiánnál', res.tip[0] < res.tip[1] && res.tip[1] < res.tip[2],
        'Robi ' + res.tip[0] + ' · Misi ' + res.tip[1] + ' · Fábián ' + res.tip[2]);

  /* ---- 3) lobby: a három gomb tényleg három különböző AI-t ad hozzá ---- */
  console.log('— lobby —');
  await page.reload();
  await page.fill('#inp-name', 'Attila');
  await page.click('#btn-solo');
  await page.waitForSelector('#s-lobby.on');
  await page.click('#seg-ai button[data-ai="1"]');
  await page.click('#seg-ai button[data-ai="2"]');
  const lobby = await page.evaluate(() => __kv.host.players.map(p => ({ n: p.name, ai: p.ai })));
  check('szólóban alapból Robo Róbert kerül be', lobby[1] && lobby[1].ai === 0, lobby[1] && lobby[1].n);
  check('Masina Misi hozzáadható', lobby.some(p => p.ai === 1 && p.n === 'Masina Misi'));
  check('Félnótás Fábián hozzáadható', lobby.some(p => p.ai === 2 && p.n === 'Félnótás Fábián'));
  await page.click('#seg-ai button[data-ai="1"]');
  const dup = await page.evaluate(() => __kv.host.players.map(p => p.name));
  check('azonos szintből a második is egyedi nevet kap', dup.includes('Masina Misi 2'), dup.join(' · '));
  await page.click('#seg-ai button[data-ai="0"]');
  await page.click('#seg-ai button[data-ai="0"]');
  const full = await page.evaluate(() => __kv.host.players.length);
  check('a 6 fős korlát tartja magát', full === 6, full + ' játékos');

  console.log(errors.length ? 'HIBÁK:\n' + errors.join('\n') : 'KONZOL: tiszta ✔');
  if (errors.length) failures++;
  await browser.close();
  console.log(failures ? '\n❌ ' + failures + ' hibás ellenőrzés' : '\n✅ minden ellenőrzés rendben');
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error('TESZT HIBA:', e.stack || e.message); process.exit(1); });
