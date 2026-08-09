# KvízParty – tippelős kategóriák

**9 tétel, tételenként legalább 40 kérdés.** Csak ezekbe kell (és szabad)
tippelős kérdést írni – ahol a szám természetesen adódik a témából.

**✅ KÉSZ (2026-08-08): mind a 9 tétel feltöltve** – 143 új tippelős kérdés
készült az átálláskor, minden tétel elérte a 40-es célszámot.

| # | Tippelős kategória | Mely kategóriákból | Darab | Cél | Állapot |
|---|---|---|---|---|---|
| 1 | 🏰 **Magyar történelem** | 🏰 Magyar történelem | 40 | 40 | ✅ |
| 2 | ⚔️ **Világtörténelem** | ⚔️ Világtörténelem | 40 | 40 | ✅ |
| 3 | 🌍 **Földrajz** | 🗺️ Magyarország földrajza + 🌍 Világföldrajz | 41 | 40 | ✅ |
| 4 | ⚗️ **Fizika, kémia, biológia** | ⚗️ Fizika, kémia, biológia | 40 | 40 | ✅ |
| 5 | 🦁 **Állatok** | 🦁 Állatok | 40 | 40 | ✅ |
| 6 | 🌿 **Növények és kertészet** | 🌿 Növények és kertészet | 40 | 40 | ✅ |
| 7 | 💡 **Feltalálók és találmányok** | 💡 Feltalálók és találmányok + 🚀 Űrkutatás és informatika | 40 | 40 | ✅ |
| 8 | 🎬 **Filmek** | 🎬 Magyar film, tévé és sorozatok + 🍿 Nemzetközi filmek | 53 | 40 | ✅ |
| 9 | ⚽ **Sport** | ⚽ Sport | 40 | 40 | ✅ |

**Összesen:** 374 tippelős kérdés – mind élő, mind sorsolásba kerül.
(Az egykori „alvó” tippeket 2026-08-09-én töröltük a fájlokból.)

## Szabályok

- Témaszűrő nincs a játékban – mind a 9 tétel mindig sorsolásban van.
- A sorsolásban a fenti **tételek** szerepelnek egyenlő eséllyel: a magyar és a világföldrajz
  egy tétel, a két filmes kategória egy tétel, a feltalálók és az űrkutatás egy tétel.
- A négy válaszos blokk után mindig tippelős blokk jön (lásd a pakli felépítését).
- Nehézség-eloszlás tételenként (40 kérdésnél): kb. **4 / 8 / 16 / 8 / 4**.

## Kérdésformátum

```js
{cat:1, type:'tip', d:3, q:"Melyik évben …?", a:1848, unit:"", note:"Rövid érdekesség."}
```
- `a` egész szám · `unit` mértékegység (évszámnál üres) · `note` az eredményhirdetésnél jelenik meg.
- A `cat` a **négy válaszos** kategória azonosítója marad – a tippelős tételt a kategória `tipg` mezője adja.
