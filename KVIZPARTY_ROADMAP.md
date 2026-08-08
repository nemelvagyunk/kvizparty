# KvízParty – játékmenet-fejlesztési terv

*Készült: 2026-08-08 · A jelenlegi `src/template.html` (43 KB) és `src/questions/part*.js` (1000 kérdés) alapján.*

---

## 0. Kiindulópont – mi van most, és mi hiányzik

A motor stabil és tiszta: host-autoritatív PeerJS-szoba, `question` → `progress` → `reveal` → `end` üzenetciklus, két kérdéstípus, AI-ellenfelek, nehézség szerinti pontozás.

Amit a jelenlegi játékmenet **nem** ad meg:

| Hiányzó élmény | Következmény |
|---|---|
| Nincs visszatérési esély | Aki a 4. kérdés után lemarad 300 ponttal, a maradék 11 kérdésen már csak „végigül”. |
| Nincs döntés a játékos kezében | A játékos egyetlen döntése a válasz maga. Nincs kockázat, nincs taktika. |
| Nincs lendület-érzet | Egy jó sorozatnak nincs mechanikai jutalma, csak a pontok összeadódnak. |
| Két kérdéstípus 15–50 kérdésen át | A ritmus monoton, főleg 30+ kérdéses meccsen. |
| A meccs vége „ellaposodik” | Az utolsó kérdés ugyanannyit ér, mint az első – nincs finálé-feszültség. |

A javaslatok ezekre a hiányokra épülnek, nem véletlenszerű ötletgyűjtemény.

---

## 1. Gyors nyeremények (fél–1 nap, nagy hatás)

### 1.1 Sorozat-bónusz (streak) 🔥

**Mit ad:** minden egymás utáni „nyert” kérdés növekvő szorzót ad, ami vizuálisan is látszik (lángikon a pontszám mellett). Így egy jó széria érezhetően fizet, és a lemaradó is tud egy szériával visszakapaszkodni.

**Javasolt paraméterek:**

```
STREAK_MULT = [1.00, 1.00, 1.10, 1.20, 1.35, 1.50]   // 1., 2., 3., 4., 5., 6+. találat
```

Tehát a 2. helyes válaszért még nincs bónusz (nem büntetjük az első hibázást), a 3.-tól nő. Max +50%, hogy ne szaladjon el.

**Implementáció:**

- A játékos-objektum kap egy `streak:0` mezőt. Ma **négy** helyen jön létre játékos (`createRoom`, `startSolo`, `setupHostConn` hello-ága, `hostAddAI`) – érdemes ezeket egy `newPlayer({...})` factoryba összehúzni, különben minden további játékos-mező négyszer lesz beírva.
- `finishQuestion()`-ben, ott ahol most `p.score+=pts`: előbb `p.streak = ok ? p.streak+1 : 0` (tipnél `isW ? … : 0`), majd `pts = Math.round(pts * STREAK_MULT[Math.min(p.streak-1, 5)])`.
- `playersMin()` visszaadja a `streak`-et, a `reveal` sorokban `🔥×3` jelzés, a `standings` chipeken pedig 3+ szériánál 🔥.
- `hostStart()` és `hostRematch()` nullázza (`p.streak=0`).

**Ráfordítás:** ~40 sor. **Kockázat:** minimális. **Teszt:** `test_solo.js`-be egy eset, ami a `window.__kv.host`-on át 3 találatot szimulál és ellenőrzi a szorzót.

---

### 1.2 Dupla pontos finálé 🎬

**Mit ad:** az utolsó 3 kérdés (vagy 20%) duplán számít. Ez egyetlen szorzó, de teljesen átírja a meccs végét: matematikailag életben tartja a 2–3. helyezettet, és mindenki figyel az utolsó körben.

**Implementáció:**

- `hostNext()`-ben: `host.finalRound = host.qi >= host.deck.length - 3;`
- A `question` üzenetbe `final:true`, a kliens ilyenkor egy `🎬 DUPLA PONT` szalagot húz a kérdés fölé (és a `#g-timerbar` arany).
- `finishQuestion()`-ben: `const V = QVAL[(q.d||3)-1] * (host.finalRound ? 2 : 1);`

