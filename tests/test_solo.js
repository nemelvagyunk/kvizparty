/* KvízParty – szóló mód e2e teszt (gyors mód: #fast) */
const { chromium } = require('playwright');
const path = require('path');

const URL = 'file://' + path.join(__dirname, '..', 'index.html') + '#fast';

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width: 480, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

  await page.goto(URL);
  await page.screenshot({ path: 'shots/01_menu.png' });

  // --- egységteszt jellegű ellenőrzés: tippelős pontozás + döntetlen-szabály ---
  const logic = await page.evaluate(() => {
    const out = {};
    window.__kv.me = { pid: 'H', isHost: true, name: 'T', avatar: '🦊' };
    window.__kv.host = makeHost(true);
    const mk = (pid) => ({ pid, name: pid, avatar: '🐼', connected: true, score: 0 });
    __kv.host.players = [mk('A'), mk('B'), mk('C')];
    const origBc = window.hostBroadcast;
    let captured = [];
    window.hostBroadcast = m => captured.push(m);

    // 1) tipp (d3=100p): egyenlő távolság -> a leggyorsabb (C) nyer 100 pontot, tie=true
    __kv.host.phase = 'q'; __kv.host.qDur = 25000;
    __kv.host.qData = { type: 'tip', a: 100, unit: '', note: '' };
    __kv.host.deck = [__kv.host.qData]; __kv.host.qi = 0;
    __kv.host.answers = { A: { value: 90, ms: 5000 }, B: { value: 110, ms: 3000 }, C: { value: 110, ms: 2000 } };
    finishQuestion();
    clearTimeout(__kv.host.autoNextT);
    const rev1 = captured.find(m => m.t === 'reveal');
    out.tieWinner = rev1.results.find(r => r.win).pid;      // várt: C
    out.tieFlag = rev1.tie;                                  // várt: true
    out.tieWinnerPts = rev1.results.find(r => r.win).pts;    // várt: 100
    out.loserPts = rev1.results.find(r => r.pid === 'A').pts; // várt: 0

    // 2) tipp (d3=100p): telitalálat -> +25% bónusz (125 pont)
    captured = []; __kv.host.phase = 'q'; __kv.host.answers = { A: { value: 100, ms: 8000 }, B: { value: 90, ms: 1000 } };
    __kv.host.players.forEach(p => p.score = 0);
    finishQuestion(); clearTimeout(__kv.host.autoNextT);
    const rev2 = captured.find(m => m.t === 'reveal');
    out.exactPts = rev2.results.find(r => r.pid === 'A').pts; // várt: 125

    // 3) MC: helyes gyors válasz több pontot ér, rossz válasz 0
    captured = []; __kv.host.phase = 'q'; __kv.host.qDur = 20000;
    __kv.host.qData = { type: 'mc', q: 'x', o: ['jó', 'r1', 'r2', 'r3'], c: 0, note: '' };
    __kv.host.qCorrectIndex = 2;
    __kv.host.players.forEach(p => p.score = 0);
    __kv.host.answers = { A: { value: 2, ms: 2000 }, B: { value: 2, ms: 18000 }, C: { value: 0, ms: 1000 } };
    finishQuestion(); clearTimeout(__kv.host.autoNextT);
    const rev3 = captured.find(m => m.t === 'reveal');
    out.mcFast = rev3.results.find(r => r.pid === 'A').pts;  // várt: 118 (100+20%*0.9)
    out.mcSlow = rev3.results.find(r => r.pid === 'B').pts;  // várt: 102
    out.mcWrong = rev3.results.find(r => r.pid === 'C').pts; // várt: 0

    window.hostBroadcast = origBc;
    window.__kv.host = null;
    return out;
  });
  console.log('LOGIKA:', JSON.stringify(logic));

  // --- teljes szóló játék végigjátszása ---
  await page.reload();
  await page.fill('#inp-name', 'Attila');
  await page.click('#avatars button:nth-child(3)');
  await page.click('#btn-solo');
  await page.waitForSelector('#s-lobby.on');
  await page.click('#btn-ai'); // +1 AI -> 3 játékos
  await page.click('#seg-count button[data-c="10"]');
  await page.screenshot({ path: 'shots/02_lobby.png' });
  await page.click('#btn-start');
  await page.waitForSelector('#s-game.on');

  let mcShot = false, tipShot = false, revealShot = false, guesses = 0, mcs = 0;
  for (let i = 0; i < 40; i++) {
    const state = await Promise.race([
      page.waitForSelector('.mcbtn:not(.dis)', { timeout: 8000 }).then(() => 'mc').catch(() => null),
      page.waitForSelector('#tip-inp:not([disabled])', { timeout: 8000 }).then(() => 'tip').catch(() => null),
      page.waitForSelector('#s-end.on', { timeout: 8000 }).then(() => 'end').catch(() => null),
    ]);
    if (state === 'end') break;
    if (state === 'mc') {
      mcs++;
      if (!mcShot) { await page.screenshot({ path: 'shots/03_mc.png' }); mcShot = true; }
      // az esetek felében hagyjuk lejárni az időt (timeout ág tesztje)
      if (mcs !== 2) await page.click('.mcbtn:nth-child(2)').catch(() => {});
    } else if (state === 'tip') {
      guesses++;
      if (!tipShot) { await page.screenshot({ path: 'shots/04_tip.png' }); tipShot = true; }
      await page.fill('#tip-inp', String(1500 + guesses)).catch(() => {});
      await page.click('#tip-btn').catch(() => {});
    } else {
      // reveal vagy átmenet — várjunk egy kicsit
      await page.waitForTimeout(400);
    }
    // reveal képernyőkép egyszer
    if (!revealShot) {
      const rc = await page.waitForSelector('.revcard', { timeout: 6000 }).catch(() => null);
      if (rc) { await page.screenshot({ path: 'shots/05_reveal.png' }); revealShot = true; }
    }
    // várjuk meg, míg eltűnik a revcard (következő kérdés) vagy vége
    await Promise.race([
      page.waitForSelector('.revcard', { state: 'detached', timeout: 8000 }).catch(() => {}),
      page.waitForSelector('#s-end.on', { timeout: 8000 }).catch(() => {}),
    ]);
    if (await page.$('#s-end.on')) break;
  }

  await page.waitForSelector('#s-end.on', { timeout: 20000 });
  await page.screenshot({ path: 'shots/06_end.png' });
  const endText = await page.$eval('#end-list', el => el.innerText.replace(/\n/g, ' | '));
  console.log('VÉGEREDMÉNY:', endText);
  console.log('MC kérdések:', mcs, '| tippelős:', guesses);

  // új meccs gomb -> lobby
  await page.click('#btn-rematch');
  await page.waitForSelector('#s-lobby.on', { timeout: 5000 });
  console.log('REMATCH: OK (vissza a lobbyba)');

  console.log(errors.length ? 'HIBÁK:\n' + errors.join('\n') : 'KONZOL: tiszta ✔');
  await browser.close();
})().catch(e => { console.error('TESZT HIBA:', e.message); process.exit(1); });
