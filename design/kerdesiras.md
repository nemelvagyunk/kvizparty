# KvízParty – hogyan írjunk jó kérdést

*A kérdésbázis minőségi mércéje. Minden új kérdésnek meg kell felelnie ennek, és
minden kérdésblokk után futnia kell a `npm run verify`-nak, ami ennek a gépesíthető
részét ellenőrzi.*

---

## 0. A vezérelv

**Egy kvízkérdés dolga, hogy szétválassza azt, aki tudja, attól, aki nem — kellemesen.**

Ebből minden más következik. A rossz kérdés vagy nem választ szét (mindenki tudja),
vagy rosszul választ szét (senki nem tudhatja, tehát a szerencse dönt).

Ez nálunk nem esztétikai kérdés, hanem **pontozási**: a nehézség közvetlenül pontot ér
(1★=75 … 5★=125). Egy 5★-os kérdés, amit senki nem tudhat, **125 pontot fizet a
szerencsének**, négyből egy eséllyel. Ez a legdrágább hiba, amit el lehet követni.

A második vezérelv a **családi játszhatóság**: a szülők (és a nagyszülők) generációja is
tudja játszani. Nem a témát puhítjuk, hanem a kérdéseket írjuk úgy, hogy több nemzedék
számára legyen fogása.

---

## 1. A kérdést a rossz válaszok írják

Négy válaszos formátumban a nehézség **majdnem teljes egészében a disztraktorokban
lakik**, nem a kérdés szövegében. Ugyanaz a kérdés lehet 1★ és 5★ is, pusztán attól,
mit teszel mellé.

> *„Ki írta Az eltűnt idő nyomában című regényfolyamot?"* ✓Marcel Proust | Anatole France | …
>
> Ugyanaz a kor, ugyanaz a nyelv, ugyanaz a rang → aki nem tudja, elbizonytalanodik.
> Ha Dickens és Tolsztoj állna ott, a kérdés ingyen lenne.

**A próba:** elbizonytalanodna-e egy pillanatra az, aki nagyjából otthon van a témában?
Ha nem, a disztraktor csak díszlet.

A legjobb disztraktor **az, amit az emberek tényleg összekevernek**: a gyakori tévhit,
a testvér-tény, az az adat, ami igaz — csak egy másik kérdésre válasz.

### A négy opció legyen egy halmaz

Azonos **kategória** (mind város / mind zeneszerző), azonos **kor**, azonos
**regiszter** (mind hivatalos név vagy mind köznyelvi), és **azonos hosszúság**.

### Hossz-árulkodás — a leggyakoribb rejtett hiba

Ha a helyes válasz feltűnően hosszabb, a játékos tudás nélkül is ráismer: a leghosszabb,
legárnyaltabb, legóvatosabban fogalmazott opció szokott a helyes lenni.

> ✘ *„Mit jelent, ha kenyértörésre kerül a sor?"*
> ✓Végleges szakításra, döntő összecsapásra kerül sor | Megegyezés születik | Kibékülnek | Szűkös időszak jön

**A javítás nem a helyes válasz rövidítése, hanem a rosszak feltöltése** azonos
hosszúságra és regiszterre. A Szólások és a Néphagyomány kategória a legfertőzöttebb.

*Gép is fogja:* `verify.js` szól, ha a helyes opció > 1,5× a disztraktorok átlaga.
Egészséges alapérték: a helyes válasz kb. **25%-ban** legyen a leghosszabb (ennyi a
véletlen).

---

## 2. Egy védhető válasz — a legokosabb játékossal szemben is

Nem elég, hogy a te válaszod jó. A próba: **tudna-e egy nálad tájékozottabb ember mást
választani, és igaza lenne-e?** Ha igen, a kérdés rossz — és a családi asztalnál épp az
fog vitatkozni, aki a legjobban tudja.