**Ráfordítás:** ~20 sor. **Kockázat:** nincs. Lobby-kapcsolóként be/kikapcsolható (`settings.finale`).

---

### 1.3 Végi statisztikák 📊

**Mit ad:** a végeredmény képernyő ma csak a pontokat mutatja. A host már minden adatot ismer, csak nem használja fel: leggyorsabb válasz, leghosszabb sorozat, legtöbb telitalálat, „a leggyorsabb rossz válasz” (vicces díj).

**Implementáció:** `finishQuestion()`-ben egy `host.stats[pid]` akkumulátor (`fastestMs`, `bestStreak`, `exactHits`, `correctCount`), az `end` üzenetben `awards:[{icon,title,pid,value}]`, a `renderEnd()`-be egy díjátadó blokk a dobogó alá.

**Ráfordítás:** ~60 sor. **Kockázat:** nincs. **Hatás:** aránytalanul nagy – ez adja a „még egyet!” érzést.

---

## 2. Középtávú újdonságok (1–2 nap egyenként)

### 2.1 Jokerek / segítségek 🃏 — *ez a legerősebb egyedi javaslat*

Meccsenként **2 joker** játékosonként, szabadon beosztva. Ez adja meg a hiányzó játékosi döntést.

| Joker | Hatás | Mikor |
|---|---|---|
| **✂️ Felezés** | Két hibás opció eltűnik | csak MC |
| **🎲 Dupla vagy semmi** | Helyes válasz = 2× pont, hibás = a kérdésérték fele **levonva** | MC + tip |
| **⏱️ Ráadás** | +8 mp csak neked | mindkettő |

**Kritikus technikai részlet:** a kliens **nem ismeri** a helyes választ – a `question` üzenetben csak a megkevert `options` megy át, a `host.qCorrectIndex` a hostnál marad. Ezért a felezés **nem oldható meg kliensoldalon**, körbe kell mennie a hoston:

```
vendég → host:  {t:'joker', kind:'fifty', qi}
host  → vendég: {t:'jokerack', kind:'fifty', remove:[i,j]}     // privát, NEM broadcast
```

Ehhez kell egy új segédfüggvény a host mellé, mert most csak `hostBroadcast()` létezik:

```js
function sendTo(pid, msg){
  if(pid === me.pid) { handleMsg(msg); return; }      // a host saját maga
  try{ net.conns[pid].send(msg); }catch(e){}
}
```

A `setupHostConn` `conn.on('data')` switch-e kap egy `d.t==='joker'` ágat, ami ellenőrzi: `host.phase==='q'`, `d.qi===host.qi`, a játékosnak van még jokere, és ezt a fajtát nem használta ezen a kérdésen.

A **dupla vagy semmi** és a **ráadás** hostoldali állapot (`host.jokers[pid] = {left:2, thisQ:null}`), a pontozás a `finishQuestion()`-ben ágazik el. A ráadásnál a `host.qDeadlineT` globális határidőt is ki kell tolni (`dur + 8000 + 1500`), különben a host lezárja a kérdést, miközben a játékosnál még ketyeg az óra – ez a legkönnyebben elrontható pont.

Egy diszkrét joker-sáv kerül a válaszgombok alá (3 kis gomb, elhasználás után `opacity:.3` + pipa).

**Ráfordítás:** ~180 sor + CSS. **Kockázat:** közepes – új üzenettípus, új privát-küldés minta. Ezt a hálózati tesztben (`test_net.js`) külön ellenőrizni kell.

---

### 2.2 „Írd be a választ!” – merész mód ✍️

**Mit ad:** új kérdéstípus **a meglévő 600 MC-kérdésből, új adat nélkül** – mert az `o[0]` mindig a helyes válasz szövege.

**Hogyan működik:** a kérdés szövegmezővel indul (nincsenek opciók). Aki az első 8 másodpercben pontosan beírja: **+50% bónusz**. 8 mp után megjelenik a 4 opció, és onnantól sima MC, normál pontértékkel. Aki már beírt valamit, annak a válasza áll.

