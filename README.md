# 🎉 KvízParty

2–6 fős magyar nyelvű multiplayer kvízjáték a böngészőben — egyetlen HTML-fájlban. Nincs szerver, nincs telepítés: a szobát nyitó játékos kódot kap, a többiek ezzel csatlakoznak bárhonnan, saját eszközről. Egyedül is játszható AI-ellenfelek ellen.

**▶ Játék online:** https://nemelvagyunk.github.io/kvizparty/

## Játékmódok

- **Online szoba (2–6 fő):** a host a *Szoba létrehozása* gombbal 4 jegyű kódot kap, a többiek a *Csatlakozás* mezőbe írják be. A kapcsolat közvetlen, böngészők közti (WebRTC/PeerJS), mindenki egyszerre válaszol a saját eszközén. A host AI-játékosokat is beültethet.
- **Szóló mód:** azonnali játék 1–5 AI-ellenfél ellen, internetkapcsolat nélkül is.
- **⚔️ Hódítás (2 fő):** térképes párbaj — lásd lent.

## ⚔️ Hódítás mód (2 játékos)

A lobbyban átkapcsolható játékmód, pontosan 2 játékossal (ember vagy AI). A piros vár balra, a kék jobbra; a várak alapból 100 pontot érnek. **Két pálya közül lehet választani:**

| Térkép | Területek | Támadás a HARC fázisban | Jellege |
|---|---|---|---|
| 🗺️ **Nagy** | 13 | 6–6 | Hosszabb meccs; a középső mező 8 szomszéddal a térkép szíve |
| 🧭 **Kicsi** | 10 | 4–4 | Rövidebb meccs; két központi csomópont 7-7 szomszéddal |

Mindkét pálya **tükörszimmetrikus** a két vár felezőtengelyére, tehát egyik csapat sem indul jobb pozícióból – csak a kezdés sorsolása dönt.

A térkép „Frontvonal" hadműveleti kijelző stílusban jelenik meg: hatszög területek izzó kerettel, és a **saját területeidet összekötő élek a színedben világítanak** – egy pillantásból látod, meddig ér a birodalmad és hol szakad meg a lánc.

**1. TERÜLETFOGLALÁS.** Sorsolás dönti el, ki választ először. Minden fordulóban előbb az egyik, majd a másik játékos jelöl ki egy szabad területet — csak olyat, amelyik a saját várához vagy egy már megszerzett területéhez kapcsolódik. (Ha nincs ilyen, bármelyik szabad terület választható.) Ugyanazt a mezőt nem lehet kijelölni; ha már csak egy terület maradt, nincs választás. Ezután jön a kérdés:

- **4 válaszos kérdés (30 mp):** aki eltalálja, megkapja a saját kijelölt területét — akár mindketten.
- **Tippelős kérdés (30 mp):** csak a nyertes foglal, holtversenynél a gyorsabb.

A terület annyit ér, amennyit a kérdés: **75 / 90 / 100 / 110 / 125 pont** a nehézség szerint. A két kérdéstípus váltakozik. A fázis addig tart, míg minden terület gazdára nem talál. A választási sorrend fordulónként cserélődik.

**2. HARC.** Mindkét fél a térképnek megfelelő számú alkalommal támad (nagy: 6, kicsi: 4), felváltva. Támadni csak olyan ellenséges területet lehet, amelyre a támadó rálát (a várából vagy valamelyik területéről). *A bétában a várakat nem lehet támadni.*

| Kimenetel | Következmény |
|---|---|
| Támadó tud, védő nem | A terület gazdát cserél, és **+25 ponttal** többet ér (max. 150) |
| Mindkettő tudja | **Tippelős kérdés dönt** – utána a fenti/lenti szabály él |
| Védő tud, támadó nem | A **védő vára +50 pontot** kap (a várnak nincs plafonja) |
| Egyik sem tudja | Nem történik semmi, a támadás viszont elfogy |

A meccs végén a pontszám = **a saját várérték + az összes birtokolt terület értéke**.

## Kérdéstípusok és pontozás

| | „1 a 4-ből” | Tippelős |
|---|---|---|
| Feladat | 4 opcióból a helyes kiválasztása | szám/évszám tippelése |
| Ki kap pontot? | minden helyes válaszoló | a legközelebbi tipp gazdája |
| Döntetlen | – | a **gyorsabb** tipp nyer |
| Bónusz | gyorsasági bónusz max. +20% | telitalálat +25% |

A kérdés értéke a nehézségétől függ: **1★ = 75 · 2★ = 90 · 3★ = 100 · 4★ = 110 · 5★ = 125 pont.**

### 🔥 Sorozat-bónusz (klasszikus mód)

Az egymás utáni helyes válaszok egyre többet érnek:

| Hányadik helyes egymás után | 1. | 2. | 3. | 4. | 5. | 6. | 7. | 8. | 9.+ |
|---|---|---|---|---|---|---|---|---|---|
| Szorzó | 1,0× | 1,1× | 1,3× | 1,5× | 1,7× | 1,9× | 2,1× | 2,3× | **2,5×** |

A szorzó a teljes pontra vonatkozik (alapérték + gyorsasági bónusz), és a 9. találat után nem nő tovább. **A sorozat csak a „1 a 4-ből" kérdéseken épül és szakad meg** — a tippelős kérdés semleges: nem folytatja, nem töri meg, és nem kap szorzót. Az eredményhirdetésnél látod a sorozatodat és a következő szorzót, a végeredménynél pedig a meccs leghosszabb sorozatát.

