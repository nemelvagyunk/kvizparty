const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width: 480, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('file://' + path.join(__dirname, '..', 'index.html') + '#fast');
  await page.fill('#inp-name', 'Attila');
  await page.click('#btn-solo');
  await page.waitForSelector('#s-lobby.on');
  // csak 4★ és 5★ maradjon
  await page.click('#seg-diffs .dtoggle[data-d="0"]');
  await page.click('#seg-diffs .dtoggle[data-d="1"]');
  await page.click('#seg-diffs .dtoggle[data-d="2"]');
  await page.screenshot({ path: 'shots/10_lobby_diff.png' });
  await page.click('#btn-start');
  await page.waitForSelector('#s-game.on');
  const deckOK = await page.evaluate(() => window.__kv.host.deck.every(q => q.d >= 4) && window.__kv.host.deck.length === 15);
  console.log('PAKLI (csak 4★-5★):', deckOK ? 'OK ✔' : 'HIBÁS ✘');
  const chip = await page.$eval('#g-diff', el => el.textContent + ' / ' + el.title);
  console.log('NEHÉZSÉG-JELZÉS:', chip);
  await page.screenshot({ path: 'shots/11_question_diff.png' });
  // guest-nézet ellenőrzés: settings összefoglaló renderelése lobby üzenetből
  console.log(errors.length ? 'HIBÁK: ' + errors.join(' | ') : 'KONZOL: tiszta ✔');
  await browser.close();
})().catch(e => { console.error('TESZT HIBA:', e.message); process.exit(1); });