> ✘ *„Melyik állat hordja a házát a hátán?"* ✓A csiga | A teknős
>
> Szigorúan a csiga nyer (a teknős páncélja a bordáiból és csigolyáiból nőtt össze, tehát
> nem *hordja*, hanem az **a** háta) — de ezt csak összehasonlító anatómiával lehet
> megvédeni. **Amit két bekezdéssel kell megvédeni, az az asztalnál már elbukott.**
> Ráadásul 1★ volt: az a slot arra való, hogy mindenki rávágja és menjen a játék.
>
> ✔ Helyette: *„Melyik állat páncélja a saját bordáiból és csigolyáiból nőtt össze?"*
> ✓A teknősé | A csigáé | A rákoké | A tatuké — **a vitát magát tette kérdéssé**, és
> mind a négy opciónál más a páncél keletkezése, tehát tanít is.

### Két konkrét mérgezés-forrás

**Elévülő tények.** Tilos a „jelenleg / ma / aktuális / napjainkban". A megdönthető
**rekord-szuperlatívusz** ugyanilyen („a legtöbb trófeát nyerte", „a legnépesebb"):
vagy dátumhoz kötöd, vagy másképp kérdezed. Az állandó szuperlatívusz rendben van
(„a legmagasabb hegy", „a leghosszabb folyó").

**Konvenció-függő számok.** 600 vagy 650 izom? 33 vagy 26 csigolya? A Challenger-szakadék
10 924 vagy 10 994 m? Ahol több iskolakönyv több számot ír, ott a tippelős kérdés
igazságtalan — vagy kerüld, vagy tedd egyértelművé a kérdésben, melyik számítást kéred.

*Gép is fogja:* a „jelenleg" jellegű szavakat és a rekord-szuperlatívuszokat a
`verify.js` jelzi. A **második védhető választ nem** — az marad emberi átolvasás, és ez
a legfontosabb dolog, amit átolvasáskor keresni kell.

---

## 3. Ne áruld el a választ a kérdésben

Ezek az igazi öngólok: nulla megkülönböztető erő, tiszta sebességverseny.

> ✘ *„Hány púpja van a **kétpúpú** tevének?"* → 2
> ✘ *„Hány évig él az **egynyári** növény?"* → 1
> ✘ *„Hány versenyző ül egy kajak **négyes**ben?"* → 4

Van egy finomabb, alattomosabb változata is — **a segítőnek szánt mellékmondat**:

> ✘ *„Hogy nevezzük az anyag negyedik halmazállapotát, **amelyből a csillagok is
> állnak**?"* (5★-nak jelölve!) — a tagmondat, amit azért írtál oda, hogy segítsen,
> valójában odaadja a választ.

Ugyanez mc-nél: ha a helyes válasz egy szava szerepel a kérdésben, de egyik rossz
válaszban sem, az a szó egy nyíl a helyes megoldásra.

**És a kereszt-szivárgás:** egy kérdés szövege vagy `note`-ja **nem árulhatja el egy
másik ÉLŐ kérdés válaszát** — mindkét irányban. Ezt a `verify.js` külön szakaszban
figyeli (azonos témán belül tételesen).

---

## 4. A nehézség nem címke, hanem ígéret

A `d` mező pontot ér, tehát **a félrecímkézett nehézség pontozási hiba**. A helyes
kalibráció nem az, hogy „mennyire elvont", hanem hogy **hányan tudnák hatból az
asztalnál**:

| | kb. hányan tudják | mit jelent az asztalnál |
|---|---|---|
| **1★** (75 p) | ~90% | mindenki, a legfiatalabbat kivéve – rávágják, megy tovább a játék |
| **2★** (90 p) | ~70% | a felnőttek biztosan |
| **3★** (100 p) | ~50% | **a pakli szíve** – itt van a legtöbb móka |
| **4★** (110 p) | ~30% | ketten tudják, és egymásra néznek |
| **5★** (125 p) | ~10–15% | **egy** ember tudja – és ez az ő pillanata |

**Az 5★ nem azt jelenti, hogy senki nem tudja.** Ha senki nem tudhatja, az nem nehéz
kérdés, hanem érme-feldobás — a legdrágábban fizetett érme-feldobás a játékban.

