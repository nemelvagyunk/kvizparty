# KvízParty – kategóriák (négy válaszos kérdések)

**23 kategória** · itt CSAK „1 a 4-ből” kérdések vannak (kérdés + 4 válasz).
A tippelős kérdéseknek saját listájuk van: lásd `tipp_kategoriak.md`.

> **Vezérelv: családi játék.** A kérdések a szülők generációjának is játszhatók legyenek.

**✅ KÉSZ (2026-08-08): az átállás ÉS a kérdésírás is megtörtént** – minden kategória
elérte a célszámát. A tábla a végleges állapotot rögzíti.

| # | Kategória | Kész | Cél | Kihagyható | Megjegyzés |
|---|---|---|---|---|---|
| 1 | 🏰 Magyar történelem | 40 | 40 |  |  |
| 2 | 📜 Magyar irodalom | 40 | 40 |  |  |
| 3 | 🗺️ Magyarország földrajza | 40 | 40 |  |  |
| 4 | 🗣️ Magyar nyelv és szólások | 40 | 40 |  |  |
| 5 | 🎎 Magyar néphagyomány | 40 | 40 |  |  |
| 6 | 🌶️ Gasztronómia | 70 | 70 |  | 30 magyar + 40 nemzetközi (vegyes: konyhák, ételek, alapanyagok) |
| 7 | ⚔️ Világtörténelem | 40 | 40 |  |  |
| 8 | 🌍 Világföldrajz | 40 | 40 |  |  |
| 9 | 📖 Világirodalom | 40 | 40 |  |  |
| 10 | 🖼️ Képzőművészet | 40 | 40 |  |  |
| 11 | 🧠 Filozófia | 25 | 25 | ✅ | nehéz téma, szándékosan kisebb |
| 12 | 🦁 Állatok | 40 | 40 |  |  |
| 13 | 🌿 Növények és kertészet | 40 | 40 |  |  |
| 14 | ⚗️ Fizika, kémia, biológia | 40 | 40 |  |  |
| 15 | 💡 Feltalálók és találmányok | 40 | 40 |  |  |
| 16 | 🚀 Űrkutatás és informatika | 40 | 40 | ✅ |  |
| 17 | 🎬 Magyar film, tévé és sorozatok | 59 | 40 |  | cél fölött, nem bővítendő |
| 18 | 🎸 Magyar könnyűzene | 40 | 40 |  |  |
| 19 | 🎻 Komolyzene | 25 | 25 | ✅ | fele magyar, fele nemzetközi |
| 20 | 🍿 Nemzetközi filmek | 40 | 40 |  |  |
| 21 | 🎤 Nemzetközi popzene | 40 | 40 |  |  |
| 22 | 😂 Mémek és internetkultúra | 40 | 40 | ✅ |  |
| 23 | ⚽ Sport | 60 | 40 |  | cél fölött, nem bővítendő |

**Összesen: 959 négy válaszos kérdés – a terv teljesítve (2026-08-08).**

## Kihagyható témák

A lobbyban csak ez a négy kategória kapcsolható ki (`opt:true` az adatfájlban):

🧠 Filozófia · 🚀 Űrkutatás és informatika · 🎻 Komolyzene · 😂 Mémek és internetkultúra

A szűrő **csak a négy válaszos kérdésekre hat** – a tippelős lista mindig teljes.

## Kérdésformátum

```js
{cat:12, type:'mc', d:3, q:"A kérdés szövege?",
 o:["helyes válasz","rossz 1","rossz 2","rossz 3"], c:0}
```
A helyes válasz **mindig az első opció** (`c:0`) – a játék futásidőben keveri.
`d` = nehézség 1–5, kategóriánként kb. **4 / 8 / 16 / 8 / 4** arányban (40 kérdésnél).
