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
- **Sorozat-bónusz (`STREAK_MULT`) – CSAK a klasszikus módban:** `[1.00, 1.10, 1.30, 1.50, 1.70, 1.90, 2.10, 2.30, 2.50]`, az n-edik egymás utáni helyes válasz szorzója; a 9. után **plafon 2,50×**. `streakMult(n)` klampol.
  - A sorozat **kizárólag a 4 válaszos kérdéseken épül és szakad meg**. A **tippelős semleges**: nem folytatja, nem töri meg, és a rajta szerzett pont **nem kap szorzót** (`mult:1`).
  - A szorzó a teljes MC-pontra megy (alapérték + gyorsasági bónusz), kerekítve: `Math.round(base*mult)`.
  - Játékos-mezők: `p.streak` (aktuális), `p.best` (meccs legjobbja, a végeredményhez). `hostStart()`/`hostRematch()` nullázza, `playersMin()` átküldi.
  - A `reveal` sorok extra mezői: `base`, `mult`, `streak`, `broke` (ha egy ≥2-es sorozat most szakadt meg – a saját sorodra a `streakBlock()` írja ki).
  - **Hódítás módban nincs sorozat** – ott a terület értéke fixen `QVAL[d-1]`.
- **Pakli-felépítés és SORRENd (`Q_PLAN`) – CSAK a klasszikus módban.** A pakli **nincs összekeverve**; fix blokkokból áll: `[sima MC-k][sima tippek][dupla MC-k][dupla tippek]`. Blokkon belül a kérdések véletlenszerűek.

  | count | sima MC | sima tipp | dupla MC | dupla tipp |
  |---|---|---|---|---|
  | 10 | 5 | 3 | 1 | 1 |
  | 15 | 7 | 5 | 2 | 1 |
  | 20 | 10 | 6 | 2 | 2 |
  | 30 | 14 | 10 | 4 | 2 |

  Az indok: a sima MC-k egy tömbben jönnek, így **a sorozat követhető**; a tipp-blokk semleges, ezért a sorozat **átível rajta**, és a dupla pontos MC-k már a felépített szorzóval indulnak (10 hibátlan MC → a tippek után az első dupla MC 2,5× **és** dupla = 500 pont egy 3★-oson).
- **Dupla pontos finálé:** a `Q_PLAN` dupla blokkja. `finalLen(n)=fmc+ftip` → **10→2 · 15→3 · 20→4 · 30→6**.
  - `buildDeck()` beállítja a `host.finalFrom`-ot = `simaMC.length + simaTipp.length` (a ténylegesen felvett kérdésekből, nem a tervből – szűkös szűrőnél is helyes; ilyenkor a pakli rövidebb lesz, és `hostStart()` szól róla toasttal).
  - `hostNext()` beteszi a `host.qFinal`-t és a `question` üzenetbe a `final` / `finalLen` / `val` (már duplázott pontérték) mezőket; `finishQuestion()` a `V`-t duplázza.
  - **A sorozat-szorzó a duplázott értékre megy** (pl. 3★ + finálé + 1,7× = 340 pont).
  - Kliens: `#g-final` sáv a kérdés fölött, és a `#g-diff` chip a valós (duplázott) pontértéket mutatja. Hódításban a `cqRenderPickUI()` üríti a sávot.
