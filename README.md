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

## Kérdésbázis

**1000 kérdés, 20 kategória** (kategóriánként 50), négy pillérre építve: magyar és nemzetközi általános műveltség, magyar és nemzetközi popkultúra. Nehézségi eloszlás: 1★×100, 2★×200, 3★×400, 4★×200, 5★×100. A lobbyban kategóriacsoportra és nehézségre is szűrhetsz; a közepesen okos AI találati esélye és tipppontossága a kérdés nehézségéhez igazodik.

## Fejlesztés

A játék egyetlen fájlba fordul (`index.html`); a forrás a `src/` mappában van. A GitHub Pages a `main` branch gyökeréből szolgál ki, **nincs CI** — a buildelt `index.html`-t kell commitolni.

```bash
npm install            # peerjs + fejlesztői függőségek
python3 src/build.py   # src/template.html + src/questions/part*.js -> index.html
npm test               # Playwright e2e: szóló játszma + nehézségszűrő + hódítás mód
npm run test:cq        # csak a hódítás mód (logika + teljes játszma AI ellen)
npm run test:net       # hálózati tesztek (helyi PeerJS szerverrel), klasszikus + hódítás
```

Hasznos URL-hookok teszteléshez: `index.html#fast` (rövid időzítők), `#srv=127.0.0.1:9000` (saját PeerJS szerver a felhő helyett).

Új kérdés hozzáadásához a `src/questions/part*.js` fájlokat bővítsd (MC-nél a helyes válasz mindig az első opció — a játék kever), majd pushold: a Pages magától frissül.

## Megjegyzés az online módhoz

A kapcsolatfelvételhez a játék az ingyenes PeerJS-felhőt használja, maga a játékforgalom közvetlenül a résztvevők között megy. Nagyon szigorú (pl. céges) hálózaton előfordulhat, hogy a peer-kapcsolat nem jön létre — ilyenkor mobilnet/hotspot általában megoldja.
