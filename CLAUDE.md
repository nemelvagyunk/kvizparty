# KvízParty – projektútmutató Claude-nak

2–6 fős magyar nyelvű multiplayer kvízjáték a böngészőben, egyetlen HTML-fájlban.
**Élő játék:** https://nemelvagyunk.github.io/kvizparty/ · **Repo:** github.com/nemelvagyunk/kvizparty

## KRITIKUS: munkamegosztás és deploy

- **Claude SOHA nem pushol GitHubra** (a felhő-sandbox git-proxyja blokkolja, a Zapier-feltöltés pedig tiltott a felhasználó kérésére).
- A folyamat mindig: **Claude elkészíti/módosítja a fájlokat és elküldi a chatben → a felhasználó a `C:\SCRIPTS\sbch\kvizparty` mappába másolja és GitHub Desktoppal commitol+pushol.**
- A GitHub Pages a `main` branch gyökeréből szolgál ki (branch-mód, NINCS CI): az `index.html` maga a kész játék, buildelt állapotban van commitolva. Módosítás után mindig új `index.html`-t kell buildelni és küldeni (a módosult `src/` fájlokkal együtt).
- Backup készül minden nagyobb változtatás után (a felhasználó általános szabálya).

## Architektúra

- **Egyfájlos build:** `src/build.py` összefűzi: `src/template.html` (UI+logika) + `src/questions/part*.js` (kérdésbázis, 5 darabban) + `node_modules/peerjs/dist/peerjs.min.js` (beágyazva) → `index.html`.
- Template-jelölők: `/*__PEERJS__*/` és `/*__DATA__*/` — ezeket cseréli a build.
- **Multiplayer:** PeerJS (WebRTC), host-vezérelt szoba 4 jegyű kóddal (`kvparty-hu-<KÓD>` peer id), a host az autoritás, ő futtatja az AI-kat is. Ingyenes PeerJS-felhő a jelzéshez. Vendég-üzenetek: hello/answer/bye; host-broadcast: lobby/question/progress/reveal/end/kicked/hostbye.
- **Szóló mód:** ugyanaz a motor hálózat nélkül, AI-ellenfelekkel.
- Build: `npm install` (peerjs kell hozzá), majd `python3 src/build.py`.

## Játékszabályok és pontozás

- Két kérdéstípus: **„1 a 4-ből”** (mc) és **tippelős** (tip; számot tippel mindenki, a legközelebbi nyer, **egyenlőségnél a gyorsabb**).
- Kérdésérték nehézség szerint (`QVAL`): **1★=75, 2★=90, 3★=100, 4★=110, 5★=125 pont.**
- MC: minden helyes válaszoló megkapja az értéket + gyorsasági bónusz max. **+20%** (`MC_SPEED_BONUS`). Tip: csak a nyertes kap pontot, telitalálatra **+25%** (`TIP_EXACT_BONUS`).
- Időzítők: MC 20 mp, tip 25 mp; `#fast` hash-sel rövidítve (teszthez).
- Lobby-beállítások: kérdésszám (10/15/20/30/50), 4 kategóriacsoport-kapcsoló, nehézségszűrő (1★–5★), AI hozzáadása (max 6 játékos összesen).
- **AI (közepes, nehézséghez skálázva):** MC-találat esélye `AI_MC_P=[0.85,0.72,0.60,0.45,0.32]` (d1..d5), tippszórás szorzó `AI_SPREAD=[0.55,0.75,1.00,1.40,1.90]`.

## Kérdésbázis (1000 kérdés)

- **20 kategória** (cat 1–20), 4 pillér: 1–5 magyar általános műveltség, 6–10 nemzetközi általános műveltség, 11–15 magyar popkultúra, 16–20 nemzetközi popkultúra. Csoportindex: `Math.floor((cat-1)/5)`.
- Kategóriánként **50 kérdés = 30 mc + 20 tip**. Nehézség-eloszlás globálisan: **1★×100, 2★×200, 3★×400, 4★×200, 5★×100** (kategóriánként kb. mc [3,6,12,6,3] és tip [2,4,8,4,2]).
- Formátum (`src/questions/part*.js`, a részek összefűzve adnak érvényes JS-t):
  - mc: `{cat, type:'mc', d, q, o:[4 opció], c:0}` — **a helyes válasz MINDIG az első opció** (`c:0`), a játék futásidőben kever.
  - tip: `{cat, type:'tip', d, q, a:<egész szám>, unit, note}` — évszámnál `unit:""`; a `note` az eredményhirdetésnél jelenik meg.
- Új kérdésnél kötelező: időtálló, ellenőrzött tény (semmi „jelenlegi/aktuális”); egyértelműen EGY helyes válasz; hihető disztraktorok; nincs duplikáció (más kategóriákkal sem, és egy kérdés szövege ne árulja el egy másik válaszát); politikailag semleges, családbarát; a kvóták megtartása.

## Tesztek (Playwright, `tests/`)

- `npm test` → `test_solo.js` (pontozási logika ellenőrzése a `window.__kv` teszt-hookon át + teljes szóló játszma) és `test_diff.js` (nehézségszűrő + jelzés).
- `npm run test:net` → `test_net.js`: host+vendég két böngésző-kontextben, **helyi PeerJS szerverrel**: `node_modules/.bin/peerjs --port 9000 --host 127.0.0.1`, URL-hash: `#fast&srv=127.0.0.1:9000`.
- Chromium a sandboxban: `executablePath: '/opt/pw-browsers/chromium'` (fallback: sima launch).
- Teszt-hook a játékban: `window.__kv` (host/me getter-setter); a globális függvények (pl. `finishQuestion`, `makeHost`) window-szintűek.

## Ismert finomságok

- A tippbevitel vesszőt is elfogad tizedesjelként; a válaszok egészek.
- Vendég kilépéskor `bye` üzenet megy (gyors érzékelés); host kilépéskor `hostbye`.
- A PeerJS-felhő szigorú NAT mögött ritkán nem tud kapcsolatot építeni → mobilnet/hotspot a megoldás.
- A kérdés-ismétlődést egy meneten belül a `usedIds` kerüli (memóriában; localStorage TILOS az artifact-kompatibilitás miatt).
