# KvízParty – projektútmutató Claude-nak

2–6 fős magyar nyelvű multiplayer kvízjáték a böngészőben, egyetlen HTML-fájlban.
**Élő játék:** https://nemelvagyunk.github.io/kvizparty/ · **Repo:** github.com/nemelvagyunk/kvizparty

## KRITIKUS: munkamegosztás és deploy

- **Claude SOHA nem pushol GitHubra** (a felhő-sandbox git-proxyja blokkolja, a Zapier-feltöltés pedig tiltott a felhasználó kérésére).
- A folyamat mindig: **Claude elkészíti/módosítja a fájlokat és elküldi a chatben → a felhasználó a `C:\SCRIPTS\sbch\kvizparty` mappába másolja és GitHub Desktoppal commitol+pushol.**
- A GitHub Pages a `main` branch gyökeréből szolgál ki (branch-mód, NINCS CI): az `index.html` maga a kész játék, buildelt állapotban van commitolva. Módosítás után mindig új `index.html`-t kell buildelni és küldeni (a módosult `src/` fájlokkal együtt).
- Backup készül minden nagyobb változtatás után (a felhasználó általános szabálya) – a `backup/` mappába, dátumos `.bak` néven.
- A felhasználó gépén a repo: `C:\SCRIPTS\sbch\kvizparty` (a Cowork-munkamenetben csatolt mappa). Fájlt ide írni szabad, **de commitolni/pusholni SOHA nem** – azt ő intézi GitHub Desktoppal.

## Jelenlegi állapot (röviden)

