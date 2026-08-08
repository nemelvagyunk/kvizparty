/* KvízParty – HÓDÍTÁS mód teszt: pontozási logika + teljes szóló játszma AI ellen */
const { chromium } = require('playwright');
const path = require('path');

const URL = 'file://' + path.join(__dirname, '..', 'index.html') + '#fast';
let failures = 0;
function check(name, got, want) {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (!ok) failures++;
  console.log((ok ? '  ✔ ' : '  ✘ ') + name + '  → ' + JSON.stringify(got) + (ok ? '' : ' (várt: ' + JSON.stringify(want) + ')'));
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width: 520, height: 1000 } });
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
  await page.goto(URL);

  /* ================= 1) pontozási logika ================= */
  const L = await page.evaluate(() => {
    const out = {};
    window.__kv.me = { pid: 'H', isHost: true, name: 'Piros', avatar: '🦊' };
    const h = makeHost(true);
    window.__kv.host = h;
    h.players = [
      { pid: 'H',  name: 'Piros', avatar: '🦊', connected: true, score: 0, team: 1 },
      { pid: 'AI', name: 'Kék',   avatar: '🤖', isAI: true, connected: true, score: 0, team: 2 },
    ];
    const origBc = window.hostBroadcast;
    let cap = [];
    window.hostBroadcast = m => cap.push(m);

    const freshCq = (over) => Object.assign({
      on: true, phase: 'grab', sub: 'q', owner: new Array(13).fill(0), val: new Array(13).fill(0),
      castle: { 1: 100, 2: 100 }, first: 1, startTeam: 1, picks: { 1: null, 2: null }, turn: null,
      qtype: 'mc', single: false, attacks: { 1: 6, 2: 6 }, atkTeam: null, target: null,
      decider: false, round: 1, log: '',
    }, over || {});
    const mc = (d, correct) => { h.qData = { type: 'mc', d, q: 'x', o: ['jó', 'a', 'b', 'c'], c: 0, note: '' }; h.qCorrectIndex = correct; };
    const tip = (d, a) => { h.qData = { type: 'tip', d, q: 'x', a, unit: '', note: '' }; };
    const run = (answers) => { h.phase = 'q'; h.qDur = 35000; h.answers = answers; cap = []; finishQuestion(); clearTimeout(h.cq.nextT); };

    // --- FOGLALÁS: 4 válaszos, mindketten tudják -> mindkettő foglal, alapérték (nincs gyorsasági bónusz)
    h.cq = freshCq({ picks: { 1: 0, 2: 1 } });
    mc(1, 2); run({ H: { value: 2, ms: 1000 }, AI: { value: 2, ms: 30000 } });
    out.grabBoth = [h.cq.owner[0], h.cq.val[0], h.cq.owner[1], h.cq.val[1]];   // várt: [1,75,2,75]
    out.nextType = h.cq.qtype;                                                 // várt: 'tip'
    out.orderFlips = h.cq.first;                                               // várt: 2

    // --- FOGLALÁS: 4 válaszos, csak a piros tudja -> a kék mezője fehér marad
    h.cq = freshCq({ picks: { 1: 3, 2: 4 } });
    mc(5, 0); run({ H: { value: 0, ms: 500 }, AI: { value: 3, ms: 900 } });
    out.grabOne = [h.cq.owner[3], h.cq.val[3], h.cq.owner[4]];                 // várt: [1,125,0]

    // --- FOGLALÁS: tippelős -> csak a nyertes foglal, holtversenynél a gyorsabb
    h.cq = freshCq({ picks: { 1: 6, 2: 7 } });
    tip(3, 100); run({ H: { value: 110, ms: 9000 }, AI: { value: 90, ms: 2000 } });
    out.grabTip = [h.cq.owner[6], h.cq.owner[7], h.cq.val[7]];                 // várt: [0,2,100]
    h.cq = freshCq({ picks: { 1: 6, 2: 7 } });
    tip(3, 100); run({ H: { value: 110, ms: 2000 }, AI: { value: 90, ms: 9000 } });
    out.grabTipTie = [h.cq.owner[6], h.cq.owner[7]];                           // várt: [1,0] (gyorsabb visz)

    // --- FOGLALÁS: biztonsági szelep sok eredménytelen forduló után
    h.cq = freshCq({ picks: { 1: 8, 2: 9 } }); h.cq.dry = 5; h.cq.first = 1;
    mc(3, 1); run({ H: { value: 0, ms: 500 }, AI: { value: 3, ms: 600 } });
    out.dryValve = [h.cq.owner[8], h.cq.owner[9], h.cq.dry];                   // várt: [1,2,0]
    h.cq = freshCq({ picks: { 1: 8, 2: 9 } }); h.cq.dry = 0;
    mc(3, 1); run({ H: { value: 0, ms: 500 }, AI: { value: 3, ms: 600 } });
    out.dryCount = [h.cq.owner[8], h.cq.owner[9], h.cq.dry];                   // várt: [0,0,1]

    // --- HARC: támadó tud, védő nem -> foglalás, +25, támadás fogy
    h.cq = freshCq({ phase: 'war', atkTeam: 1, target: 5, decider: false });
    h.cq.owner[5] = 2; h.cq.val[5] = 100;
    mc(3, 1); run({ H: { value: 1, ms: 1000 }, AI: { value: 0, ms: 1200 } });
    out.warTake = [h.cq.owner[5], h.cq.val[5], h.cq.attacks[1]];               // várt: [1,125,5]

    // --- HARC: 150-es plafon
    h.cq = freshCq({ phase: 'war', atkTeam: 1, target: 5 });
    h.cq.owner[5] = 2; h.cq.val[5] = 140;
    mc(3, 1); run({ H: { value: 1, ms: 1000 }, AI: { value: 0, ms: 1200 } });
    out.capA = h.cq.val[5];                                                    // várt: 150
    h.cq = freshCq({ phase: 'war', atkTeam: 2, target: 5 });
    h.cq.owner[5] = 1; h.cq.val[5] = 150;
    mc(3, 1); run({ H: { value: 0, ms: 1000 }, AI: { value: 1, ms: 1200 } });
    out.capB = [h.cq.owner[5], h.cq.val[5]];                                   // várt: [2,150]

    // --- HARC: védő tud, támadó nem -> a védő vára +50
    h.cq = freshCq({ phase: 'war', atkTeam: 1, target: 5 });
    h.cq.owner[5] = 2; h.cq.val[5] = 100;
    mc(3, 1); run({ H: { value: 0, ms: 1000 }, AI: { value: 1, ms: 1200 } });
    out.warDefend = [h.cq.owner[5], h.cq.val[5], h.cq.castle[2]];              // várt: [2,100,150]

    // --- HARC: mindkettő rossz -> nem történik semmi
    h.cq = freshCq({ phase: 'war', atkTeam: 1, target: 5 });
    h.cq.owner[5] = 2; h.cq.val[5] = 100;
    mc(3, 1); run({ H: { value: 0, ms: 1000 }, AI: { value: 3, ms: 1200 } });
    out.warNone = [h.cq.owner[5], h.cq.val[5], h.cq.castle[2], h.cq.attacks[1]]; // várt: [2,100,100,5]

    // --- HARC: mindketten tudják -> tippelős döntő indul (még nincs foglalás)
    h.cq = freshCq({ phase: 'war', atkTeam: 1, target: 5 });
    h.cq.owner[5] = 2; h.cq.val[5] = 100;
    mc(3, 1); run({ H: { value: 1, ms: 1000 }, AI: { value: 1, ms: 1200 } });
    out.warBothImmediate = [h.cq.owner[5], h.cq.attacks[1]];                   // várt: [2,6] – még semmi
    h.cq.decider = true;
    tip(3, 50); run({ H: { value: 51, ms: 1000 }, AI: { value: 80, ms: 900 } });
    out.warDecider = [h.cq.owner[5], h.cq.val[5], h.cq.attacks[1]];            // várt: [1,125,5]

    // --- rálátás / választhatóság
    h.cq = freshCq({});
    out.pickP = cqPickList(1).slice().sort((a, b) => a - b);                   // vár szomszédai: 4,10 -> idx 3,9
    out.pickK = cqPickList(2).slice().sort((a, b) => a - b);                   // vár szomszédai: 8,9 -> idx 7,8
    h.cq.owner[3] = 1;                                                          // piros elfoglalja a 4-est
    out.pickP2 = cqPickList(1).slice().sort((a, b) => a - b);                  // +1(idx0), +5(idx4), +10(idx9)
    // izolált eset: minden szabad mező távol -> bármit lehet
    h.cq = freshCq({});
    h.cq.owner[3] = 2; h.cq.owner[9] = 2;                                       // a piros vár mindkét kijárata a kéké
    out.pickIsolated = cqPickList(1).length;                                    // várt: 11 (minden maradék szabad)
    // támadás: várat nem lehet támadni, csak amire rálátunk
    h.cq = freshCq({ phase: 'war' });
    h.cq.owner[3] = 1; h.cq.owner[0] = 2; h.cq.owner[12] = 2;
    out.targets = cqTargets(1).slice().sort((a, b) => a - b);                   // idx3 szomszédai közül a 0 ellenséges

    // --- gráf épsége: szimmetrikus és összefüggő
    let sym = true;
    for (let i = 0; i < 13; i++) for (const j of CQ_ADJ[i]) if (CQ_ADJ[j].indexOf(i) < 0) sym = false;
    out.symmetric = sym;
    const seen = new Set([0]); const st = [0];
    while (st.length) { const x = st.pop(); for (const y of CQ_ADJ[x]) if (!seen.has(y)) { seen.add(y); st.push(y); } }
    out.connected = seen.size;                                                  // várt: 13
    out.edges = CQ_ADJ.reduce((s, a) => s + a.length, 0) / 2;                   // várt: 30

    window.hostBroadcast = origBc; window.__kv.host = null;
    return out;
  });

  console.log('— HÓDÍTÁS pontozási logika —');
  check('foglalás, mindkettő tudja (alapérték, nincs gyorsbónusz)', L.grabBoth, [1, 75, 2, 75]);
  check('4 válaszos után tippelős jön', L.nextType, 'tip');
  check('választási sorrend fordul', L.orderFlips, 2);
  check('foglalás, csak az egyik tudja', L.grabOne, [1, 125, 0]);
  check('tippelős: csak a nyertes foglal', L.grabTip, [0, 2, 100]);
  check('tippelős: azonos távolságnál a gyorsabb', L.grabTipTie, [1, 0]);
  check('eredménytelen forduló csak számlál', L.dryCount, [0, 0, 1]);
  check('6. eredménytelen forduló után gazdára talál', L.dryValve, [1, 2, 0]);
  check('harc: sikeres foglalás +25, támadás fogy', L.warTake, [1, 125, 5]);
  check('harc: 140 → 150 (plafon)', L.capA, 150);
  check('harc: 150 visszafoglalva marad 150', L.capB, [2, 150]);
  check('harc: sikeres védés → vár +50', L.warDefend, [2, 100, 150]);
  check('harc: mindkettő rossz → semmi', L.warNone, [2, 100, 100, 5]);
  check('harc: mindkettő jó → döntő indul, még semmi', L.warBothImmediate, [2, 6]);
  check('harc: döntőt a támadó nyeri → foglalás', L.warDecider, [1, 125, 5]);
  console.log('— térkép —');
  check('piros vár kijáratai', L.pickP, [3, 9]);
  check('kék vár kijáratai', L.pickK, [7, 8]);
  check('foglalás után bővül a rálátás', L.pickP2, [0, 4, 9]);
  check('elzárt helyzetben bármelyik szabad mező', L.pickIsolated, 11);
  check('támadható célpontok (várat nem)', L.targets, [0]);
  check('gráf szimmetrikus', L.symmetric, true);
  check('gráf összefüggő (13 csúcs)', L.connected, 13);
  check('élek száma', L.edges, 30);

  /* ================= 2) teljes szóló játszma ================= */
  console.log('— teljes hódítás-játszma AI ellen —');
  await page.reload();
  await page.fill('#inp-name', 'Attila');
  await page.click('#btn-solo');
  await page.waitForSelector('#s-lobby.on');
  await page.click('#seg-mode button[data-m="conquest"]');
  await page.waitForSelector('#seg-mode button[data-m="conquest"].sel');
  await page.screenshot({ path: 'shots/cq_01_lobby.png' });
  await page.click('#btn-start');
  await page.waitForSelector('#cq-wrap.on', { timeout: 10000 });

  let picks = 0, mcs = 0, tips = 0, shots = {};
  const t0 = Date.now();
  while (Date.now() - t0 < 300000) {
    if (await page.$('#s-end.on')) break;
    const hit = await page.$('#cq-svg .hit');
    if (hit) {
      const st = await page.evaluate(() => __kv.cq && __kv.cq.phase);
      if (!shots[st + 'pick']) { await page.screenshot({ path: 'shots/cq_' + (st === 'war' ? '04_warpick' : '02_grabpick') + '.png' }); shots[st + 'pick'] = 1; }
      const hits = await page.$$('#cq-svg .hit');
      await hits[Math.floor(Math.random() * hits.length)].click().catch(() => {});
      picks++;
      continue;
    }
    const mcb = await page.$('.mcbtn:not(.dis)');
    if (mcb) {
      mcs++;
      if (!shots.mc) { await page.screenshot({ path: 'shots/cq_03_mc.png' }); shots.mc = 1; }
      // szándékosan vegyesen: néha jó eséllyel, néha hagyjuk lejárni
      if (mcs % 4 !== 0) await page.click('.mcbtn:nth-child(' + (1 + (mcs % 4)) + ')').catch(() => {});
      await page.waitForTimeout(150);
      continue;
    }
    const ti = await page.$('#tip-inp:not([disabled])');
    if (ti) {
      tips++;
      await page.fill('#tip-inp', String(50 + tips * 7)).catch(() => {});
      await page.click('#tip-btn').catch(() => {});
      await page.waitForTimeout(150);
      continue;
    }
    await page.waitForTimeout(120);
  }

  await page.waitForSelector('#s-end.on', { timeout: 30000 });
  await page.screenshot({ path: 'shots/cq_05_end.png', fullPage: true });

  const fin = await page.evaluate(() => {
    const st = __kv.cq;
    return {
      free: st.owner.filter(o => o === 0).length,
      red: st.owner.filter(o => o === 1).length,
      blue: st.owner.filter(o => o === 2).length,
      attacks: st.attacks,
      castle: st.castle,
      tot: st.tot,
      sum: { 1: st.castle[1] + st.owner.reduce((s, o, i) => s + (o === 1 ? st.val[i] : 0), 0),
             2: st.castle[2] + st.owner.reduce((s, o, i) => s + (o === 2 ? st.val[i] : 0), 0) },
      vals: st.val.slice(),
    };
  });
  check('minden terület elkelt', fin.free, 0);
  check('13 terület oszlik szét', fin.red + fin.blue, 13);
  check('mindkét fél elhasználta a 6 támadást', [fin.attacks[1], fin.attacks[2]], [0, 0]);
  check('végösszeg = várak + területek', fin.tot, fin.sum);
  check('egyik terület sem lépi túl a 150-et', fin.vals.filter(v => v > 150).length, 0);
  console.log('  piros:', fin.red, 'terület /', fin.tot[1], 'pont (vár ' + fin.castle[1] + ')  |  kék:',
              fin.blue, 'terület /', fin.tot[2], 'pont (vár ' + fin.castle[2] + ')');
  console.log('  választások:', picks, '| 4 válaszos:', mcs, '| tippelős:', tips,
              '| játékidő:', Math.round((Date.now() - t0) / 1000) + 's');

  await page.click('#btn-rematch');
  await page.waitForSelector('#s-lobby.on', { timeout: 8000 });
  check('rematch visszavisz a lobbyba', await page.$eval('#s-lobby', e => e.classList.contains('on')), true);

  console.log(errors.length ? 'HIBÁK:\n' + errors.join('\n') : 'KONZOL: tiszta ✔');
  if (errors.length) failures++;
  await browser.close();
  console.log(failures ? '\n❌ ' + failures + ' hibás ellenőrzés' : '\n✅ minden ellenőrzés rendben');
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error('TESZT HIBA:', e.stack || e.message); process.exit(1); });
