# KvízParty – kategóriák (négy válaszos kérdések)

**23 kategória** · itt CSAK „1 a 4-ből” kérdések vannak (kérdés + 4 válasz).
A tippelős kérdéseknek saját, rövidebb listájuk van: lásd `tipp_kategoriak.md`.

> **Vezérelv: családi játék.** A kérdések a szülők generációjának is játszhatók legyenek.

| # | Kategória | Meglévő | Cél | Írandó | Kihagyható |
|---|---|---|---|---|---|
| 1 | 🏰 Magyar történelem | 30 | 50 | +20 |  |
| 2 | 📜 Magyar irodalom | 30 | 50 | +20 |  |
| 3 | 🗺️ Magyarország földrajza | 30 | 50 | +20 |  |
| 4 | 🗣️ Magyar nyelv és szólások | 30 | 50 | +20 |  |
| 5 | 🎎 Magyar néphagyomány | 0 | 50 | +50 |  |
| 6 | 🌶️ Gasztronómia | 30 | 90 | +60 |  |
| 7 | ⚔️ Világtörténelem | 30 | 50 | +20 |  |
| 8 | 🌍 Világföldrajz | 30 | 50 | +20 |  |
| 9 | 📖 Világirodalom | 13 | 50 | +37 |  |
| 10 | 🖼️ Képzőművészet | 15 | 50 | +35 |  |
| 11 | 🧠 Filozófia | 0 | 25 | +25 | ✅ |
| 12 | 🦁 Állatok | 5 | 50 | +45 |  |
| 13 | 🌿 Növények és kertészet | 1 | 50 | +49 |  |
| 14 | ⚗️ Fizika, kémia, biológia | 26 | 50 | +24 |  |
| 15 | 💡 Feltalálók és találmányok | 31 | 50 | +19 |  |
| 16 | 🚀 Űrkutatás és informatika | 27 | 50 | +23 | ✅ |
| 17 | 🎬 Magyar film, tévé és sorozatok | 60 | 50 | — |  |
| 18 | 🎸 Magyar könnyűzene | 29 | 50 | +21 |  |
| 19 | 🎻 Komolyzene | 3 | 25 | +22 | ✅ |
| 20 | 🍿 Nemzetközi filmek | 22 | 50 | +28 |  |
| 21 | 🎤 Nemzetközi popzene | 30 | 50 | +20 |  |
| 22 | 😂 Mémek és internetkultúra | 30 | 50 | +20 | ✅ |
| 23 | ⚽ Sport | 60 | 50 | — |  |

**Összesen:** 562 meglévő + 598 megírandó = 1160 négy válaszos kérdés.

## Kihagyható témák

A lobbyban csak ez a négy kategória kapcsolható ki, a többi mindig játékban van:

- 🧠 **Filozófia** – a legnehezebb téma a mezőnynek
- 🚀 **Űrkutatás és informatika** – erősen technikai
- 🎻 **Komolyzene** – nem mindenkinek megy
- 😂 **Mémek és internetkultúra** – az idősebb generációnak idegen

A kódban ez a kategória `opt:true` jelzője (adatfájl: `src/questions/part1_*.js`).
A szűrő **csak a négy válaszos kérdésekre hat** – a tippelős lista mindig teljes.

## Kérdésformátum

```js
{cat:12, type:'mc', d:3, q:"A kérdés szövege?",
 o:["helyes válasz","rossz 1","rossz 2","rossz 3"], c:0}
```
A helyes válasz **mindig az első opció** (`c:0`) – a játék futásidőben keveri. `d` = nehézség 1–5.
