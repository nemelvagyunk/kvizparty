# KvízParty – kategóriák (négy válaszos kérdések)

**23 kategória** · itt CSAK „1 a 4-ből” kérdések vannak (kérdés + 4 válasz).
A tippelős kérdéseknek saját listájuk van: lásd `tipp_kategoriak.md`.

> **Vezérelv: családi játék.** A kérdések a szülők generációjának is játszhatók legyenek.

**ÁLLAPOT (2026-08-08): a 23 kategóriás átállás a kódban MEGTÖRTÉNT** – az alábbi
„Meglévő” oszlop a tényleges, átsorolás utáni darabszám. A tippelős tételek már
feltöltve; ebből a táblából a „Írandó” oszlop a hátralévő mc-munka.

Célszám kategóriánként **40**, kivéve ahol a megjegyzés mást mond.

| # | Kategória | Meglévő | Cél | Írandó | Kihagyható | Megjegyzés |
|---|---|---|---|---|---|---|
| 1 | 🏰 Magyar történelem | 30 | 40 | +10 |  |  |
| 2 | 📜 Magyar irodalom | 30 | 40 | +10 |  |  |
| 3 | 🗺️ Magyarország földrajza | 30 | 40 | +10 |  |  |
| 4 | 🗣️ Magyar nyelv és szólások | 30 | 40 | +10 |  |  |
| 5 | 🎎 Magyar néphagyomány | 0 | 40 | +40 |  |  |
| 6 | 🌶️ Gasztronómia | 30 | 70 | +40 |  | 30 magyar + 40 nemzetközi |
| 7 | ⚔️ Világtörténelem | 30 | 40 | +10 |  |  |
| 8 | 🌍 Világföldrajz | 30 | 40 | +10 |  |  |
| 9 | 📖 Világirodalom | 13 | 40 | +27 |  |  |
| 10 | 🖼️ Képzőművészet | 15 | 40 | +25 |  |  |
| 11 | 🧠 Filozófia | 0 | 25 | +25 | ✅ | nehéz téma, szándékosan kisebb |
| 12 | 🦁 Állatok | 5 | 40 | +35 |  |  |
| 13 | 🌿 Növények és kertészet | 1 | 40 | +39 |  |  |
| 14 | ⚗️ Fizika, kémia, biológia | 25 | 40 | +15 |  |  |
| 15 | 💡 Feltalálók és találmányok | 34 | 40 | +6 |  | átsoroláskor ide került a Tesla-, metró-, Ford- és Bell-kérdés |
| 16 | 🚀 Űrkutatás és informatika | 25 | 40 | +15 | ✅ |  |
| 17 | 🎬 Magyar film, tévé és sorozatok | 59 | 40 | — |  | 1 Linda-duplikátum törölve |
| 18 | 🎸 Magyar könnyűzene | 29 | 40 | +11 |  |  |
| 19 | 🎻 Komolyzene | 3 | 25 | +22 | ✅ | nehéz téma, szándékosan kisebb |
| 20 | 🍿 Nemzetközi filmek | 22 | 40 | +18 |  | a 8 sorozat-kérdés törölve |
| 21 | 🎤 Nemzetközi popzene | 30 | 40 | +10 |  |  |
| 22 | 😂 Mémek és internetkultúra | 30 | 40 | +10 | ✅ |  |
| 23 | ⚽ Sport | 60 | 40 | — |  |  |

**Összesen:** 561 meglévő + 398 megírandó = 959 négy válaszos kérdés.

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
