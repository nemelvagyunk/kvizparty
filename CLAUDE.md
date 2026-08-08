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
- Lobby-beállítások: **játékmód (Klasszikus / Hódítás)**, **hódításnál térkép (Nagy 13 / Kicsi 10)**, kérdésszám (10/15/20/30/50 – hódításban rejtve), 4 kategóriacsoport-kapcsoló, nehézségszűrő (1★–5★), AI hozzáadása (max 6 játékos összesen).
- **AI (közepes, nehézséghez skálázva):** MC-találat esélye `AI_MC_P=[0.85,0.72,0.60,0.45,0.32]` (d1..d5), tippszórás szorzó `AI_SPREAD=[0.55,0.75,1.00,1.40,1.90]`.

## Kérdésbázis (1000 kérdés)

- **20 kategória** (cat 1–20), 4 pillér: 1–5 magyar általános műveltség, 6–10 nemzetközi általános műveltség, 11–15 magyar popkultúra, 16–20 nemzetközi popkultúra. Csoportindex: `Math.floor((cat-1)/5)`.
- Kategóriánként **50 kérdés = 30 mc + 20 tip**. Nehézség-eloszlás globálisan: **1★×100, 2★×200, 3★×400, 4★×200, 5★×100** (kategóriánként kb. mc [3,6,12,6,3] és tip [2,4,8,4,2]).
- Formátum (`src/questions/part*.js`, a részek összefűzve adnak érvényes JS-t):
  - mc: `{cat, type:'mc', d, q, o:[4 opció], c:0}` — **a helyes válasz MINDIG az első opció** (`c:0`), a játék futásidőben kever.
  - tip: `{cat, type:'tip', d, q, a:<egész szám>, unit, note}` — évszámnál `unit:""`; a `note` az eredményhirdetésnél jelenik meg.
- Új kérdésnél kötelező: időtálló, ellenőrzött tény (semmi „jelenlegi/aktuális”); egyértelműen EGY helyes válasz; hihető disztraktorok; nincs duplikáció (más kategóriákkal sem, és egy kérdés szövege ne árulja el egy másik válaszát); politikailag semleges, családbarát; a kvóták megtartása.

## ⚔️ Hódítás mód (2 játékos, `settings.mode='conquest'`)

Térképes párbaj két választható pályán. Csapatkód: **1 = piros** (a host / szólóban az ember), **2 = kék**.

