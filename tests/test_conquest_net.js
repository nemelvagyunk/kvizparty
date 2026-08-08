/* KvízParty – HÓDÍTÁS mód hálózaton: host (piros) + vendég (kék) két böngésző-kontextben,
   helyi PeerJS szerveren (#srv=127.0.0.1:9000). Ez a mód elsődleges használati módja. */
const { chromium } = require('playwright');
const path = require('path');

const URL = 'file://' + path.join(__dirname, '..', 'index.html') + '#fast&srv=127.0.0.1:9000';
let failures = 0;
function check(name, got, want) {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (!ok) failures++;
  console.log((ok ? '  ✔ ' : '  ✘ ') + name + '  → ' + JSON.stringify(got) + (ok ? '' : ' (várt: ' + JSON.stringify(want) + ')'));
}

/* Egy játékos önjáró ciklusa: ha rá kerül a sor, választ; ha kérdés van, válaszol. */
async function play(page, tag, tipBase, stats) {
  const t0 = Date.now();
  while (Date.now() - t0 < 300000) {
    if (await page.$('#s-end.on')) return;
    const hit = await page.$('#cq-svg .hit');
    if (hit) {
      const hits = await page.$$('#cq-svg .hit');
      await hits[Math.floor(Math.random() * hits.length)].click().catch(() => {});
      stats.picks++;
      await page.waitForTimeout(120);
      continue;
    }
    const mc = await page.$('.mcbtn:not(.dis)');
    if (mc) {
      stats.mc++;
      await page.click('.mcbtn:nth-child(' + (1 + (stats.mc % 4)) + ')').catch(() => {});
      await page.waitForTimeout(150);
      continue;
    }
    const tip = await page.$('#tip-inp:not([disabled])');
    if (tip) {
      stats.tip++;
      await page.fill('#tip-inp', String(tipBase + stats.tip * 5)).catch(() => {});
      await page.click('#tip-btn').catch(() => {});
      await page.waitForTimeout(150);
      continue;
    }
    await page.waitForTimeout(120);
  }
  throw new Error(tag + ': nem ért véget a hódítás');
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
  const ctxA = await browser.newContext({ viewport: { width: 500, height: 950 } });
  const ctxB = await browser.newContext({ viewport: { width: 500, height: 950 } });
  const A = await ctxA.newPage(); // host = piros
  const B = await ctxB.newPage(); // vendég = kék
  const errors = [];
  for (const [p, tag] of [[A, 'HOST'], [B, 'GUEST']]) {
    p.on('pageerror', e => errors.push(tag + ' PAGEERROR: ' + e.message));
    p.on('console', m => { if (m.type() === 'error') errors.push(tag + ' CONSOLE: ' + m.text()); });
  }
  await A.goto(URL); await B.goto(URL);

  await A.fill('#inp-name', 'Attila');
  await A.click('#btn-create');
  await A.waitForSelector('#s-lobby.on', { timeout: 15000 });
  const code = await A.$eval('#lobby-code .code', el => el.textContent.trim());
  await B.fill('#inp-name', 'Viola');
  await B.click('#avatars button:nth-child(5)');
  await B.fill('#inp-code', code);
  await B.click('#btn-join');
  await B.waitForSelector('#s-lobby.on', { timeout: 15000 });
  await A.waitForFunction(() => document.querySelectorAll('#lobby-players .pchip').length === 2, undefined, { timeout: 10000 });
  console.log('LOBBY: 2 játékos, szobakód', code, '✔');

  await A.click('#seg-mode button[data-m="conquest"]');
  await B.waitForFunction(() => /Hódítás/.test(document.getElementById('lobby-settings').innerText), undefined, { timeout: 8000 });
  await A.click('#seg-map button[data-k="small"]');
  await B.waitForFunction(() => /10 terület/.test(document.getElementById('lobby-settings').innerText), undefined, { timeout: 8000 });
  console.log('MÓD: a vendég is látja a Hódítás módot és a kis térképet ✔');
  await A.screenshot({ path: 'shots/cqnet_01_lobby_host.png' });

  await A.click('#btn-start');
  await A.waitForSelector('#cq-wrap.on', { timeout: 12000 });
  await B.waitForSelector('#cq-wrap.on', { timeout: 12000 });
  console.log('INDULÁS: mindkét oldalon látszik a térkép ✔');

  const teams = await Promise.all([
    A.evaluate(() => __kv.cq.teams.find(t => t.pid === __kv.me.pid).team),
    B.evaluate(() => __kv.cq.teams.find(t => t.pid === __kv.me.pid).team),
  ]);
  check('host = piros (1), vendég = kék (2)', teams, [1, 2]);

  const sa = { picks: 0, mc: 0, tip: 0 }, sb = { picks: 0, mc: 0, tip: 0 };
  await Promise.all([play(A, 'HOST', 120, sa), play(B, 'GUEST', 300, sb)]);

  await A.waitForSelector('#s-end.on', { timeout: 30000 });
  await B.waitForSelector('#s-end.on', { timeout: 30000 });
  await B.screenshot({ path: 'shots/cqnet_02_end_guest.png', fullPage: true });

  const snap = p => p.evaluate(() => {
    const s = __kv.cq;
    return { owner: s.owner, val: s.val, castle: s.castle, tot: s.tot, attacks: s.attacks,
             map: s.map, free: s.owner.filter(o => o === 0).length };
  });
  const [fa, fb] = await Promise.all([snap(A), snap(B)]);

  check('a kis térkép fut mindkét oldalon', [fa.map, fb.map, fa.owner.length], ['small', 'small', 10]);
  check('minden terület elkelt', fa.free, 0);
  check('elfogytak a 4-4 támadások', [fa.attacks[1], fa.attacks[2]], [0, 0]);
  check('a két kliens térképe azonos (tulajdonos)', fb.owner, fa.owner);
  check('a két kliens térképe azonos (értékek)', fb.val, fa.val);
  check('a két kliens várértékei azonosak', fb.castle, fa.castle);
  check('a két kliens végösszege azonos', fb.tot, fa.tot);
  check('nincs 150 fölötti terület', fa.val.filter(v => v > 150).length, 0);
  const sum = t => fa.castle[t] + fa.owner.reduce((s, o, i) => s + (o === t ? fa.val[i] : 0), 0);
  check('végösszeg = vár + területek', fa.tot, { 1: sum(1), 2: sum(2) });

  const endA = await A.$eval('#end-list', e => e.innerText.replace(/\s+/g, ' ').trim());
  const endB = await B.$eval('#end-list', e => e.innerText.replace(/\s+/g, ' ').trim());
  check('a végeredmény szövege egyezik', endB, endA);
  console.log('  eredmény:', endA);
  console.log('  host: ' + sa.picks + ' választás / ' + sa.mc + ' MC / ' + sa.tip + ' tipp   |   vendég: ' +
              sb.picks + ' / ' + sb.mc + ' / ' + sb.tip);

  await A.click('#btn-rematch');
  await A.waitForSelector('#s-lobby.on', { timeout: 10000 });
  await B.waitForSelector('#s-lobby.on', { timeout: 10000 });
  check('rematch: mindkét oldal lobbyban', true, true);
  check('a térkép eltűnt a rematch után', await B.$eval('#cq-wrap', e => e.classList.contains('on')), false);

  // vendég kilép hódítás közben -> a host nem akad meg
  await A.click('#btn-start');
  await A.waitForSelector('#cq-wrap.on', { timeout: 12000 });
  await B.waitForSelector('#cq-wrap.on', { timeout: 12000 });
  await B.close();
  await A.waitForSelector('#s-end.on', { timeout: 25000 });
  check('vendég kilépésekor a host lezárja a meccset', true, true);

  console.log(errors.length ? 'HIBÁK:\n' + errors.join('\n') : 'KONZOL: tiszta ✔');
  if (errors.length) failures++;
  await browser.close();
  console.log(failures ? '\n❌ ' + failures + ' hibás ellenőrzés' : '\n✅ minden ellenőrzés rendben');
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error('TESZT HIBA:', e.stack || e.message); process.exit(1); });
