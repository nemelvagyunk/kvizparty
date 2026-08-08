# KvízParty – tippelős kategóriák

**9 tétel.** Csak ezekbe kell (és szabad) tippelős kérdést írni – ahol a szám
természetesen adódik a témából. A többi kategóriában a tippelős kérdés erőltetett lenne.

| # | Tippelős kategória | Mely kategóriákból | Meglévő tipp | Cél |
|---|---|---|---|---|
| 1 | 🏰 **Magyar történelem** | 🏰 Magyar történelem | 20 | 20 |
| 2 | ⚔️ **Világtörténelem** | ⚔️ Világtörténelem | 21 | 20 |
| 3 | 🌍 **Földrajz** | 🗺️ Magyarország földrajza + 🌍 Világföldrajz | 41 | 30 |
| 4 | ⚗️ **Fizika, kémia, biológia** | ⚗️ Fizika, kémia, biológia | 18 | 20 |
| 5 | 🦁 **Állatok** | 🦁 Állatok | 2 | 20 |
| 6 | 🌿 **Növények és kertészet** | 🌿 Növények és kertészet | 0 | 20 |
| 7 | 💡 **Feltalálók és találmányok** | 💡 Feltalálók és találmányok + 🚀 Űrkutatás és informatika | 37 | 30 |
| 8 | 🎬 **Filmek** | 🎬 Magyar film, tévé és sorozatok + 🍿 Nemzetközi filmek | 54 | 30 |
| 9 | ⚽ **Sport** | ⚽ Sport | 40 | 20 |

**Összesen:** 233 meglévő + 40 megírandó = 273 tippelős kérdés.

## Szabályok

- A **kategória-szűrő a tippelős kérdésekre nem hat** – ez a lista mindig teljes, így sosem fogy ki a tipp.
- A sorsolásban a fenti **tételek** szerepelnek egyenlő eséllyel: a magyar és a világföldrajz
  egy tétel, a két filmes kategória egy tétel, a feltalálók és az űrkutatás egy tétel.
- A négy válaszos kérdések után mindig tippelős blokk jön (lásd a pakli felépítését).

## Kérdésformátum

```js
{cat:1, type:'tip', d:3, q:"Melyik évben …?", a:1848, unit:"", note:"Rövid érdekesség."}
```
- `a` egész szám · `unit` mértékegység (évszámnál üres) · `note` az eredményhirdetésnél jelenik meg.
- A `cat` a **négy válaszos** kategória azonosítója marad – a tippelős tételt a kategória `tipg` mezője adja.