- **Térképek:** `CQ_MAPS` – **két pálya**, mindkettő a felhasználó rajzából, képelemzéssel kiolvasva. Egy térkép mezői: `n` (területszám), `r` (körsugár), `attacks` (támadás/csapat), `vb` (SVG viewBox), `pos`, `adj` (0-indexelt, szimmetrikus, összefüggő), `cadj` (a várak kijáratai), `cc` (a várak középpontja), `label`/`desc` (lobby).
  - `big`: 13 terület, 30 él, 6–6 támadás; piros vár → idx 3,9 · kék vár → idx 7,8. Az idx 5 (a „6-os") a legcentrálisabb, 8 szomszéddal.
  - `small`: 10 terület, 21 él, 4–4 támadás; piros vár → idx 2,6 · kék vár → idx 3,7. Két hub: idx 4 és 5, 7-7 szomszéddal.
  - **Mindkét térkép tükörszimmetrikus** a várak felezőtengelyére (nagy: 1↔3, 4↔8, 5↔7, 9↔10, 11↔13; kicsi: 1↔2, 3↔4, 5↔6, 7↔8, 9↔10 – 1-indexelt). Ez szándékos: egyik csapat sem indul jobb pozícióból. `test_conquest.js` minden futáskor ellenőrzi (`mirror: true`); **új térkép felvételekor is tartani kell.**
  - Hozzáférés: hostoldalon `cqMap()` (a `host.settings.mapKey` alapján), kliensoldalon `cqM()` (a `cqState.map` alapján). **Ne hardkódolj területszámot** – mindig `cqMap().n`.
- **Állandók:** `CQ_MC_DUR` 35 mp, `CQ_TIP_DUR` 30 mp, `CQ_PICK_DUR` 20 mp, `CQ_CASTLE0`=100, `CQ_ATK_GAIN`=+25, `CQ_VAL_MAX`=150 (a várra nem vonatkozik), `CQ_DEF_BONUS`=+50, `CQ_DRY_LIMIT`=6. A támadásszám térképenként külön (`M.attacks`).
- **FOGLALÁS fázis:** sorsolt kezdő, felváltva jelölnek területet (csak amire rálátnak – ha semmire, bármelyik szabadot; a másik kijelöltjét nem). MC-nél mindkét helyes válaszoló foglal, tippnél csak a nyertes (holtversenynél a gyorsabb). Terület értéke = `QVAL[d-1]`, **gyorsasági bónusz nélkül**. A kérdéstípus váltakozik (MC → tip → MC…), a választási sorrend fordulónként cserélődik. 1 szabad terület esetén nincs választás, és MC-nél is csak a leggyorsabb helyes válaszoló foglal.
- **HARC fázis:** térképfüggő számú (6 vagy 4) támadás felváltva, kezd az, aki a foglalásnál másodikként választott. Mindig MC; ha **mindketten** tudják, tippelős döntő jön. Támadó nyer → foglalás, érték +25 (max 150). Védő nyer → a **védő vára** +50. Mindkettő rossz → nem történik semmi (a támadás elfogy). **Várat a bétában nem lehet támadni.**
- **Végeredmény:** vár + birtokolt területek összege.
- **Biztonsági szelep:** `CQ_DRY_LIMIT` egymást követő eredménytelen foglalás-forduló után a kijelölt területek gazdára találnak (különben AFK-nál végtelen ciklus lenne).
- **Protokoll:** új `{t:'cq', st}` host-broadcast (teljes térképállapot minden változáskor) és `{t:'cqpick', idx}` vendég→host üzenet. A `question`/`reveal`/`end` üzenetek `cq:true` mezőt kapnak, és a kliens ilyenkor a `cqRender*` függvényekre ágazik. A `finishQuestion()` a `host.cq.on` flag alapján delegál a `cqFinishQuestion()`-nek, így a `collectAnswer`/`scheduleAI`/`maybeAllAnswered` változatlanul működik.
- **Kliensállapot:** `cqState` (nem window-szintű, teszthez `window.__kv.cq`), térkép inline SVG-ként a `#cq-wrap`-ben, ami a `#s-game` képernyő tetején él.
- **Vizuális téma: „Frontvonal" (neon HUD).** Sötét rácsos háttér, **hatszög** területek és várak izzó kerettel, monospace számok. Színek CSS-változóban: `--n1` piros `#ff2e63`, `--n2` cián `#00e5ff`, `--nAcc` arany `#ffcc33`. Rajzolás: `cqHexPts()` (hatszög-pontok), `cqPips()` (élet-rombuszok), `cqSvg()`. A `#cqGlow` SVG-szűrő **csoportonként** van alkalmazva (nem elemenként) – ez lényegesen olcsóbb, ne bontsd szét.
  - **Élek:** csak akkor izzanak a csapat színében, ha **mindkét végük ugyanazé** – így látszik, hol szakad meg a lánc. A semleges élek külön, szűrő nélküli csoportban vannak.
  - **A vár háromszög helyett hatszög** – ezért a térképekben `tri`/`txt`/`anc` helyett **`cc`** (vár középpontja) van; az élek a középpontból indulnak, a vár rájuk rajzolódik.
  - **3 élet:** `cqPips()` három rombuszt rajzol a vár alá. **A funkció NINCS bekötve** – a `cqSnap()` nem küld `lives` mezőt, a kliens `st.lives||{1:3,2:3}`-ra esik vissza, tehát mindkét fél végig 3 életen áll. Ha lesz élet-logika: `lives` a host `cq` állapotába + a `cqSnap()`-be, a rajzolás már kezeli a kialvó (szaggatott) szegmenst.
  - A `.cqsvg text{text-anchor:middle}` **felülírja** az inline `text-anchor` attribútumot (CSS erősebb a prezentációs attribútumnál) – ezért van külön `.cqsvg .cap{text-anchor:start}`.

## Tesztek (Playwright, `tests/`)

- `npm test` → `test_solo.js` (pontozási logika a `window.__kv` teszt-hookon át + teljes szóló játszma), `test_diff.js` (nehézségszűrő + jelzés), `test_conquest.js` (hódítás: logikai ellenőrzések + teljes szóló játszma AI ellen **mindkét térképen**).
- `npm run test:cq` → csak a hódítás mód.
- `npm run test:net` → `test_net.js` (klasszikus) és `test_conquest_net.js` (hódítás host+vendég a kis térképen, a két kliens állapotának egyezését is ellenőrzi), **helyi PeerJS szerverrel**: `node_modules/.bin/peerjs --port 9000 --host 127.0.0.1`, URL-hash: `#fast&srv=127.0.0.1:9000`.
- Chromium a sandboxban: `executablePath: '/opt/pw-browsers/chromium'` (fallback: sima launch).
- Teszt-hook a játékban: `window.__kv` (host/me/cq getter-setter); a globális függvények (pl. `finishQuestion`, `makeHost`, `cqPickList`, `cqTargets`) window-szintűek.
- `#fast` a hódítás módban is rövidít (MC 2,5 mp / tip 2,2 mp / választás 1,4 mp) – egy teljes játszma így ~70–110 mp.

## Ismert finomságok

- A tippbevitel vesszőt is elfogad tizedesjelként; a válaszok egészek.
- Vendég kilépéskor `bye` üzenet megy (gyors érzékelés); host kilépéskor `hostbye`.
- A PeerJS-felhő szigorú NAT mögött ritkán nem tud kapcsolatot építeni → mobilnet/hotspot a megoldás.
- A kérdés-ismétlődést egy meneten belül a `usedIds` kerüli (memóriában; localStorage TILOS az artifact-kompatibilitás miatt).