**Éles, tesztelt és kész** (120+ ellenőrzés zöld + mindkét hálózati teszt):
Hódítás mód (2 térkép, „Frontvonal" neon téma) · 3 AI-szint Robot Idő Büntetéssel · sorozat-bónusz · dupla pontos finálé · fix pakli-terv (10/15/20/30) · kategória-sorsolás + 10 mp visszaszámlálás · tipp-érték skálázás a létszámmal · végi díjátadó · külön tipp-zsák a 9 tippelős tétellel · **teljes 23 kategóriás kérdésbázis (2026-08-08): minden kategória elérte a célszámát** · **kategória-szűrő nélküli, letisztult lobby (a szűrő 2026-08-09-én kivezetve)** · **haladás-infók a sorsolásnál** · **1,9× sorozat-plafon, finálé-semleges sorozat** · **🃏 jokerek: Felezés + Dupla vagy semmi**.

**A kérdésbázis-terv LEZÁRVA** – nincs nyitott írási feladat. A felhasználó döntései az utolsó körből: Komolyzene fele magyar / fele nemzetközi (megvalósítva ~12/13 arányban) · a Gasztronómia nemzetközi része vegyes (konyhák, ételek és alapanyagok).

## Architektúra

- **Egyfájlos build:** `src/build.py` összefűzi: `src/template.html` (UI+logika) + `src/questions/part*.js` (kérdésbázis, 5 darabban) + `node_modules/peerjs/dist/peerjs.min.js` (beágyazva) → `index.html`.
- Template-jelölők: `/*__PEERJS__*/` és `/*__DATA__*/` — ezeket cseréli a build.
- **Multiplayer:** PeerJS (WebRTC), host-vezérelt szoba 4 jegyű kóddal (`kvparty-hu-<KÓD>` peer id), a host az autoritás, ő futtatja az AI-kat is. Ingyenes PeerJS-felhő a jelzéshez. Vendég-üzenetek: hello/answer/bye; host-broadcast: lobby/question/progress/reveal/end/kicked/hostbye.
- **Szóló mód:** ugyanaz a motor hálózat nélkül, AI-ellenfelekkel.
- Build: `npm install` (peerjs kell hozzá), majd `python3 src/build.py`.

## Játékszabályok és pontozás

- Két kérdéstípus: **„1 a 4-ből”** (mc) és **tippelős** (tip; számot tippel mindenki, a legközelebbi nyer, **egyenlőségnél a gyorsabb**). **A felhasználói felületen az mc típus neve MINDENHOL „Kérdés-válasz"** (2026-08-09 óta: lobby-terv, sorsolás, díjak) – az „1 a 4-ből" csak belső/fejlesztői elnevezés.
- Kérdésérték nehézség szerint (`QVAL`): **1★=75, 2★=90, 3★=100, 4★=110, 5★=125 pont.**
- MC: minden helyes válaszoló megkapja az értéket + gyorsasági bónusz max. **+20%** (`MC_SPEED_BONUS`).
- **Tippelős érték a mezőny méretével skálázva (`TIP_PLAYER_MULT`) – csak klasszikus mód:**

  | aktív játékos | 2 | 3 | 4 | 5 | 6 |
  |---|---|---|---|---|---|
  | nyertes szorzója | 1,00× | 1,25× | 1,50× | 1,75× | 2,00× |
  | 2. legjobb tipp | – | – | 1,00× | 1,00× | 1,00× |

  `TIP_SECOND_FROM`=4. A telitalálat **+25%** (`TIP_EXACT_BONUS`) a **skálázott** nyertes-értékre jön (6 fő, 3★: 200 + 25% = 250). A második helyezett fixen a normál kérdésértéket kapja, telitalálat-bónusz nélkül. A dupla pontos fináléban `V` már duplázott, tehát minden érték automatikusan kétszereződik (4 fő: 300 / 200).
  - „Aktív játékos" = `activePlayers()` (AI + kapcsolódott emberek), 2–6 közé klampolva. A szorzót a `hostNext()` rögzíti (`host.qTipMult`, `host.qSecond`), hogy a kiírt és a kiosztott érték biztosan egyezzen akkor is, ha közben kilép valaki.
  - A `question` üzenet `val` (nyertes) és `val2` (2. hely, 0 ha nincs) mezőt kap; a kliens a tipp-mező fölött írja ki. A `reveal` sorokban új `second` mező (🥈 + halvány kiemelés).
- **Sorozat-bónusz (`STREAK_MULT`) – CSAK a klasszikus módban:** `[1.00, 1.00, 1.30, 1.50, 1.70, 1.90]`, az n-edik egymás utáni helyes válasz szorzója. **Az első KÉT találatnak nincs bónusza, a szorzó a 3.-tól indul (1,3×), a 6. után plafon 1,90×.** `streakMult(n)` klampol.
  - **Kijelzés:** a sorozat-sáv (`streakBlock`) csak **2+ hosszú sorozatnál** jelenik meg („🔥 2 helyes válasz egymás után · a következő helyes válasz 1,3× szorzót ér"); 1 találatnál semmi. A fináléban sem a sáv, sem a standings-chipek 🔥 jelzése nem látszik.
  - A sorozat **kizárólag a SIMA 4 válaszos kérdéseken épül és szakad meg**. A **tippelős semleges**: nem folytatja, nem töri meg, és a rajta szerzett pont **nem kap szorzót** (`mult:1`).
  - **A dupla pontos finálé is sorozat-semleges (2026-08-09 óta):** a fináléban a sorozat „befagy" – se nem épül, se nem szakad, és a szorzó sem érvényesül (`mult:1`, `broke:0`). A jutalom ott maga a dupla érték. A `reveal` üzenet `final` mezőt kap; a kliens `streakBlock()`-ja fináléban nem jelenik meg.
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

  Az indok: a sima MC-k egy tömbben jönnek, így **a sorozat egyben építhető és követhető**; a tipp-blokk semleges, a finálé pedig szintén – ott már csak a dupla érték számít, a sorozat-szorzó nem él.
- **Dupla pontos finálé:** a `Q_PLAN` dupla blokkja. `finalLen(n)=fmc+ftip` → **10→2 · 15→3 · 20→4 · 30→6**.
  - `buildDeck()` beállítja a `host.finalFrom`-ot = `simaMC.length + simaTipp.length` (a ténylegesen felvett kérdésekből, nem a tervből – szűkös szűrőnél is helyes; ilyenkor a pakli rövidebb lesz, és `hostStart()` szól róla toasttal).
  - `hostNext()` beteszi a `host.qFinal`-t és a `question` üzenetbe a `final` / `finalLen` / `val` (már duplázott pontérték) mezőket; `finishQuestion()` a `V`-t duplázza.
  - **A fináléban sorozat-szorzó NINCS** – minden helyes válasz a duplázott alapértéket éri (+ gyorsasági bónusz), pl. 3★ = 200 pont.
  - Kliens: `#g-final` sáv a kérdés fölött, és a `#g-diff` chip a valós (duplázott) pontértéket mutatja. Hódításban a `cqRenderPickUI()` üríti a sávot.
- Időzítők: MC 20 mp, tip 25 mp; `#fast` hash-sel rövidítve (teszthez).
- **Kategória-sorsolás minden kérdés előtt (klasszikus mód).** `hostNext()` már nem küld kérdést: `phase='catdraw'`, kimegy a `{t:'catdraw', …}` üzenet (kategória, típus, pontérték, finálé-jelzés), majd `CAT_SPIN_MS` (1,8 mp pörgetés) + `CAT_COUNT_MS` (10 mp visszaszámlálás) után a `hostAsk()` küldi a `question`-t. A host a „▶ Mehet, ne várjunk" gombbal bármikor előrehozhatja (`hostAsk()` közvetlenül). Kliens: `renderCatDraw()`.
  - **Haladás-infók a sorsolás-képernyőn (2026-08-09 óta).** A `catdraw` üzenet `toFinal` / `mcLeft` / `tipLeft` mezőket is visz (a normál szakasz maradéka a pakliból számolva, az aktuális kérdést is beleértve). A kliens kiírja: „**5.** kérdés a 15-ből · még 8 kérdés a 🎬 fináléig", alatta MC-blokkban „Még N kérdés-válasz kártya maradt", tipp-blokkban „Még N tipp maradt"; a fináléban ehelyett „🎬 Dupla pontos finálé · kérdés-válasz / tippelős" felirat jön (`.draw-prog` / `.draw-note` CSS). A magyar -ból/-ből toldalékot a `fromSuf()` segéd adja.
- **`catBag(pool)` – kategória-zsák.** A pakli nem a nyers kérdéspoolból épül, hanem megkevert kategórialistából: minden kategória sorra kerül, mielőtt bármelyik ismétlődne. Így a 100 kérdéses kategória **ugyanakkora eséllyel** jön, mint az 50 kérdéses – a kategóriaméret nem befolyásolja a gyakoriságot. A hódítás mód `cqDraw()`-ja is ezt használja (ott nincs sorsolás-képernyő).
- Lobby-beállítások: **játékmód (Klasszikus / Hódítás)**, **hódításnál térkép (Nagy 13 / Kicsi 10)**, kérdésszám (`Q_COUNTS` = **10/15/20/30** – hódításban rejtve), AI hozzáadása (max 6 játékos összesen). **Nehézségszűrő NINCS (2026-08-09-én kivezetve)** – minden nehézség mindig játékban van; a `settings.diffs` és a `test_diff.js` törölve.
- **Kategória-szűrő NINCS (2026-08-08-án a felhasználó kérésére kivezetve** – túlbonyolította a felületet). Minden téma mindig játékban van; a `settings.cats`, a `catOn()`, az `optCats()` és az `opt` jelzők törölve lettek a kódból és az adatból. Ha valaha visszakerülne, a backup/ mappában megvan a szűrős verzió.
  - **Vezérelv: családi játék** – a témaválogatás helyett maga a kérdésbázis családbarát.
- **Külön, rövidebb kategórialista a TIPPELŐS kérdéseknek.** Sok témában a tippelős kérdés erőltetett lenne, ezért csak a `tip:true` jelzőjű kategóriákba kell (és szabad) tippet írni. Több kategória közös tételként szerepelhet a tippsorsolásban a `tipg` csoportkulccsal.
  - A tipplista mindig teljes – mind a 9 tétel mindig sorsolásban van.
  - `isTipCat(cat)` / `tipKey(cat)` a segédfüggvények; a `catBag(mcPool, tipPool)` külön zsákot vezet a két típusnak (MC-nél kategóriánként, tippnél `tipg` szerint).
  - Tipp-tételek (9, mind feltöltve ≥40 kérdésre): Magyar történelem (40) · Világtörténelem (40) · Állatok (40) · Növények és kertészet (40) · Fizika-kémia-biológia (40) · Sport (40) · **foldrajz** (magyar + világ, 41) · **feltalalo** (feltalálók + űrkutatás/informatika, 40) · **film** (magyar film-tévé + nemzetközi film, 53).
  - **Kijelzés (2026-08-09 óta): tippelősnél MINDIG a tétel neve látszik, nem az alkategória** – az űrkutatási tipp „💡 Feltalálók és találmányok", a világföldrajzi „🌍 Földrajz", a filmes „🎬 Filmek" néven fut a sorsolásban és a kérdés-chipben is. Segédek: `TIP_GROUP_INFO`, `tipItemInfo(cat)`, `tipItems()` (a sorsolás-pörgetés tippnél e 9 tétel közt forog, MC-nél a 23 kategória közt).
  - **Következmény:** a `tip:false` kategóriák meglévő tippelős kérdései nem kerülnek elő. Ez tudatos döntés, nem hiba.
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

## 🃏 Jokerek (csak klasszikus mód, 2026-08-09)

- **Minden EMBER játékos kap: 1 ✂️ Felezést + 1 🎲 Dupla vagy semmit (MC-jokerek) és EGY beváltható 🔢 tipp-jokert (Első VAGY Utolsó számjegy).** Az AI nem kap jokert (a Robot Idő Büntetés analógiájára az ember előnye).
- **Az MC-jokerek csak a SIMA „1 a 4-ből" blokkban** (`host.qi < host.sMcLen`), **a tipp-jokerek csak sima tippelősön** aktiválhatók; a fináléban és hódításban semmi. Csak a saját válasz elküldése ELŐTT, és **körönként legfeljebb EGY joker**.
- **✂️ Felezés:** két rossz opció eltűnik (privát üzenetben, csak az aktiválónak). **Ha az utolsó sima MC-ig nem használta el a játékos, ott automatikusan aktiválódik** – a Felezés tehát sosem vész el. Emiatt az utolsó sima körben a dupla már nem választható (a felezés foglalja a kört).
- **🎲 Dupla vagy semmi:** helyes válasz → **fixen 2× alapérték** (`2*V`, se gyorsasági bónusz, se sorozat-szorzó); rossz VAGY elmaradt válasz → **−alapérték** (a pontszám negatívba mehet). NEM aktiválódik automatikusan – kihasználatlanul elveszhet. A sorozat a duplás körben is normálisan épül/szakad, csak a pontozás nem veszi figyelembe.
- **🔢 Tipp-jokerek (2026-08-09): Első számjegy + Utolsó számjegy kártya.** Csak SIMA (nem finálé) tippelős kérdésen, és **a kettőből meccsenként csak EGY váltható be** (`jokers[pid].tip` egyetlen flag – bármelyik beváltása mindkettőt elhasználja). A kártya a megoldás első/utolsó számjegyét mutatja meg privátban (`tipDigit(a,kind)`: előjel nélkül; **egyjegyű megoldásnál a teljes megoldás jön vissza, de a játékos ezt nem tudhatja**). Nem aktiválódik automatikusan, elveszhet. Ack: `{t:'jokerack', kind:'first'|'last', qi, digit}`. A reveal-sorban 🔢 ikon jelzi.
- **Protokoll:** vendég→host `{t:'joker', kind:'fifty'|'double', qi}`; host→érintett privát `{t:'jokerack', kind, qi, remove:[i,j]?, auto?}` az új `sendTo(pid,msg)` helperrel (a host saját magának `handleMsg`-en át). A `question` üzenet `jok:true` mezője jelzi, hogy a joker-sáv megjelenhet. Host-oldali validáció: `hostJoker(pid,kind)`; a két törlendő opciót a `jokerRemovePair()` adja (soha nem a helyeset).
- **Host-állapot:** `host.jokers[pid]={fifty,double}` (a `hostStart()` tölti fel, csak nem-AI), `host.qJok[pid]` (a körben használt joker, `hostAsk()` nullázza), `host.sMcLen` (a `buildDeck()` állítja).
- **Kliens:** `myJok` készlet (a `lobby` üzenet nullázza – rematch is), `.jokbar`/`.jokbtn`/`.jokmsg` elemek, a `jokerApply()` kezeli az ack-ot. A `reveal` soraiban `jok` mező → ✂️/🎲 ikon mindenkinek látszik; negatív pont piros (`.pts.neg`).
- **Tesztek:** 8 joker-ellenőrzés a `test_solo.js`-ben (pontozás, tiltások, auto-felezés) + a vendég dupla-aktiválása a `test_net.js`-ben.

## Végi statisztikák – „A meccs díjai" (csak klasszikus mód)

- Gyűjtő: `host.stats[pid] = {okMc, okTip, badMc, miss, exact}` – a `finishQuestion()` tölti, `hostStart()`/`hostRematch()` üríti. A `p.best` (leghosszabb sorozat) a játékos-objektumon él.
- `buildAwards()` állítja össze a listát, a `hostEnd()` küldi az `end` üzenet `awards` mezőjében; a kliens a `renderEnd()`-ben rendereli a végeredmény-lista alá.
- Hat díj, mind **csak akkor jelenik meg, ha van érvényes birtokosa** (holtversenynél több név is szerepelhet):

  | | Díj | Alap |
  |---|---|---|
  | ⚡ | Leggyorsabb helyes válasz · 1 a 4-ből | `min(okMc)` |
  | 🎯 | Leggyorsabb nyerő tipp | `min(okTip)` – csak nyert tippekre |
  | 🔥 | Leghosszabb sorozat | `max(p.best)`, csak ≥2 |
  | 💯 | Legtöbb telitalálat | `max(exact)`, csak ≥1 |
  | 🤦 | Leggyorsabb rossz válasz · 1 a 4-ből | `min(badMc)` |
  | 🙈 | Legnagyobb melléfogás · tippelős | `max(miss.rel)` – **relatív** hiba (`dist/|a|`), csak nem nyertes tippekre |

- **Fontos részletek:**
  - A telitalálat (`dist===0`) akkor is számít, ha a játékos a holtversenyt elvesztette.
  - A válasz nélkül lejárt idő **nem** kerül be sem a jó, sem a rossz statisztikába (csak tényleges válasz).
  - A 🙈 díj **relatív** hibában mér (`dist / max(1,|a|)`) – abszolút hibával a nagy számú kérdések (lakosság, távolság) mindig elnyomnák az évszámokat. A kérdés nyertesét nem büntetjük. Ez az egyetlen díj, ami `sub` részletező sort is kap („1 504 nap – a jó válasz 27 nap volt"); a kártya ilyenkor `wsub` osztályt kap.

## Kérdésbázis (1333 kérdés = 959 mc + 374 tip, 23 kategória – KÉSZ)

- **A kódban a 23 kategóriás lista él** (cat 1–23, a 2026-08-08-i átállás óta; ugyanaznap készült el a 398 új mc is). A part-fájlok: `part1_kat01-05.js` · `part2_kat06-10.js` · `part3_kat11-15.js` · `part4_kat16-19.js` · `part5_kat20-23.js`.
- **Minden kategória a célszámán áll:** 40 mc/kategória, kivéve Gasztronómia 70 (30 magyar + 40 nemzetközi), Filozófia 25, Komolyzene 25, M. film 59, Sport 60 (utóbbi kettő a cél fölött). Tipp: mind a 9 tétel ≥40.
- A `CATEGORIES` tömb a `src/questions/part1_kat01-05.js` elején él, egy sor egy kategória:
  `{"id":16,"name":"…","icon":"🚀","tip":true,"tipg":"feltalalo"}`
  – `tip` = szabad-e ide tippelős kérdést írni · `tipg` = közös tippsorsolási tétel kulcsa (hiányzik → saját tétel). (`opt` jelző már nincs – a kategória-szűrőt kivezettük.)
- A 23 kategória: 1 🏰 Magyar történelem · 2 📜 Magyar irodalom · 3 🗺️ Magyarország földrajza · 4 🗣️ Magyar nyelv és szólások · 5 🎎 Magyar néphagyomány · 6 🌶️ Gasztronómia · 7 ⚔️ Világtörténelem · 8 🌍 Világföldrajz · 9 📖 Világirodalom · 10 🖼️ Képzőművészet · 11 🧠 Filozófia · 12 🦁 Állatok · 13 🌿 Növények és kertészet · 14 ⚗️ Fizika, kémia, biológia · 15 💡 Feltalálók és találmányok · 16 🚀 Űrkutatás és informatika · 17 🎬 Magyar film, tévé és sorozatok · 18 🎸 Magyar könnyűzene · 19 🎻 Komolyzene · 20 🍿 Nemzetközi filmek · 21 🎤 Nemzetközi popzene · 22 😂 Mémek és internetkultúra · 23 ⚽ Sport.
- **Eldobva:** a Videójátékok kategória (50), a nemzetközi sorozat-kérdések (13), 6 duplikátum/szivárgó kérdés, és **2026-08-09-én a `tip:false` kategóriák 139 „alvó” tippje is** (a felhasználó kérésére – soha nem kerültek sorsolásba). Minden tárolt tipp élő.
- Nehézség-eloszlás célja kategóriánként (40 kérdésnél): mc [4,8,16,8,4] és tip [4,8,16,8,4].
- Formátum (`src/questions/part*.js`, a részek összefűzve adnak érvényes JS-t):
  - mc: `{cat, type:'mc', d, q, o:[4 opció], c:0}` — **a helyes válasz MINDIG az első opció** (`c:0`), a játék futásidőben kever.
  - tip: `{cat, type:'tip', d, q, a:<egész szám>, unit, note}` — évszámnál `unit:""`; a `note` az eredményhirdetésnél jelenik meg.
- Új kérdésnél kötelező: időtálló, ellenőrzött tény (semmi „jelenlegi/aktuális”); egyértelműen EGY helyes válasz; hihető disztraktorok; nincs duplikáció (más kategóriákkal sem, és egy kérdés szövege – vagy note-ja – ne árulja el egy másik ÉLŐ kérdés válaszát); politikailag semleges, családbarát; a kvóták megtartása.

## ✅ LEZÁRVA: a 23 kategóriás átállás és a kérdésírás (2026-08-08)

**Minden kész:** új `CATEGORIES` (23 tétel) · a régi 1000 kérdés átsorolva · 143 új tippelős + 398 új „1 a 4-ből" kérdés megírva · zöld tesztek (121 ellenőrzés + hálózati tesztek). A terv a `design/kategoriak.md` + `design/tipp_kategoriak.md` fájlokban dokumentált.

- **Vezérelv: családi játék** – a szülők generációja is tudja játszani. Ezért esett ki a Videójátékok és a nemzetközi sorozatok; a magyar tévé a 17-es kategóriába olvadt.
- **Minőségi szabályok, amelyeket minden jövőbeli kérdésnél tartani kell:** időtálló tény · EGY helyes válasz · hihető disztraktorok · nincs duplikáció · **egy kérdés szövege vagy note-ja nem árulhatja el egy másik ÉLŐ kérdés válaszát** (mindkét irányban!) · politikailag semleges, családbarát.
- **Automata ellenőrző van hozzá:** a munkamenet `work/verify.js` szkriptje (duplikátum + évszám-szivárgás + note-szivárgás + fordított mc-válasz-keresés). Új kérdésblokk után érdemes újra lefuttatni a mintájára készült ellenőrzést.
- Ismert, elfogadott maradványok: néhány régről örökölt szóegyezés (pl. Balaton-tipp note-ja, Spielberg/Jurassic Park note, Wembley–Anglia sportpáros) – tudatosan bent hagyva, mert a kérdések ettől még önállóan megválaszolandók.

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
- **Dokumentáció:** `design/kategoriak.md` (négy válaszos kategóriák) és `design/tipp_kategoriak.md` (tippelős tételek) – **a kategóriák csak „1 a 4-ből" kérdéseket tartalmaznak**, a tippelősnek saját, rövidebb listája van.
- **Kliensállapot:** `cqState` (nem window-szintű, teszthez `window.__kv.cq`), térkép inline SVG-ként a `#cq-wrap`-ben, ami a `#s-game` képernyő tetején él.
- **Vizuális téma: „Frontvonal" (neon HUD).** Sötét rácsos háttér, **hatszög** területek és várak izzó kerettel, monospace számok. Színek CSS-változóban: `--n1` piros `#ff2e63`, `--n2` cián `#00e5ff`, `--nAcc` arany `#ffcc33`. Rajzolás: `cqHexPts()` (hatszög-pontok), `cqPips()` (élet-rombuszok), `cqSvg()`. A `#cqGlow` SVG-szűrő **csoportonként** van alkalmazva (nem elemenként) – ez lényegesen olcsóbb, ne bontsd szét.
  - **Élek:** csak akkor izzanak a csapat színében, ha **mindkét végük ugyanazé** – így látszik, hol szakad meg a lánc. A semleges élek külön, szűrő nélküli csoportban vannak.
  - **A vár háromszög helyett hatszög** – ezért a térképekben `tri`/`txt`/`anc` helyett **`cc`** (vár középpontja) van; az élek a középpontból indulnak, a vár rájuk rajzolódik.
  - **3 élet:** `cqPips()` három rombuszt rajzol a vár alá. **A funkció NINCS bekötve** – a `cqSnap()` nem küld `lives` mezőt, a kliens `st.lives||{1:3,2:3}`-ra esik vissza, tehát mindkét fél végig 3 életen áll. Ha lesz élet-logika: `lives` a host `cq` állapotába + a `cqSnap()`-be, a rajzolás már kezeli a kialvó (szaggatott) szegmenst.
  - A `.cqsvg text{text-anchor:middle}` **felülírja** az inline `text-anchor` attribútumot (CSS erősebb a prezentációs attribútumnál) – ezért van külön `.cqsvg .cap{text-anchor:start}`.

## Tesztek (Playwright, `tests/`)

- `npm test` → `test_solo.js` (pontozási logika a `window.__kv` teszt-hookon át, **sorozat-bónusz 9 ellenőrzéssel** + teljes szóló játszma), `test_ai.js` (AI-szintek: 800 mintás találati arány szintenként, tipppontosság, Robot Idő Büntetés – **éles időzítőkkel fut, nincs `#fast`**), `test_conquest.js` (hódítás: logikai ellenőrzések + teljes szóló játszma AI ellen **mindkét térképen**).
- `npm run test:cq` → csak a hódítás mód.
- `npm run test:net` → `test_net.js` (klasszikus) és `test_conquest_net.js` (hódítás host+vendég a kis térképen, a két kliens állapotának egyezését is ellenőrzi), **helyi PeerJS szerverrel**: `node_modules/.bin/peerjs --port 9000 --host 127.0.0.1`, URL-hash: `#fast&srv=127.0.0.1:9000`.
- Chromium a sandboxban: `executablePath: '/opt/pw-browsers/chromium'` (fallback: sima launch).
- Teszt-hook a játékban: `window.__kv` (host/me/cq getter-setter); a globális függvények (pl. `finishQuestion`, `makeHost`, `cqPickList`, `cqTargets`) window-szintűek.
- A `test_solo.js` kategória-egyenlőség ellenőrzése csak azokat a kategóriákat számolja, amelyekben VAN mc-kérdés, és külön ellenőrzi, hogy üres kategória sosem kerül a pakliba. **A minta 400 pakli** – 200-zal a 23 kategóriás készleten a 20%-os szórásküszöb statisztikailag határeset volt (ritkán, jogtalanul elbukott).
- `#fast` a hódítás módban is rövidít (MC 2,5 mp / tip 2,2 mp / választás 1,4 mp) – egy teljes játszma így ~70–110 mp.

## Ismert finomságok

- A tippbevitel vesszőt is elfogad tizedesjelként; a válaszok egészek.
- Vendég kilépéskor `bye` üzenet megy (gyors érzékelés); host kilépéskor `hostbye`.
- A PeerJS-felhő szigorú NAT mögött ritkán nem tud kapcsolatot építeni → mobilnet/hotspot a megoldás.
- **Kérdés-ismétlődés (2026-08-09 óta munkamenet-szintű):** a `SESSION_USED` globális Set a feltett kérdéseket a TELJES böngésző-munkamenetre megjegyzi – túléli a főmenübe kilépést és az új játékokat, a `makeHost()` ezt köti be `usedIds`-ként, és a hódítás (`cqBuildPools`/`cqAsk`) is használja. Csak az oldal újratöltése törli (localStorage TILOS az artifact-kompatibilitás miatt). Ha a friss készlet elfogy, a szűrés kíméletesen visszaáll a teljes poolra (klasszikus: `un()` count/2 küszöb; hódítás: 40 mc / 15 tip küszöb). *Mérés a javítás előttről: 6 egymás utáni, menüből újraindított 15 kérdéses játék átlag ~2,8 ismétlődő kérdést hozott – a javítás után nullát.*