### 🎬 A meccs felépítése (klasszikus mód)

A kérdések nem véletlenszerű sorrendben jönnek, hanem blokkokban: **előbb az összes „1 a 4-ből", utána a tippelősök, végül a dupla pontos finálé.**

| Kérdésszám | 1 a 4-ből | Tippelős | 🎬 Dupla 1 a 4-ből | 🎬 Dupla tippelős |
|---|---|---|---|---|
| **10** | 5 | 3 | 1 | 1 |
| **15** | 7 | 5 | 2 | 1 |
| **20** | 10 | 6 | 2 | 2 |
| **30** | 14 | 10 | 4 | 2 |

Ennek a sorrendnek az a lényege, hogy a **sorozatod egyben építhető fel** a meccs elején, a tippelős blokk pedig nem töri meg — így a dupla pontos zárókérdésekre már a felépített szorzóval érkezel. Egy hibátlan 20-as meccsen ez azt jelenti, hogy az első dupla pontos „1 a 4-ből" kérdés 2,5×-es szorzóval **és** dupla értékkel jön: egy 3★-os kérdés így 500 pontot ér a szokásos 100 helyett.

A finálé alatt arany sáv jelzi a kérdés fölött, és a pontérték-jelző is a duplázott értéket mutatja.

### 📊 A meccs díjai

A végeredmény alatt hat díj jelenik meg (mindegyik csak akkor, ha van kire kiosztani):

⚡ leggyorsabb helyes válasz · 🎯 leggyorsabb nyerő tipp · 🔥 leghosszabb sorozat · 💯 legtöbb telitalálat · 🤦 leggyorsabb rossz válasz · 🙈 legnagyobb melléfogás tippelősön

A gyorsasági díjak a „1 a 4-ből" és a tippelős kérdésekre külön mennek, és holtverseny esetén több név is szerepelhet.

A 🙈 díj **arányos hibát** mér, nem abszolútat — így nem az nyeri, aki egy milliós nagyságrendű kérdésnél tévedett százezret, hanem aki tényleg nagyot: *„1 504 nap – a jó válasz 27 nap volt"*.

## Kérdésbázis

**1000 kérdés, 20 kategória** (kategóriánként 50), négy pillérre építve: magyar és nemzetközi általános műveltség, magyar és nemzetközi popkultúra. Nehézségi eloszlás: 1★×100, 2★×200, 3★×400, 4★×200, 5★×100. A lobbyban kategóriacsoportra és nehézségre is szűrhetsz.

## AI-ellenfelek

Három szint közül választhatsz, akárhány kombinációban (max. 6 játékos):

| Ellenfél | Közepes (3★) kérdésre eltalálja | Jellege |
|---|---|---|
| 🤖 **Robo Róbert** | 60% | Kiegyensúlyozott, a könnyű kérdéseket szinte mindig tudja |
| ⚙️ **Masina Misi** | 45% | Érezhetően gyengébb, a nehezeken már bizonytalan |
| 🤪 **Félnótás Fábián** | 30% | Még a könnyűeken is bukdácsol, nehéz kérdésen már csak tippel |

Mindhárom találati esélye a kérdés nehézségével csökken, és a butább AI a tippelős kérdéseknél is pontatlanabb.

**Robot Idő Büntetés:** az AI 1–2 másodpercen belül válaszol, hogy a játék pörögjön és sose kelljen rá várni — cserébe a pontozásnál 5–25 másodperces büntetést kap. Így a gyorsasági bónuszt és a holtversenyeket gyakorlatilag mindig az ember viszi.

## Fejlesztés

A játék egyetlen fájlba fordul (`index.html`); a forrás a `src/` mappában van. A GitHub Pages a `main` branch gyökeréből szolgál ki, **nincs CI** — a buildelt `index.html`-t kell commitolni.

```bash
npm install            # peerjs + fejlesztői függőségek
python3 src/build.py   # src/template.html + src/questions/part*.js -> index.html
npm test               # Playwright e2e: szóló játszma + nehézségszűrő + AI-szintek + hódítás mód
npm run test:cq        # csak a hódítás mód (logika + teljes játszma AI ellen)
npm run test:ai        # csak az AI-szintek (találati arány, tipppontosság, időbüntetés)
npm run test:net       # hálózati tesztek (helyi PeerJS szerverrel), klasszikus + hódítás
```

Hasznos URL-hookok teszteléshez: `index.html#fast` (rövid időzítők), `#srv=127.0.0.1:9000` (saját PeerJS szerver a felhő helyett).

Új kérdés hozzáadásához a `src/questions/part*.js` fájlokat bővítsd (MC-nél a helyes válasz mindig az első opció — a játék kever), majd pushold: a Pages magától frissül.

## Megjegyzés az online módhoz

A kapcsolatfelvételhez a játék az ingyenes PeerJS-felhőt használja, maga a játékforgalom közvetlenül a résztvevők között megy. Nagyon szigorú (pl. céges) hálózaton előfordulhat, hogy a peer-kapcsolat nem jön létre — ilyenkor mobilnet/hotspot általában megoldja.