- Időzítők: MC 20 mp, tip 25 mp; `#fast` hash-sel rövidítve (teszthez).
- Lobby-beállítások: **játékmód (Klasszikus / Hódítás)**, **hódításnál térkép (Nagy 13 / Kicsi 10)**, kérdésszám (`Q_COUNTS` = **10/15/20/30** – hódításban rejtve), 4 kategóriacsoport-kapcsoló, nehézségszűrő (1★–5★), AI hozzáadása (max 6 játékos összesen).
- **AI-szintek (`AI_TIERS`)** – a lobbyban három gomb (`#seg-ai`), a szint a játékoson `p.ai` (0/1/2):

  | | MC-találat d1..d5 | 3★-on | tippszórás (`spr`) |
  |---|---|---|---|
  | 🤖 Robo Róbert | 0.85 0.72 0.60 0.45 0.32 | 60% | 1.00 |
  | ⚙️ Masina Misi | 0.72 0.58 0.45 0.34 0.27 | 45% | 1.60 |
  | 🤪 Félnótás Fábián | 0.55 0.42 0.30 0.27 0.25 | 30% | 2.40 |

  A vak tipp esélye 25%, ezért egyik görbe sem megy ez alá. A tippszórás = `AI_SPREAD[d-1] * tier.spr`.
  Azonos szintből a második AI sorszámot kap („Masina Misi 2").
- **AI-időzítés – „Robot Idő Büntetés":** `AI_THINK` (1–2 mp) múlva **ténylegesen** válaszol, hogy sose kelljen rá várni; a `collectAnswer`-nek viszont `think + AI_LAG` (5–25 mp) időt ad át, a kérdés hosszára vágva. **Következmény:** az AI gyakorlatilag soha nem kap gyorsasági bónuszt és minden holtversenyt elveszít az emberrel szemben – ez szándékos.
- `scheduleAI(p,q,dur)` és `aiTip(q,tier)` a szintet a `p.ai` alapján kapja (`aiTier(p)`).

## Végi statisztikák – „A meccs díjai" (csak klasszikus mód)

- Gyűjtő: `host.stats[pid] = {okMc, okTip, badMc, badTip, exact}` – a `finishQuestion()` tölti, `hostStart()`/`hostRematch()` üríti. A `p.best` (leghosszabb sorozat) a játékos-objektumon él.
- `buildAwards()` állítja össze a listát, a `hostEnd()` küldi az `end` üzenet `awards` mezőjében; a kliens a `renderEnd()`-ben rendereli a végeredmény-lista alá.
- Hat díj, mind **csak akkor jelenik meg, ha van érvényes birtokosa** (holtversenynél több név is szerepelhet):

  | | Díj | Alap |
  |---|---|---|
  | ⚡ | Leggyorsabb helyes válasz · 1 a 4-ből | `min(okMc)` |
  | 🎯 | Leggyorsabb nyerő tipp | `min(okTip)` – csak nyert tippekre |
  | 🔥 | Leghosszabb sorozat | `max(p.best)`, csak ≥2 |
  | 💯 | Legtöbb telitalálat | `max(exact)`, csak ≥1 |
  | 🤦 | Leggyorsabb rossz válasz · 1 a 4-ből | `min(badMc)` |
  | 🙈 | Leggyorsabb melléfogás · tippelős | `min(badTip)` – a nem nyertes tippek közül |

- **Fontos részletek:** a telitalálat (`dist===0`) akkor is számít, ha a játékos a holtversenyt elvesztette; a válasz nélkül lejárt idő **nem** kerül be sem a jó, sem a rossz statisztikába (csak tényleges válasz).

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
- **Állandók:** `CQ_MC_DUR` 30 mp, `CQ_TIP_DUR` 30 mp, `CQ_PICK_DUR` 20 mp, `CQ_CASTLE0`=100, `CQ_ATK_GAIN`=+25, `CQ_VAL_MAX`=150 (a várra nem vonatkozik), `CQ_DEF_BONUS`=+50, `CQ_DRY_LIMIT`=6. A támadásszám térképenként külön (`M.attacks`).
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

- `npm test` → `test_solo.js` (pontozási logika a `window.__kv` teszt-hookon át, **sorozat-bónusz 9 ellenőrzéssel** + teljes szóló játszma), `test_diff.js` (nehézségszűrő + jelzés), `test_ai.js` (AI-szintek: 800 mintás találati arány szintenként, tipppontosság, Robot Idő Büntetés – **éles időzítőkkel fut, nincs `#fast`**), `test_conquest.js` (hódítás: logikai ellenőrzések + teljes szóló játszma AI ellen **mindkét térképen**).
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