A másik irányú hiba ugyanilyen gyakori: *„Ki írta a Bovarynét?"*, *„Mi az umami?"*,
*„Melyik kontinensről származik a paprika?"* mind 5★-ként került be, pedig reálisan
2–3★. Ezek csendben felpumpálják az olvasott ember pontszámát.

> **A kvóta ne írja felül a valóságot.** A kategóriánkénti 4/8/16/8/4 eloszlás cél,
> nem parancs: ha egy kérdés 3★, akkor 3★, akkor is, ha a táblázat 5★-ost kérne.
> ±1 csúszás bőven belefér.

---

## 5. A tippelős kérdés egészen más mesterség

**Egy jó tippelős kérdésnél senki nem tudja pontosan, de mindenki tud rá következtetni.**
Az élmény maga a gondolkodás: *„a Duna 2850 km, a Tisza rövidebb, mondjuk 950…"*

### A jó tipp-szám kétoldalról behatárolható

> ✔ *„Hány csont van egy felnőtt ember testében?"* — mindenki tudja, hogy nem 20 és nem
> 2000. Ebben a tartományban lehet okosan tippelni.

### Amit kerülni kell

**Horgonyzatlan nagy számok.** *„Mekkora Ausztrália területe?"* → 7 692 000 km².
*„Hány km/s a fény sebessége?"* → 299 792 (a tankönyvi 300 000-es tipp is „téved"!).
Itt a nyertes az, aki a nagyságrendet eltalálja, és a telitalálat +25%-a tiszta
véletlen. Két javítás:

- **váltsd az egységet:** „hány **millió** km²" → 8 körüli szám, amit becsülni lehet;
- **vagy kérdezz arányt:** „hányszor akkora, mint Magyarország?" — ez már
  kikövetkeztethető, és jobban is hangzik.

**Évszám-túlsúly.** Az évszám a leggyengébb tipptípus: nincs mit *kikövetkeztetni*,
vagy nagyjából tudod a korszakot, vagy nem. Tételenként **50% alatt** tartsuk az
évszámok arányát — a `verify.js` kiírja tételenként. (Írás idején: magyar történelem 90%,
világtörténelem 90%, feltalálók 80% ↔ állatok/növények/fizika 0%. Ez mindkét irányban
javítandó.)

**Konvenció-függő adat** – lásd a 2. pontot.

### A `note` nem díszítés

Minden tippelős kérdés végén ott a lehetőség, hogy **a vesztes is nyerjen valamit**:
egy „nahát!" tény. A családi asztalnál ez sokszor többet ér, mint maga a pont.
Üres `note` = kihagyott ziccer (a `verify.js` jelzi).

> ✔ *„Hány időzóna van Oroszországban?"* → 11
> `note:` „Amikor Kalinyingrádban reggeliznek, Kamcsatkán már éjszaka van."

### Formátum-csapda

Az **üres `unit` évszámot jelent** — a játék évként formázza. Ha nem évet kérdezel,
KÖTELEZŐ mértékegységet adni (`db`, `ország`, `méter`, `dobbanás`…). Ez a `verify.js`-ben
HIBA, nem figyelmeztetés.

---

## 6. Változtasd a *feladatot*, ne csak a témát