**Egyeztetés (fuzzy match):** ékezet- és kisbetű-normalizálás, névelők és zárójeles rész levágása, `Levenshtein ≤ 1` tolerancia 6 karakter fölött. Ez hostoldalon fut (`o[0]` csak ott van meg).

```js
function norm(s){
  return String(s).toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/\(.*?\)/g,'').replace(/^(a|az|the)\s+/,'')
    .replace(/[^a-z0-9]/g,'');
}
```

**Kockázat:** ez a legkockázatosabb javaslat – „Petőfi Sándor” vs. „Petőfi” vs. „Sándor Petőfi”. **Ezért javaslom lobby-kapcsolóval, alapból KI**, és csak azokra a kérdésekre engedni, ahol az `o[0]` rövid (≤ 20 karakter, ≤ 2 szó). Ez a 600-ból nagyjából a felét jelenti. Ha bejön a játéktesztnél, marad; ha nem, kikapcsolható anélkül, hogy bármit vissza kéne bontani.

**Ráfordítás:** ~120 sor. Az „első 8 mp” fázisváltás miatt a `renderQuestion()` időzítője kap egy köztes callbacket.

---

### 2.3 Kategóriaválasztás körönként 🎯

**Mit ad:** minden 5. kérdés előtt az **éppen utolsó helyen álló** játékos választ 3 felkínált kategória közül. Egyszerre ad döntést és beépített felzárkózási esélyt, és rákényszeríti a játékosokat, hogy figyeljék az állást.

**Implementáció:** új `phase:'pick'` a hoston, új üzenetpár (`{t:'pick', options:[3 kategória], chooser:pid}` → `{t:'picked', cat}`), 10 mp-es időzítő automata választással, ha nem dönt. A `buildDeck()` helyett a paklit lazábban kell kezelni: a választott kategóriából kell tudni húzni – vagy előre kategóriánként csoportosított maradék-poolt tartani.

**Ráfordítás:** ~150 sor, ez nyúl bele legjobban a meglévő állapotgépbe.

---

### 2.4 Csapatmód 👥

4 vagy 6 játékosnál 2 csapat (piros/kék). Egyéni pontok mennek a csapatkasszába, a `reveal` és a `standings` csapatbontásban mutat, a dobogó helyett csapateredmény. Lobbyban egy „Csapatok” kapcsoló + csapatválasztó chip minden játékosnál.

**Ráfordítás:** ~130 sor, alacsony kockázat (a pontozás nem változik, csak az összegzés és a megjelenítés).

---

## 3. Nagyobb falatok (2+ nap)

### 3.1 Kieséses párbaj-mód ⚔️

6 játékosnál: minden 4. kérdés után az utolsó helyezett kiesik és **nézővé válik** (látja a kérdést és az eredményt, de nem válaszol). A végén 2 fő marad → 3 kérdéses döntő, tripla pontokkal.

Ez a legnagyobb élményváltozás, de a legtöbb helyen nyúl bele: `finishQuestion` utáni kiesés-fázis, néző-állapot a rendereren (`spectator:true` a `playersMin()`-ben), `maybeAllAnswered()` már csak az aktívakat várja, kiesés-animáció, és a `hostRematch()` visszaállítás.

**Kockázat:** magas – a kiesett játékos kapcsolatát nyitva kell tartani, és a „kiesett, de még ott van” állapot több helyen külön ág. Csak azután javaslom, hogy az 1. és 2.1 blokk stabilan megy.

### 3.2 Fogadás / tét 💰

Tippelős kérdés előtt a játékos megteheti a pontjai 0/10/25%-át. Nyer → visszakapja duplán, veszít → elbukja. Matematikailag ez a legerősebb felzárkózás-mechanika, viszont könnyű vele „mindent vagy semmit” pörgetéssé silányítani a meccset. Csak akkor javaslom, ha az 1.1 + 1.2 után is kevésnek érzed a fordulatot.

---

## 4. Amit a fejlesztés előtt rendezni kell (technikai adósság)

