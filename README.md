# 🎉 KvízParty

2–6 fős magyar nyelvű multiplayer kvízjáték a böngészőben — egyetlen HTML-fájlban. Nincs szerver, nincs telepítés: a szobát nyitó játékos kódot kap, a többiek ezzel csatlakoznak bárhonnan, saját eszközről. Egyedül is játszható AI-ellenfelek ellen.

**▶ Játék online:** https://nemelvagyunk.github.io/kvizparty/

## Játékmódok

- **Online szoba (2–6 fő):** a host a *Szoba létrehozása* gombbal 4 jegyű kódot kap, a többiek a *Csatlakozás* mezőbe írják be. A kapcsolat közvetlen, böngészők közti (WebRTC/PeerJS), mindenki egyszerre válaszol a saját eszközén. A host AI-játékosokat is beültethet.
- **Szóló mód:** azonnali játék 1–5 AI-ellenfél ellen, internetkapcsolat nélkül is.

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

A játék egyetlen fájlba fordul (`index.html`); a forrás a `src/` mappában van. Pushnál a GitHub Actions workflow automatikusan buildel és a GitHub Pages-re teszi az eredményt.

```bash
npm install            # peerjs + fejlesztői függőségek
python3 src/build.py   # src/template.html + src/questions/part*.js -> index.html
npm test               # Playwright e2e: szóló játszma + nehézségszűrő
npm run test:net       # hálózati teszt (helyi PeerJS szerverrel)
```

Hasznos URL-hookok teszteléshez: `index.html#fast` (rövid időzítők), `#srv=127.0.0.1:9000` (saját PeerJS szerver a felhő helyett).

Új kérdés hozzáadásához a `src/questions/part*.js` fájlokat bővítsd (MC-nél a helyes válasz mindig az első opció — a játék kever), majd pushold: a Pages magától frissül.

## Megjegyzés az online módhoz

A kapcsolatfelvételhez a játék az ingyenes PeerJS-felhőt használja, maga a játékforgalom közvetlenül a résztvevők között megy. Nagyon szigorú (pl. céges) hálózaton előfordulhat, hogy a peer-kapcsolat nem jön létre — ilyenkor mobilnet/hotspot általában megoldja.