Ha minden kérdés ugyanúgy néz ki, a játék listaszerűvé válik, még ha minden egyes
kérdés hibátlan is. (Írás idején az mc-k 52%-a „Melyik", 25%-a „Ki" kezdetű, és
75 darab „Ki írta…".)

Ugyanabból a tudásból más **agyi művelet** kérhető:

| séma | példa |
|---|---|
| mű első sora / idézet → szerző | *„Melyik vers kezdősora: …?"* |
| szereplő → mű | *„Melyik regény főhőse Nyilas Misi?"* |
| időrend | *„Melyik történt korábban?"* |
| jelentés / eredet | *„Mit jelentett eredetileg a …?"* |
| párosítás | *„Melyik párosítás helyes?"* |
| leírás → név | *„Melyik városban …?"* |
| ok-okozat | *„Miért …?"* |

Tagadó kérdést (*„Melyik NEM …?"*) csak nagyon ritkán — időnyomás alatt könnyű
félreolvasni, és az asztalnál veszekedés lesz belőle.

---

## 7. Jó-e rajta veszíteni?

Ez a jó kérdés utolsó, legfontosabb próbája. Családi játékban, ha elrontod, akkor is
tanulj valamit, amit el akarsz mesélni. **Egy technikailag hibátlan kérdés, aminek unalmas
a helyes válasza, elpazarolt slot.** A négy opció közül a helyes legyen a legérdekesebb.

---

## 8. Az írás menete

1. **Előbb a válasz.** Mi az az érdekes tény, amit meg akarsz mutatni?
2. **Aztán a kérdés.** Rövid, egyértelmű, semmi felesleges mellékmondat (lásd 3. pont).
3. **Legvégül, leglassabban a disztraktorok.** Ez a munka dandárja.
4. **Nehézség** a 4. pont táblázata szerint — hatból hányan tudnák?
5. **Olvasd fel hangosan.** Ezt a játékot felolvassák.

### Ellenőrzőlista minden kérdéshez

- [ ] Elárulja-e a kérdés a saját válaszát? (összetett szó, magyarázó mellékmondat)
- [ ] Van-e **második védhető válasz**?
- [ ] Nem a helyes opció a leghosszabb?
- [ ] Egy halmazba tartozik a négy opció? Elbizonytalanodna a félig tudó?
- [ ] Igaz lesz-e öt év múlva is?
- [ ] Hatból hányan tudnák — egyezik ez a `d`-vel?
- [ ] Tippnél: van `note`? Jó az `unit`? Behatárolható a szám?
- [ ] Nem árulja el egy másik élő kérdés válaszát (a `note` sem)?
- [ ] **`npm run verify` lefutott, és nincs új hiba.**

---

## 9. Mit fog meg a gép, és mit nem

| | |
|---|---|
| ✅ **HIBA** (a build megáll) | formai hibák · duplikátum · alvó tipp · rossz `unit` |
| ⚠️ **figyelmeztetés** | hossz-árulkodás · válasz a kérdésben · elévülő szóhasználat · válasz-szivárgás · hiányzó `note` · horgonyzatlan nagy szám |
| 📊 **riport** | évszám-arány tételenként · kérdéskezdetek eloszlása · kvóták |
| 🧠 **CSAK ember** | **második védhető válasz** · a disztraktorok hihetősége · a nehézség valósághűsége · érdekes-e a válasz · jó-e rajta veszíteni |

A `--keys` kapcsolóval kiírhatók a figyelmeztetések kulcsai; amit **átnéztél és rendben
találtál**, azt emeld a `verify.js` `BASELINE` halmazába, hogy legközelebb csak az új
esetek látszódjanak. A baseline-ba kerülés feltétele, hogy **ember** nézte át.

---

## 10. Formátum-emlékeztető

```js
// négy válaszos – a HELYES VÁLASZ MINDIG AZ ELSŐ (c:0), a játék futásidőben kever
{cat:12, type:'mc', d:3, q:"Melyik állat páncélja a saját bordáiból és csigolyáiból nőtt össze?",
 o:["A teknősé","A csigáé","A rákoké","A tatuké"], c:0},

// tippelős – unit üres CSAK évszámnál; a note az eredményhirdetésnél jelenik meg
{cat:8, type:'tip', d:3, q:"Hány időzóna van Oroszországban?", a:11, unit:"időzóna",
 note:"Amikor Kalinyingrádban reggeliznek, Kamcsatkán már éjszaka van."},
```

Tippelős kérdést **csak `tip:true` kategóriába** szabad írni (a `CATEGORIES` tömb
`tip`/`tipg` mezői döntik el, melyik tételbe kerül) — máshová írva soha nem kerülne
sorsolásba, és a `verify.js` hibaként jelzi.