Ezek nem feature-ök, de az első protokoll-változtatásnál fájni fognak:

1. **Protokoll-verzió.** Amint új üzenettípus (`joker`, `pick`) kerül be, egy régi böngészőfülből csatlakozó vendég némán furcsán fog viselkedni. Javaslat: `const PROTO = 2;` a `hello`-ban és a `lobby`-ban, eltérésnél barátságos üzenet: *„Frissítsd az oldalt (Ctrl+F5) – új verzió jött ki.”* **Ezt az 1.1 előtt érdemes betenni**, ~15 sor.

2. **A `#fast` teszt-hash mellé `#seed=` is kell.** A streak, joker és pontozási változásokat ma csak véletlenszerű paklival lehet tesztelni. Egy determinisztikus PRNG-vel (a `shuffle()` és az AI is ezt használná) a tesztek reprodukálhatók lesznek. ~30 sor, és minden további feature tesztelését olcsóbbá teszi.

3. **`localStorage` tiltva marad** (artifact-kompatibilitás) – tehát meccsek közti perzisztens statisztika, ranglista, „kedvenc kategória” nem opció. Ha valaha kell, URL-hash-be szerializált profil az egyetlen út.

4. **A `finishQuestion()` már most is hosszú, és minden javaslat ide nyúl.** Az 1.1 előtt érdemes kettébontani: `scoreMC(q,V)` + `scoreTip(q,V)`, amik `results` tömböt adnak vissza. Utána a streak, dupla finálé, joker és csapat mind tiszta beszúrás lesz benne. ~30 perc, és megspórol egy csomó összeakadást.

---

## 5. Javasolt sorrend

**1. sprint – „a meccs éljen”** (kb. 1 nap)
`4.1 protokoll-verzió` → `4.4 finishQuestion szétbontás` → `1.1 streak` → `1.2 dupla finálé` → `1.3 végi statok`
Ez az öt együtt sem kockázatos, viszont a meccsérzet már itt megváltozik. Egy buildben mehet.

**2. sprint – „legyen döntésem”** (kb. 1,5 nap)
`4.2 seed` → `2.1 jokerek` (mind a három) + `test_net.js` bővítés a joker-körre.

**3. sprint – választás szerint**
`2.3 kategóriaválasztás` (ha a változatosság hiányzik jobban) **vagy** `2.4 csapatmód` (ha gyakran játszotok 4–6-an) **vagy** `2.2 írd be a választ` (ha a nehézség hiányzik).

**Később:** `3.1 kieséses mód`, `3.2 fogadás`.

---

## 6. Minden körben ugyanaz a szállítási menet

1. Módosítás `src/template.html`-ben (a kérdésbázis érintetlen marad az 1–2. sprintben).
2. `npm install` (ha még nem volt) → `python3 src/build.py` → friss `index.html`.
3. `npm test` (`test_solo.js` + `test_diff.js`) és `npm run test:net` lokális PeerJS szerverrel.
4. **Backup** a változtatás előtti `template.html`-ről és `index.html`-ről (dátumozott másolat).
5. Elküldöm a fájlokat a chatben → Te bemásolod a `C:\SCRIPTS\sbch\kvizparty` mappába → GitHub Desktop commit + push.
6. `CLAUDE.md` frissítése az új szabályokkal/konstansokkal, hogy a következő menetben is pontos legyen a kontextus.

---

## 7. Nyitott kérdések hozzád

1. **Hány fővel játszotok jellemzően?** Ha 2–3, a csapatmód és a kieséses mód értelmetlen, és inkább a jokerekbe + kérdéstípusokba érdemes tenni. Ha 5–6, fordítva.
2. **Mobilról vagy gépről megy a többség?** A joker-sáv és a beíró mód mobilon szűkebb hely – tudni kell, melyikre optimalizáljak.
3. **A 20 mp / 25 mp jó ritmus?** Ha lassúnak érzitek, a streak bevezetésével együtt érdemes 15/20-ra húzni – a szorzó úgyis jutalmazza a gyorsaságot.
