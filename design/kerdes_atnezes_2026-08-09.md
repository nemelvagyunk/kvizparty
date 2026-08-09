# KvízParty – teljes kérdésbázis-átnézés

*2026-08-09 · mind az 1334 kérdés átnézve, kategóriánként egy-egy független lektorral, a `design/kerdesiras.md` mércéje szerint.*

## Összkép

| | |
|---|---|
| Átnézett kérdés | **1334** (23 kategória) |
| Találat összesen | **577** |
| ⛔ kritikus | **51** – hibás, vitatható vagy szerencsére fizető kérdés |
| ⚠️ fontos | **229** – rontja a játékélményt vagy a pontozást |
| · apró | **297** – csiszolás |

### Találatok típus szerint

| típus | db |
|---|---|
| Félrecímkézett nehézség | 163 |
| A kérdés elárulja a válaszát | 77 |
| Gyenge disztraktor / hossz-árulkodás | 70 |
| Ismétlés / sablon | 46 |
| Rossz tippelős kérdés | 42 |
| Második védhető válasz | 41 |
| Hiányzó note | 31 |
| Ténybeli hiba / vitatott adat | 25 |
| Javasolt ÚJ kérdés | 25 |
| Megfogalmazás | 20 |
| Érdektelen válasz | 19 |
| Elévülő tény | 18 |

### Kategóriánként

| kategória | kérdés | találat | a lektor összképe |
|---|---|---|---|
| Magyar történelem | 80 | 18 | Ténybelileg ez a kategória nagyon erős: a 40 „1 a 4-ből” és a 40 tippelős kérdés adatai gyakorlatilag hibátlanok, a disztraktorok többnyire azonos korból és azonos regiszterből valók, és sehol nincs hossz-árulkodás. Két gyengesége van. Az egyik a tippelős rész: 40-ből 36 évszámkérdés (90%), vagyis a tétel majdnem tisztán lexikális emlékezet-verseny, holott a mérce 50% alatti évszámarányt kér – pedig a magyar történelem tele van jól becsülhető mennyiségekkel (uralkodási évek, ostromok hossza, hódoltság évei). A másik a nehézség: a d-eloszlás gyanúsan pontosan a 4/8/16/8/4 kvótát adja ki mindkét típusban, és látszik, hogy néhány kérdés a kvóta kedvéért kapott magasabb csillagot (1956. október 23., a 13 aradi vértanú, Dózsa, a tatárjárás királya) – ezek az asztalnál 1–2★-os kérdések. Ezen felül a várostromok háromszor ugyanazzal a sablonnal jönnek, és néhány note vagy a kérdést ismétli, vagy egy másik élő kérdés válaszát adja oda. |
| Magyar irodalom | 40 | 15 | Ténybelileg a kategória szinte hibátlan: a szerző–mű párosítások helyesek, a disztraktorok korban és rangban jól illeszkednek (Abigél, Tóték, Fekete kolostor, Balassi-halál mind mintaszerű). A fő gyengeség a formai egyhangúság: 40 kérdésből 29 „Ki írta X-et?” sablon, ráadásul ugyanabból a szűk névkészletből (Petőfi/Arany/Vörösmarty/Kölcsey négy kérdésben ugyanaz a négyes), ezért a pakli listaszerű, és két helyen kizárásos szivárgás is lesz belőle. Emellett három valódi tartalmi hiba van: az Anonymus-kérdés 5★-ként elárulja önmagát, a Petőfi-szülőváros kérdésnek van védhető második válasza, a Nobel-díj kérdés pedig 2025 óta (Krasznahorkai László) elavult megfogalmazású. |
| Magyarország földrajza | 60 | 22 | Tényileg nagyon erős kategória: a 40 mc és a 20 tipp adatai lényegében mind pontosak (Kékes 1014, Galyatető 964, Badacsony 437, Tisza 597/962, Duna 417, Balaton 594 km²/77 km, Kőris-hegy 709, Kilenclyukú híd 167 m), a nehézség-eloszlás pontosan a 4/8/16/8/4 kvótát hozza, és évszám-tipp egyáltalán nincs. Két valódi kockázat van: a legalacsonyabb pont és a Rám-szakadék kérdésénél egy disztraktor is védhető válasz. A fő gyengeség a sablonosság (5× „Melyik vármegye székhelye X?”, 3× nemzeti park-kérdés, 6× „Hány méter magas…?”), plusz 7 üres note és egy note, amely elárulja a Badacsony-kérdés válaszát. |
| Magyar nyelv és szólások | 40 | 23 | A kategória ténybelileg megbízható (mind a 40 helyes válasza védhető, etimológiák és helyesírási esetek rendben), de erősen fertőzött a hossz-árulkodással: 13 kérdésnél a helyes opció 1,35×-nél hosszabb a disztraktorok átlagánál, hatnál kifejezetten kirívóan (1,85–2,74×) – ezeknél tudás nélkül is a leghosszabb, legárnyaltabb opciót kell bejelölni. Két valódi tartalmi gond van: a „Fejétől bűzlik a hal” egyik disztraktora is védhető válasz, a „kocsi”–Kocs kérdésnél pedig maga a szóalak árulja el a megoldást a semmitmondó városnevek között. Formailag monoton: 24 kérdés ugyanaz a „Mit jelent a szólás…?” séma négy definíció-opcióval, és négy majdnem azonos „Melyik írásmód helyes?” tétel is van; a d2-es közmondások (Ki korán kel, Lassan járj) valójában 1★-osak. |
| Magyar néphagyomány | 40 | 25 | A kategória ténybelileg megbízható, a témaválogatás családbarát és jól szórt (jeles napok, mesterségek, viselet, néphit, tánc). A fő baj – ahogy a mérce előre jelezte – a hossz-árulkodás: hét definíciós kérdésnél („Mi a …?”) a helyes válasz kétszer-négyszer hosszabb és árnyaltabb a disztraktoroknál, ezért tudás nélkül is kitalálható; ezekhez három-három azonos hosszúságú disztraktort javasoltam. Emellett három valódi kétértelműség (lucaszék napja, pünkösdi király próbái, András-napi öntés), egy kereszt-szivárgás (kopjafa-disztraktor elárulja a székelykapu-kérdést), egy magyarázó mellékmondat (kiszebáb) és három Luca-napi kérdés torlódása javítandó. |
| Gasztronómia | 70 | 31 | Erős, családbarát, jól olvasható kategória: a magyar blokk (halászlé, gulyás szóeredet, Jókai-bableves, juhfark, Gerbeaud–Kugler, székelykáposzta, Ínyesmester) kifejezetten jó, van rajta mit tanulni. Négy kérdés viszont egyáltalán nem gasztronómia (busójárás, halasi csipke, Zsolnay, matyó hímzés) – ezek a hungarikum-szó miatt kerültek ide, és a néphagyomány/képzőművészet kategóriákkal duplikátumot is kockáztatnak. A legsúlyosabb hibák: a hamburger-kérdés ország-helyett-ország+város szerkezete kitalált helynevekkel, és a kávé eredetére adott Etiópia/Jemen kettősség. Rendszerszintű gond a nehézség felfelé csúszása: a 3★-os sáv tele van 2★-os konyhai alapismerettel (tofu, szaké, rum, marcipán, tortilla, pesto, fondü, mangalica, makói hagyma), az 5★-osok közül pedig a vanília, a konyak és az umami valójában 3★. |
| Világtörténelem | 80 | 39 | Ténybelileg a kategória nagyon tiszta: mind a 40 mc és mind a 40 tipp válasza helytálló, a disztraktorok többnyire egy halmazba tartoznak, és második védhető válasz sehol nem áll fenn. Két rendszerszintű baj van. Egy: a nehézségek felfelé vannak tolva – tíz kérdés (köztük két 5★-os, az Enola Gay és a Kolumbuszt támogató uralkodópár) legalább egy csillaggal könnyebb a címkéjénél, ami közvetlen pontozási hiba. Kettő: a 40 tippből 36 évszám (90%), messze a mércében előírt 50% fölött – ezekben nincs mit kikövetkeztetni, ráadásul három évszám a saját mc-párja kérdésszövegéből vagy egy másik tipp note-jából kiolvasható. Alább 13 konkrét, nem-évszámos cserejavaslat szerepel, megoldással és note-tal együtt. |
| Világföldrajz | 61 | 26 | Szolid, tárgyi hibáktól mentes kategória: a 40 mc nehézség-eloszlása papíron pontosan a kvóta (4/8/16/8/4), a tippek évszám-aránya pedig kiváló (21-ből mindössze 1). A két fő gyengeség: (1) a nehézségek felfelé csúsztak – több közismert tétel (Velence, Húsvét-sziget, Machu Picchu, Gibraltár, Angel-vízesés) 3–5★-ként fizet, ami pontozási hiba; (2) a tippelős blokkban négy horgonyzatlan nagy szám (Ausztrália területe, Egyenlítő hossza, Kaszpi-tenger területe, Challenger-szakadék) és három üres/üresjáratú note van. Emellett a 40 mc-ből 6 azonos sablonú „Melyik ország fővárosa X?”, ami listaszerűvé teszi a kategóriát. |
| Világirodalom | 40 | 22 | Ténybelileg a kategória tiszta: mind a 40 kérdés helyes, a disztraktorok többsége azonos nyelvterületről és korból való, második védhető válasz sehol nincs. Két rendszerszintű baja van. Egyrészt a sablon: 40-ből 37 kérdés szó szerint „Ki írta X-et?” — ez a legmonotonabb kategória a bázisban, pedig a világirodalom kínálja a legtöbb idézetes, szereplős és helyszínes feladatot. Másrészt a nehézség felfelé csúszott: a Gyűrűk Ura, Homérosz, az 1984, A nyomorultak és Don Quijote 3★-ként, a Bovaryné, a Vörös és fekete és A rózsa neve pedig 5★-ként szerepel, pedig ezeket az asztal fele-háromnegyede rávágja — így a kategória csendben pontot ajándékoz. A d-értékek javítása után 4–5★-os slotokra új, valóban nehéz kérdéseket kell írni (nem a meglévőket visszaminősíteni). |
| Képzőművészet | 40 | 16 | Ténybelileg a kategória hibátlan: mind a 40 kérdés helyes válasza megáll, a disztraktorok többsége korban és rangban jól illeszkedő (a Michelangelo-vezetéknév és a chiaroscuro-kérdés kifejezetten mintaszerű). Két rendszerszintű gond van: (1) a feladat egyhangú – tízszer szerepel a „Ki festette X-et?” sablon, és további tíznél a „Melyik festő/mester…” leírás→név séma, tippelős kérdés pedig nincs (tip:false), így a kategória listaszerűvé válik; (2) a 3★-os blokk érezhetően könnyű (Guernica, Sikoly, Warhol-leveskonzerv, Frida Kahlo reálisan 2★), miközben a 4–5★ jól kalibrált – emiatt a középmezőny felpumpálja a pontokat. Ezenfelül négy olasz reneszánsz kérdés szinte ugyanabból a négy névből (Leonardo/Michelangelo/Raffaello/Botticelli) forog, két kérdésnél szó szerint azonos az opciólista. |
| Filozófia | 25 | 18 | A 25 kérdés ténybelileg szinte hibátlan, és a disztraktorok többsége mintaszerű (Prótagorasz a szofisták közt, Rousseau a francia felvilágosodásban) – de a kategória szinte kizárólag egyetlen feladattípust ismer: 21 kérdés „Ki írta / melyik filozófus” séma, ezért listaszerűvé válik. Egy kritikus hiba van: a sztoicizmus-kérdés (19. sor) a „lelki nyugalommal” definiál, ami épp az epikureizmus és a szkepticizmus célja is, tehát három védhető válasz áll egymás mellett. Emellett két hossz-árulkodó opciósor (carpe diem, Occam borotvája), egy pontatlan helyszín (Spinoza Amszterdamban) és négy felülárazott nehézség javítandó. |
| Állatok | 81 | 37 | A kategória tartalmilag erős és családbarát, tényhiba alig van benne, és a tippelős tétel dicséretesen 0%-ban évszám-alapú. A fő gond a nehézség-kalibráció: sok 3★-osnak jelölt mc valójában 1–2★ (kakukk, ló állva alszik, szarka, lazac), ez csendben pumpálja a pontszámokat. Emellett hat kérdés elárulja a saját válaszát (kétpúpú teve, csíkos bundájú tigris, ájtatoskodó imádkozó sáska, elektromos angolna, folyami ló – víziló), két tipp keresztbe elárulja egymást (pók/rovar lábszám), és négy tipp horgonyzatlan vagy konvenciófüggő számot kér. |
| Növények és kertészet | 80 | 31 | Tényileg erős, családbarát kategória: a botanikai állítások szinte mind helytállóak, a tippelős blokk pedig példásan kikövetkeztethető nagyságrendekkel dolgozik és majdnem mindenhol van értelmes note. Két rendszerszintű baj van: (1) a fogalom-magyarázó mc-k (bonsai, komposzt, mulcsozás, oltás, herbárium, hidropónia, pikírozás) mindegyikénél a helyes válasz feltűnően hosszabb a disztraktoroknál, tehát tudás nélkül is kitalálható, és ezek ráadásul rendre egy csillaggal túl vannak árazva; (2) négy kérdés a saját válaszát árulja el a szövegében (lenvászon→len, négylevelű→4, egynyári→1, évente→1 évgyűrű), ezek tiszta sebességverseny. Az 5★-os slotok külön figyelmet kérnek: a paprika-kérdés reálisan 3★, a mimóza-tipp pedig gyakorlatilag mindenkinek 1 másodperc. |
| Fizika, kémia, biológia | 80 | 28 | A kategória ténybelileg összességében szolid, az évszám-arány 0% (példaértékű), és a note-ok többsége valódi „nahát”-tényt ad. A legsúlyosabb baj a szisztematikus nehézség-infláció: a 3★–5★ sávban tucatnyi olyan iskolai alaptény ül (Fe vegyjele, ózonréteg, plazma, általános relativitáselmélet, mitokondrium, Mendel), amely reálisan 1–3★, vagyis a kategória csendben pontot oszt. Emellett egy kritikus ténybeli hiba (a szív „kamráinak” száma), több konvenció-függő tippszám (600 izom, 33 csigolya, 27 napos holdhónap, 60% víz, 8 l/perc légzés), egy horgonyzatlan nagy szám (fénysebesség) és négy közel azonos kérdéspár (Au/Ag, 0-neg/AB-poz, szén/oxigén proton, párolgás/szublimáció) rontja a képet. |
| Feltalálók és találmányok | 62 | 26 | A 40 „1 a 4-ből” kérdés ténybelileg erős, jól válogatott magyar–nemzetközi keverék, és a vitatott elsőbbségű témák (telefon, rádiótávíró, izzó) helyesen, „szabadalmaztatta / elsőként valósította meg” megfogalmazással vannak lehorgonyozva – itt csak nehézség-kalibrációs csúszások, két hossz-árulkodó opciósor és egy márkakérdés a gond. A 22 tippelős tétel a kategória gyenge pontja: 18 belőlük évszám (82%), köztük két üres note-tal, és a Kempelen-sakkautomata tipp éve tárgyi hibás. A kérdéskezdetek is egysíkúak: 14 mc kezdődik „Melyik magyar…” fordulattal. |
| Űrkutatás és informatika | 58 | 22 | Az űrkutatási fele erős: pontos, jól kalibrált, érdekes kérdések (Philae, Burán, Leonov, első SMS), tényhibát is alig találtam. Az informatikai fele gyengébb: több kérdés a nehézségénél könnyebb (d3-as slotban 1–2★-os tudás), két helyen a kérdés maga adja oda a választ (CPU = „központi feldolgozóegység”, Windows 95 → 1995), a HTML-kérdésnél a disztraktorok nem egy halmazba tartoznak, és van néhány avuló, cégállapotra épülő tétel (Bing, ChatGPT, Voyager-rekord). A tippelős tétel legnagyobb baja a 78%-os évszám-túlsúly (18-ból 14) és két üres note. |
| Magyar film, tévé és sorozatok | 98 | 32 | Erős, tárgyilag megbízható kategória: a filmes törzsanyag (Oscar-filmek, klasszikus rendezők, rajzfilmek, szinkronhangok) szinte hibátlan, a disztraktorok többsége valódi halmazt alkot. A fő gyengeség a sablonosodás: négy majdnem azonos „Melyik csatornán futott X?” kérdés (háromnak RTL Klub a válasza), három-három tétel ugyanarról a műsorról (A tanú, X-Faktor, Legyen Ön is milliomos), és a 39 tippből 25 évszámot kér (64%, a mérce 50% alatt tartaná). Két valóban sürgős hiba van: a Heti Hetes 2026-os visszatérése két tételt is elavulttá tett (Hajós András ma állandó szereplő; a „17 éven át futott” már nem igaz), és a jelen idejű Balázsék-kérdés is elévülő. Emellett öt tipp note-ja üres, és a nehézségek több helyen a generációs olló rossz oldalára esnek. |
| Magyar könnyűzene | 40 | 15 | Ténybelileg a kategória kifejezetten jó: mind a 40 kérdés helyes válasza megáll (a Majka–Ózd, a Paff/100 Folk Celsius, a Jég dupla whiskyvel/Charlie és a Skorpió/Frenreisz adatot külön ellenőriztem), és második védhető válasz sehol nem áll elő. A két valódi gyengeség formai: egy kereszt-szivárgás (a White Dove-kérdés kimondja, hogy a Gyöngyhajú lány az Omegáé, ami egy másik élő kérdés válasza) és a feladattípus egyhangúsága – 14 kérdés ugyanaz a „dal → előadó” művelet, ebből hatnak szó szerint azonos a kezdete. Emellett három helyen hossz-árulkodó a helyes opció, és a 3★-os sáv több tétele (Ha én rózsa volnék, Santa Maria, Hungária/Fenyő) a felnőtt asztalnál inkább 2★. A generációs olló erős: 35 kérdés az 1965–1990 közötti korszakból való, a mai fiatalabbaknak alig van fogása. |
| Komolyzene | 25 | 18 | A tényanyag lényegében rendben van: 25 kérdésből egyetlen komoly ténybeli pontatlanság akadt (a Magyar rapszódiák „zenekari sorozatként”), és a magyar/nemzetközi arány is tartja a 12/13-at. A fő gond nem a tudás, hanem a FORMA: 25-ből 18 kérdés ugyanaz a „ki komponálta / melyik zeneszerző” lexikonfeladat, ezért a kategória felolvasva listaszerű, és két kérdés maga adja oda a válaszát (a Kékszakállúnál a „vár” szó, a Peer Gyntnél a „norvég” jelző). Pontozásilag három kérdés van túlcímkézve — élen a Befejezetlen szimfóniával (5★, reálisan 3★) —, egy pedig kétértelmű: a „hangszerek királynője” címre a hegedű is védhető válasz. |
| Nemzetközi filmek | 54 | 31 | Ténybelileg szinte hibátlan kategória, de három rendszerszintű baja van: a 42 mc-ből 14 „Ki rendezte…" és 8 „Ki alakította…" kezdetű (52% két sablon), a nehézségek felfelé csúsztak (Indiana Jones, Rocky, Chaplin, Bud Spencer 3★-ként, pedig ~90%-os ismertségűek), a 14 tippből pedig 10 puszta bemutató-évszám (71%, a mérce 50% alatt kérné). Két kérdés elárulja a saját válaszát („jéggé"→Jégvarázs, „trilógiája"→3), a Casablanca-kérdés helyes opciója a zárójeles magyar névtől feltűnően hosszabb a többinél, két note pedig elévülő rekordállítást tartalmaz. A repertoár ~85%-ban angolszász: a francia/olasz jelenlét szórványos, spanyol, cseh, osztrák és latin-amerikai film egyáltalán nincs — a záró 5 pótlás ezt célozza. |
| Nemzetközi popzene | 40 | 17 | Ténybelileg a 40 kérdés rendben van, hibás állítást nem találtam; a disztraktorok többnyire azonos korból és műfajból valók, a klasszikus „Ki énekli / melyik együttes dala” séma viszont a kérdések ~80%-át adja, ami listaszerűvé teszi a paklit. A fő gond a nehézség-kalibráció (több 90%-os kérdés van 2–3★-on, miközben a friss popsztárok 1–2★-on a nagyszülő-generációnak megfoghatatlanok) és a földrajzi egyoldalúság: a 40-ből mindössze 5 nem angolszász előadó (ABBA, Rammstein, AC/DC, Bob Marley, Los del Río), pedig a magyar család fülének az olasz, francia, német és skandináv sláger legalább ennyire ismerős. Emellett a „pop királya” / „rock and roll királya” páros kölcsönösen elárulja egymást, és néhány apró magyar nyelvhelyességi csúszás is akad. |
| Mémek és internetkultúra | 40 | 40 | Tényszerűen ez a kategória szinte hibátlan (a Pumped Gabo–Balaton Sound 2015, a Gangnam Style-milliárd, a Tardar Sauce, a Kabosu és a Trollface/MS Paint mind ellenőrizve helyes), de a NEHÉZSÉG-kalibrációja rendszerszinten téves: a besorolás egy 20-30 éves netező szemszögéből készült, nem egy hatfős családi asztaléból. Legalább tizennégy kérdés angol nyelvű, kizárólag online szubkultúrában élő mémet vagy platform-történetet kér (Nyan Cat, Success Kid, TL;DR, FOMO, Leeroy Jenkins, Press F, Musical.ly, Grumpy Cat neve, Doge neve), ezek a szülők-nagyszülők előtt tiszta érmefeldobások – és 4-5★-on a legdrágábbak. Ezzel szemben hat kérdés (Twitter kék madara, troll, Pokémon GO, Zuckerberg/Harvard, Wikipédia-alapító, O-Zone) jóval könnyebb a címkéjénél, tehát csendben túlfizet. Két strukturális hiba is van: a Doge-pár egymás válaszát árulja el, a Keyboard Cat pedig a saját nevében hordozza a megoldást. |
| Sport | 100 | 25 | A 60 mc és 40 tipp ténybelileg szinte hibátlan – végignéztem az összes évszámot, éremszámot és nevet, és egyetlen valódi tárgyi tévedést sem találtam (a Papp László-súlycsoport, a tokiói 6 arany, a riói 8 arany, Kárpáti 6 aranya, Elek Ilona elsősége, Jim Hines sub-10-e mind stand). A gyenge pontok máshol vannak: két rekord-szuperlatívusz (BEK-trófeák, „minden idők legeredményesebbje”), egy tankönyvi önleleplező tipp („kajak négyes” → 4, ami a kérdésírási mérce saját rossz példája), két kereszt-szivárgás (Wembley és a rövidpályás gyorskorcsolya), öt üres note, és néhány alulcímkézett 2★ (Jordan, Federer, Wimbledon), ami valójában 1★. A tippelős blokk arányai jók: 30% évszám, minden szám kétoldalról behatárolható, horgonyzatlan nagy szám nincs. |

---

## ⛔ KRITIKUS (51)

### Magyar történelem

**part1_kat01-05.js:90** · `Második védhető válasz`  
> Hogyan nevezték Mátyás király világhírű budai könyvtárának köteteit?

- **Baj:** A „Kódexek” disztraktor védhető válasz: a Corvina-könyvtár kötetei szó szerint kódexek voltak, tehát a tájékozottabb játékos joggal választhatja azt, és vitatkozni fog.
- **Javaslat:** A „Kódexek” opciót cseréld olyanra, ami nem igaz rájuk: o:["Corvinák","Gesták","Breviáriumok","Antifonálék"] – így mind a négy könyvfajta-név, de csak egy illik Mátyás könyvtárára.


### Magyar irodalom

**part1_kat01-05.js:242** · `A kérdés elárulja a válaszát`  
> Milyen néven emlegetjük a Gesta Hungarorum ismeretlen szerz

- **Baj:** Az „ismeretlen szerzőjét” tagmondat szó szerint lefordítja a helyes választ (Anonymus = névtelen), ráadásul ez általános iskolai tananyag, tehát 5★-ként 125 pontot fizet egy 1–2★-os kérdésért.
- **Javaslat:** Fordítsuk meg a feladatot: q:"Anonymus saját bevallása szerint melyik magyar király jegyzője volt?", o:["III. Béla","Könyves Kálmán","IV. Béla","Szent László"], d:5 marad. Ha a mostani kérdés maradna, a d-t 2-re kell vinni.

**part1_kat01-05.js:206** · `Második védhető válasz`  
> Melyik városban született Petőfi Sándor?

- **Baj:** Kiskunfélegyháza védhető második válasz: Petőfi maga következetesen azt nevezte szülővárosának („szülőföldem szép határa”), és a két város régóta vitatja a címet – épp a legtájékozottabb családtag fog vitatkozni.
- **Javaslat:** Tegyük magát a vitát kérdéssé: q:"Melyik várost nevezte Petőfi Sándor a szülővárosának, noha az anyakönyv szerint máshol született?", o:["Kiskunfélegyháza","Kiskőrös","Szabadszállás","Kecskemét"], d:4. (Ha marad a mostani irány: "Az anyakönyvi bejegyzés szerint melyik városban született Petőfi Sándor?")


### Magyarország földrajza

**part1_kat01-05.js:319** · `Második védhető válasz`  
> Melyik település határában található Magyarország legalac

- **Baj:** A „Szeged” disztraktor védhető válasz: a klasszikus tankönyvi adat szerint az ország legmélyebb pontja (75,8 m) a Tisza gyálaréti szakaszán van, Gyálarét pedig Szeged városrésze. A tiszaszigeti Mélypont-emlékhely köztudottan nem a tényleges mélyponton áll, több forrás Gyálaréthez, más forrás Tiszasziget határához köti — ez forrásfüggő adat, ráadásul 5★-on 125 pontot fizet.
- **Javaslat:** Vedd ki a kérdést, vagy tedd egyértelművé a vitát: „Melyik alföldi folyó mentén található az ország legmélyebb pontja?” ✓Tisza \| Duna \| Körös \| Maros (d2), és a note mondja el, hogy a tiszaszigeti emlékmű nem a valódi mélyponton áll.


### Magyar nyelv és szólások

**part1_kat01-05.js:379** · `Második védhető válasz`  
> Mit jelent a közmondás: „Fejétől bűzlik a hal”?

- **Baj:** A 3. disztraktor („A hibát mindig ott keresd, ahol keletkezett”) lényegében a szólás egy másik, teljesen védhető megfogalmazása – az asztalnál épp az fog vitatkozni, aki érti a közmondást. Ráadásul a helyes opció így is a leghosszabb (1,38×).
- **Javaslat:** o:["A bajok forrása többnyire a vezetőknél keresendő","A rossz hír a fejekben kezd el terjedni","A romlott portéka a szagáról ismerszik meg","A tétlenség rontja meg leghamarabb az embert"]


### Magyar néphagyomány

**part1_kat01-05.js:496** · `Gyenge disztraktor / hossz-árulkodás`  
> Ki a táltos a magyar néphagyományban?

- **Baj:** Szélsőséges hossz-árulkodás: a helyes válasz 65 karakter, a három disztraktor 12–16 (»A király lovásza«, »A falu bírája«, »Vándorénekes«). Aki egy szót sem tud a táltosról, a leghosszabb opciót választja, és nyer 110 pontot.
- **Javaslat:** o:["Természetfeletti tudású ember, aki foggal vagy hat ujjal születik","A király lovásza, aki a ménest őrizte és a lovakat gyógyította","A falu bírája, akit évente a módos gazdák közül választottak","Vándorénekes, aki hősi énekeket adott elő a lakomákon"]

**part1_kat01-05.js:488** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a táncház?

- **Baj:** Hossz-árulkodás: helyes 61 karakter (»…ahol tanítják is a táncot«) a 15–26 karakteres disztraktorok mellett. A szó maga is ismerős, így a kérdés így 3★ helyett gyakorlatilag ingyen pont.
- **Javaslat:** o:["Népzenés-néptáncos mulatság, ahol tanítják is a táncot","Színpadi néptáncbemutató, ahol a közönség csak nézi","A falu fogadója, ahol vasárnaponként bálokat tartottak","Lakodalmas ház, ahová a fiatal pár a vendégeit hívja"]

**part1_kat01-05.js:466** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi volt a fonó a régi falusi életben?

- **Baj:** Hossz-árulkodás: helyes 60 karakter, a disztraktorok 15–22 („A takácsok céhháza”, „Vásári mulatság”). A helyes válasz ráadásul az egyetlen, amelyik körülír – ez maga a mércében leírt minta.
- **Javaslat:** o:["Közösségi munkaalkalom, ahol a lányok fontak és beszélgettek","A takácsok céhháza, ahol a mestervizsgát is letették","A kenderáztató gödör, ahol a szárat puhára áztatták","Vásári mulatóhely, ahol a legények télen mulatoztak"]

**part1_kat01-05.js:476** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a cifraszűr?

- **Baj:** Hossz-árulkodás: helyes 42 karakter, disztraktorok 15–21 („Díszes lószerszám”, „Hímzett falvédő”). Ugyanaz a mintázat, mint a fonónál.
- **Javaslat:** o:["A pásztorok díszesen hímzett gyapjúköpenye","A betyárok kivert rézveretes bőr fegyveröve","A lovak ünnepi, sallangos díszes szerszámzata","A tisztaszoba hímzett vászon falvédője"]

**part1_kat01-05.js:500** · `Gyenge disztraktor / hossz-árulkodás`  
> Milyen technikával készül a kékfestő vászon?

- **Baj:** Hossz-árulkodás: helyes 55 karakter (kétlépéses, „szakszerű” leírás), a három rossz 18–24 karakteres tőmondat. Egy 4★-os (110 pontos) kérdés így tudás nélkül is megnyerhető.
- **Javaslat:** o:["A mintát viasszal fedik, majd indigóval festik a vásznat","Kék fonalból szövik, és a mintát fehéren hagyják benne","Levendulavirág főzetében áztatják napokon át a vásznat","Kék agyagos földdel itatják át, majd a napon szárítják"]


### Gasztronómia

**part2_kat06-10.js:75** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik ország városáról kapta a nevét a hamburger?

- **Baj:** Szerkezeti hiba: a kérdés ORSZÁGOT kér, az opciók ország+város párok, és a disztraktor-városok kitaláltak vagy hamisak – „Hamburg am Inn” Ausztriában nem létezik, a dán „Hamborg” valójában maga Hamburg dán neve, az USA-beli claimant pedig Hamburg (New York), nem Ohio. A zárójeles betoldás megsúgja, mit keresünk, a valótlan helynevek pedig tévedést tanítanak.
- **Javaslat:** Kérdezz várost, egységes halmazzal: „Melyik város nevéből ered a hamburger elnevezése?” – „Hamburg” / „Frankfurt” / „Bréma” / „Lübeck”. Így a disztraktorok valódi, hihető német kikötővárosok (a frankfurti–hamburgi keveredés a tipikus tévhit).

**part2_kat06-10.js:127** · `Második védhető válasz`  
> Melyik országból származik a kávé?

- **Baj:** Második védhető válasz: a kávécserje Etiópiából származik, de a kávé mint ital (a pörkölés-főzés kultúrája és az első ültetvények) Jemenből terjedt el – és a Jemen ott van az opciók közt. A „származik” szó nem dönti el, melyiket kérdezzük, tehát a legtájékozottabb játékos veszíthet 110 pontot.
- **Javaslat:** Egyértelműsítsd a növényre: „Melyik ország hegyvidékén nő vadon a kávécserje őse?” – Etiópia / Jemen / Kenya / Kolumbia. (Vagy fordítva, az italra kérdezve, Jemen helyes válasszal.)


### Világtörténelem

**part2_kat06-10.js:234** · `A kérdés elárulja a válaszát`  
> Melyik évben tört ki az első világháború?

- **Baj:** A 160. sor mc-kérdése („Melyik városban gyilkolták meg Ferenc Ferdinánd trónörököst 1914-ben?”) kiírja az évszámot a kérdésszövegben. Aki azt a kérdést megkapta, ezt a tippet telitalálattal viszi – kereszt-szivárgás két ÉLŐ tétel között.
- **Javaslat:** Cseréld nem-évszámos tippre: {cat:7, type:'tip', d:3, q:"Hány hónapig tartott az első világháború leghosszabb csatája, a verduni?", a:10, unit:"hónap", note:"1916 februárjától decemberéig tartott; a katonák »húsdarálónak« nevezték."} — behatárolható (1 és 12 közé kell esnie), és a szám kikövetkeztethető.

**part2_kat06-10.js:230** · `A kérdés elárulja a válaszát`  
> Melyik évben ért véget a második világháború?

- **Baj:** A 216. sor mc-kérdése kimondja: „…az európai érdekszférákat 1945 februárjában”. A háború vége nyilvánvalóan nem lehet korábban, tehát az 1945 gyakorlatilag ott van a másik kérdésben. Ráadásul a 231. sor (kitörés, 1939) és ez a tétel párban, ugyanabból a tudásból él.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:3, q:"Hány ország csatlakozott végül valamelyik oldalon a második világháborúhoz?" — ha ez bizonytalan, biztosabb: {cat:7, type:'tip', d:4, q:"Hány napig tartott a berlini ostrom 1945 tavaszán?", a:16, unit:"nap", note:"Április 16-án indult a szovjet offenzíva, május 2-án adta meg magát a város."}

**part2_kat06-10.js:257** · `A kérdés elárulja a válaszát`  
> Valójában hány évig tartott a „százéves háború”?

- **Baj:** A note („1337–1453”) szó szerint kiírja a 242. sor tippjének megoldását (Konstantinápoly eleste, 1453). Ez a mérce 3. pontjának kereszt-szivárgás-tilalmába ütközik, és a note ráadásul nem is „nahát”-tény, csak két évszám.
- **Javaslat:** Maga a kérdés jó (nem évszám, van mit gondolkodni rajta) – csak a note-ot írd át: note:"A név csal: valójában több szakaszban vívták, hosszú fegyverszünetekkel megszakítva, és a végén már ágyúkkal."


### Világföldrajz

**part2_kat06-10.js:364** · `Rossz tippelős kérdés`  
> Mekkora Ausztrália területe?

- **Baj:** Tankönyvi példa a horgonyzatlan nagy számra (7 692 000 km²): a nyertes az, aki a nagyságrendet eltalálja, a telitalálat +25%-a tiszta szerencse. A kerdesiras.md kifejezetten ezt a kérdést hozza ellenpéldának.
- **Javaslat:** Írd át arányra: q:"Hányszor akkora Ausztrália területe, mint Magyarországé?", a:83, unit:"-szor", note:"Magyarország 93 ezer km², Ausztrália 7,7 millió km² – vagyis Ausztráliába 83 Magyarország férne bele." (Ha egység-váltás kell: „Hány millió km² Ausztrália területe?” a:8 – de az arány jobban szétválaszt.)

**part2_kat06-10.js:360** · `Rossz tippelős kérdés`  
> Hány kilométer hosszú az Egyenlítő?

- **Baj:** Horgonyzatlan ötjegyű szám: aki tudja, 40 000-et ír, és a 40 075-ös telitalálat véletlen. Ráadásul a note („kb. 40 075 km”) csak megismétli a megoldást, nem ad hozzá semmit.
- **Javaslat:** q:"Hány óra alatt érne körbe az Egyenlítő mentén egy óránként 1000 kilométert repülő gép?", a:40, unit:"óra", note:"Az Egyenlítő 40 075 km hosszú – egy utasszállító sebességével bő másfél nap volna a kör."

**part2_kat06-10.js:370** · `Rossz tippelős kérdés`  
> Mekkora a Kaszpi-tenger területe?

- **Baj:** 371 000 km² – hatjegyű, kikövetkeztethetetlen szám; a tippelők a 100 000 és az 1 000 000 között lövöldöznek. (A tó területe ráadásul mérhetően csökken, tehát elévülő adat is.)
- **Javaslat:** q:"Hányszor akkora a Kaszpi-tenger területe, mint Magyarországé?", a:4, unit:"-szer", note:"A Föld legnagyobb tava – négy Magyarország férne el a víztükrén, ezért is hívják tengernek."

**part2_kat06-10.js:368** · `Ténybeli hiba / vitatott adat`  
> Hány méter mély az óceánok legmélyebb pontja, a Mariana-á

- **Baj:** Konvenció-függő adat: a mérések 10 924 és 10 994 m között szórnak, a tankönyvek 10 911-et, 10 924-et és 10 994-et is írnak. A 10 935-ös érték egyik iskolakönyvi számmal sem esik egybe, tehát a telitalálat gyakorlatilag lehetetlen, a győzelem pedig azon múlik, ki melyik forrást tanulta.
- **Javaslat:** Kerekíts kilométerre, és mondd ki a kérdésben: q:"Kerekítve hány kilométer mély az óceánok legmélyebb pontja, a Challenger-szakadék?", a:11, unit:"km", note:"A mérések 10 900 és 11 000 méter közé esnek – az Everest fejjel lefelé is elférne benne, és még maradna fölötte két kilométer víz."


### Világirodalom

**part2_kat06-10.js:451** · `Félrecímkézett nehézség`  
> Ki írta a Bovaryné című regényt?

- **Baj:** 5★ (125 pont), pedig a Bovaryné–Flaubert páros kötelező érettségi anyag: hatfős családi asztalnál reálisan 50-60% tudja, nem 10-15%. A kérdésírási útmutató (4. pont) NÉV SZERINT ezt a kérdést hozza fel elrettentő példaként a félrecímkézett nehézségre.
- **Javaslat:** d:3. Ha marad 5★-os slot igénye, helyette új kérdés: {d:5, q:"Melyik regényét védte perben a szerzője azzal, hogy a mű éppen a hősnő bukását ábrázolja?"} helyett inkább szereplő-alapú nehéz kérdés: q:"Melyik regény hősnője Emma, a normandiai falusi orvos ábrándozó felesége?", o:["A Bovaryné","Az Érzelmek iskolája","A Goriot apó","A Germinal"], d:4.

**part2_kat06-10.js:453** · `Félrecímkézett nehézség`  
> Ki írta a Vörös és fekete című regényt?

- **Baj:** 5★, pedig szintén tananyag-klasszikus (az útmutató 4. pontja ezt is nevesíti). Ráadásul a négy opció regisztere kevert: két vezetéknév (Balzac, Flaubert), egy írói álnév (Stendhal) és egy teljes név (Victor Hugo) — a kilógó teljes név elterelő helyett zaj.
- **Javaslat:** d:3, és egységes vezetéknév-regiszter: o:["Stendhal","Balzac","Flaubert","Maupassant"]. Nehezebb változatnak: q:"Melyik regény főhőse Julien Sorel, a papnak készülő, Napóleonért rajongó ácsfiú?", o:["A Vörös és fekete","A Goriot apó","Az Érzelmek iskolája","A Bel-Ami"], d:4.


### Filozófia

**part3_kat11-15.js:19** · `Második védhető válasz`  
> Hogy hívják az ókori irányzatot, amely a lelki nyugalmat és

- **Baj:** A „lelki nyugalom” (ataraxia) épp az EPIKUREIZMUS és a SZKEPTICIZMUS központi célja is – a sztoikus fogalom az apatheia. Négyből három opció védhető: a szofisztikáltabb játékos jogosan választ epikureizmust vagy szkepticizmust, és igaza is lesz. A leggyakoribb tankönyvi leegyszerűsítés, itt viszont pontozási hiba.
- **Javaslat:** A vitatott jegy helyett a sztoa sajátját kérdezd: q:"Melyik ókori irányzat szerint az erény az egyetlen igazi jó, és minden más közömbös?", o:["Sztoicizmus","Epikureizmus","Szkepticizmus","Cinizmus"], d:2 – így egyetlen védhető válasz marad.


### Állatok

**part3_kat11-15.js:136** · `Második védhető válasz`  
> Melyik tengeri élőlény képes életciklusát „visszafordítva” gyak

- **Baj:** Fajszintű kérdésre kategóriaszintű a válasz: mind a négy opció „Egy …faj” formájú, tehát semmit nem tud eldönteni az, aki tudja a választ. Ráadásul a regeneráció/megfiatalodás más csoportokban is védhető (tengeri csillag, korallpolip klonálisan gyakorlatilag halhatatlan) – 5★-ként 125 pontot fizet a szerencsének.
- **Javaslat:** Nevesítsd a fajt: q="Melyik tengeri állatot nevezik a halhatatlan medúzának, mert felnőtt korából vissza tud fejlődni polipállapotba?", o:["A Turritopsis dohrnii","A füles medúza","A tűzmedúza","A csalánvirág"], d:4. Így egy konkrét, ellenőrizhető válasz van.

**part3_kat11-15.js:78** · `Második védhető válasz`  
> Melyik zsinóros bundájú magyar pásztorkutya őrizte a nyájat a f

- **Baj:** A puli szintén zsinóros (bozontos, gubancolt) bundájú magyar pásztorkutya, és épp az fog vitatkozni az asztalnál, aki a legjobban ismeri a fajtákat. Csak a „nyájat őrizte a farkasoktól” fél tagmondat választja el – ez kevés.
- **Javaslat:** Emeld ki a méretet, ami egyértelműen elválaszt: q="Melyik nagy testű, fehér zsinóros bundájú magyar kutya őrizte a nyájat, míg a nála jóval kisebb puli terelte?" – vagy fordítsd meg: "Melyik apró, fekete zsinóros bundájú magyar kutya terelte a nyájat?" ✓A puli.

**part3_kat11-15.js:143** · `A kérdés elárulja a válaszát`  
> Hány púpja van a kétpúpú tevének?

- **Baj:** A kérdés szó szerint tartalmazza a választ – nulla megkülönböztető erő, tiszta sebességverseny. A kérdésírási útmutató is ezt hozza elrettentő példaként.
- **Javaslat:** Cseréld: q="Hány napig bírja ki ivás nélkül a teve a sivatagban?", a:14, unit:"nap", note:"Egyszerre akár 100 liter vizet is meg tud inni néhány perc alatt." (d:3)

**part3_kat11-15.js:141** · `Ismétlés / sablon`  
> Hány lába van a póknak?

- **Baj:** Ez a kérdés és a következő (line 142, rovarok lába) kölcsönösen elárulja egymást: a pók note-ja kimondja, hogy a rovaroknak hat lábuk van, a rovar note-ja pedig, hogy a pókoknak nyolc. Egy meccsen belül a második már ingyen pont.
- **Javaslat:** Tartsd meg a pókot, és cseréld a rovarost: q="Hány testtájra tagolódik a rovarok teste?", a:3, unit:"db", note:"Fej, tor és potroh – a pókoknál viszont a fej és a tor összenőtt." (d:2). A pók note-jából vedd ki a rovar-lábszámot: "A nyolc láb minden pókféle közös ismertetőjegye."


### Növények és kertészet

**part3_kat11-15.js:200** · `A kérdés elárulja a válaszát`  
> Melyik növény rostjából szövik a vásznat és a lenvászna

- **Baj:** A kérdés szövegében szereplő „lenvászon” szó betűre kimondja a helyes választ („A len”), a három disztraktor (gyapot, kender, juta) egyikéhez sem kapcsolódik. Nulla megkülönböztető erő, 2★-ként fizetve.
- **Javaslat:** Vedd ki a szivárgó szót: „Melyik növény szárának rostjából szövik a vásznat?” — az opciók maradhatnak (len / gyapot / kender / juta), a gyapot így valódi csapda lesz, mert az magrost, nem szárrost.

**part3_kat11-15.js:265** · `A kérdés elárulja a válaszát`  
> Hány levélkéből áll a szerencsét hozó négylevelű lóhere?

- **Baj:** A kérdésben ott a „négylevelű” számnév-összetétel, a válasz 4. A kerdesiras.md 3. pontja pont ezt a hibatípust nevezi meg öngólként.
- **Javaslat:** Teljes csere ugyanebbe a d1 slotba: q: „Hány szem búza érik egy átlagos búzakalászban?”, a: 35, unit: „szem”, note: „Egy kalászban 30–50 szem is beérik – ezért ad egyetlen tő is maroknyi lisztet.” Behatárolható, és a note tanít.

**part3_kat11-15.js:266** · `A kérdés elárulja a válaszát`  
> Hány évig él az egynyári növény?

- **Baj:** Az „egynyári” szó maga a válasz (1). A kerdesiras.md nevesítve is felhozza ezt a kérdést rossz példaként.
- **Javaslat:** Teljes csere: q: „Hány napig marad friss a vázába tett vágott tulipán?”, a: 7, unit: „nap”, note: „Hideg vízben, hűvös helyen akár tíz napig is bírja – és a szára közben tovább nő a vázában.” Marad a d1 szint és a kertészeti hangulat.

**part3_kat11-15.js:276** · `A kérdés elárulja a válaszát`  
> Hány évgyűrűt növeszt a fa törzse évente?

- **Baj:** Az „évgyűrű” + „évente” páros kimondja az 1-es választ; a note már csak megerősíti. A kerdesiras.md szintén nevesíti.
- **Javaslat:** Teljes csere azonos d2 szinten: q: „Hány liter nedvet ad naponta egy megcsapolt, kifejlett nyírfa tavasszal?”, a: 70, unit: „liter”, note: „A rügyfakadás előtti pár hétben szivattyúzza fel a vizet a koronába – ezért olyan bőséges a nyírvíz.”


### Fizika, kémia, biológia

**part3_kat11-15.js:399** · `Ténybeli hiba / vitatott adat`  
> Hány kamrája van az emberi szívnek?

- **Baj:** A megoldás 4, de az emberi szívnek 2 kamrája (ventriculus) van – a note maga cáfolja a választ: „Két pitvar és két kamra”. Aki ténylegesen tudja az anatómiát, 2-t tippel és veszít.
- **Javaslat:** Kérdés: „Hány üregre oszlik az emberi szív?” a:4, note: „Két pitvar és két kamra – a bal kamra fala a legvastagabb, ez hajtja a nagyvérkört.” (Vagy maradjon a „kamra” szó és a:2 legyen.)

**part3_kat11-15.js:386** · `A kérdés elárulja a válaszát`  
> Hogy nevezzük az anyag negyedik halmazállapotát, amelybő

- **Baj:** A segítőnek szánt mellékmondat („amelyből a csillagok is állnak”) odaadja a választ, ráadásul 5★-ként, 125 pontért. A plazma önmagában is közismert, reálisan 2★.
- **Javaslat:** q: „Hogy nevezzük az anyag negyedik halmazállapotát?”, d:2. Ha 4★-os slot kell, kérdezd másképp: „Melyik halmazállapotban van a Föld légkörének az a rétege, ahol a sarki fény keletkezik?” → Plazma.


### Feltalálók és találmányok

**part3_kat11-15.js:525** · `Ténybeli hiba / vitatott adat`  
> Melyik évben mutatta be Kempelen Farkas a sakkozó törököt…

- **Baj:** Kempelen 1769-ben ÉPÍTETTE meg a sakkautomatát, de az első nyilvános bemutató 1770-ben volt Mária Terézia udvarában (Schönbrunn). A kérdés „mutatta be” igéje mellé tehát az 1770 a helyes válasz; a tipp jelenleg azt bünteti, aki pontosan tudja.
- **Javaslat:** Vagy az évszámot javítsd: a:1770 · vagy az igét: q:"Melyik évben építette meg Kempelen Farkas a sakkozó törököt, a világhírű sakkautomatát?", a:1769. Az elsőt javaslom, mert a note is a bemutatóról szól: note:"Mária Terézia udvarában mutatta be; valójában egy elrejtett ember irányította."

**part3_kat11-15.js:514** · `A kérdés elárulja a válaszát`  
> Hány kis négyzet látható a klasszikus, 3×3-as Rubik-kocka e…

- **Baj:** A kérdés szó szerint tartalmazza a választ: „3×3-as” → 9. Nulla megkülönböztető erő, tiszta sebességverseny; ráadásul a note is megismétli („Egy oldalon 3×3-as elrendezésben”).
- **Javaslat:** Töröld, és tedd a helyére: {cat:15,type:'tip',d:2,q:"Hány színes matrica (négyzetlap) van összesen egy klasszikus Rubik-kockán?",a:54,unit:"db",note:"Hat oldal, oldalanként kilenc lapocska – Rubik Ernő eredetileg térbeli szerkezeti modellnek szánta."}


### Űrkutatás és informatika

**part4_kat16-19.js:87** · `A kérdés elárulja a válaszát`  
> Melyik évben jelent meg a Windows 95 operációs rendszer?

- **Baj:** A kérdés szó szerint tartalmazza a választ: „Windows 95” → 1995. A note ezt ki is mondja („A nevében is szereplő évben”). Nulla megkülönböztető erő, tiszta sebességverseny, ráadásul egy tippelős slotot éget el.
- **Javaslat:** Cseréld le nem-évszámos, becsülhető tippre, pl. „Hány hüvelykes (colos) volt a Windows 95 korában elterjedt floppylemez?” helyett inkább: „Hány megabájt memóriát (RAM) igényelt minimum a Windows 95?” a:4, unit:"MB", note:"Ma egyetlen böngészőfül is ennek a sokszorosát használja." Ha évszám maradna, akkor legalább: „Melyik évben jelent meg a Microsoft első Start menüs operációs rendszere?”


### Magyar film, tévé és sorozatok

**part4_kat16-19.js:129** · `Második védhető válasz`  
> Az alábbiak közül ki volt a Heti Hetes állandó szereplője?

- **Baj:** A megújult Heti Hetes 2026-ban tért vissza az RTL-re, és Hajós András az egyik bejelentett ÁLLANDÓ szereplője. A 3. disztraktor tehát ma ugyanolyan védhető válasz, mint Gálvölgyi János – ráadásul a fiatalabb generáció épp őt fogja beírni.
- **Javaslat:** Cseréld a disztraktort és kösd korszakhoz: „Ki volt a Heti Hetes egyik állandó szereplője az 1999-ben indult első felállásban?” o:[„Gálvölgyi János”,„Fábry Sándor”,„Koltai Róbert”,„Bodrogi Gyula”].

**part4_kat16-19.js:258** · `Elévülő tény`  
> Hány éven át volt képernyőn a Heti Hetes?

- **Baj:** A note (1999–2016) alapján a:17, de a műsor 2026-ban visszatért az RTL-re, tehát az állítás már nem igaz, és minden újabb évaddal tovább romlik.
- **Javaslat:** Horgonyozd az első futáshoz: q:„Hány éven át ment megszakítás nélkül a Heti Hetes első, 1999-ben indult korszaka?” a:17, unit:„év”, note:„1999-től 2016-ig ment folyamatosan; a műsort évekkel később újraindították.”

**part4_kat16-19.js:131** · `Elévülő tény`  
> Melyik rádióban fut a Balázsék című reggeli műsor 2016 óta?

- **Baj:** Jelen idejű állítás egy futó műsorról („fut … 2016 óta”) – pontosan a mérce által tiltott elévülő megfogalmazás. Ha a műsor csatornát vált vagy megszűnik, a kérdés némán hibássá válik.
- **Javaslat:** Múlt időbe és eseményhez kötve: „Melyik rádióhoz szerződött 2016-ban Sebestyén Balázs reggeli csapata?” o:[„Rádió 1”,„Class FM”,„Petőfi Rádió”,„Music FM”].


### Magyar könnyűzene

**part4_kat16-19.js:340** · `A kérdés elárulja a válaszát`  
> Melyik világhírű együttes dolgozta fel „White Dove” címmel az Om

- **Baj:** A kérdés szövege kimondja, hogy a „Gyöngyhajú lány” az Omega dala – ez pontosan a 272. sor kérdésének („Melyik együttes slágere a Gyöngyhajú lány?”) a válasza. Kereszt-szivárgás azonos kategórián belül: aki ezt a kérdést kapja előbb, ingyen kapja a másikat.
- **Javaslat:** Vedd ki az előadót a kérdésből: „Melyik világhírű együttes dolgozta fel »White Dove« címmel a »Gyöngyhajú lány« című magyar slágert?” Az opciók (Scorpions / Deep Purple / Uriah Heep / Nazareth) maradhatnak.


### Komolyzene

**part4_kat16-19.js:353** · `Második védhető válasz`  
> Melyik hangszert nevezik a „hangszerek királynőjének”?

- **Baj:** A magyar köznyelvben a hegedűt is rendszeresen nevezik „a hangszerek királynőjének”; Mozart eredeti mondása az orgonára a hangszerek KIRÁLYA (király, nem királynő). Egy zenében jártas családtag jogosan mondhatja a hegedűt, és igaza is lenne — ez a legrosszabb hibatípus egy 1★-os, mindenki-rávágja sloton.
- **Javaslat:** Írd át egyértelműre: q:"Melyik hangszert nevezte Mozart a hangszerek királyának?" o:["Az orgonát","A hegedűt","A zongorát","A hárfát"] — vagy még jobb, cseréld tényszerű kérdésre: "Melyik hangszert szólaltatja meg pedálsorral is a játékos?" o:["Az orgonát","A csembalót","A hárfát","A harmóniumot"].

**part4_kat16-19.js:369** · `A kérdés elárulja a válaszát`  
> Melyik Bartók-opera játszódik egy titokzatos vár hét ajtaja körül?

- **Baj:** Kettős öngól: (1) a kérdésben szereplő „vár” szó szó szerint benne van a helyes válaszban („A kékszakállú herceg vára”), egyik disztraktorban sem; (2) Bartóknak EGYETLEN operája van, és a három disztraktor közül egyik sem opera (a Fából faragott királyfi balett, A csodálatos mandarin pantomim, Az este a székelyeknél zongoradarab) — aki tudja a műfajokat, tudás nélkül is kizárja őket. A d:3 is túl magas, a Kékszakállú a legismertebb Bartók-színpadi mű.
- **Javaslat:** d:2, és se a „vár”, se a „Bartók-opera” ne legyen a kérdésben: q:"Melyik magyar opera hőse hét ajtót nyittat ki sorra új feleségével?" o:["A kékszakállú herceg vára","Bánk bán","Hunyadi László","Sába királynője"] — így mind a négy opció valóban magyar opera.


### Nemzetközi filmek

**part5_kat20-23.js:9** · `A kérdés elárulja a válaszát`  
> Melyik Disney-mese hercegnője Elza, akinek mindent jé

- **Baj:** A „jéggé változtat" fordulat közvetlenül kimondja a helyes opció (Jégvarázs) kulcsszavát; a másik három címben nincs jég. Tudás nélkül is kitalálható, tiszta sebességverseny.
- **Javaslat:** Vedd ki a jeget a kérdésből: q:"Melyik Disney-mesében kell Anna hercegnőnek a nővére után indulnia a hegyekbe?" o:["Jégvarázs","Aranyhaj","Vaiana","Hófehérke"] — vagy tartsd Elzát, de a képességét ne írd le: „Melyik Disney-mese hercegnője Elza?"

**part5_kat20-23.js:87** · `A kérdés elárulja a válaszát`  
> Hány filmből áll Peter Jackson A Gyűrűk Ura-trilógiáj

- **Baj:** A „trilógiája" szó maga a válasz (tri- = 3). Nulla megkülönböztető erő, ráadásul tippelősként a leggyorsabb gépelő nyeri.
- **Javaslat:** Kérdezz olyan számot, amit becsülni kell: q:"Hány Oscar-díjat nyert A Gyűrűk Ura: A király visszatér?" a:11, unit:"db", note:"Mind a 11 jelölését megnyerte — ilyen tökéletes mérleget csak kevés film mondhat magáénak." (ha a 11 ütközne a Titanic-tippel, alternatíva: „Hány fejezetből áll a Hobbit-filmsorozat?" a:3)


### Mémek és internetkultúra

**part5_kat20-23.js:260** · `A kérdés elárulja a válaszát`  
> Hogy hívták a Doge mémről világhírűvé vált shiba inu ku

- **Baj:** Ez a kérdés szó szerint kimondja, hogy a Doge mém kutyája shiba inu – ez viszont a 186. sor kérdésének ("Melyik kutyafajta a Doge mém sztárja?") a helyes válasza. Kereszt-szivárgás két ÉLŐ kérdés között, ráadásul ugyanabban a kategóriában, tehát egy pakliba is kerülhetnek.
- **Javaslat:** Vedd ki a fajtát a szövegből: q:"Hogy hívták a Doge mém világhírű japán kutyáját?". (A nehézségről lásd a külön bejegyzést – ez a kérdés amúgy is cserére érett.)

**part5_kat20-23.js:212** · `A kérdés elárulja a válaszát`  
> Milyen hangszeren „játszik” a Keyboard Cat a legendás v

- **Baj:** A mém neve maga a válasz: keyboard = billentyűs hangszer. Nulla megkülönböztető erő, tiszta sebességverseny 3★-os (100 pontos) áron.
- **Javaslat:** Cseréld a feladatot: q:"Milyen ruhát adtak rá a billentyűzeten „játszó” Keyboard Cat nevű macskára a videóban?", o:["Kék kezeslábast","Piros mellényt","Sárga esőkabátot","Zöld pólót"] – vagy dobd, és tedd a helyére az egyik pótlás-kérdést.

**part5_kat20-23.js:258** · `Félrecímkézett nehézség`  
> Mi volt a mogorva arcáról elhíresült Grumpy Cat valódi 

- **Baj:** A négy macskanév (Tardar Sauce / Marshmallow / Peanut Butter / Cinnamon Roll) között egy magyar családi asztalnál senki nem tud választani – a mém arcát esetleg felismernék, a nevét nem. Ez nem 5★ (10-15%), hanem 0%: 125 pontot fizet a szerencsének, négyből egy eséllyel. A mérce szerint ez a legdrágább hiba.
- **Javaslat:** Dobd, és tedd a helyére valamelyik pótlás-kérdést. Ha marad, legyen a feladat felismerhető: q:"Milyen állat volt a mogorva arcáról elhíresült Grumpy Cat?" – de az meg 1★, tehát a csere a jobb út.

**part5_kat20-23.js:260** · `Félrecímkézett nehézség`  
> Hogy hívták a Doge mémről világhírűvé vált shiba inu ku

- **Baj:** Ugyanaz a baj, mint a Grumpy Catnél: négy japán kutyanév (Kabosu / Yuzu / Sudachi / Hachi) között a családi asztalnál kizárólag tippelni lehet, ráadásul a Hachi a Hacsikó-film miatt vonzóbbnak tűnik a helyesnél. 5★ = 125 pont érmefeldobásért.
- **Javaslat:** Dobd a kérdést (ezzel a 186-os szivárgás is megszűnik), és tedd a helyére a Startlap vagy a spam-eredet pótlást.

**part5_kat20-23.js:244** · `Félrecímkézett nehézség`  
> Melyik online játékhoz kötődik a legendás „Leeroy Jenki

- **Baj:** A World of Warcraft-os hangbemondás egy 2005-ös, szűk játékos-szubkultúra mémje; a szülők-nagyszülők nem hallottak róla, és a négy játékcím közül sem tudnak választani. 4★ (110 pont) tiszta szerencsejátékért. A projekt épp családi okból dobta ki a Videójátékok kategóriát – ez a kérdés visszacsempészi.
- **Javaslat:** Dobd, és tedd a helyére a virális/GIF pótlást.

**part5_kat20-23.js:250** · `Félrecímkézett nehézség`  
> Melyik videójátékból ered a „Press F to pay respects” m

- **Baj:** Négy lövöldözős videójáték-cím között kell választani egy angol nyelvű, játékon belüli mém eredetéről. A családi asztalnál nemhogy a válasz, a KÉRDÉS sem értelmezhető. 4★-os áron érmefeldobás, és ugyanúgy a kizárt Videójátékok témát hozza vissza, mint a Leeroy Jenkins.
- **Javaslat:** Dobd, és tedd a helyére a kukac (@) vagy a GIF pótlást.


### Sport

**part5_kat20-23.js:391** · `A kérdés elárulja a válaszát`  
> Hány versenyző ül egy kajak négyesben?

- **Baj:** A kérdés a saját válaszát mondja ki: a „négyes” számnév-összetétel odaadja a 4-et. Ez szó szerint a design/kerdesiras.md 3. pontjának egyik kivezetett rossz példája – nulla megkülönböztető erő, tiszta sebességverseny, és a verify.js is jelzi.
- **Javaslat:** Cserélje le egy kikövetkeztethető kajak-kenu tippre, pl. q: „Hány méteres a leghosszabb olimpiai kajak-kenu versenytáv?”, a: 1000, unit: „m”, note: „A sprintszámok 200, 500 és 1000 méteren futnak; a maratoni számok már nem olimpiaiak.”

**part5_kat20-23.js:297** · `Elévülő tény`  
> Melyik csapat nyerte a legtöbb BEK/Bajnokok Ligája trófeát?

- **Baj:** Megdönthető rekord-szuperlatívusz, pontosan az a típus, amit a mérce 2. pontja tilt. Ma Real Madrid, de a kérdés dátum nélkül nyitva marad; a verify.js elévülő-szűrője is erre való.
- **Javaslat:** Tegye stabil, lezárt tényre: q: „Melyik klub nyerte meg zsinórban az első öt BEK-kiírást 1956 és 1960 között?”, o: [„Real Madrid”,„Benfica”,„AC Milan”,„Internazionale”]. Ugyanaz a válasz, de soha nem évül el, és érdekesebb is.


---

## ⚠️ FONTOS (214)

### Magyar történelem

**part1_kat01-05.js:127** · `A kérdés elárulja a válaszát`  
> Hány honvédtisztet végeztek ki Aradon 1849. október 6-án?

- **Baj:** A note kimondja Batthyány Lajos nevét és miniszterelnöki tisztét, ezzel odaadja a 76. sorban élő kérdés („Ki volt az első felelős magyar kormány miniszterelnöke 1848-ban?”) válaszát.
- **Javaslat:** Új note név nélkül, önmagában is érdekes tényre cserélve: „A tizenhárom tiszt közül négyet golyó, kilencet kötél által végeztek ki – a kötél akkoriban a megszégyenítő halálnem volt.”

**part1_kat01-05.js:143** · `A kérdés elárulja a válaszát`  
> Melyik évben rendezték a millenniumi ünnepségeket a honfoglalás ezeréves...

- **Baj:** A „honfoglalás ezeréves évfordulóján” tagmondat kiszámolhatóvá teszi a választ (896+1000), ráadásul 896-ot sugall, míg a 40. sor kérdésének helyes válasza 895 – a két kérdés ellentmond egymásnak; a note pedig pontatlan, mert a Hősök tere emlékműve 1906-ig, a kőből épült Vajdahunyad vára 1908-ig készült el.
- **Javaslat:** Kérdés: „Melyik évben rendezték Budapesten a millenniumi ünnepségeket?” · note: „Az ünnepség évében adták át a Városligetbe vezető földalattit, Európa első ilyen vasútját.”


### Magyar irodalom

**part1_kat01-05.js:174** · `Elévülő tény`  
> Melyik magyar író kapott irodalmi Nobel-díjat?

- **Baj:** 2025 óta Krasznahorkai László is irodalmi Nobel-díjas, tehát a kérdés egyes számú megfogalmazása („melyik magyar író kapott”) már ténybelileg hamis, még ha az opciók közt egyedül Kertész is szerepel.
- **Javaslat:** q:"Melyik magyar író kapta 2002-ben az irodalmi Nobel-díjat?" – az opciók változatlanul jók. (Külön új kérdésnek kínálkozik: "Melyik magyar író kapta 2025-ben az irodalmi Nobel-díjat?" o:["Krasznahorkai László","Nádas Péter","Spiró György","Bodor Ádám"], d:3.)

**part1_kat01-05.js:178** · `Ismétlés / sablon`  
> Ki írta a Szózat című verset?

- **Baj:** A 172. sor (Himnusz) opciókészlete betű szerint ugyanez a négy név, csak más a helyes válasz: aki az egyiket látta, a másikat kizárásos alapon tudás nélkül megnyeri – két slot egy kérdés áráért.
- **Javaslat:** Váltsunk feladatot idézet→mű irányba: q:"Melyik vers kezdősora: „Hazádnak rendületlenűl légy híve, oh magyar”?", o:["Szózat","Himnusz","Nemzeti dal","A Tisza"], d:2.

**part1_kat01-05.js:214** · `A kérdés elárulja a válaszát`  
> Ki írta a Fekete gyémántok című regényt?

- **Baj:** A 198. sor („Jókai Mór melyik regényében szerepel a Baradlay család?”) opciói közt ott a Fekete gyémántok, tehát az a kérdés kimondja, hogy ez Jókai-regény – ezzel ingyen megválaszolja ezt.
- **Javaslat:** Váltsunk szereplő→mű irányba, a 198. sortól ELTÉRŐ opciókkal: q:"Melyik Jókai-regény főhőse Berend Iván, a bányamérnök?", o:["Fekete gyémántok","Szegény gazdagok","A lőcsei fehér asszony","Rab Ráby"], d:4.

**part1_kat01-05.js:176** · `Ismétlés / sablon`  
> Ki írta A Pál utcai fiúkat?

- **Baj:** Sablonos „Ki írta” kérdés, és Molnár Ferenc a 234. sorban (Játék a kastélyban) is a helyes válasz – ugyanaz a név kétszer nyer a kategórián belül.
- **Javaslat:** q:"Melyik regény hőse Nemecsek Ernő?", o:["A Pál utcai fiúk","Légy jó mindhalálig","Kincskereső kisködmön","A kőszívű ember fiai"], d:2. Így Molnár Ferenc csak a 234. sorban marad helyes válasz.

**part1_kat01-05.js:242** · `Félrecímkézett nehézség`  
> Milyen néven emlegetjük a Gesta Hungarorum ismeretlen szerz

- **Baj:** A jelenlegi formában hatból legalább öten rávágják az Anonymust, tehát a d:5 (125 pont) súlyosan felülcímkézett – ez a kategória legdrágább pontozási hibája.
- **Javaslat:** Ha a kérdés szövege marad, d:2. Ha a fenti átfogalmazás (III. Béla jegyzője) kerül be, a d:5 megtartható.


### Magyarország földrajza

**part1_kat01-05.js:325** · `Második védhető válasz`  
> Melyik hegységben található a Rám-szakadék, a túrázók ked

- **Baj:** A „Pilis” disztraktor védhető: a Rám-szakadék szigorúan a Visegrádi-hegységben van, de a túraleírások, térképek és a köznyelv rendszeresen „pilisi” szurdokként emlegetik (a tájegységet gyakran Pilis–Visegrádi-hegység néven kezelik). Az asztalnál épp a túrázó fog vitatkozni.
- **Javaslat:** Cseréld a „Pilis” disztraktort olyanra, amivel nincs átfedés: ✓Visegrádi-hegység \| Gerecse \| Börzsöny \| Bakony. Így a kérdés tiszta marad, és a Dunakanyar-tudás dönt.

**part1_kat01-05.js:341** · `A kérdés elárulja a válaszát`  
> Hány méter magas a Badacsony?

- **Baj:** A note („A Balaton-felvidék jellegzetes tanúhegye.”) szó szerint elárulja a 301. sor mc-kérdésének helyes válaszát („Milyen eredetű hegy a Badacsony?” → Vulkanikus tanúhegy). Kereszt-szivárgás azonos kategórián belül.
- **Javaslat:** Írd át a note-ot úgy, hogy ne mondja ki a típust: „Lejtőin a bazaltorgonák alatt húzódnak a Balaton egyik legrégibb szőlőterületei.”

**part1_kat01-05.js:255** · `Ismétlés / sablon`  
> Melyik vármegye székhelye Kaposvár?

- **Baj:** Öt szó szerint azonos sablon: „Melyik vármegye székhelye X?” (Kaposvár 255, Békéscsaba 271, Szombathely 283, Nyíregyháza 297, Eger 299), plusz három „Melyik vármegyében fekszik/található…?” (279, 285, 291). A 40 mc-ből 8 ugyanaz a fejtörő — a pakli listaszerűvé válik.
- **Javaslat:** Tarts meg 2–3 székhely-kérdést, a többit fogalmazd át más agyi műveletre: „Melyik két vármegye között húzódik a Zempléni-hegység?” · „Melyik vármegyeszékhelyünk fekszik a legnyugatabbra?” · „Melyik város NEM vármegyeszékhely?” helyett inkább leírás→név: „Melyik vármegyeszékhelyünket a Kapos-völgy fölé épült megyeháza uralja?”

**part1_kat01-05.js:249** · `Ismétlés / sablon`  
> Melyik folyó szeli ketté Szegedet?

- **Baj:** Ugyanaz a mondat, ugyanazzal az opciókészlettel szerepel kétszer: 249 (Szeged → Tisza) és 261 (Budapest → Duna), mindkettőben Tisza és Duna a két első opció. Ez ugyanaz a kérdés kétszer.
- **Javaslat:** Az egyiket írd át más feladattípusra, pl.: „Melyik két folyó találkozásánál fekszik Szeged?” ✓Tisza és Maros \| Tisza és Körös \| Duna és Sió \| Tisza és Zagyva (d3).

**part1_kat01-05.js:330** · `Ismétlés / sablon`  
> Hány méter magas a Kékes?

- **Baj:** A 20 tippből 6 pontosan ugyanaz a séma: „Hány méter magas a …?” (Kékes 330, Gellért-hegy 333, Galyatető 338, Kőris-hegy 339, Badacsony 341, Szinva-vízesés 346). Ugyanaz a gondolkodás hatszor, és a magasságok tartománya is átfed.
- **Javaslat:** Kettőt-hármat válts át más mennyiségre vagy arányra: „Hányszor magasabb a Kékes a Gellért-hegynél?” (a:4) · „Hány méterrel alacsonyabb a Galyatető a Kékesnél?” (a:50) · „Hány méter hosszú a kékesi sífelvonó?” — így marad a hegy-téma, de más a fejtörő.

**part1_kat01-05.js:301** · `Gyenge disztraktor / hossz-árulkodás`  
> Milyen eredetű hegy a Balaton fölé magasodó Badacsony?

- **Baj:** Hossz-árulkodás és regiszter-törés: a helyes válasz kétszavas („Vulkanikus tanúhegy”), a három rossz egyszavas, ráadásul a „Mészkőrög” és a „Homokdűne” egy Balaton fölé magasodó hegyre nyilvánvalóan komolytalan — a félig tudó sem bizonytalanodik el.
- **Javaslat:** Azonos hosszú és regiszterű négyes: ✓„Vulkanikus tanúhegy” \| „Karsztos mészkőrög” \| „Megkövült homokdűne” \| „Kiemelt gránittömb”.


### Magyar nyelv és szólások

**part1_kat01-05.js:385** · `A kérdés elárulja a válaszát`  
> Melyik magyar település nevéből ered a „kocsi” szavunk...

- **Baj:** A „Kocs” hangalakja a kérdésben szereplő „kocsi” szóból egy az egyben kiolvasható, a Tata/Mór/Paks disztraktorok pedig semmilyen kapcsolatot nem kínálnak – így a kérdés nem 3★, hanem ingyen pont annak is, aki sosem hallott a településről.
- **Javaslat:** Hasonló hangzású, valódi magyar településekkel: o:["Kocs","Kocsér","Kocsord","Kocsola"] – így tényleg tudni kell, melyik a komáromi falu. d marad 3.

**part1_kat01-05.js:413** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi volt eredetileg a „csízió”, amelyre az „érti a csíziót”...

- **Baj:** Hossz-árulkodás: a helyes opció 31 karakter, a három rossz 10–13 (2,74×), ráadásul egyedül a helyesben van zárójeles magyarázat. A leghosszabb + legárnyaltabb opció automatikusan gyanús.
- **Javaslat:** o:["Verses öröknaptár, kalendárium","Vándordiákok titkosírása","Régi, kockás kártyajáték","Céhek belső szabályzata"]

**part1_kat01-05.js:361** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a szólás: „Vaj van a fején”?

- **Baj:** Hossz-árulkodás (2,08×): 27 karakteres helyes válasz 10–16 karakteres disztraktorok között; a rosszak ráadásul egyszavas jellemzések, a helyes összetett mondat – más regiszter.
- **Javaslat:** o:["Titkolt bűne van, vétkezett","Meggazdagodott, jól él","Kevés esze van, együgyű","Szerencse kíséri, jól jár"]

**part1_kat01-05.js:381** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent, ha „kenyértörésre kerül a sor”?

- **Baj:** Hossz-árulkodás (1,85×) – ez pontosan a design/kerdesiras.md-ben tankönyvi példaként szereplő hibás kérdés. A javítás nem a helyes válasz rövidítése, hanem a rosszak feltöltése azonos hosszra.
- **Javaslat:** o:["Végleges szakításra, döntő összecsapásra kerül sor","Váratlan megegyezés születik a felek között","A haragosok végül mégis kibékülnek egymással","Hosszú, szűkös ínséges időszak köszönt be"]

**part1_kat01-05.js:383** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a szólás: „kibújik a szög a zsákból”?

- **Baj:** Hossz-árulkodás (1,95×): 54 karakteres helyes válasz 25–32 karakteres disztraktorok mellett.
- **Javaslat:** o:["Kiderül valakinek a titkolt szándéka, igazi természete","Előkerül egy rég elveszettnek hitt értékes tárgy","Váratlan helyről érkezik a segítség a bajban","Apró figyelmetlenségből lesz jóvátehetetlen baj"]

**part1_kat01-05.js:397** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a mondás: „Több nap, mint kolbász”?

- **Baj:** Hossz-árulkodás (1,99×): 57 vs. 26–31 karakter. A helyes válasz emellett az egyetlen, amelyik magyaráz is („mert nem jut mindennap a jóból”).
- **Javaslat:** o:["Be kell osztani a javakat, nem jut mindennap a jóból","Az idő végül minden sebet és sérelmet begyógyít","A türelmes várakozás mindig meghozza gyümölcsét","Aki sokat ígérget, a végén rendszerint keveset ad"]

**part1_kat01-05.js:415** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit tanácsol a régi mondás: „Suba subához, guba gubához”?

- **Baj:** Hossz-árulkodás (1,47×), és a rossz opciók közül kettő feltűnően rövid, hétköznapi tanács – a hosszú, „társadalmi rangról” szóló opció önmagában is komolyabbnak látszik.
- **Javaslat:** o:["Mindenki a maga társadalmi rangjából válasszon párt","A ruhát mindig az alkalomhoz illően kell viselni","A hasonló munkákat egyszerre érdemes elvégezni","Télen a két réteg meleg ruha sem árt meg"]

**part1_kat01-05.js:425** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelentett eredetileg az „ildomos” szó a régi magyar...

- **Baj:** Hossz-árulkodás (2,08×): a helyes „Okosat, eszélyeset” két tagú, a „Gyorsat”/„Bőkezűt” egyszavas. Kár érte, mert a mai jelentést kínáló „Illedelmeset” kiváló csapda – csak azonos hosszúra kell tölteni.
- **Javaslat:** o:["Okosat, eszélyeset","Illedelmeset, udvariast","Fürgét, gyors mozgásút","Bőkezűt, adakozó kedvűt"]

**part1_kat01-05.js:429** · `A kérdés elárulja a válaszát`  
> Mit jelentett a régi magyar nyelvben az „orv” szó, amely...

- **Baj:** Kettős gond: (1) a segítőnek szánt mellékmondat („amely az orvvadász szavunkban él tovább”) gyakorlatilag odaadja a választ – az orvvadász köztudottan illegálisan, lopva vadászik; (2) hossz-árulkodás is van (2,48×). Így ez nem 5★-os (10–15%), inkább 4★.
- **Javaslat:** q:"Mit jelentett a régi magyar nyelvben az „orv” szó?" · o:["Tolvajt, lopva cselekvőt","Erdőjáró, vadon élő embert","Fegyverforgató szolgát","Idegenből jött vándort"] · d:4

**part1_kat01-05.js:409** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik szavunk szláv eredetű jövevényszó?

- **Baj:** A három disztraktor (kéz, ház, hal) átlátszóan ősi finnugor alapszó – aki bármit hallott a magyar szókincsről, gondolkodás nélkül a „király”-t választja, tehát ez nem 4★. Formailag is árulkodó: a helyes válasz kétszer olyan hosszú (6 vs. 3 betű).
- **Javaslat:** Csupa jövevényszó közül kell kiválasztani a szlávot: o:["király","sátor","gyümölcs","tenger"] (a másik három török eredetű) · d:3

**part1_kat01-05.js:403** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a szólás: „eben gubát cserél”?

- **Baj:** A „Kutyából szalonnát csinál” disztraktor kilóg a halmazból: nem jelentés-meghatározás, hanem egy (elrontott) másik szólás – a másik három definíció. A regiszter-eltérés miatt azonnal kizárható, így valójában háromfelé megy a találgatás.
- **Javaslat:** o:["Rosszat rosszra cserél","Nagy hasznot húz a cseréből","Kibékül a haragosával","Olcsón jut jó portékához"]

**part1_kat01-05.js:363** · `Félrecímkézett nehézség`  
> Hogyan folytatódik a közmondás: „Ki korán kel...”?

- **Baj:** Ez a legismertebb magyar közmondások egyike – hatból hat tudja, tehát 1★ (75 p), nem 2★ (90 p). A félrecímkézett nehézség közvetlen pontozási hiba.
- **Javaslat:** d:1 (cserébe a 355. sor „muszáj”-kérdése nyugodtan mehet d:2-re, mert a „muszály” alakot rengetegen írják – így a kvóta is megmarad)

**part1_kat01-05.js:373** · `Félrecímkézett nehézség`  
> Hogyan folytatódik a közmondás? „Lassan járj...”

- **Baj:** Ugyanaz: a „Lassan járj, tovább érsz” gyerekkorból ismert, ~95%-os találati arányú tétel – 1★, nem 2★.
- **Javaslat:** d:1 (a 365. sor „Nem esik messze az alma a fájától” kérdése szintén inkább 1★, ha a kvótát egyensúlyozni kell, azt hagyd 2★-on – annak legalább a disztraktorai adnak gondolkodnivalót)


### Magyar néphagyomány

**part1_kat01-05.js:468** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a kaláka?

- **Baj:** Hossz-árulkodás: helyes 42 karakter, disztraktorok 17–25 („Vásári alkudozást”). A »kölcsönösségen alapuló« fordulat egyértelműen kilóg a regiszterből is.
- **Javaslat:** o:["Közös, kölcsönösségen alapuló ingyenmunkát","Lakodalom előtti, házaló ajándékgyűjtő körutat","Szüret végén tartott, jelmezes falusi felvonulást","Vásári alkudozást, amelyet kézfogás pecsételt meg"]

**part1_kat01-05.js:464** · `Második védhető válasz`  
> Milyen ügyességi próbákkal választottak pünkösdi királyt

- **Baj:** Tájegységenként más volt a próba: sok helyen lóverseny, máshol futó- és erőpróba, de akadt bothúzás és éneklés is – a »Táncversennyel« és a »Kaszálóversennyel« is védhető. Ráadásul a helyes válasz az egyetlen kételemű (leghosszabb) opció.
- **Javaslat:** Szűkítsd a kérdést a legelterjedtebb formára és tedd egyformává az opciókat: q:"Melyik próba döntötte el a legtöbb helyen, ki lesz a pünkösdi király?", o:["A lóverseny és a hozzá kötött erőpróbák","Az énekverseny és a rigmusmondó vetélkedő","A táncverseny és a botforgató bemutató","A kaszálóverseny és a kévekötő vetélkedő"]

**part1_kat01-05.js:452** · `Második védhető válasz`  
> Melyik napon készítették a néphit szerint a lucaszéket?

- **Baj:** A lucaszéket Luca napján KEZDTÉK, és karácsony estére KÉSZÜLT el (13 napon át, naponta egy művelet) – így a »December 24-én« válasz is védhető: aki tényleg ismeri a szokást, épp az fog vitatkozni.
- **Javaslat:** q:"Melyik napon kezdték faragni a néphit szerint a lucaszéket?" – az opciók maradhatnak. (Alternatíva: "Hány napon át készült a lucaszék?" 4 válaszos formában.)

**part1_kat01-05.js:470** · `A kérdés elárulja a válaszát`  
> Mi a kopjafa?

- **Baj:** Kereszt-szivárgás: a »A székelykapu tartóoszlopa« disztraktor kimondja a székelykaput, a két sorral lentebbi 472-es kérdés viszont épp azt kérdezi, melyik tájegység kapuja a nagykapu+kiskapu együttese (válasz: Székelyföld). Egy játszmán belül a kettő kijöhet egymás után.
- **Javaslat:** Cseréld a disztraktort: "A tornác faragott tartóoszlopa". Egyúttal töltsd fel a rövideket: o:["Faragott emlékoszlop, fejfa a síron","A tornác faragott tartóoszlopa","A pásztorok faragott terelőbotja","A ház díszes mestergerendája"]

**part1_kat01-05.js:460** · `A kérdés elárulja a válaszát`  
> Mi a kiszebáb, amelyet a tél végén elégetnek vagy vízbe

- **Baj:** A „segítő” mellékmondat („amelyet a tél végén elégetnek”) odaadja a választ: a négy opció közül csak az egyik szól a télről. Klasszikus önlövés a mérce 3. pontja szerint.
- **Javaslat:** q:"Mi a kiszebáb a magyar néphagyományban?" – a mellékmondat nélkül a kérdés valóban 3★ lesz. Az opciók maradhatnak, de a helyes rövidíthető: "A telet jelképező szalmabáb" → jó, a többi már azonos hosszú.

**part1_kat01-05.js:512** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a kotyolás?

- **Baj:** Hossz-árulkodás: helyes 45 karakter, disztraktorok 18–28 („A kotlós ültetése”, „A kukorica morzsolása”). 5★-os, 125 pontos slot – itt a legdrágább a tudás nélküli ráismerés.
- **Javaslat:** o:["Luca-napi termékenységvarázsló köszöntő szokás","A kotlós tojásra ültetése kora tavasszal","Húsvéti tojásfestő technika viaszos tollal","A kukorica közös fosztása és morzsolása"]

**part1_kat01-05.js:510** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi volt a komatál szerepe a népéletben?

- **Baj:** Hossz-árulkodás: helyes 47 karakter, a rosszak 28–34. 5★-os slot, ezért itt is kockázatos.
- **Javaslat:** o:["Étellel teli tál küldése, amely barátságot pecsételt meg","A keresztelői ajándékok összegyűjtése a rokonságtól","A szegények megvendégelése a búcsú napján a plébánián","A lakodalmi vacsora első, közösen elfogyasztott fogása"]

**part1_kat01-05.js:492** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a regölés?

- **Baj:** Hossz-árulkodás: helyes 44 karakter, a legrövidebb rossz 24. Emellett a „Tavaszváró leánykörtánc” és a „Szüreti tréfás felvonulás” nem ugyanabból a halmazból való (nem házaló szokások), így könnyen kizárhatók.
- **Javaslat:** o:["Karácsony utáni énekes-köszöntő házaló szokás","Húsvét hétfői adománykérő házaló szokás","Aprószentek napi vesszőző házaló szokás","Nagyböjt eleji jókívánságmondó házaló szokás"]

**part1_kat01-05.js:502** · `Második védhető válasz`  
> Mit öntöttek a lányok András napján, hogy megtudják, ki

- **Baj:** A férjjósló öntés anyaga a néphagyományban ólom ÉS viasz is volt (viaszöntés Luca- és András-napkor egyaránt élt), az alkalom pedig Luca napja és szilveszter is. A »Viaszt« védhető második válasz.
- **Javaslat:** Kösd az anyagot egyértelműhöz: q:"Melyik fémet olvasztották meg és öntötték hideg vízbe a lányok András napján férjjósláshoz?", o:["Ólmot","Ónt","Ezüstöt","Rezet"] – így a viasz mint versenytárs kiesik.

**part1_kat01-05.js:484** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi volt a tollfosztás?

- **Baj:** Kettős hiba: hossz-árulkodás (42 vs. 27–31 karakter), és a kérdésben szereplő „toll” szó egyedül a helyes válaszban tér vissza („libatoll”) – kettős nyíl a megoldásra.
- **Javaslat:** o:["Közös téli munkaalkalom a libapehely megtisztítására","A baromfi leforrázása és kopasztása vásár előtt","A lakodalmi párnacsata tréfás szokása a menyasszonynál","A vándormadarak őszi elengedésének szokása"]

**part1_kat01-05.js:442** · `Második védhető válasz`  
> Mit kapnak hagyományosan cserébe a húsvéti locsolkodó

- **Baj:** Tájegységenként és korosztályonként más: a gyerekek hímes tojást, a legények viszont sok helyen kifejezetten bort/pálinkát és kalácsot kaptak. Épp a „legények” szó teszi a Bort és a Kalácsot védhetővé.
- **Javaslat:** q:"Melyik ajándék a húsvéti locsolás legjellegzetesebb viszonzása?", o:["A hímes tojás","A mézeskalács","A hímzett kendő","A fonott kalács"] – így egyetlen védhető válasz marad.


### Gasztronómia

**part2_kat06-10.js:23** · `A kérdés elárulja a válaszát`  
> Melyik desszert fűződik Gundel Károly nevéhez?

- **Baj:** A kérdésben szereplő „Gundel” szó szó szerint benne van a helyes opcióban („Gundel-palacsinta”), egyik disztraktorban sem – tiszta sebességverseny, tudás nélkül is kiválasztható.
- **Javaslat:** Kérdés: „Melyik magyar desszertet töltik darált dióval és mazsolával, majd forró csokoládéöntettel, rummal lángolva tálalják?” – opciók változatlanok (helyes: Gundel-palacsinta).

**part2_kat06-10.js:53** · `Félrecímkézett nehézség`  
> Mi a mangalica?

- **Baj:** 3★ (kb. 50%) alá van kalibrálva a valóságnak: a mangalicát magyar családi asztalnál gyakorlatilag mindenki felismeri, a disztraktorok (szarvasmarha, pásztorkutya, tyúk) pedig meg sem kísértik.
- **Javaslat:** d: 1 (esetleg 2). Ha 3★ marad, nehezítsd a halmazt: „Göndör szőrű magyar sertésfajta” / „Rövid szőrű magyar sertésfajta” / „Bakonyi sertésfajta” / „Szalontai sertésfajta”.

**part2_kat06-10.js:55** · `Félrecímkézett nehézség`  
> Melyik magyar város világhírű a hagymatermesztéséről?

- **Baj:** A „makói hagyma” állandó szókapcsolat a magyar köznyelvben – ez 1–2★ tudás, nem 3★; 100 pontot fizet olyasmiért, amit hatból öten rávágnak.
- **Javaslat:** d: 2. Alternatíva ugyanerre a slotra 3★-on: „Melyik magyar városról nevezték el a világhírű, eredetvédett hagymát?” helyett „Melyik növény eredetvédett magyar fajtája a makói vöröshagyma őse?” típusú, tényleg nehezebb kérdés.

**part2_kat06-10.js:65** · `Ismétlés / sablon`  
> Melyik városhoz kötődik a busójárás, a hungarikumként is elismert…

- **Baj:** Ez nem gasztronómiai kérdés: a busójárás télűző népszokás, a 🎎 Magyar néphagyomány (cat 5) kategóriába való, és nagy eséllyel ütközik az ottani anyaggal. Gasztro-sorsoláson kiírva félrevezető a kategória-chip.
- **Javaslat:** Told át a cat 5-be (a duplikátumot ellenőrizve), és a helyére írj gasztro-kérdést, pl. a mohácsi/bajai halászléről vagy a sokác konyháról.

**part2_kat06-10.js:67** · `A kérdés elárulja a válaszát`  
> Melyik településről kapta a nevét a hungarikum halasi csipke?

- **Baj:** Kétszeresen hibás itt: (1) a csipke nem gasztronómia, (2) a „halasi” jelző kimondja a választ (Kiskunhalas), tehát még a saját kategóriájában is ingyen pont volna.
- **Javaslat:** Töröld a Gasztronómiából. Ha megmarad valahol, fogalmazd át: „Melyik alföldi város varrott csipkéje került a hungarikumok közé?” – Kiskunhalas / Kiskunfélegyháza / Hódmezővásárhely / Kalocsa.

**part2_kat06-10.js:69** · `Ismétlés / sablon`  
> Melyik városban működik a hungarikumként számon tartott Zsolnay…

- **Baj:** A porcelánmanufaktúra nem gasztronómia – a 🖼️ Képzőművészet (cat 10) vagy a Magyarország földrajza (cat 3) anyagába illik. A „hungarikum” kulcsszó nem teszi gasztro-kérdéssé.
- **Javaslat:** Told át másik kategóriába, és a helyére írj gasztro-kérdést (pl. a pécsi/villányi borvidékről vagy a mecseki gasztronómiáról).

**part2_kat06-10.js:77** · `Ténybeli hiba / vitatott adat`  
> Melyik ország édessége a rétegelt, mézes-diós baklava?

- **Baj:** A baklava eredete vitatott (oszmán-török, görög és közel-keleti igény is van rá) – a családi asztalnál épp a tájékozott játékos fog vitatkozni. A három disztraktor (Olaszország, Spanyolország, Franciaország) viszont teljesen hihetetlen, tehát a kérdés valós nehézsége 1–2★, nem 3★.
- **Javaslat:** Kerüld az eredet-kérdést, kérdezz ellenőrizhető tényt: „Milyen vékonyra nyújtott tésztából rétegzik a baklavát?” – „Réteslapból (filo)” / „Leveles tésztából” / „Kelt tésztából” / „Piskótalapból”, d:3.

**part2_kat06-10.js:103** · `A kérdés elárulja a válaszát`  
> Kiről nevezték el az Újházi tyúkhúslevest?

- **Baj:** Az „Újházi” név a kérdésben és a helyes opcióban is szerepel; a mezőnyt ráadásul úgy állítja fel, hogy KÉT opcióban is „Újházi” van – aki nem tudja, kettőre szűkít, aztán 50%-ra tippel, tehát a kérdés fele véletlen.
- **Javaslat:** Vedd ki a nevet a kérdésből: „Kiről nevezték el a nagy zöldségdarabokkal, gombával és csirkeaprólékkal főzött klasszikus magyar tyúkhúslevest?” – „Újházi Ede színművészről” / „Gundel Károly vendéglősről” / „Krúdy Gyula íróról” / „Déryné Széppataki Róza színésznőről”.

**part2_kat06-10.js:111** · `Ismétlés / sablon`  
> Melyik város híres a matyó hímzésről, amely az UNESCO szellemi…

- **Baj:** Nem gasztronómiai kérdés: a matyó hímzés a 🎎 Magyar néphagyomány (cat 5) témája, és jó eséllyel ott is szerepel – kereszt-kategóriás duplikátum kockázata.
- **Javaslat:** Told át a cat 5-be az ottani anyaggal összevetve, a helyére pedig írj borsodi/mezőkövesdi gasztro-kérdést (pl. a matyó lakodalmi ételekről vagy a bükkaljai borokról).

**part2_kat06-10.js:137** · `Félrecímkézett nehézség`  
> Melyik növény terméséből nyerik a vaníliát?

- **Baj:** 5★-ként 125 pontot fizet, pedig az „orchidea” válasz széles körben ismert ismeretterjesztő közhely – reálisan 3★ körüli. A disztraktorok (bab-, pálma-, kaktuszféle) egyike sem kísért igazán.
- **Javaslat:** d: 3. Ha valóban 5★-os vanília-kérdés kell: „Melyik állat hiányában kell kézzel beporozni a vaníliát Madagaszkáron?” – „A méhféle melipona” / „Egy kolibrifaj” / „Egy denevérfaj” / „Egy éjjeli lepke”.

**part2_kat06-10.js:143** · `Félrecímkézett nehézség`  
> Mi az umami?

- **Baj:** A kérdésírási mérce (design/kerdesiras.md, 4. pont) NÉV SZERINT ezt a kérdést hozza fel a félrecímkézés példájaként: 5★-ként szerepel, pedig reálisan 2–3★ – az umami fogalma húsz éve közbeszéd tárgya, a disztraktorok pedig komolytalanok.
- **Javaslat:** d: 3, és erősítsd a halmazt: „Az ötödik alapíz” / „A hatodik alapíz, a zsíros íz” / „A japán ízfokozó márkaneve” / „Az erjesztett szójaszósz japán neve”.


### Világtörténelem

**part2_kat06-10.js:224** · `Félrecímkézett nehézség`  
> Mi volt a neve a Hirosimára atombombát ledobó amerikai bombázón

- **Baj:** 5★ (125 pont) egy kérdésre, amit egy hatfős családi asztalnál jóval többen tudnak 10–15%-nál. Az Enola Gay név köztudott, és a három disztraktor (Bockscar, Memphis Belle, Spirit of St. Louis) közül egyik sem versenyképes: kettő nem is bombázó-szerep ebben a kontextusban.
- **Javaslat:** d:3. Ha 5★-os slot kell, kérdezd a nehezebb testvér-tényt: „Mi volt a neve a Nagaszakira atombombát ledobó bombázónak?” – ott a Bockscar a helyes, és az Enola Gay lesz a legerősebb disztraktor.

**part2_kat06-10.js:226** · `Félrecímkézett nehézség`  
> Melyik uralkodópár támogatta Kolumbusz első útját?

- **Baj:** 5★-ként jelölve, pedig Izabella és Ferdinánd a tankönyvi alapanyag. A disztraktorok sem tartják a szintet: az „Alfonz és Konstancia” kitalált párosnak hat, a „Károly és Johanna” pedig kronológiailag lehetetlen (Johanna Izabella lánya).
- **Javaslat:** d:3, és cseréld hihetőbb, korban közeli párokra: o:["Izabella és Ferdinánd","II. János és Eleonóra","I. Mánuel és Mária","Johanna és I. Fülöp"] — mind valós ibériai uralkodópár a 15–16. század fordulójáról.

**part2_kat06-10.js:214** · `Félrecímkézett nehézség`  
> Melyik dinasztia utolsó uralkodója volt II. Miklós orosz cár?

- **Baj:** 4★ (110 pont) egy olyan kérdésre, ahol a Romanov név a magyar köztudat része (film, könyv, Anasztázia-legenda). Hatból reálisan négyen-öten rávágják, ez 2★ szint.
- **Javaslat:** d:2. 4★-os slotra írd inkább: „Melyik dinasztia előzte meg a Romanovokat az orosz trónon?” ✓a Rurik-dinasztia — ott a Godunov valóban csábító disztraktor.

**part2_kat06-10.js:198** · `Félrecímkézett nehézség`  
> Melyik ország gyarmata volt India 1947-ig?

- **Baj:** 3★ (100 pont) egy olyan kérdésre, amit gyakorlatilag mindenki tud. A disztraktorok közül egyik sem bizonytalanít el senkit, mert a „brit India” kifejezés önmagában is közismert.
- **Javaslat:** d:1. Ha a 3★-os slot kell, tedd feladattá a részletet: „Ki volt India utolsó brit alkirálya, aki átadta a hatalmat 1947-ben?” ✓Lord Mountbatten \| Lord Curzon \| Lord Irwin \| Lord Wavell.

**part2_kat06-10.js:188** · `Félrecímkézett nehézség`  
> Ki volt az Egyesült Államok elnöke az amerikai polgárháború ide

- **Baj:** Lincoln és a polgárháború párosítása 3★-nál sokkal könnyebb; a 148. sor kérdésében ráadásul Lincoln disztraktorként már szerepel, tehát a név is ismerősként ugrik be.
- **Javaslat:** d:2. 3★-os változat ugyanebből a témából: „Melyik tábornok adta meg magát Appomattoxnál 1865-ben?” ✓Robert E. Lee \| Ulysses S. Grant \| Stonewall Jackson \| William Sherman.

**part2_kat06-10.js:172** · `Félrecímkézett nehézség`  
> Melyik csatában szenvedett végső vereséget Napóleon 1815-ben?

- **Baj:** A „Waterloo” szó a magyar köznyelvben is a végső vereség szinonimája („elérkezett a Waterlooja”), az évszám pedig a kérdésben van. Ez nem 3★, hanem 2★.
- **Javaslat:** d:2. A meglévő disztraktorok (Austerlitz, Lipcse, Borogyino) jók, azokat hagyd.

**part2_kat06-10.js:229** · `Hiányzó note`  
> Melyik évben fedezte fel Kolumbusz Amerikát?

- **Baj:** Üres a note (a verify.js is jelzi), ráadásul ez a legsablonosabb évszám-tipp a bázisban: 1492-t az asztalnál mindenki pontosan tudja, tehát a kérdés nem választ szét, csak sebességversenyt rendez – és a telitalálat +25%-át mindenki megkapja.
- **Javaslat:** Cseréld nem-évszámosra: {cat:7, type:'tip', d:1, q:"Hány hajóval vágott neki Kolumbusz az első felfedezőútjának?", a:3, unit:"hajó", note:"A Niña, a Pinta és a Santa María indult el – a legnagyobbjuk is alig 25 méter hosszú volt, kisebb egy mai uszodánál."}

**part2_kat06-10.js:232** · `Rossz tippelős kérdés`  
> Melyik évben tört ki a francia forradalom?

- **Baj:** 1789 a legismertebb évszámok egyike; 1★-os tippként nulla megkülönböztető erővel bír, és tovább hizlalja a kategória 90%-os évszám-arányát.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:4, q:"Hány foglyot találtak a Bastille-ban, amikor a párizsi nép elfoglalta?", a:7, unit:"fogoly", note:"A rettegett börtön szinte üres volt – négy okirat-hamisító, két elmebeteg és egy nemesúr. A Bastille bevétele jelkép volt, nem hadművelet."} — behatárolható szám és igazi „nahát”-tény.

**part2_kat06-10.js:235** · `Rossz tippelős kérdés`  
> Melyik évben süllyedt el a Titanic?

- **Baj:** Sablonos évszám-tipp (1912), amit a film óta gyakorlatilag mindenki tud. Ugyanabból a témából van sokkal jobb, kikövetkeztethető szám.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:3, q:"Hány mentőcsónak volt a Titanic fedélzetén?", a:20, unit:"mentőcsónak", note:"A több mint 2200 utasnak és tengerésznek alig a felére volt hely – és a csónakok egy részét félig üresen eresztették vízre."}

**part2_kat06-10.js:237** · `A kérdés elárulja a válaszát`  
> Melyik évben ért véget az első világháború?

- **Baj:** A 234. sor tippjének note-ja azt írja: „A négyéves háború végére négy birodalom omlott össze.” Aki azt a kérdést megkapta (1914 + négy év), ezt a tippet kiszámolja. Kölcsönös szivárgás két élő tipp között.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:3, q:"Hány birodalom szűnt meg az első világháború következtében?", a:4, unit:"birodalom", note:"Az Osztrák–Magyar Monarchia, a Német Császárság, az Oszmán Birodalom és a cári Oroszország."} — és a 234. note-jából ekkor vedd ki a „négyéves” szót.

**part2_kat06-10.js:239** · `Rossz tippelős kérdés`  
> Melyik évben kezdték el építeni a berlini falat?

- **Baj:** A 233. sorral (a fal leomlása, 1989) együtt két évszám-tipp ugyanarról a falról – ez a tétel évszám-arányát is rontja, és a kettő gondolatilag ugyanaz a feladat.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:3, q:"Hány évig állt fenn a berlini fal a felépítésétől a leomlásáig?", a:28, unit:"év", note:"Egy egész nemzedék nőtt fel úgy, hogy Berlin közepén betonfal állt – és a fal leomlásakor sokan először léptek át olyan utcára, amit gyerekkoruk óta láttak."}

**part2_kat06-10.js:242** · `Rossz tippelős kérdés`  
> Melyik évben foglalták el az oszmánok Konstantinápolyt?

- **Baj:** Sablonos évszám (1453), amit ráadásul a 257. sor note-ja ki is ír. Ha a note-ot javítod, a kérdés akkor is csak „tudod vagy nem tudod” típusú marad.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:4, q:"Hány napig tartott Konstantinápoly utolsó ostroma?", a:53, unit:"nap", note:"II. Mehmed hetven hajót vontatott át szárazföldön, fatalpakon, hogy megkerülje az Aranyszarv-öblöt lezáró láncot."}

**part2_kat06-10.js:246** · `Rossz tippelős kérdés`  
> Melyik évben nyitották meg a Szuezi-csatornát?

- **Baj:** Évszám-tipp, amit se tudni, se kikövetkeztetni nem lehet – a 19. század második fele elég nagy céltábla ahhoz, hogy a nyertes a szerencse legyen. A note viszont épp egy jó, becsülhető adatra utal.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:3, q:"Hány kilométer hosszú a Szuezi-csatorna?", a:193, unit:"km", note:"Zsilip nélkül épült, mert a Földközi- és a Vörös-tenger szintje gyakorlatilag azonos. Nélküle Afrikát megkerülve, több mint hétezer kilométerrel hosszabban kellene hajózni."}

**part2_kat06-10.js:251** · `Rossz tippelős kérdés`  
> Melyik évben gyilkolták meg John F. Kennedy amerikai elnököt?

- **Baj:** Klasszikus „tudod vagy nem” évszám (1963); aki nem tudja pontosan, csak a hatvanas éveket célozza, és a nyertes az lesz, aki véletlenül közelebb lő.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:3, q:"Hány amerikai elnököt gyilkoltak meg hivatali ideje alatt?", a:4, unit:"elnök", note:"Lincoln, Garfield, McKinley és Kennedy – közülük hármat kevesebb mint negyven év alatt."}

**part2_kat06-10.js:254** · `Rossz tippelős kérdés`  
> Melyik évben kötött ki Amerikában a Mayflower a zarándok atyákka

- **Baj:** Az 1620 magyar családi asztalnál gyakorlatilag megtippelhetetlen évszám (az amerikai gyarmatosítás egész 17. százada szóba jöhet), tehát 3★-ért érme-feldobást fizetünk.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:4, q:"Hány utas kelt át Amerikába a Mayflower fedélzetén?", a:102, unit:"fő", note:"A hajó akkora volt, mint egy mai kompkabin – és az első telet az utasok alig fele élte túl."}

**part2_kat06-10.js:256** · `Rossz tippelős kérdés`  
> Melyik évben bomlott fel a Szovjetunió?

- **Baj:** Az 1991-et a felnőtt generáció fejből tudja, a gyerekek pedig nem tudják behatárolni – tehát nem szétválaszt, hanem kettéhasítja a generációkat. Ugyanennek a témának van jóval jobb, becsülhető száma.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:3, q:"Hány tagköztársaságból állt a Szovjetunió a felbomlásakor?", a:15, unit:"tagköztársaság", note:"Mindegyikből önálló ország lett – az egyik legkisebb, Észtország alig lakosabb Budapestnél."}

**part2_kat06-10.js:262** · `A kérdés elárulja a válaszát`  
> Melyik évben zárta le a vesztfáliai béke a harmincéves háborút?

- **Baj:** A háború neve kimondja, hogy harminc évig tartott, a 258. sor tippje pedig megadja a kezdetét (1618) – tehát 1618 + 30 = 1648. A két tipp együtt egyetlen kérdés, kétszer kifizetve (4★ + 4★).
- **Javaslat:** Az egyiket cseréld nem-évszámosra: {cat:7, type:'tip', d:4, q:"Hány évig uralkodott XIV. Lajos, a Napkirály?", a:72, unit:"év", note:"Négyévesen lépett trónra, és túlélte a fiát és az unokáját is – ezért a dédunokája követte a trónon."}

**part2_kat06-10.js:266** · `Rossz tippelős kérdés`  
> Melyik évben zajlottak a salemi boszorkányperek Új-Angliában?

- **Baj:** 5★-os évszám-tipp, amit valóban senki nem tudhat pontosan (1692), tehát 125 pontot fizet a véletlennek – pont az a hiba, amit a mérce a legdrágábbnak nevez. Ráadásul a note már most a jobb kérdést tartalmazza.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:4, q:"Hány embert végeztek ki a salemi boszorkányperekben?", a:20, unit:"fő", note:"Tizenkilencet felakasztottak, egy idős férfit pedig kövekkel nyomtak agyon, mert nem volt hajlandó vallani."}


### Világföldrajz

**part2_kat06-10.js:326** · `Félrecímkézett nehézség`  
> Melyik olasz várost szövik át csatornák, és gondolákkal is

- **Baj:** A gondola gyakorlatilag Velence névjegye – a mellékmondat, ami segíteni akar, odaadja a választ. Az asztalnál hatból hat rávágja, mégis 3★=100 pontot fizet.
- **Javaslat:** d:1 és a segítő tagmondat elhagyása: „Melyik olasz város óvárosa a lagúna szigetein épült?” – vagy ha 3★-os slot kell, cseréld érdemi kérdésre: „Melyik olasz város védőszentjéről nevezték el a város főterét és székesegyházát?” o:["Velence – Szent Márk","Firenze – Szent Lőrinc","Nápoly – Szent Januárius","Genova – Szent György"].

**part2_kat06-10.js:350** · `Félrecímkézett nehézség`  
> Melyik országhoz tartozik a szobrairól híres Húsvét-sziget?

- **Baj:** A Húsvét-sziget chilei volta iskolai törzsanyag, a moai-szobrok révén széles körben ismert – reálisan 50% fölött tudják. 5★-ként 125 pontot fizet olyasmiért, ami 3★.
- **Javaslat:** d:3. Ha marad 5★-os slot igénye, írj helyette valódi 5★-ost: „Hány kilométerre van a Húsvét-szigettől a legközelebbi lakott sziget, a Pitcairn?” jellegű tipp helyett mc-t: „Mi a Húsvét-sziget polinéz neve?” o:["Rapa Nui","Tahiti Nui","Aotearoa","Hiva Oa"].

**part2_kat06-10.js:278** · `Gyenge disztraktor / hossz-árulkodás`  
> Mely kontinensek határán fekszik Isztambul?

- **Baj:** A negyedik opció („Egyik határán sem”) kilóg a halmazból: nem kontinenspár, hanem tagadás – senki nem választja, tehát a kérdés valójában háromopciós. Ráadásul a kérdés így is 1★-nál könnyebb.
- **Javaslat:** Fordítsd meg a feladatot, hogy mind a négy opció egy halmazba essen: „Melyik város fekszik két kontinens határán?” o:["Isztambul","Athén","Kairó","Odessza"], d:2. Vagy tartsd meg a kérdést, és a negyedik opció legyen „Ázsia és Óceánia” helyett kontinenspár: „Európa és a Kaukázus”.

**part2_kat06-10.js:294** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik kontinensen fekszik Egyiptom nagyobbik része?

- **Baj:** „A Közel-Keleten” nem kontinens, tehát kategóriát tévesztő, nem hihető disztraktor; a maradék három közül Afrika triviális. A kérdés így 1★ szintű, de 2★-ot fizet.
- **Javaslat:** Tedd magát a vitát kérdéssé: „Melyik kontinenshez tartozik Egyiptom Sínai-félszigete?” o:["Ázsiához","Afrikához","Európához","Két kontinens között, egyikhez sem"] – az elsőt kivéve ne legyen tagadás, tehát inkább o:["Ázsiához","Afrikához","Európához","Ausztráliához"], d:3.

**part2_kat06-10.js:353** · `Hiányzó note`  
> Hány tagállamból áll az Amerikai Egyesült Államok?

- **Baj:** Üres note – kihagyott ziccer, pedig a vesztes itt kaphatna egy „nahát!”-ot. Ráadásul a válasz a zászlóról leolvasható, tehát 1★-nál is könnyebb.
- **Javaslat:** note:"A zászló 50 csillaga a tagállamokat jelzi, a 13 sáv pedig az alapító gyarmatokat – az utolsó két állam, Alaszka és Hawaii, 1959-ben lépett be."

**part2_kat06-10.js:362** · `Hiányzó note`  
> Milyen hosszú a Nílus?

- **Baj:** Üres note, ráadásul a 6650 km forrásfüggő: a magyar iskolakönyvek 6671 km-t, más források 6695 km-t adnak (a mérés a forrásnak választott mellékágtól függ). A tipp így ±50 km-en múlik.
- **Javaslat:** Tedd egyértelművé a mérést és tölts note-ot: q:"Hány kilométer hosszú a Nílus a Viktória-tavi forrásvidéktől a torkolatáig?", a:6650, note:"A világ egyik leghosszabb folyója – a mérés a forrásnak választott mellékágtól függően 6650 és 6700 km között ingadozik."

**part2_kat06-10.js:366** · `Hiányzó note`  
> Hány méter magas a Fudzsi, Japán legmagasabb hegye?

- **Baj:** Üres note. A szám (3776) egyébként jól behatárolható, a kérdés rendben van – csak a jutalom-tény hiányzik róla.
- **Javaslat:** note:"Aktív rétegvulkán, utoljára 1707-ben tört ki; a japánok a 3776 métert a „3-7-7-6” mondókával jegyzik meg."

**part2_kat06-10.js:355** · `Ténybeli hiba / vitatott adat`  
> Hány méter magas a Mount Everest?

- **Baj:** Két iskolakönyvi szám verseng: a régi 8848 és a 2020-as közös nepáli–kínai mérés 8848,86 (kerekítve 8849). Aki a tanult 8848-at írja, egyetlen méterrel veszít – a telitalálat-bónusz azon múlik, ki hallott a 2020-as felülvizsgálatról.
- **Javaslat:** Kösd a kérdést a méréshez, hogy védhető legyen: q:"Hány méter magas a Mount Everest a 2020-as közös nepáli–kínai mérés szerint?", a:8849, note:"A korábbi hivatalos érték 8848 méter volt; a hegy a lemezmozgás miatt évente néhány milliméterrel emelkedik."


### Világirodalom

**part2_kat06-10.js:449** · `Gyenge disztraktor / hossz-árulkodás`  
> Ki írta A rózsa neve című középkori krimit?

- **Baj:** 5★-nak jelölve, de a négy opció nem egy halmaz: Dan Brown és Ken Follett tömegkönyv-szerzők, Eco és Calvino szépírók — a félig tudó is kizárja a két bestseller-nevet, így valójában 50-50 marad, és a kérdés 3★ szintre esik.
- **Javaslat:** d:3, és azonos regiszterű olasz szépírók: o:["Umberto Eco","Italo Calvino","Alberto Moravia","Dino Buzzati"].

**part2_kat06-10.js:413** · `Félrecímkézett nehézség`  
> Ki írta A Gyűrűk Ura-trilógiát?

- **Baj:** 3★ (100 pont) egy olyan kérdésre, amit a filmtrilógia óta gyakorlatilag mindenki tud; a disztraktorok közül Martin és Pratchett generációsan is kilóg. Hatból reálisan öten tudják.
- **Javaslat:** d:2. Ha 3★-osra kell: q:"Melyik Tolkien-mű a Gyűrűk Ura előzménye, amelyben Bilbó megszerzi a Gyűrűt?", o:["A hobbit","A szilmarilok","A befejezetlen regék","Húrin gyermekei"], d:3.

**part2_kat06-10.js:415** · `Félrecímkézett nehézség`  
> Kinek a nevéhez kötjük az Iliász és az Odüsszeia eposzokat?

- **Baj:** 3★, pedig Homérosz és a két eposz párosítása általános iskolai törzsanyag — az asztalnál ez rávágós kérdés, nem 50%-os.
- **Javaslat:** d:2. Nehezebb, ugyanebből a tudásból: q:"Melyik eposz szól a trójai háború tizedik évének néhány hetéről?", o:["Az Iliász","Az Odüsszeia","Az Aeneis","Az Argonautika"], d:3.

**part2_kat06-10.js:403** · `Félrecímkézett nehézség`  
> Ki írta az 1984 című regényt?

- **Baj:** 3★, de az 1984–Orwell páros a köznyelvbe is bekerült (Nagy Testvér, orwelli); a felnőttek szinte kivétel nélkül tudják.
- **Javaslat:** d:2. 4★-os alternatíva ugyanerről: q:"Melyik regényben találták ki az újbeszélt (newspeak) nevű mesterséges nyelvet?", o:["Az 1984","A Szép új világ","A Fahrenheit 451","A Gépnarancs"], d:4.

**part2_kat06-10.js:407** · `Félrecímkézett nehézség`  
> Ki írta A nyomorultak című regényt?

- **Baj:** 3★, pedig a musical és a filmek után A nyomorultak–Hugo páros a legismertebb francia irodalmi tétel; a Zola/Balzac/Stendhal hármas mellett a félig tudó is biztosan választ.
- **Javaslat:** d:2. Nehezebb változat: q:"Melyik regény üldözött hőse Jean Valjean, akit egy kenyérért ítéltek gályára?", o:["A nyomorultak","A Goriot apó","A Germinal","A párizsi Notre-Dame"], d:3.

**part2_kat06-10.js:387** · `Gyenge disztraktor / hossz-árulkodás`  
> Ki írta a Faust című drámai költeményt?

- **Baj:** Hossz-árulkodás: a helyes válasz („Johann Wolfgang von Goethe”, 26 karakter) messze a leghosszabb opció, a „Heinrich Heine” a legrövidebb — tudás nélkül is a leghosszabbra mutat a szem.
- **Javaslat:** Azonos hosszúságú, azonos korú német szerzők: o:["Johann Wolfgang von Goethe","Gotthold Ephraim Lessing","Johann Gottfried Herder","Friedrich von Schiller"].

**part2_kat06-10.js:399** · `A kérdés elárulja a válaszát`  
> Ki a krimi koronázatlan királynője, Hercule Poirot megalkotó

- **Baj:** A „királynője” szó megmondja, hogy nőt keresünk — a négy opcióból egyedül Agatha Christie nő, tehát a Poirot-tudás nélkül is kikövetkeztethető a válasz. A segítőnek szánt jelző adja oda a megoldást.
- **Javaslat:** q:"Ki alkotta meg Hercule Poirot és Miss Marple alakját?", o:["Agatha Christie","Dorothy L. Sayers","Georges Simenon","Arthur Conan Doyle"] — a nemi jelzés így nem szűkít.

**part2_kat06-10.js:405** · `Ismétlés / sablon`  
> Ki írta Az öreg halász és a tenger című kisregényt?

- **Baj:** A 40-ből 37 kérdés „Ki írta…?” sablonnal indul — ez a bázis legmonotonabb kategóriája, és egy 15 kérdéses meccsen belül is listaszerűvé teszi a Világirodalmat. Ez a kérdés jó jelölt a feladat cseréjére, mert erős, felismerhető szereplője van.
- **Javaslat:** q:"Melyik regény hőse Santiago, a kubai halász, aki 84 napig nem fog semmit?", o:["Az öreg halász és a tenger","A tenger farkasa","A Moby Dick","A kincses sziget"], d:3.

**part2_kat06-10.js:423** · `Ismétlés / sablon`  
> Ki írta a Robinson Crusoe-t?

- **Baj:** Szintén „Ki írta…?”, ráadásul a következő tétel (425., Gulliver) ugyanezt a négy nevet forgatja meg fordított sorrendben — a két kérdés egymás után feltéve szinte ugyanaz az élmény. Emellett 3★-nak is túl ismerős.
- **Javaslat:** Cseréld szereplő-alapúra: q:"Melyik regényben menti meg a hajótörött főhős a bennszülöttet, akit Péntekre keresztel?", o:["A Robinson Crusoe","A Gulliver utazásai","A kincses sziget","A rejtelmes sziget"], d:2.


### Képzőművészet

**part2_kat06-10.js:472** · `Ismétlés / sablon`  
> Ki festette a Sixtus-kápolna mennyezetfreskóit?

- **Baj:** A 460-as (Mona Lisa) és a 472-es kérdés opciólistája SZÓ SZERINT azonos: Leonardo / Michelangelo / Raffaello / Botticelli – ráadásul a két helyes válasz egymás disztraktora. Aki az egyiket látta, a másikon már felezett eséllyel indul. A 488-as (Vénusz születése) és az 512-es (Az athéni iskola) opciói is 3/4-ben ugyanezek: négy kérdés forog ugyanabból a névkészletből, és Botticelli mindig csak akkor helyes, ha ő nem szerepel máshol.
- **Javaslat:** Törd meg a listát testvér-tényekkel: a Sixtus-kápolna kérdés disztraktorai legyenek olyanok, akik tényleg dolgoztak ott a falakon – o:["Michelangelo","Pietro Perugino","Domenico Ghirlandaio","Sandro Botticelli"] (d:3-ra emelve), a Mona Lisa-kérdésé maradjon a mostani. A 488-asba Ghirlandaio/Filippino Lippi, az 512-esbe Bramante/Perugino kerüljön Botticelli helyett.

**part2_kat06-10.js:482** · `A kérdés elárulja a válaszát`  
> Hogy nevezzük a művész saját magáról festett képét?

- **Baj:** A kérdés „saját magáról” fordulata pontosan az „ön-” előtagot adja oda az „önarckép”-ből – ez a klasszikus összetett-szó szivárgás (kétpúpú → 2). Nulla megkülönböztető erő, tiszta sebességverseny. A d:2 is túlzás: az önarckép szót az asztalnál gyakorlatilag mindenki tudja (~95%), tehát 1★-os slot.
- **Javaslat:** Cseréld a feladatot műfaj-felismerésre, ami nem szivárogtat: q:"Melyik műfajba tartozik Van Gogh bekötözött fülű képe?" o:["Önarckép","Csendélet","Zsánerkép","Tájkép"], d:1. (A 468-as Van Gogh-kérdés válaszát nem árulja el.)

**part2_kat06-10.js:514** · `Megfogalmazás`  
> Melyik id. flamand mester festett parasztlakodalmakat és h

- **Baj:** A „Melyik id. flamand mester” szerkezet felolvasva értelmezhetetlen (a rövidítés a válaszhoz tartozik, nem a kérdéshez) – ezt a játékot felolvassák. Ráadásul a rövidítés épp azért kellett, mert ifj. Pieter Brueghel is festett parasztlakodalmakat és téli tájakat: a kérdés így pontatlanul jelöli meg, kit keres.
- **Javaslat:** A megkülönböztetést tedd az opcióba, a kérdést pedig konkrét művekhez kösd: q:"Melyik flamand mester festette a Parasztlakodalmat és a Vadászok a hóban című képet?" o:["Id. Pieter Bruegel","Peter Paul Rubens","Anthony van Dyck","Hieronymus Bosch"].

**part2_kat06-10.js:464** · `Második védhető válasz`  
> Hogy nevezzük a vízzel hígítható festékkel készült, áttets

- **Baj:** A „vízzel hígítható festék” a freskóra is igaz (a pigmentet vízzel hordják fel a nedves vakolatra), és a freskó ott van az opciók között – vagyis a második védhető válasz benne van a kérdésben. Csak az „áttetsző hatású” tagmondat menti meg, azt viszont 1★-on időnyomás alatt könnyű átfutni. A 476-os kérdés ráadásul meg is tanítja, mi a freskó.
- **Javaslat:** Cseréld a freskót olyan technikára, ami nem vizes: o:["Akvarellnek","Pasztellnek","Olajfestménynek","Mozaiknak"].

**part2_kat06-10.js:486** · `Félrecímkézett nehézség`  
> Ki festette a Guernica című képet?

- **Baj:** A Guernica–Picasso párosítás a legismertebb XX. századi kép-szerző kapcsolatok egyike, és a három disztraktor (Dalí, Miró, Goya) közül kettő stílusban messze van a képtől. Hatfős családi asztalnál 70% fölött tudja, ez 2★-os teljesítmény, nem 3★-os (100 pontot fizet 90 helyett).
- **Javaslat:** d:2. Ha 3★-osnak akarod tartani, élesítsd a feladatot: „Melyik város 1937-es bombázása ihlette Picasso leghíresebb háborúellenes képét?” → Guernica \| Madrid \| Barcelona \| Bilbao.

**part2_kat06-10.js:506** · `Félrecímkézett nehézség`  
> Melyik pop-art művész készített képeket Campbell-leveskonz

- **Baj:** A leveskonzerv Warhol legikonikusabb műve, és a „pop-art” szó a kérdésben már Warholra mutat – a Lichtenstein/Haring/Jasper Johns hármas közül csak Lichtenstein okoz pillanatnyi bizonytalanságot. Reálisan 2★ (~70%), most 3★-ként fizet.
- **Javaslat:** d:2. Vagy tartsd meg 3★-nak úgy, hogy a feladat nehezebb legyen: „Melyik pop-art művész pontrasztereket, képregény-kockákat nagyított festménnyé?” → Roy Lichtenstein \| Andy Warhol \| Keith Haring \| Jasper Johns.


### Filozófia

**part3_kat11-15.js:53** · `Ténybeli hiba / vitatott adat`  
> Melyik filozófus kereste kenyerét lencsecsiszolóként Amszter

- **Baj:** Spinoza valóban lencsecsiszolásból élt, de nem Amszterdamban: az 1656-os kiközösítés után Rijnsburgba, majd Voorburgba és Hágába költözött, a mesterséget végig ott űzte. Amszterdam a születési és tanulóévek városa. A városnév fölösleges kockázat, ráadásul semmit nem tesz hozzá a kérdéshez.
- **Javaslat:** Hagyd el a várost, vagy tágítsd országra: q:"Melyik filozófus kereste a kenyerét lencsecsiszolóként Hollandiában?", o:["Baruch Spinoza","Gottfried Leibniz","John Locke","David Hume"] – a d:5 maradhat, a disztraktorok jók (mind kortárs racionalista/empirista).

**part3_kat11-15.js:49** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit mond ki az „Occam borotvája” elv?

- **Baj:** Hossz-árulkodás: a helyes opció 45 karakter, a három rossz 24–28 – a leghosszabb, legóvatosabban fogalmazott mondat, tudás nélkül is ráismerni. Ráadásul a „legegyszerűbb magyarázat” a népszerű leegyszerűsítés (az eredeti: ne szaporítsd a létezőket szükségtelenül), ezért érdemes a megfogalmazást is óvatosabbra venni.
- **Javaslat:** Töltsd fel a disztraktorokat azonos hosszra: o:["A magyarázatban ne tételezz fel többet a szükségesnél","A kételkedés minden biztos tudás kezdete","Minden állítás cáfolható az ellenkezőjével","Az igazság mindig a két véglet között van"] – így mind a négy egy halmaz, és a helyes már nem lóg ki.

**part3_kat11-15.js:37** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a Horatiustól származó „carpe diem” jelmondat?

- **Baj:** A helyes opció kettős fordítást ad („Élj a mának, ragadd meg a napot”), és ezzel messze a leghosszabb – a hossz maga a nyíl. Elég egyetlen tagmondat, a többi opció ugyanannyi.
- **Javaslat:** o:["Ragadd meg a napot","Ismerd meg önmagad","A kocka el van vetve","Az idő mindent megold"] – négy azonos hosszú, azonos regiszterű latin szállóige-fordítás.

**part3_kat11-15.js:43** · `A kérdés elárulja a válaszát`  
> Melyik dán filozófust tartják az egzisztencializmus előfutár

- **Baj:** A „dán” jelző egyedül kiszűri mind a három disztraktort (Wittgenstein osztrák, Husserl és Heidegger német) – aki csak a nemzetiségeket tudja, tudás nélkül talál. A segítőnek szánt jelző itt odaadja a választ.
- **Javaslat:** Hagyd el a nemzetiséget: q:"Melyik filozófust tartják az egzisztencializmus előfutárának?" – vagy fordítsd meg a feladatot: q:"Melyik filozófus írta a Félelem és reszketés című művét Abrahám próbatételéről?".


### Állatok

**part3_kat11-15.js:68** · `A kérdés elárulja a válaszát`  
> Melyik a legnagyobb ma élő macskaféle, a csíkos bundájú ragadoz

- **Baj:** A „csíkos bundájú” segítő mellékmondat odaadja a választ: a négy opció közül csak a tigris csíkos. A kérdés így nem tudást mér.
- **Javaslat:** Hagyd el a tagmondatot: q="Melyik a legnagyobb ma élő macskaféle?", d:2 marad. (Vagy fordítva kérdezd: "Melyik macskaféle bundáján nincs sem folt, sem csík?" ✓Az oroszláné.)

**part3_kat11-15.js:92** · `A kérdés elárulja a válaszát`  
> Melyik ragadozó rovar kulcsolja össze mellső lábait, mintha ájt

- **Baj:** Az „ájtatoskodna” a helyes válasz („imádkozó sáska”) szinonimája – a régi neve épp „ájtatos manó”. A kérdés a saját válaszát mondja ki más szóval.
- **Javaslat:** q="Melyik rovar nősténye falja fel gyakran a hímet párzás után, és lesből, összekulcsolt mellső lábakkal vadászik?" – vagy semlegesebben: "Melyik ragadozó rovar mellső lábpárja fogólábbá alakult?", o:["Az imádkozó sáska","A szöcske","A tücsök","A botsáska"], d:3.

**part3_kat11-15.js:114** · `A kérdés elárulja a válaszát`  
> Melyik afrikai állat nevének görög eredetije „folyami lovat” je

- **Baj:** A magyar „víziló” név gyakorlatilag a „folyami ló” tükörfordítása – aki magyarul tud, tudás nélkül is rávágja. 3★-nak jelölve, valójában 1★-os sebességverseny.
- **Javaslat:** Fordítsd meg a feladatot: q="Melyik afrikai állat rózsaszínes „verejtéke” valójában természetes fényvédő és fertőtlenítő váladék?", o:["A vízilóé","Az orrszarvúé","A zebráé","A gnúé"], d:3 – ez tanít is.

**part3_kat11-15.js:177** · `Rossz tippelős kérdés`  
> Hány apró fog található az éti csiga reszelőnyelvén?

- **Baj:** Horgonyzatlan nagy szám (14 000): nincs mihez kötni, a nagyságrend eltalálása dönt, a telitalálat +25%-a tiszta véletlen. 5★-ként ez a legdrágábban fizetett érmefeldobás a tételben.
- **Javaslat:** Kérdezz arányt vagy kisebb egységet: q="Hány ezer apró fog található az éti csiga reszelőnyelvén?", a:14, unit:"ezer", note:"A radula nevű reszelőnyelvével úgy dolgozik, mint egy reszelővel – a fogsorok folyamatosan pótlódnak."

**part3_kat11-15.js:170** · `Rossz tippelős kérdés`  
> Hány kilométert repül évente a sarki csér a vándorlásai során?

- **Baj:** 70 000 km – horgonyzatlan nagy szám, a verify.js is jelzi a ≥10 000-es értékeket. A becslés itt nagyságrend-lövés, nem következtetés.
- **Javaslat:** q="Hányszor kerülné meg az Egyenlítőt évente a sarki csér, ha a vándorútját egyenesbe fűznénk?", a:2, unit:"alkalom", note:"Évi mintegy 70 000 km – az Északi-sarkvidékről az Antarktiszra és vissza." (d:4)

**part3_kat11-15.js:156** · `Rossz tippelős kérdés`  
> Hány méh él egy erős méhcsaládban a nyári csúcsidőszakban?

- **Baj:** 50 000 – szintén horgonyzatlan nagy szám; ráadásul „erős méhcsalád” esetén a szakirodalom 40–80 ezret is ír, tehát konvenciófüggő is.
- **Javaslat:** q="Hány ezer méh él egy erős méhcsaládban a nyári csúcsidőszakban?", a:50, unit:"ezer", note:"Egyetlen királynő, néhány száz here és több tízezer dolgozó – télre a család a töredékére fogy."

**part3_kat11-15.js:174** · `Rossz tippelős kérdés`  
> Hány pingvinfajt tartanak számon a világon?

- **Baj:** Konvenciófüggő szám, és ezt maga a note is bevallja („17-20 fajról beszélnek”). Így a 18 melletti tippet a játék igazságtalanul bünteti.
- **Javaslat:** Cseréld biztos számra: q="Hány centiméter magas a legnagyobb pingvinfaj, a császárpingvin?", a:120, unit:"cm", note:"Hozzávetőleg egy hatéves gyerek magassága – és mintegy 40 kilót nyom." (d:3)

**part3_kat11-15.js:150** · `Második védhető válasz`  
> Hány lába van a folyami ráknak?

- **Baj:** Konvenciófüggő: a tízlábú rákoknál a két olló is lábból alakult, de a köznyelv és sok tankönyv 8 járólábat számol. Aki jobban tudja, épp az tippel 8-at.
- **Javaslat:** Tedd egyértelművé a kérdésben: q="Hány lába van a folyami ráknak, ha a két ollóját is beleszámoljuk?", a:10 – a note maradhat.

**part3_kat11-15.js:88** · `Félrecímkézett nehézség`  
> Melyik madár rakja tojását más madarak fészkébe?

- **Baj:** A kakukk fészekparazitizmusa általános műveltség, a magyar nyelvben szólás is („kakukktojás”) – hatból hatan tudják. 3★ (100 pont) helyett 1★.
- **Javaslat:** d:1. Ha 3★-os slot kell, élesítsd: "Melyik magyarországi madár fészkébe rakja legszívesebben a tojását a kakukk?" ✓A nádirigóéba.

**part3_kat11-15.js:108** · `Félrecímkézett nehézség`  
> Melyik háziállat képes állva aludni?

- **Baj:** Közismert tény, a disztraktorok (kutya, macska, sertés) senkit nem bizonytalanítanak el – 3★-ként 100 pontot fizet olyasmiért, amit mindenki tud.
- **Javaslat:** d:1, vagy tedd tartalmassá: q="Mi teszi lehetővé, hogy a ló állva aludjon?", o:["A lábában lévő ínzáró szerkezet","Az izmai folyamatos munkája","A patájában lévő légpárna","A rendkívül könnyű csontozata"], d:4.

**part3_kat11-15.js:84** · `Félrecímkézett nehézség`  
> Melyik a leggyorsabb szárazföldi állat?

- **Baj:** Kettős gond: 3★-hoz túl közismert (~90% tudja), ugyanakkor a villásszarvú antilop hosszú távon tényleg gyorsabb, tehát a tájékozottabb játékos védhetően választhatja azt.
- **Javaslat:** Kösd rövid távhoz és vidd le a nehézséget: q="Melyik állat éri el a legnagyobb sebességet rövid hajszában a szárazföldön?", d:1. Az antilop külön kérdést érdemel: "Melyik állat bírja a leghosszabb ideig a 60 km/h fölötti tempót?" ✓A villásszarvú antilop.

**part3_kat11-15.js:100** · `A kérdés elárulja a válaszát`  
> Melyik hal képes akár 600 voltos áramütést is leadni?

- **Baj:** Az „áramütés” szó a kérdésben és az „elektromos” a helyes válaszban ugyanaz a nyíl – a rája, a harcsa és a murena mellett csak egy opció neve utal áramra. (A 600 V maga korrekt.)
- **Javaslat:** q="Melyik dél-amerikai folyami állat bénítja meg zsákmányát saját maga termelte árammal?", o:["Az elektromos angolna","A piranha","A tüdőshal","A kaiman"] – vagy tartsd az eredeti opciókat, de a kérdés így szóljon: "Melyik hal bénítja meg a zsákmányát több száz voltos kisüléssel?" d:3.

**part3_kat11-15.js:112** · `Félrecímkézett nehézség`  
> Melyik madárról tartja a hiedelem, hogy elhordja a fényes tárgy

- **Baj:** „Tolvaj szarka” – közmondásos, magyar mesékből is ismerős. 3★ helyett 1★. Ráadásul a varjú/csóka/holló mind varjúféle, tehát a halmaz jó, csak a válasz ingyen van.
- **Javaslat:** d:1. Ha nehezíteni akarod: "Melyik madárról bizonyították kísérletekben, hogy valójában FÉL a fényes tárgyaktól?" ✓A szarka (2015-ös exeteri kísérlet), d:4.

**part3_kat11-15.js:94** · `Félrecímkézett nehézség`  
> Melyik hal úszik a folyón felfelé, akár vízeséseken átugrálva, 

- **Baj:** A vízeséseken felfelé ugráló lazac kanonikus természetfilmes kép – 3★-hoz túl könnyű, és a hosszú, „mesélő” kérdéstest is a helyes válasz felé terel.
- **Javaslat:** d:1, rövidítve: q="Melyik hal tér vissza ívni abba a folyóba, ahol kikelt?". 3★-os változat: "Hogy nevezik a tengerből az édesvízbe ívni vonuló halakat?" ✓Anadrom vándorhalak.


### Növények és kertészet

**part3_kat11-15.js:248** · `A kérdés elárulja a válaszát`  
> Melyik illatos növénytől „bolondulnak meg” a macskák?

- **Baj:** A kérdésbeli „macskák” szó a helyes válaszban is ott van („macskamenta”), a másik három opcióban nem – egyenes nyíl a megoldásra. Ráadásul 4★-ként van árazva, pedig a szó ismertsége miatt reálisan 1–2★: 110 pontot fizet egy felismerésért.
- **Javaslat:** Kérdezz a hatóanyagra vagy fordítsd meg: „Melyik növény nepetalakton nevű illatanyaga hozza izgalomba a macskákat?” (marad: macskamenta / macskagyökér / valeriána / citromfű), d: 3. Ha marad a mostani forma, a d-t vidd le 2★-ra.

**part3_kat11-15.js:260** · `Félrecímkézett nehézség`  
> Melyik kontinensről származik a paprika?

- **Baj:** 5★-ként van felvéve, de az asztalnál ezt bőven a fele tudja (a felfedezések kora + „Kolumbusz hozta” közhely). A kerdesiras.md 4. pontja név szerint ezt a kérdést hozza fel a felfelé csúszás példájaként. 125 pont egy 3★-os tudásért.
- **Javaslat:** Vidd le d: 3-ra. Ha kell 5★-os paprika-kérdés helyette: „Melyik anyag adja a paprika csípősségét?” (kapszaicin / piperin / allicin / szinigrin), d: 5.

**part3_kat11-15.js:220** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a mulcsozás lényege a kertben?

- **Baj:** A helyes válasz 65 karakter, a három disztraktor átlaga ~25 – több mint 2,5×. Aki nem tudja, mi a mulcs, akkor is a leghosszabb, legárnyaltabb opciót választja. A hosszkülönbséget a `verify.js` is jelzi.
- **Javaslat:** Rövidítsd a helyeset és töltsd fel a rosszakat azonos regiszterre: helyes: „A talaj takarása a nedvességért és a gyom ellen”; új disztraktorok: „A talaj mélylazítása a gyökerek kedvéért”, „A fatörzsek meszelése a téli fagy ellen”, „A vesszők visszavágása a bőbb termésért”.

**part3_kat11-15.js:226** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi az oltás a gyümölcstermesztésben?

- **Baj:** Helyes: 45 karakter, disztraktorok átlaga 21 (~2,1×). A három rossz opció ráadásul tőmondat, a helyes szakszöveg – a regiszter is elárulja.
- **Javaslat:** Három új, azonos hosszú disztraktor: „A fiatal fa koronájának alakító visszametszése”, „A virágok kézi beporzása ecsettel, üvegházban”, „A gyümölcsfa törzsének meszelése fagy ellen”. A helyes maradhat („Nemes fajta hajtásának ráépítése egy alanyra”).

**part3_kat11-15.js:218** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a komposzt?

- **Baj:** Helyes: 41 karakter, disztraktorok átlaga ~23 (1,8×). Emellett a d: 3 túlárazás – a komposzt fogalmát az asztalnál szinte mindenki ismeri, ez reálisan 1–2★.
- **Javaslat:** Új disztraktorok: „Tőzegből és homokból kevert ültetőközeg”, „Ásványi sókból összeállított tápanyagpótló”, „Fenyőkéregből darált kerti talajtakaró”. A `d`-t vidd 2-re.

**part3_kat11-15.js:254** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a hidropónia?

- **Baj:** Helyes: 41 karakter, disztraktorok átlaga 21 (~1,9×) – a leghosszabb opció itt is a helyes.
- **Javaslat:** Új disztraktorok azonos hosszban: „Vízinövények termesztésére szánt kertészet”, „Időzítővel vezérelt esőztető öntözőrendszer”, „Az üvegházak páratartalmát tartó rendszer”.

**part3_kat11-15.js:236** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a herbárium?

- **Baj:** Helyes: 38 karakter, disztraktorok átlaga 20 (~1,9×). A d: 3 is magas: a herbárium szó általános iskolából ismerős, reálisan 2★.
- **Javaslat:** Új disztraktorok: „Gyógynövények termesztésére szánt kert”, „Fűszernövények tartására való állvány”, „Növényhatározásra használt képes könyv”; `d`: 2.

**part3_kat11-15.js:216** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a bonsai?

- **Baj:** Helyes: 30 karakter, disztraktorok átlaga 18 (1,6×), és a helyes az egyetlen, amelyik „…művészete” szerkezetet visz – kétszeresen árulkodik. A d: 3 is túlzás, a bonsai közismert, ~2★.
- **Javaslat:** Azonos szerkezetű disztraktorok: „A virágkötészet japán művészete”, „A sziklakertépítés kínai művészete”, „A papírhajtogatás japán művészete”; `d`: 2.

**part3_kat11-15.js:208** · `Második védhető válasz`  
> Melyik pusztai növény gömb alakú kórója gurul ősszel a szél

- **Baj:** A szamárkenyér (Onopordum acanthium) elszáradt kórója szintén letörik és gurul a széllel, magyar pusztákon ez az egyik tipikus „ördögszekér”. A növényismerő játékos védhetően választhatja a disztraktort – és épp ő fog vitatkozni az asztalnál.
- **Javaslat:** Tedd egyértelművé a fajt: „Melyik szúrós pusztai növényt hívja a néphagyomány ördögszekérnek, mert kórója letörve gurul a széllel?” → helyes: „A mezei iringót”, disztraktorok: „A szamárkenyeret”, „A mezei aszatot”, „A tövises iglicét”. Így a vitát magát tetted kérdéssé.

**part3_kat11-15.js:301** · `Második védhető válasz`  
> Hány év után is képes még kicsírázni a lótusz magja?

- **Baj:** A megoldás 1000, de a saját note-ja azt írja, hogy 1300 éves magot csíráztattak ki – vagyis aki ismeri a tényt, épp 1300-at tippel, és rosszul jár. A kérdés így önmagával vitatkozik.
- **Javaslat:** Igazítsd a kérdést a tényhez: q: „Hány éves volt a legidősebb mag, amelyet sikerült kicsíráztatni – egy kínai tómederből előkerült lótuszmag?”, a: 1300, note: „A rádiókarbonos kormeghatározás szerint még a mongol hódítás előtt hullott a mederbe.”

**part3_kat11-15.js:304** · `Félrecímkézett nehézség`  
> Hány másodperc alatt csukja össze leveleit az érintésre érzé

- **Baj:** 5★-os slot, de a válasz 1 – gyakorlatilag mindenki 1-et vagy 2-t tippel, tehát a mezőny fele telitalálatot ér el, és a +25% bónusz szinte véletlenszerűen dől el. 125 pont egy kétesélyes találgatásért.
- **Javaslat:** Kérdezz olyan mimóza-adatot, ami tényleg becsülhető, de nem bináris: q: „Hány perc alatt nyitja ki újra összecsukott leveleit a mimóza?”, a: 20, unit: „perc”, note: „Ha sokszor egymás után piszkálják, egyre lassabban reagál – megtanulja, hogy nincs veszély.” A tanulás-tény ráadásul „nahát!”-élmény.

**part3_kat11-15.js:238** · `Félrecímkézett nehézség`  
> Melyik apró, fehér szirmú, sárga közepű gyógyvirágból készül

- **Baj:** A kérdés három ismertetőjegyet is felsorol (apró, fehér szirmú, sárga közepű) ÉS megmondja, hogy nyugtató tea – a bodza, hárs és akác egyikére sem illik. Ez 1★-os felismerés 3★-os áron.
- **Javaslat:** Húzd le a leírást és tedd valódi választássá: „Melyik virágból főzik a legismertebb nyugtató-emésztést segítő gyógyteát?” — a `d`-t vidd 1-re, VAGY tartsd meg a 3★-ot úgy, hogy szűkíted: „Melyik gyógyvirág latin neve Matricaria chamomilla?”


### Fizika, kémia, biológia

**part3_kat11-15.js:394** · `Rossz tippelős kérdés`  
> Hány km/s a fény sebessége vákuumban?

- **Baj:** Horgonyzatlan nagy szám: a tankönyvi 300 000-es tipp is „téved”, a telitalálat +25%-a tiszta véletlen. A note („kb. 300 000 km/s”) ráadásul nem tény, hanem ismétlés – kihagyott ziccer.
- **Javaslat:** q: „Hány ezer kilométert tesz meg a fény egy másodperc alatt?” a:300, unit:„ezer km”, note: „Ennyi idő alatt hétszer kerülné meg az Egyenlítőt – a Holdra 1,3 másodperc alatt ér el.”

**part3_kat11-15.js:408** · `Ténybeli hiba / vitatott adat`  
> Hány izom van az emberi testben?

- **Baj:** Konvenció-függő szám: a szakirodalom 600–650 (gyakran 639 vagy 640) vázizmot ír, a 600 csak egy kerekítés. Aki pontosabban tudja, épp azért veszít.
- **Javaslat:** Tedd egyértelművé a kérdésben a kerek, tankönyvi számot: „Kerek százasra kerekítve hány izom van az emberi testben?” a:600, note: „A pontos szám iskolánként más: a leggyakrabban 600 és 650 közötti értéket írnak. A legkisebb a fülben lévő kengyelizom.” Vagy cseréld behatárolhatóra: „Hány izom mozgatja az emberi szemgolyót?” a:6.

**part3_kat11-15.js:414** · `Ténybeli hiba / vitatott adat`  
> Hány csigolyából áll az emberi gerinc?

- **Baj:** Konvenció-függő: a 33 a külön számolt kereszt- és farkcsonti csigolyákkal érvényes, de a felnőtt gerincre a 26 is standard tankönyvi válasz (összecsontosodott keresztcsont + farkcsont). A note utólag magyarázza azt, amit a kérdésben kellett volna tisztázni.
- **Javaslat:** q: „Hány csigolyából áll a gerinc, ha a keresztcsonti és farkcsonti csigolyákat is külön-külön számoljuk?” a:33, note: „Felnőttkorra ezek összecsontosodnak, így a felnőtt gerincen már csak 26 különálló csigolyát számolunk.”

**part3_kat11-15.js:405** · `Második védhető válasz`  
> Hány nap alatt kerüli meg a Hold a Földet?

- **Baj:** Két védhető válasz: 27 (sziderikus) és 29–30 (szinodikus, vagyis a köznyelvi „holdhónap”, két telihold között). A tájékozottabb játékos épp a 29,5-öt mondja, és veszít.
- **Javaslat:** q: „Hány nap alatt kerüli meg a Hold a Földet a csillagokhoz viszonyítva (sziderikus keringési idő)?” a:27, note: „Két telihold között ennél több, kb. 29,5 nap telik el, mert közben a Föld is továbbhalad a Nap körül.”

**part3_kat11-15.js:318** · `Ismétlés / sablon`  
> Melyik elem vegyjele az Au?

- **Baj:** A 328. sor („Melyik elem vegyjele az Ag?”) ugyanez a kérdés ugyanazzal a négy opcióval (arany/ezüst/alumínium/argon), csak felcserélt megoldással. Egymás után kihúzva a pakli önismétlőnek hat, és a második kérdés a felezésre is triviálissá válik.
- **Javaslat:** Az egyiket tartsd meg, a másikat írd át más agyi műveletre: „Melyik elem latin neve az aurum?” vagy „Melyik fém vegyjele a Pb?” (ólom, disztraktorok: réz, ón, cink).

**part3_kat11-15.js:382** · `Gyenge disztraktor / hossz-árulkodás`  
> Hogy hívják a CERN óriási részecskegyorsítóját?

- **Baj:** Hossz-árulkodás és regiszter-törés: csak a helyes válasz tartalmaz rövidítést zárójelben, és az a leghosszabb. A „Ciklotron” ráadásul nem is egyedi berendezésnév. Ezzel az 5★ tudás nélkül is megfogható.
- **Javaslat:** Három új, azonos formátumú disztraktor valós gyorsítókkal: „Nagy Elektron-Pozitron Ütköztető (LEP)”, „Szuper Protonszinkrotron (SPS)”, „Relativisztikus Nehézion-Ütköztető (RHIC)”. Nehézség: d:3.

**part3_kat11-15.js:384** · `Félrecímkézett nehézség`  
> Einstein melyik elmélete írja le a gravitációt a térido

- **Baj:** 5★-ként (125 pont) van jelölve, pedig az „általános vs. speciális” szembeállítás középiskolai közhely, és a kérdés maga is a gravitációt említi, ami a tankönyvi hívószó. Reálisan 2–3★.
- **Javaslat:** d:3. Ha valóban 5★-os slot kell, kérdezz konkrétumot: „Melyik jelenség első bizonyítéka volt az általános relativitáselméletnek 1919-ben?” → A fényelhajlás napfogyatkozáskor.

**part3_kat11-15.js:332** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a vas vegyjele?

- **Baj:** A „Va” és „Vs” nem létező vegyjelek, tehát csak díszlet – aki egy kicsit is otthon van, azonnal kizárja. Ráadásul 3★ (100 pont) egy 1★-os tényért.
- **Javaslat:** d:1, és három létező, valóban összekeverhető vegyjel: „Fe” mellé „Pb” (ólom), „Sn” (ón), „Zn” (cink) – vagy fordítsd meg a kérdést: „Melyik fém vegyjele az Sn?” → Az óné.

**part3_kat11-15.js:368** · `Félrecímkézett nehézség`  
> Hogyan nevezzük a sejt energiatermelő központjaként műk

- **Baj:** 4★ (110 pont) egy olyan tényért, amit a „sejt erőműve” szófordulat miatt szinte mindenki tud; a disztraktorok közül a sejtmag nem is sejtszervecske-versenytárs. Reálisan 2★.
- **Javaslat:** d:2. 4★-os változat: „Melyik sejtszervecskének van saját, az anyai ágon öröklődő DNS-e?” → A mitokondriumnak (disztraktorok: riboszóma, Golgi-készülék, lizoszóma).

**part3_kat11-15.js:376** · `Félrecímkézett nehézség`  
> Melyik szerzetes alapozta meg borsókeresztezési kísérle

- **Baj:** 4★, pedig a „szerzetes + borsó + öröklés” hármas a tankönyvi Mendel-portré, a három disztraktor közül pedig egyik sem volt szerzetes – a kérdés első szava kizárja őket. Reálisan 2★.
- **Javaslat:** d:2, és cseréld a disztraktorokat is: Mendel mellé olyan nevek, akik szintén az öröklés/sejt körül mozogtak (Thomas Hunt Morgan, Hugo de Vries, August Weismann).

**part3_kat11-15.js:393** · `Hiányzó note`  
> Hány csontja van egy felnőtt embernek?

- **Baj:** Üres a note – a tippelős kérdés legjobb pillanata (a vesztes is nyer valamit) marad kihasználatlanul.
- **Javaslat:** note: „Csecsemőként még mintegy 300 csonttal születünk; ezek egy része felnőttkorra összecsontosodik.”

**part3_kat11-15.js:395** · `Hiányzó note`  
> A felnőtt emberi test hány százaléka víz körülbelül?

- **Baj:** Üres note, ráadásul konvenció-függő adat: férfiaknál ~60%, nőknél ~55%, időskorban kevesebb, sok forrás 50–65%-os sávot ír.
- **Javaslat:** q: „A felnőtt férfi testének hány százaléka víz körülbelül?” a:60, note: „A nőknél és időskorban ez az arány alacsonyabb, az újszülötteknél viszont 75% körül van.”

**part3_kat11-15.js:412** · `Ténybeli hiba / vitatott adat`  
> Hány liter levegőt lélegzik be egy felnőtt ember percen

- **Baj:** A nyugalmi percventilláció a tankönyvekben jellemzően 6 liter (kb. 0,5 l légzési térfogat × 12 légvétel); a 8 liter a sáv felső széle, tehát a pontosabban számoló játékos veszít.
- **Javaslat:** a:6, note: „Kb. fél liter levegő percenként tizenkétszer – terhelés alatt ennek a tízszerese is lehet.” Alternatíva: „Hányszor lélegzik percenként nyugalomban egy felnőtt?” a:14.

**part3_kat11-15.js:407** · `Ismétlés / sablon`  
> Hány proton található a szénatom magjában?

- **Baj:** A 411. sor („Hány proton van az oxigénatom magjában?”) ugyanaz a feladat ugyanazzal a note-tal, más elemre. Egy meccsen belül önismétlő, és az első kihúzása után a második gondolkodás nélkül megy.
- **Javaslat:** Az egyiket tartsd meg, a másik helyett kérdezz mást ugyanabból a tudásból: „Hány neutron van a leggyakoribb szénizotóp, a szén-12 magjában?” a:6, note: „A radiokarbonos kormeghatározás a 8 neutronos szén-14-en alapul.”


### Feltalálók és találmányok

**part3_kat11-15.js:492** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik találmány fűződik Goldmark Péter Károly nevéhez?

- **Baj:** Hossz-árulkodás: a helyes „A mikrobarázdás LP hanglemez” (28 karakter) a disztraktor-átlag (18) 1,55-szerese – tudás nélkül is rá lehet mutatni. A három rossz opció ráadásul rövid és köznyelvi, a helyes szakszerű.
- **Javaslat:** Három új, azonos hosszú és regiszterű disztraktor: o:["A mikrobarázdás LP hanglemez","A hordozható kazettás magnó","A négysávos sztereó szalag","A kvadrofón hangrendszer"]

**part3_kat11-15.js:452** · `Érdektelen válasz`  
> Melyik autógyártó modellje a Model S és a Model 3 elektromo…

- **Baj:** Márkafelismerő kérdés egy találmány-kategóriában: nincs benne se feltaláló, se találmány, a helyes válasz nem tanít semmit. Ráadásul d:2-nek jelölve, miközben reálisan 1★ (~90% rávágja), tehát 90 pontot fizet azért, amit mindenki tud.
- **Javaslat:** Cseréld egy valódi találmány-kérdésre, pl.: {cat:15,type:'mc',d:3,q:"Melyik találmány tette lehetővé a felvonók biztonságos használatát a felhőkarcolókban?",o:["A zuhanásgátló fék","A hidraulikus emelő","Az ellensúlyos csigasor","Az elektromos csörlő"],c:0} (Elisha Otis, 1853). Ha marad a jelenlegi, akkor legalább d:1.

**part3_kat11-15.js:520** · `Rossz tippelős kérdés`  
> Melyik évben találta fel Rubik Ernő a bűvös kockát?

- **Baj:** Sablonos évszám-tipp ÜRES note-tal – kétszeres kihagyott ziccer: nincs mit kikövetkeztetni, és a vesztes sem nyer vele semmit. A tétel évszám-aránya 82%, a mérce 50% alatt kérné.
- **Javaslat:** Cseréld nem-évszámosra: {cat:15,type:'tip',d:4,q:"Legfeljebb hány fordulatból oldható meg bármelyik kikevert 3×3-as Rubik-kocka?",a:20,unit:"fordulat",note:"Ezt hívják „Isten számának”: 2010-ben számítógépes bizonyítás igazolta, hogy 20 lépés mindig elég."}

**part3_kat11-15.js:521** · `Rossz tippelős kérdés`  
> Melyik évben kapta Szent-Györgyi Albert az orvosi Nobel-díj…

- **Baj:** Szintén sablonos évszám ÜRES note-tal. A hat Nobel-díj-évszámos tipp (521, 530, 531, 532 + a 515) egymás mellett ugyanaz a feladat ötször.
- **Javaslat:** Cseréld: {cat:15,type:'tip',d:3,q:"Hány éves volt Szent-Györgyi Albert, amikor átvette az orvosi Nobel-díjat?",a:44,unit:"év",note:"A díj hírére állítólag azt mondta: ezentúl legalább nem kell paprikát pucolnia."}

**part3_kat11-15.js:526** · `Rossz tippelős kérdés`  
> Melyik évben adták át a Széchenyi lánchidat, Pest és Buda e…

- **Baj:** Kettős gond: sablonos évszám ÉS témán kívüli – a Lánchíd átadási éve magyar történelem/földrajz, nem találmány. Ha ugyanezt a hidat kérdezzük, a mérnöki teljesítmény a fogás, nem a dátum.
- **Javaslat:** Cseréld: {cat:15,type:'tip',d:3,q:"Hány méter hosszú a Széchenyi lánchíd középső, folyó feletti nyílása?",a:202,unit:"méter",note:"Átadásakor a világ egyik leghosszabb támaszközű függőhídja volt – Clark Ádám vezette az építést."}

**part3_kat11-15.js:527** · `Rossz tippelős kérdés`  
> Melyik évben indult el az első villamos Budapesten?

- **Baj:** Sablonos évszám, és két szomszédos tipp (517 földalatti, 533 telefonközpont) ugyanezt a „melyik évben indult el Budapesten X” sémát ismétli. Három közül legalább kettőt más feladattípusra kell váltani.
- **Javaslat:** Cseréld: {cat:15,type:'tip',d:3,q:"Hány állomása volt az 1896-ban átadott budapesti Millenniumi Földalattinak?",a:11,unit:"állomás",note:"A Vörösmarty tér és az Állatkert között kevesebb mint négy kilométeren."} (Figyelem: ekkor a 517-es tippet töröld, mert ez a kérdés kiírja az 1896-os évszámot.)

**part3_kat11-15.js:528** · `Rossz tippelős kérdés`  
> Melyik évben született Neumann János?

- **Baj:** A leggyengébb tipptípus tiszta formája: puszta születési évszám, egyszavas note-tal („Budapesten”). Semmit nem lehet kikövetkeztetni, és a vesztes sem tanul belőle semmit.
- **Javaslat:** Cseréld: {cat:15,type:'tip',d:3,q:"Hány millió darab készült összesen a Galamb József által tervezett Ford T-modellből?",a:15,unit:"millió darab",note:"1908 és 1927 között – évtizedekig ez volt a legtöbb példányban gyártott autó a világon."}

**part3_kat11-15.js:533** · `Rossz tippelős kérdés`  
> Melyik évben kezdte meg működését az első telefonközpont Bu…

- **Baj:** Sablonos évszám, és a 527-tel együtt harmadszor jön a „melyik évben indult Budapesten” séma. 5★-ként ráadásul 125 pontot fizet olyan adatért, amire tippelni sem lehet okosan (1880 vagy 1885 – érme-feldobás).
- **Javaslat:** Cseréld: {cat:15,type:'tip',d:4,q:"Hány szabadalmat jegyeztek be Thomas Edison nevére az Egyesült Államokban?",a:1093,unit:"szabadalom",note:"Élete végéig átlagosan kéthetente adott be egyet – a legtöbbet a hangrögzítés és a villamos világítás területén."}


### Űrkutatás és informatika

**part4_kat16-19.js:55** · `A kérdés elárulja a válaszát`  
> Hogy nevezzük a számítógép „agyát”, a központi feldolgo

- **Baj:** A „központi feldolgozóegység” a CPU magyar neve – a segítőnek szánt mellékmondat odaadja a választ. Emiatt a d:3 sem tartható, ez így 1★-os kérdés 100 pontért.
- **Javaslat:** q: „Melyik alkatrész hajtja végre a számítógép programjainak utasításait?” o:["A processzor","A merevlemez","Az alaplap","A memória (RAM)"], d:2.

**part4_kat16-19.js:57** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik leírónyelvvel készül a weboldalak szerkezete?

- **Baj:** Az Excel, a Photoshop és a Windows nem leírónyelv – nem egy halmaz, a félig tudó sem bizonytalanodik el egy pillanatra sem. Így a d:3 (100 pont) valójában 1★-os kérdés.
- **Javaslat:** Három új disztraktor azonos halmazból, a szerkezet/megjelenés különbségre építve: o:["HTML","CSS","PDF","JPEG"] – a CSS a valódi csali (az a megjelenést írja le, nem a szerkezetet). d:2.

**part4_kat16-19.js:53** · `Ténybeli hiba / vitatott adat`  
> Melyik űrtávcsövet állították szolgálatba 2021 végén a H

- **Baj:** A James Webbet 2021. december 25-én FELBOCSÁTOTTÁK, de szolgálatba csak 2022 nyarán állt (az első tudományos képek 2022 júliusában jöttek). A „szolgálatba állították 2021 végén” tényszerűen pontatlan.
- **Javaslat:** q: „Melyik űrtávcsövet bocsátották fel 2021 karácsonyán a Hubble utódaként?”

**part4_kat16-19.js:86** · `Rossz tippelős kérdés`  
> TIPPELŐS TÉTEL EGÉSZE – évszám-túlsúly

- **Baj:** A 18 tippelős kérdésből 14 évszám (78%), a mérce 50% alatti arányt kér. Az évszám a leggyengébb tipptípus: nincs mit kikövetkeztetni. A kategória tele van jól becsülhető mennyiségekkel, ezek hiányoznak.
- **Javaslat:** Cserélj le 5–6 évszámot mennyiségre, pl.: „Hány kilogramm holdkőzetet hoztak haza összesen az Apollo-küldetések?” (382 kg) · „Hány perc alatt kerüli meg egyszer a Földet a Nemzetközi Űrállomás?” (90 perc) · „Hány fős az ISS állandó legénysége?” (7 fő) · „Hány percig tart, míg egy rádiójel a Marsra ér a két bolygó legnagyobb távolságánál?” (22 perc) · „Hány billentyű van egy hagyományos magyar számítógép-billentyűzeten?” (105 db).

**part4_kat16-19.js:88** · `Hiányzó note`  
> Melyik évben állt Föld körüli pályára a Szputnyik–1, az 

- **Baj:** Üres note – kihagyott ziccer, a vesztes sem visz haza semmit.
- **Javaslat:** note: "Kosárlabda méretű fémgömb volt, és mindössze három hétig sugárzott – a sípolását rádióamatőrök az egész világon hallgatták."

**part4_kat16-19.js:89** · `Hiányzó note`  
> Melyik évben mutatták be az első iPhone-t?

- **Baj:** Üres note.
- **Javaslat:** note: "Steve Jobs a bemutatón három készüléknek nevezte: egy iPodnak, egy telefonnak és egy internetes eszköznek."

**part4_kat16-19.js:51** · `Elévülő tény`  
> Melyik cég keresőmotorja a Bing?

- **Baj:** Jelen idejű cégállapot-állítás (a szolgáltatás eladható, átnevezhető – a Bing márkanevét a Microsoft már többször átpozicionálta), ráadásul unalmas: a helyes válasz nem tanít semmit. Elpazarolt d:3-as slot.
- **Javaslat:** Kösd évhez és tegyél mögé tényt: q: „Melyik cég indította el 2009-ben a Bing keresőt?” – vagy cseréld érdekesebbre: „Mi volt a Google keresője eredeti, 1996-os egyetemi neve?” o:["BackRub","WebCrawler","PageRank","Googol"], d:4.


### Magyar film, tévé és sorozatok

**part4_kat16-19.js:123** · `Ténybeli hiba / vitatott adat`  
> Melyik rajzfilmsorozat két főhőse a nagyot mondó horgász és Főkukac?

- **Baj:** A helyes opció szövege „A nagy ho-ho-horgász” (két ho), a sorozat valódi címe „A nagy ho-ho-ho-horgász” (három ho) – ahogy a 181. sorban helyesen szerepel is. Elírás a helyes válaszban, ráadásul a két kérdés között inkonzisztens.
- **Javaslat:** Javítsd az opciót „A nagy ho-ho-ho-horgász” alakra.

**part4_kat16-19.js:109** · `Ismétlés / sablon`  
> Melyik csatornán futott a Barátok közt?

- **Baj:** Négy kérdés fut ugyanazon a sablonon (109 Barátok közt, 127 Való Világ, 177 Mónika show, 179 Big Brother), ugyanazzal a négy-öt csatorna-opcióval, és háromnak RTL Klub a válasza. Két játszmán belül a játékos megtanulja, hogy „vágd rá az RTL Klubot”.
- **Javaslat:** Tartsd meg a 179-est (TV2, mert eltérő a válasz), és a másik hármat írd át más agyi műveletre: 109 → „Melyik utcanév adta a Barátok közt házának a helyszínét?” (Mátyás király tér); 127 → 235-ös tippel fedve, törölhető; 177 → „Melyik délutáni talkshow műsorvezetője volt Erdélyi Mónika?” o:[„Mónika show”,„Joshi Bharat”,„Balázs show”,„A szólás szabadsága”].

**part4_kat16-19.js:243** · `A kérdés elárulja a válaszát`  
> 2025 végéig hány magyar film nyerte el a legjobb idegen nyelvű...

- **Baj:** A válasz (2) ugyanabban a kategóriában két másik tételből összerakható: a 107. sor megnevezi Saul fiát mint győztest, a 237. sor a Mephisto Oscar-évét kérdezi. Aki mindkettőt látta, tudja, hogy legalább kettő van, és a tipp lényegében ingyen 100 pont.
- **Javaslat:** Kérdezz olyan számot, amit tényleg becsülni kell: „2025 végéig hány magyar film kapott jelölést a legjobb idegen nyelvű (nemzetközi) film Oscar-díjára?” a:10, unit:„film”, note:„Kilenc jelölésből kettő lett díj: a Mephisto és a Saul fia.” (a pontos jelölésszámot ellenőrizd a beírás előtt).

**part4_kat16-19.js:228** · `A kérdés elárulja a válaszát`  
> Hány állandó szereplő ült egyszerre a Heti Hetes asztalánál?

- **Baj:** A műsor CÍME tartalmazza a választ („heti HETES”), amit a note maga is kimond. Nulla megkülönböztető erő, tiszta sebességverseny 75 pontért – a mérce 3. pontjának iskolapéldája.
- **Javaslat:** Töröld, vagy cseréld olyan számra, ami nem olvasható le a címről: „Hány évadot élt meg a Heti Hetes 1999 és 2016 között?” – vagy egyszerűen hagyd ki, a kategóriában bőven van jobb tipp.

**part4_kat16-19.js:229** · `Érdektelen válasz`  
> Hány válaszlehetőség közül választhatott a játékos egy-egy kérdésnél...

- **Baj:** A négy válaszlehetőség maga a formátum, amit a játékos épp néz – mindenki rávágja, és a helyes tipp semmit nem tanít. Kihagyott slot, ráadásul a 111. és a 250. sorral együtt három Milliomos-tétel van a kategóriában.
- **Javaslat:** Törölni. Ha marad Milliomos-tipp, a 250-es (15 kérdéses létra) a jobb; helyette pl. „Hány segítség (joker) állt a játékos rendelkezésére a Legyen Ön is milliomos!-ban?” a:3, unit:„segítség”, note:„Felezés, telefonos segítség és közönségszavazás.”

**part4_kat16-19.js:264** · `Második védhető válasz`  
> Melyik évben sugározta legelső színes adását a Magyar Televízió?

- **Baj:** Konvenció-függő évszám: a kísérleti színes adások 1968-ban indultak, az első színes stúdióadás 1969-ben ment, a rendszeres színes műsor 1971-től. A tájékozott játékos épp azért téved, mert TÖBBET tud – és 125 pont múlik rajta.
- **Javaslat:** Tedd egyértelművé: q:„Melyik évben sugározta első színes STÚDIÓADÁSÁT a Magyar Televízió?” a:1969, note:„A kísérleti színes adások már 1968-ban elindultak, a rendszeres színes műsor viszont csak 1971-től.”

**part4_kat16-19.js:249** · `Elévülő tény`  
> Melyik évben jelent meg először a Nők Lapja?

- **Baj:** Két baj egyszerre: (1) a note „Máig az egyik legnagyobb példányszámú magyar hetilap” elévülő rekord-állítás; (2) a kérdés egy nyomtatott hetilapról szól, ami nem fér bele a „Magyar film, tévé és sorozatok” kategóriába – a sorsolás-képernyőn a 🎬 ikon alatt fog megjelenni.
- **Javaslat:** Töröld a kategóriából (vagy vidd át máshova), és pótold médiatörténeti, de tévés tétellel: „Melyik évben indult a Magyar Televízió Híradója?” – vagy tartsd meg, de a note: „Az egyik leghosszabb ideje megjelenő magyar hetilap.”

**part4_kat16-19.js:195** · `Gyenge disztraktor / hossz-árulkodás`  
> Ki játszotta a címszerepet a Liza, a rókatündér című filmben?

- **Baj:** Regiszter-törés: a helyes válasz becenévvel szerepel („Balsai Móni”), a három disztraktor teljes névvel („Borbély Alexandra”, „Tenki Réka”, „Dobó Kata”). Az eltérő alak önmagában is kiemeli az opciót, ráadásul ez a legrövidebb – a figyelmes játékos ráismer.
- **Javaslat:** Írd „Balsai Mónika” alakra – ezzel a négy opció egy halmaz lesz név-formátumban és hosszban is.

**part4_kat16-19.js:125** · `Félrecímkézett nehézség`  
> Milyen állat Kántor, a klasszikus magyar bűnügyi tévésorozat...

- **Baj:** d:2 azt ígéri, hogy hatból négyen tudják. A Kántor 1975–76-os sorozat: a nagyszülők-szülők generációja rávágja, a 30 alattiak jellemzően soha nem hallottak róla. Családi átlagban ez 3★, nem 2★ – és a pontérték is ennyivel több.
- **Javaslat:** d:3. Egyúttal a negyedik opció regiszterét igazítsd: „Idomított sólyom” helyett „Sólyom”, hogy a négy opció egyszavas maradjon.

**part4_kat16-19.js:139** · `Félrecímkézett nehézség`  
> Melyik bábsorozatban szerepelt Böbe baba és Cicamica?

- **Baj:** A Futrinka utca az 1960-as évek műsora; a szülők generációja már jórészt csak hallomásból ismeri, a gyerekek egyáltalán nem. A megadott d:2 (hatból négy tudja) irreális, viszont a disztraktorok (Mazsola és Tádé, Süsü, Mézga család) mind bábfilm/rajzfilm – tényleg elbizonytalanítanak.
- **Javaslat:** d:4.

**part4_kat16-19.js:246** · `Rossz tippelős kérdés`  
> Melyik évben indult el a magyar X-Faktor első évada?

- **Baj:** A 39 tippből 25 évszámot kér (64%) – a mérce tételenként 50% alatt tartaná. Ez a kérdés a legkönnyebben feláldozható: harmadik X-Faktor-tétel (209, 236 mellett), üres a note-ja, és az évszám mellé nincs mit kikövetkeztetni.
- **Javaslat:** Cseréld nem évszámos, becsülhető tippre: „Hány adásban énekelhettek élőben a versenyzők a magyar X-Faktor egy évadában?” – vagy témát váltva: „Hány részes volt a Szomszédok egy éves szériája?”, „Hány perces a Vuk című rajzfilm?” a:75, unit:„perc”.


### Magyar könnyűzene

**part4_kat16-19.js:282** · `Ismétlés / sablon`  
> Melyik együttes slágere a „Szállj el, kismadár”?

- **Baj:** Sablon-túlsúly: a „Melyik együttes slágere a X?” kezdet szó szerint hatszor szerepel (272, 282, 286, 302, 316, 318), további háromszor apró változatban (298 „zenekar”, 334 „rockzenekar”, 338 „énekes”), és öt kérdés a „Ki énekelte/énekli X-et?” tükörképe (288, 294, 300, 314, 320). Ez 14/40, ugyanaz az agyi művelet – a kategória listaszerűvé válik.
- **Javaslat:** Írj át legalább négyet más feladattípusra. Pl. 282 → „Melyik zenekar énekese volt Bódi László, becenevén Cipő?”; 302 → „Melyik zenekar 1988-as, azonos című nagylemezéről lett sláger a »Közeli helyeken«?” helyett inkább szereplő→mű: „Melyik zenekart alapította D. Nagy Lajos érkezése előtt Nagy Feró?”; 318 → „Melyik együttes 1974-es slágerét énekelte fel a fiatal Demjén Ferenc?”; 288 → időrend vagy becenév-alapú feladat.

**part4_kat16-19.js:338** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik énekes slágere a „Jég dupla whiskyvel”?

- **Baj:** Hossz-árulkodás: a helyes opció „Charlie (Horváth Károly)” 24 karakter, a három disztraktor 11–12. A zárójeles polgári név egyértelmű nyíl a megoldásra – tudás nélkül is ráismerni.
- **Javaslat:** Egységes regiszter: helyes = „Charlie”, disztraktorok = „Zámbó Jimmy”, „Komár László”, „Delhusa Gjon” (mind művésznév, mind hasonló hosszú). Ha a polgári név fontos, akkor mindegyiknél legyen ott.

**part4_kat16-19.js:318** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik együttes slágere a „Darabokra törted a szívem”?

- **Baj:** Hossz-árulkodás: „A Bergendy együttes” (19 karakter) a disztraktorok átlagának (8) több mint kétszerese – az „együttes” utótag csak a helyes válasznál szerepel.
- **Javaslat:** Helyes: „A Bergendy”; disztraktorok azonos regiszterben: „A Corvina”, „A Generál”, „A Piramis” (az „Az LGT” túl rövid és túl ismert ahhoz, hogy elbizonytalanítson).

**part4_kat16-19.js:274** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik zenekar billentyűse és dalszerzője volt Presser Gábor az 1

- **Baj:** Hossz-árulkodás: „LGT (Locomotiv GT)” 18 karakter, a disztraktorok (Piramis / Edda / Neoton Família) átlaga 8,3. Ráadásul a kérdés időhatára pontatlan: Presser 1971-ig az Omega billentyűse volt, tehát „az 1970-es évektől” szigorúan az Omegára is igaz – ha valaha bekerülne az Omega opcióként, azonnal két védhető válasz lenne.
- **Javaslat:** Helyes opció: „LGT”; időhatár pontosítva: „Melyik zenekart alapította 1971-ben billentyűsként és fő dalszerzőként Presser Gábor?”. Disztraktornak Omegát SOHA ne tegyél ide.

**part4_kat16-19.js:300** · `Félrecímkézett nehézség`  
> Ki énekli a „Ha én rózsa volnék” című dalt?

- **Baj:** 3★ (≈50%) alulbecsli: a dal a magyar könnyűzene egyik legismertebb darabja, a felnőtt asztalnál gyakorlatilag mindenki rávágja Koncz Zsuzsát. Reálisan 2★.
- **Javaslat:** d:2. Ha 3★-os slot kell, kérdezd a szerzőt: „Ki írta a »Ha én rózsa volnék« szövegét?” – de akkor ügyelj a 290. sorral (Bródy) való átfedésre.


### Komolyzene

**part4_kat16-19.js:385** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik norvég zeneszerző írta a Peer Gynt kísérőzenéjét, benne a…

- **Baj:** A négy opció nem egy halmaz: a kérdés „norvég” zeneszerzőt kér, de csak Grieg norvég (Sibelius finn, Nielsen és Gade dán). Aki csak a nemzetiségeket ismeri, a művet nem is kell ismernie. A „benne a Reggel tétellel” mellékmondat ráadásul felesleges segítség.
- **Javaslat:** Vagy hagyd el a nemzetiséget a kérdésből (q:"Ki írta a Peer Gynt kísérőzenéjét?"), vagy tarts norvég disztraktorokat: o:["Edvard Grieg","Johan Svendsen","Christian Sinding","Ole Bull"] (utóbbi esetben d:4).

**part4_kat16-19.js:371** · `Ténybeli hiba / vitatott adat`  
> Melyik zenekari sorozat Liszt Ferenc leghíresebb magyar ihletésű műve?

- **Baj:** A Magyar rapszódiák ZONGORAMŰ-sorozat (19 darab); csak hatot hangszereltek zenekarra (Liszt és Doppler Ferenc). A „zenekari sorozat” megjelölés így ténybelileg pontatlan, és épp a tájékozott játékost bizonytalanítja el a helyes opcióval szemben.
- **Javaslat:** q:"Melyik zongoraműsorozat Liszt Ferenc leghíresebb magyar ihletésű alkotása?" — a négy opció maradhat, de a „Magyar táncok” (Brahms) mellé érdemes még egy Liszt-közeli tévesztést tenni: o:["A Magyar rapszódiák","A Magyar táncok","A Magyar fantázia","A Rákóczi-szvit"].

**part4_kat16-19.js:399** · `Félrecímkézett nehézség`  
> Melyik zeneszerző szimfóniáját emlegetjük „Befejezetlenként”?

- **Baj:** 5★ = hatból egy ember tudja. A Schubert-féle „Befejezetlen szimfónia” az egyik legismertebb komolyzenei becenév, a felnőtt asztal fele rávágja; reálisan 3★. Így 125 pontot fizet olyan tudásért, ami 100-at ér.
- **Javaslat:** d:3. Ha marad 5★-os slot igénye, kérdezd konkrétabban: q:"Hány tétele készült el Schubert Befejezetlen szimfóniájából?" o:["Kettő","Három","Egy","Négy"] — az már valóban 4–5★.

**part4_kat16-19.js:377** · `Érdektelen válasz`  
> Ki komponálta az Aida című operát?

- **Baj:** Kategória-szintű baj, ezen a soron a legjobban látszik: a 25 kérdésből 18 ugyanaz a feladat („Ki komponálta / Ki írta / Melyik zeneszerző…”) — mű→szerző lexikon. A játék listaszerűvé válik, és a kérdésíró útmutató 6. pontja pont ezt tiltja.
- **Javaslat:** Változtasd a FELADATOT néhány sornál. Itt pl. leírás→mű: q:"Melyik opera játszódik az ókori Egyiptomban, egy rabszolgasorba jutott etióp királylány szerelméről?" o:["Aida","Turandot","Nabucco","Carmen"], d:3. Máshol: idézet/kezdő dallam→mű, időrend („melyik született korábban”), jelentés („mit jelent a scherzo?").


### Nemzetközi filmek

**part5_kat20-23.js:67** · `Gyenge disztraktor / hossz-árulkodás`  
> Ki rendezte a Casablanca című klasszikust?

- **Baj:** A helyes opció „Michael Curtiz (Kertész Mihály)" zárójeles kiegészítéssel kétszer olyan hosszú, mint a három puszta név — klasszikus hossz-árulkodás, a verify.js is jelezné.
- **Javaslat:** Legyen mind a négy opció puszta név: o:["Michael Curtiz","Billy Wilder","Howard Hawks","John Huston"] — a magyar származás pedig legyen maga a kérdés poénja: q:"Melyik magyar származású rendező készítette a Casablancát?" (így a tény megmarad, de nem az opcióban lóg ki)

**part5_kat20-23.js:43** · `Félrecímkézett nehézség`  
> Ki alakította Indiana Jonest?

- **Baj:** 3★ (100 pont) van rajta, pedig Harrison Ford neve hatból öt embernek beugrik, és a disztraktorok (Mel Gibson, Costner, Michael Douglas) egyike sem játszott kalandfilm-régészt. Reálisan 1★.
- **Javaslat:** d:1 — vagy tartsd meg a 3★-ot úgy, hogy a feladatot nehezíted: q:"Melyik Indiana Jones-filmben szerepel Harrison Ford apjaként Sean Connery?" o:["Az utolsó kereszteslovag","A végzet temploma","Az elveszett frigyláda fosztogatói","A kristálykoponya királysága"]

**part5_kat20-23.js:47** · `Félrecímkézett nehézség`  
> Ki alakította Rocky Balboa bokszolót?

- **Baj:** 3★, holott Stallone–Rocky az egyik legismertebb színész-szerep páros; a disztraktorok közül egyik sem bokszolt filmben (De Niro igen, a Dühöngő bikában, de nem Rockyként). Reálisan 1★.
- **Javaslat:** d:1, vagy nehezítsd a feladatot: q:"Melyik amerikai város lépcsőin fut fel Rocky Balboa a film ikonikus jelenetében?" o:["Philadelphia","Chicago","Boston","Detroit"] (d:3)

**part5_kat20-23.js:45** · `Félrecímkézett nehézség`  
> Ki volt a némafilmkorszak világhírű csavargófigurájá

- **Baj:** 3★, pedig a Csavargó = Chaplin szinte köznyelvi tudás; a disztraktorok (Keaton, Lloyd, Laurel) csak annak mondanak valamit, aki amúgy is tudja a választ. Reálisan 1–2★.
- **Javaslat:** d:2, vagy fordítsd meg a feladatot, hogy tényleg 3★ legyen: q:"Melyik némafilmes komikus kapta a „Kőarcú" becenevet a rezzenéstelen arcjátékáról?" o:["Buster Keaton","Charlie Chaplin","Harold Lloyd","Stan Laurel"]

**part5_kat20-23.js:53** · `Félrecímkézett nehézség`  
> Melyik páros verekedett és nevettetett a Különben düh

- **Baj:** 3★, de Bud Spencer és Terence Hill Magyarországon generációkon átívelő ismertségű, és a film címe is hozzájuk kötődik. Reálisan 1★.
- **Javaslat:** d:1, vagy legyen igazi 3★: q:"Mit rendelt Bud Spencer és Terence Hill a Különben dühbe jövünkben, amiért az egész várost szétverték?" o:["Egy fagylaltkelyhet és egy korsó sört","Egy tál babot","Két adag sült krumplit","Egy üveg pezsgőt"]

**part5_kat20-23.js:94** · `Elévülő tény`  
> Melyik évben mutatták be az Elfújta a szél című filme

- **Baj:** A note „Inflációval számolva máig a legnagyobb bevételű film" — megdönthető rekord-szuperlatívusz „máig" szóval, pontosan az, amit a mérce tilt (a verify.js is jelzi).
- **Javaslat:** note:"A forgatáson 1400 színésznőt hallgattak meg Scarlett O'Hara szerepére, mielőtt a brit Vivien Leigh-t választották."

**part5_kat20-23.js:91** · `Ténybeli hiba / vitatott adat`  
> Hány Oscar-díjat nyert a Titanic?

- **Baj:** A note szerint a 11 díj „rekordbeállítás a Ben-Hurral holtversenyben" — hiányos: A Gyűrűk Ura: A király visszatér (2003) szintén 11-et nyert, tehát hárman állnak a csúcson. A jelen formában a note téves tényt tanít.
- **Javaslat:** note:"Tizenegy Oscarnál többet máig senki nem nyert: a Ben-Hur és A Gyűrűk Ura: A király visszatér áll ugyanennyivel — utóbbi mind a 11 jelölését díjra váltotta."

**part5_kat20-23.js:86** · `Hiányzó note`  
> Hány törpe él Hófehérkével a Disney-rajzfilmben?

- **Baj:** Üres note — a mérce szerint kihagyott ziccer, a verify.js is figyelmeztet rá. Ráadásul ez a tipp mindenkinek megy, tehát csak a gyorsaság dönt: a note lenne az egyetlen hozadéka a körnek.
- **Javaslat:** note:"A törpék a Grimm-mesében névtelenek voltak — a Tudor, Vidor, Szundi, Szende, Hapci, Morgó és Kuka neveket a Disney stúdió találta ki 1937-ben."

**part5_kat20-23.js:88** · `Rossz tippelős kérdés`  
> Melyik évben mutatták be az első Star Wars filmet?

- **Baj:** A 14 tippből 10 puszta bemutató-évszám (71%) — a mérce tételenként 50% alatt kérné, és az évszám a leggyengébb tipptípus: nincs mit kikövetkeztetni. Ez a kérdés a sorozat legjellemzőbb darabja (a note is csak egy alcím).
- **Javaslat:** Cseréld kikövetkeztethető mennyiségre: q:"Hány mozifilm alkotja a Star Wars fő, epizódszámozott sorozatát?" a:9, unit:"film", note:"Három trilógia: az eredeti 1977-től, az előzmények 1999-től, a folytatások 2015-től."

**part5_kat20-23.js:99** · `Rossz tippelős kérdés`  
> Melyik évben rendezték meg az első cannes-i filmfeszt

- **Baj:** 5★ évszám, amit a családi asztalnál senki nem tud kikövetkeztetni: a „háború után valamikor" tartomány 1945–1955 között bárhol lehet. Ez 125 pont, amit a szerencse oszt ki — a mérce szerint a legdrágább hiba.
- **Javaslat:** Tedd behatárolhatóvá: q:"Hány filmfesztiválon nyert Arany Pálmát az a rendező, aki a legtöbbször kapta meg?" helyett egyszerűbb: q:"Hány méter hosszú a cannes-i fesztiválpalota vörös szőnyege?" a:60, unit:"méter", note:"A 24 lépcsőfokot borító szőnyeget naponta többször is kicserélik a fesztivál alatt."

**part5_kat20-23.js:5** · `Ismétlés / sablon`  
> Ki rendezte a Titanic című filmet?

- **Baj:** A 42 mc-ből 14 (33%) „Ki rendezte…" kezdetű, további 8 „Ki alakította…" — a kettő együtt a kategória 52%-a. A mérce 6. pontja szerint ez listaszerűvé teszi a játékot akkor is, ha minden kérdés hibátlan. Ez a legelső darab a sorban.
- **Javaslat:** Írd át a feladatot: q:"Melyik film forgatásához építették meg a hajó majdnem teljes méretű mását egy mexikói tengerparton?" o:["Titanic","Kapitány és katona","A Bounty lázadói","Poseidon"] — a rendezős sablonból elég 5-6 darab a kategóriában.

**part5_kat20-23.js:57** · `Ismétlés / sablon`  
> Ki rendezte az első Star Wars filmet?

- **Baj:** A „Ki rendezte…" sablon egyik felesleges példánya: a Lucas-tudás máshonnan is kérdezhető, ráadásul 3★-nak jelölve is inkább 2★ (a négy név közül csak Lucas kötődik a Star Warshoz).
- **Javaslat:** q:"Melyik bolygón nevelkedik Luke Skywalker az első Star Wars filmben?" o:["Tatuin","Naboo","Alderaan","Hoth"] (d:3) — így megmarad a téma, de más agyi műveletet kér.


### Nemzetközi popzene

**part5_kat20-23.js:105** · `Ismétlés / sablon`  
> Kit neveznek a pop királyának?

- **Baj:** Ez a kérdés és a 123. sor („Kit neveznek a rock and roll királyának?”) ugyanaz a séma, és kölcsönösen elárulják egymást: itt Elvis Presley disztraktor, ott ő a helyes válasz. Aki az egyiket megkapta, a másikat kizárásos alapon vágja rá.
- **Javaslat:** Az egyiket írd át más agyi műveletre, pl.: {cat:21,type:'mc',d:2,q:"Melyik Michael Jackson-album a Thriller előtt megjelent, Quincy Jones-szal készült lemez?",o:["Off the Wall","Bad","Dangerous","Invincible"], c:0}, vagy a 105-ös disztraktorai közül cseréld Elvist Stevie Wonderre.

**part5_kat20-23.js:109** · `Félrecímkézett nehézség`  
> Ki énekli a Shape of You című világslágert?

- **Baj:** 1★ = ~90%, azaz a nagyszülő is rávágja. Ed Sheeran 2017-es slágere a 60+ generációnak jellemzően nem mond semmit, és mind a négy opció ugyanabból az évtizedből való fiatal férfi előadó – az 1★-os slot arra való, hogy mindenki tudja és menjen a játék.
- **Javaslat:** d:1 → d:2. Az 1★-os helyre inkább egy generációkon átívelő kérdés kell (pl. Beatles-Liverpool, ld. 111. sor).

**part5_kat20-23.js:121** · `Félrecímkézett nehézség`  
> Ki énekli a Bad Guy című dalt, a 2010-es évek végi...

- **Baj:** Kettős hiba. (1) A „2010-es évek végi pop egyik meghatározó slágerét” toldás semmit nem szűkít, csak hosszabbítja a felolvasandó kérdést. (2) Billie Eilish 2019-es dala a szülő-nagyszülő generációnál jóval 70% alatti ismertségű, mind a négy opció ugyanaz a fiatal női előadó-kör – ez reálisan 3★.
- **Javaslat:** q:"Ki énekli a Bad Guy című dalt?", d:2 → d:3.

**part5_kat20-23.js:153** · `Félrecímkézett nehézség`  
> Ki a reggae műfaj legendás jamaicai királya?

- **Baj:** Két baj. (1) Bob Marley neve a reggae szinonimája, a másik három opció pedig jóval kevésbé ismert – ez 3★ helyett 1–2★-os kérdés. (2) Nyelvileg jelen időben kérdez („Ki a…”) egy 1981-ben elhunyt előadóról.
- **Javaslat:** q:"Kit neveznek a reggae királyának?", d:3 → d:2. Ha 3★-os reggae-kérdés kell, inkább: {cat:21,type:'mc',d:3,q:"Melyik Bob Marley-album címe jelent magyarul „lázadás”-t?",o:["Uprising","Exodus","Kaya","Survival"], c:0}.


### Mémek és internetkultúra

**part5_kat20-23.js:200** · `Félrecímkézett nehézség`  
> Milyen sütemény alkotja Nyan Cat, a szivárványcsíkot hú

- **Baj:** Dupla akadály: a Nyan Cat egy 2011-es, angol nyelvterületi net-mém, a helyes válasz pedig egy Magyarországon nem kapható amerikai termék (Pop-Tart) – amit a kérdés kénytelen zárójelben magyarázni. Aki nem ismeri a mémet, a magyarázatból sem tud következtetni. Ez nem 2★ (70%), reálisan 5★, gyakorlatilag játszhatatlan.
- **Javaslat:** Dobd, vagy legalább emeld d:5-re. Jobb: cseréld a magyar netkultúra pótlásainak egyikére.

**part5_kat20-23.js:210** · `Félrecímkézett nehézség`  
> Mit csinál a Success Kid mém kisfiúja a tengerparti fot

- **Baj:** A képet sokan látták, de a „Success Kid” NÉV alapján a családi asztalnál senki nem tudja felidézni, melyik fotóról van szó – így a kérdés nem tudást mér. Emellett a helyes opció („Elszántan ökölbe szorítja a kezét”) az egyetlen, ami pozitív, sikeres testbeszédet ír le, míg a másik három kudarcot – aki a mém nevének jelentését ismeri (success), disztraktor-logikából kitalálja.
- **Javaslat:** Ha marad, adj vizuális kapaszkodót és semlegesítsd a disztraktorokat: q:"Mit tart a markában a diadalmas arcú kisfiú a Success Kid mémképen?", o:["Egy marék homokot","Egy kagylót","Egy fagylaltot","Egy játékvödröt"], d:4. Egyébként cserére érett.

**part5_kat20-23.js:222** · `Félrecímkézett nehézség`  
> Mit jelent a TL;DR internetes rövidítés?

- **Baj:** A TL;DR angol betűszó (too long; didn't read), ami magyar közegben szinte kizárólag fórumozók szűk körében él. A négy magyar opció közül semmilyen fogódzó nem vezet a helyeshez, tehát a 3★ (50%) a családi asztalnál valójában ~10-15%.
- **Javaslat:** Emeld d:5-re, VAGY tedd kikövetkeztethetővé a rövidítés feloldásával: q:"Mit jelent a fórumokon használt TL;DR (too long; didn't read) rövidítés?" – így 2★-os, tanító kérdés lesz belőle.

**part5_kat20-23.js:232** · `Félrecímkézett nehézség`  
> Mit jelent a FOMO kifejezés?

- **Baj:** Ugyanaz a szerkezeti gond, mint a TL;DR-nél: angol betűszó (fear of missing out) magyar feloldás nélkül. A szülők-nagyszülők generációjának ez nem 3★-os kérdés, hanem négyesélyes tipp – 100 pontért.
- **Javaslat:** Emeld d:5-re, vagy old fel a kérdésben: q:"Melyik érzést írja le a közösségi médiából ismert FOMO (fear of missing out) kifejezés?" mellé d:2.

**part5_kat20-23.js:196** · `Félrecímkézett nehézség`  
> Melyik mémen néz hátra egy férfi egy másik nő után, mik

- **Baj:** A kép közismert, de a kérdés angol MÉM-NEVEKET kér számon (Distracted Boyfriend / Hide the Pain Harold / Success Kid / Drakeposting) – a szülők generációja a képet felismerné, a nevét soha nem hallotta. 2★ (70%) helyett reálisan 4-5★, és a tudás, amit mér, kizárólag nyelvi.
- **Javaslat:** Emeld legalább d:4-re. Jobb megoldás: fordítsd meg a feladatot, és kérdezz a kép sztorijáról ("Melyik ország fotósa készítette a Distracted Boyfriend mém eredeti gyűjteményi fotóját?" nem jó – inkább cseréld magyar mémre).

**part5_kat20-23.js:228** · `Félrecímkézett nehézség`  
> Melyik alkalmazást olvasztotta magába a TikTok 2018-ban

- **Baj:** Négy egyaránt ismeretlen alkalmazásnév (Musical.ly / Dubsmash / Triller / Byte) – cégtörténeti belsős tudás, nem netkultúra. A családi asztalnál 0%-os, mégis 3★-ért (100 pont) megy.
- **Javaslat:** Dobd, és tedd a helyére valamelyik pótlást. Ha marad, d:5, de akkor is érmefeldobás.

**part5_kat20-23.js:194** · `Félrecímkézett nehézség`  
> Melyik platformon terjedt el 2013-ban a Harlem Shake őr

- **Baj:** Kettős probléma: a Harlem Shake-őrületre már a fiatalabbak sem emlékeznek, a PLATFORM megnevezése pedig még azoknak sem következtethető ki, akik látták a videókat. Nem 2★. Ráadásul a Vine mint disztraktor félig védhető (2013-ban a Vine is tele volt Harlem Shake-kel), csak a tömeges terjedés zajlott a YouTube-on.
- **Javaslat:** Emeld d:4-re, és a Vine helyett tegyél be egy egyértelműen nem-játékos platformot (pl. "Facebook"), hogy egyetlen védhető válasz maradjon. Alternatíva: dobd.

**part5_kat20-23.js:236** · `Félrecímkézett nehézség`  
> Melyik közösségi oldal logója volt éveken át egy kék ma

- **Baj:** A kék madár = Twitter az egyik legismertebb logó-asszociáció; a családi asztalnál gyakorlatilag mindenki rávágja. Ez 1★-os kérdés 3★-os (100 pontos) áron – csendben felpumpálja a pontszámokat.
- **Javaslat:** d:3 → d:1. (A múlt idejű megfogalmazás egyébként helyes és időtálló, azon nem kell változtatni.)

**part5_kat20-23.js:238** · `Félrecímkézett nehézség`  
> Mit csinál az internetes troll?

- **Baj:** A „troll” szó a magyar köznyelv része lett, a három disztraktor (vírusterjesztés, adatlopás, reklámküldés) pedig egyértelműen más fogalmakat ír le. A felnőttek biztosan tudják: ez 1-2★, nem 3★.
- **Javaslat:** d:3 → d:2. Figyelj arra is, hogy a 208. sor kérdésében a „troll” disztraktorként szerepel – így a két kérdés egy pakliban egymást segíti; érdemes az egyiket átírni.

**part5_kat20-23.js:240** · `Félrecímkézett nehézség`  
> Melyik 2016-os mobiljátékban kellett virtuális lényeket

- **Baj:** A Pokémon GO-utcajelenet 2016 nyarán a főműsoridős híradókba is bekerült, a három disztraktor pedig (Candy Crush, Angry Birds, Clash of Clans) egyike sem játszódik az utcán. A felnőttek biztosan tudják – 2★, nem 3★.
- **Javaslat:** d:3 → d:2.

**part5_kat20-23.js:230** · `Félrecímkézett nehézség`  
> Melyik egyetem kollégiumi szobájában indította útjára M

- **Baj:** A Harvard-történetet A közösségi háló című film és számtalan híradás beépítette a köztudatba; az asztalnál ez a felnőttek számára biztos válasz. 3★ helyett 2★.
- **Javaslat:** d:3 → d:2.

**part5_kat20-23.js:264** · `Félrecímkézett nehézség`  
> Ki alapította a Wikipédiát Larry Sangerrel közösen?

- **Baj:** Jimmy Wales neve rendszeresen szerepel a Wikipédia adománygyűjtő felhívásain, és a három disztraktor közül kettő (Wozniak, O'Reilly) jól láthatóan más területről érkezik. Ez nem a legnehezebb sáv: reálisan 3★, nem 5★ (125 pont).
- **Javaslat:** d:5 → d:3, VAGY erősítsd a disztraktorokat egy halmazba tartozó, szintén web-alapító nevekkel: o:["Jimmy Wales","Ward Cunningham","Aaron Swartz","Craig Newmark"] – akkor marad a 4-5★.

**part5_kat20-23.js:246** · `Félrecímkézett nehézség`  
> Melyik együttes dala a Dragostea din tei, amelyből a Nu

- **Baj:** Fordított hiba: a „Maja hi, maja ho” 2004-ben a magyar rádiók és lakodalmak slágere volt, tehát épp a SZÜLŐK generációja tudja biztosan. A többi opció (Eiffel 65, Aqua, Vengaboys) másik évtized, másik stílus. Ez 2-3★, nem 4★.
- **Javaslat:** d:4 → d:2. Ez egyébként a kategória egyik legjobb kérdése: nemzetközi, de a családi asztal ismeri – ebbe az irányba érdemes bővíteni.

**part5_kat20-23.js:220** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent az AFK rövidítés az online játékosok nyelvéb

- **Baj:** Hossz- és formaárulkodás: egyedül a helyes opció tartalmaz zárójeles angol feloldást („away from keyboard”), a másik három csupasz magyar mondat. Aki nem tudja a választ, a formátumból ismeri fel – nulla megkülönböztető erő.
- **Javaslat:** Vedd ki a feloldást, és tedd a három disztraktort azonos regiszterűvé: o:["Nincs a gép előtt","Mindjárt visszajön","Új kört indít","Segítséget kér a csapattól"]. (A feloldás mehet a kérdésbe, ha könnyíteni akarsz rajta.)

**part5_kat20-23.js:188** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi történik, ha valakit „rickrollolnak”?

- **Baj:** Klasszikus hossz-árulkodás: a helyes válasz ("Rick Astley Never Gonna Give You Up klipjére irányítják át") kétszer olyan hosszú, mint a három rövid disztraktor, és egyedül tartalmaz tulajdonnevet – tudás nélkül is ez a nyerő tipp. Emellett a d:1 erősen alábecsült: a rickroll angol nyelvterületi netes tréfa, a nagyszülők nem ismerik (reálisan 3★).
- **Javaslat:** Tölts fel három azonos hosszúságú, tulajdonneves disztraktort és emeld a nehézséget: o:["Rick Astley klipjére irányítják át","Egy végtelen macskás videóra dobják át","Egy hamis vírusriasztást kap a képernyőre","Egy régi Windows-hibaüzenetet kap tréfából"], d:3.

**part5_kat20-23.js:214** · `A kérdés elárulja a válaszát`  
> Mit csinál a kis Charlie a Charlie bit my finger című h

- **Baj:** A videó angol címe benne van a kérdésben, és szó szerint kimondja a választ: „bit my finger” = megharapta az ujjamat. Aki egy szót is tud angolul, tudás nélkül nyer – 3★-os (100 pontos) áron.
- **Javaslat:** Fordítsd meg a feladatot, a cím lefordítása nélkül: q:"A YouTube egyik legnézettebb korai videójában a kisfiú megharapja a bátyja ujját. Hogy hívják a harapós kisebbik testvért?", o:["Charlie","Harry","Oliver","Jack"], d:4.

**part5_kat20-23.js:186** · `Félrecímkézett nehézség`  
> Melyik kutyafajta a Doge mém sztárja?

- **Baj:** Négy kutyafajta közül kell választani egy angol nyelvű mém alapján. A shiba inu a legkevésbé ismert a négy közül a magyar családi asztalnál, tehát aki nem ismeri a mémet, a legvalószínűtlenebb opciót kellene megjelölnie. Ez semmiképp nem 1★ (90%), reálisan 3-4★.
- **Javaslat:** d:1 → d:3, és a 260. sor kérdését dobd (az árulja el ennek a válaszát). Az 1★-os slotokat inkább a pótlásban javasolt köznyelvi kérdésekkel töltsd fel.


### Sport

**part5_kat20-23.js:394** · `A kérdés elárulja a válaszát`  
> Melyik évben győzte le a magyar válogatott Angliát 6:3-ra a Wembl

- **Baj:** Kereszt-szivárgás ugyanezen kategórián belül: a 321. sor mc-kérdése éppen azt kérdezi, MELYIK stadionban győzte le a válogatott Angliát 6:3-ra – ez a tipp a kérdésszövegében kimondja a választ (Wembley).
- **Javaslat:** A tipp kérdéséből vegye ki a stadiont: „Melyik évben győzte le a magyar válogatott Angliát 6:3-ra Londonban?” (a note maradhat: „az évszázad mérkőzése”).

**part5_kat20-23.js:405** · `A kérdés elárulja a válaszát`  
> Melyik évben nyerte Magyarország az első téli olimpiai aranyérmét

- **Baj:** A note („A férfi rövidpályás gyorskorcsolya-váltó győzött Phjongcshangban.”) elárulja a 283. sor mc-kérdésének válaszát (Liu Shaolin Sándor sportága → rövidpályás gyorskorcsolya).
- **Javaslat:** note: „Phjongcshangban a magyar férfi váltó állt a dobogó tetejére – 96 év után az első téli arany.” (sportág megnevezése nélkül).

**part5_kat20-23.js:307** · `Elévülő tény`  
> Ki minden idők legeredményesebb magyar olimpikonja 7 aranyéremmel

- **Baj:** Rekord-szuperlatívusz („minden idők legeredményesebb”). A 7-es horgony ma egyértelművé teszi, de a megfogalmazás elvben megdönthető, és a verify.js elévülő-szűrője is fogja.
- **Javaslat:** Kérdezze a stabil, egyedi teljesítményt: „Melyik magyar sportoló nyert hat egymást követő olimpián aranyérmet (1932–1960)?” → Gerevich Aladár (vívás). Ugyanaz a válasz, örökre igaz, és sokkal jobb sztori.

**part5_kat20-23.js:335** · `Elévülő tény`  
> Ki minden idők legeredményesebb olimpikonja 23 aranyéremmel?

- **Baj:** Ugyanaz a séma: megdönthető szuperlatívusz. A 23 nagy előny, de a kérdés dátum nélkül van megfogalmazva.
- **Javaslat:** „Melyik úszó nyert 23 olimpiai aranyérmet pályafutása során?” → Michael Phelps. A tény zárt, a szuperlatívusz eltűnik.

**part5_kat20-23.js:361** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik magyar teniszezőnő nyerte meg a Roland Garros női egyesét 

- **Baj:** A „Sávolt Anikó” disztraktor kitalált személynek tűnik (Sávolt Attila férfi teniszező volt) – a kitalált név nem hihető disztraktor, és a tájékozott játékos rögtön kizárja.
- **Javaslat:** Cserélje valós magyar teniszezőnőre: o: [„Körmöczy Zsuzsa”,„Temesvári Andrea”,„Babos Tímea”,„Czink Melinda”].

**part5_kat20-23.js:339** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik ország rendezte 2010-ben az első afrikai labdarúgó-világb

- **Baj:** Hossz-árulkodás: a helyes „Dél-afrikai Köztársaság” kétszavas hivatalos név, a három disztraktor egyszavas köznyelvi országnév – tudás nélkül is kilóg.
- **Javaslat:** Azonos regiszterre hozni: o: [„Dél-Afrika”,„Marokkó”,„Egyiptom”,„Nigéria”].

**part5_kat20-23.js:399** · `Hiányzó note`  
> Hány méter hosszú egy olimpiai úszómedence?

- **Baj:** Üres note – kimarad a „nahát!”-tény, ami a vesztesnek is jár.
- **Javaslat:** note: „A rövid pályás versenyeket 25 méteres medencében rendezik – ezért vezetnek külön világcsúcslistát a két medencehosszra.”

**part5_kat20-23.js:400** · `Hiányzó note`  
> Hány játékos lehet a pályán egyszerre egy kosárlabdacsapatból?

- **Baj:** Üres note.
- **Javaslat:** note: „A kosárlabdát 1891-ben Naismith még kilenc-kilenc fővel játszatta; az ötös felállás csak 1897-ben lett szabály.”

**part5_kat20-23.js:401** · `Hiányzó note`  
> Hány lyukból áll egy szabványos golfpálya?

- **Baj:** Üres note.
- **Javaslat:** note: „A skót St Andrews pályája rögzítette a 18-as számot 1764-ben – előtte 22 lyuk volt.”

**part5_kat20-23.js:403** · `Hiányzó note`  
> Hány aranyérmet nyert Magyarország a 2016-os riói olimpián?

- **Baj:** Üres note.
- **Javaslat:** note: „A nyolcból négyet az úszók hoztak – Hosszú Katinka egymaga hármat.”

**part5_kat20-23.js:411** · `Hiányzó note`  
> Melyik évben rendezték az első újkori olimpiát Athénban?

- **Baj:** Üres note – pedig itt kínálja magát a magyar vonatkozás.
- **Javaslat:** note: „Magyarország a 14 induló nemzet egyike volt, és rögtön két aranyat szerzett.” (Hajós nevét ne írja bele – a 329. sor mc-kérdése rá kérdez.)

**part5_kat20-23.js:303** · `Félrecímkézett nehézség`  
> Melyik sportágban lett világsztár Michael Jordan?

- **Baj:** 2★-nak (≈70%) van jelölve, de egy hatfős családi asztalnál gyakorlatilag mindenki tudja – reálisan 1★. A felcímkézés 90 pontot fizet egy ingyen kérdésért.
- **Javaslat:** d: 1. Ha marad 2★, akkor kérdezzen élesebbet: „Melyik NBA-csapatban nyerte Michael Jordan mind a hat bajnoki címét?” → Chicago Bulls.

**part5_kat20-23.js:305** · `Félrecímkézett nehézség`  
> Melyik ország teniszezője Roger Federer?

- **Baj:** Szintén 2★, valójában 1★ szintű: Federer svájci volta köztudott, a disztraktorok (Svédország, Németország, Ausztria) senkit nem bizonytalanítanak el.
- **Javaslat:** d: 1, vagy élesítés: „Melyik tornát nyerte meg Roger Federer nyolcszor, rekordot állítva a férfi egyesben?” → Wimbledon.


---

## · APRÓ (287)

### Magyar történelem

**part1_kat01-05.js:42** · `A kérdés elárulja a válaszát`  
> Ki volt az első magyar király?

- **Baj:** A „Könyves Kálmán” disztraktor (itt és a 64. sorban is) kiírva tartalmazza a 60. sor kérdésének válaszát („Melyik magyar királyt emlegetjük »Könyves« melléknévvel?”), így egy korábbi kérdés ingyen megoldja a későbbit.
- **Javaslat:** Mindkét helyen cseréld a disztraktort: a 42. sorban „Könyves Kálmán” → „I. András”, a 64. sorban „Könyves Kálmán” → „III. Béla” (mindkettő korban és rangban illik a többi opcióhoz).

**part1_kat01-05.js:126** · `Ténybeli hiba / vitatott adat`  
> Melyik évben volt a nándorfehérvári diadal?

- **Baj:** A note kijelentő módban állítja, hogy a déli harangszó a diadal emlékére szól, holott III. Kallixtusz pápa még a csata ELŐTT, imára rendelte el a déli harangozást – ezt csak a hagyomány kapcsolta utólag a győzelemhez.
- **Javaslat:** note: „A déli harangozást a pápa még a csata előtt rendelte el imára – a hagyomány azóta köti a diadalhoz.” (A záró pont is hiányzik a jelenlegi szövegből.)

**part1_kat01-05.js:54** · `Félrecímkézett nehézség`  
> Melyik napon tört ki az 1956-os forradalom?

- **Baj:** Október 23. nemzeti ünnep, a hatfős családi asztalnál gyakorlatilag mindenki tudja – ez 1★-os kérdés, nem 2★-os, tehát 15 ponttal többet fizet a semminél.
- **Javaslat:** d: 1

**part1_kat01-05.js:127** · `Félrecímkézett nehézség`  
> Hány honvédtisztet végeztek ki Aradon 1849. október 6-án?

- **Baj:** A 13 aradi vértanú a legismertebb magyar történelmi szám, a tippelősben szinte mindenki telibe találja – 2★-nak van jelölve, valójában 1★.
- **Javaslat:** d: 1

**part1_kat01-05.js:82** · `Félrecímkézett nehézség`  
> Ki vezette az 1514-es parasztfelkelést?

- **Baj:** Dózsa György neve tananyag és közbeszéd is egyben; a felnőttek nagy többsége rávágja, ez tehát 2★, nem a pakli szívét adó 3★.
- **Javaslat:** d: 2

**part1_kat01-05.js:78** · `Félrecímkézett nehézség`  
> Melyik király uralkodott Magyarországon a tatárjárás idején?

- **Baj:** A IV. Béla–tatárjárás páros a „második honalapító” miatt az egyik legmélyebben rögzült iskolai tény, hatból négyen-öten tudják – 3★ helyett 2★.
- **Javaslat:** d: 2

**part1_kat01-05.js:139** · `Félrecímkézett nehézség`  
> Melyik évben tűnt el Petőfi Sándor a segesvári csatában?

- **Baj:** Aki tudja, hogy a szabadságharc 1848–49-ben zajlott (vagyis szinte mindenki), az tippelősben 1849-et ír – a 3★ itt nem szétválaszt, csak drágán fizet.
- **Javaslat:** d: 2

**part1_kat01-05.js:96** · `Ismétlés / sablon`  
> Melyik vár kapitányaként verte vissza Jurisics Miklós a török ostromot 1532-ben?

- **Baj:** Három kérdés (48., 72., 96. sor) ugyanazzal a sablonnal fut – „vár + kapitány + évszám” –, és a disztraktoraik egymás válaszai, tehát ha kettő egy meccsen belül jön, a második már majdnem ingyen van.
- **Javaslat:** Fordítsd meg a feladatot legalább ennél az egynél: q:"Ki volt Kőszeg várkapitánya az 1532-es török ostrom idején?", o:["Jurisics Miklós","Szondi György","Losonczy István","Dobó István"] – így a várnevek nem szerepelnek opcióként, és nem tanítják meg egymás válaszát.

**part1_kat01-05.js:94** · `Gyenge disztraktor / hossz-árulkodás`  
> Hogyan hívták Mátyás király állandó zsoldoshadseregét?

- **Baj:** A „Vörös sereg” 20. századi fogalom, öt évszázaddal odébbról – senkit nem bizonytalanít el, tehát csak díszlet, és egy negyeddel könnyebbé teszi a kérdést.
- **Javaslat:** o:["Fekete sereg","Királyi bandérium","Végvári hadak","Nemesi felkelés"] – mind a négy korabeli katonai fogalom.

**part1_kat01-05.js:118** · `Gyenge disztraktor / hossz-árulkodás`  
> Ki alapította a pálos rendet, az egyetlen magyar alapítású szerzetesrendet?

- **Baj:** Szent Margit apáca volt, nem rendalapító – férfi szerzetesrend alapítójaként fel sem merül, tehát a négyből valójában három opció verseng.
- **Javaslat:** o:["Boldog Özséb","Szent Gellért","Julianus barát","Kapisztrán János"] – mind a négy férfi szerzetes, akit a magyar egyháztörténet emleget.

**part1_kat01-05.js:135** · `Rossz tippelős kérdés`  
> Melyik évben halt meg I. (Szent) István király?

- **Baj:** A tétel 40 tippjéből 36 évszám (90%), és ez a kérdés a tipikus eset: nincs mit kikövetkeztetni, vagy tudod a számot, vagy vaktában lősz – ráadásul István már négy másik tételben szerepel.
- **Javaslat:** Alakítsd mennyiséggé: q:"Hány évig uralkodott I. (Szent) István királyként?", a:38, unit:"év", note:"1000 karácsonyától 1038-as haláláig ült a trónon – ez a leghosszabb Árpád-házi uralkodás."

**part1_kat01-05.js:133** · `Rossz tippelős kérdés`  
> Melyik évben foglalták vissza Budát a töröktől?

- **Baj:** Szintén tiszta évszám, pedig ugyanez a tény kikövetkeztethető formában is feltehető – az évszámarány csökkentése nélkül a tippelős tétel végig lexikonverseny marad.
- **Javaslat:** Alakítsd mennyiséggé: q:"Hány évig volt török kézen Buda vára?", a:145, unit:"év", note:"1541-től 1686-ig – a visszafoglaló ostrom után a város romhalmaz volt."

**part1_kat01-05.js:121** · `Érdektelen válasz`  
> Melyik évben volt a mohácsi csata?

- **Baj:** A note csak megismétli a választ dátummal kiegészítve – a vesztes nem kap érte semmit, pedig ennél a kérdésnél van mit mesélni.
- **Javaslat:** note: „A csata alig két óráig tartott, és a menekülő II. Lajos király a megáradt Csele-patakba fulladt.”

**part1_kat01-05.js:129** · `Érdektelen válasz`  
> Melyik évben adták ki az Aranybullát, a nemesi jogokat rögzítő oklevelet?

- **Baj:** A note szó szerint megismétli a kérdés magyarázó tagmondatát („a nemesi jogokat rögzítő oklevél”), így a hozzáadott érték egyetlen félmondat.
- **Javaslat:** Kérdés: „Melyik évben adta ki II. András az Aranybullát?” · note: „Hét évvel az angol Magna Carta után született, és a nemeseknek ellenállási jogot adott a királlyal szemben.”

**part1_kat01-05.js:134** · `Érdektelen válasz`  
> Melyik évben halt meg Mátyás király?

- **Baj:** A „Bécsben halt meg” note két szó, nincs benne „nahát”-élmény, és a záró pont is hiányzik.
- **Javaslat:** note: „Az általa elfoglalt Bécsben érte a halál; utódját, a Jagelló-házi II. Ulászlót a főurak épp gyengesége miatt választották meg.”


### Magyar irodalom

**part1_kat01-05.js:192** · `Ismétlés / sablon`  
> Ki írta a Tiszta szívvel című verset?

- **Baj:** A 29 darab „Ki írta…” egyike; ugyanez a tudás sokkal élvezetesebben kérhető idézet felől, és a vers első sora ennél a műnél közismerten idézhető.
- **Javaslat:** q:"Melyik költő verse kezdődik így: „Nincsen apám, se anyám, se istenem, se hazám”?", o:["József Attila","Ady Endre","Radnóti Miklós","Juhász Gyula"], d:3.

**part1_kat01-05.js:218** · `Ismétlés / sablon`  
> Ki írta az Utas és holdvilág című regényt?

- **Baj:** Szintén „Ki írta” sablon, pedig a regénynek van egy azonnal felismerhető, mesélhető alaphelyzete, amiből jobb kérdés lesz.
- **Javaslat:** q:"Melyik regény hőse Mihály, aki a nászútján, Itáliában szökik meg a felesége mellől?", o:["Utas és holdvilág","A gyertyák csonkig égnek","Édes Anna","Iskola a határon"], d:4.

**part1_kat01-05.js:180** · `Ismétlés / sablon`  
> Ki írta Az ember tragédiája című drámai költeményt?

- **Baj:** „Ki írta” sablon egy olyan műnél, amelynek a szereplőgárdája önmagában is remek kérdés – a mostani forma a legszárazabb változat.
- **Javaslat:** q:"Melyik mű három főszereplője Ádám, Éva és Lucifer?", o:["Az ember tragédiája","Bánk bán","Csongor és Tünde","A kőszívű ember fiai"], d:2.

**part1_kat01-05.js:170** · `Ismétlés / sablon`  
> Ki írta a János vitéz című elbeszélő költeményt?

- **Baj:** A négy 1★-os kérdés mind ugyanaz a feladat (kötelező olvasmány → szerző), és háromban ugyanabból a Petőfi/Arany/Vörösmarty névhármasból kell választani – a blokk egyhangú, és a második kérdéstől már mintafelismerés dönt.
- **Javaslat:** q:"Melyik elbeszélő költemény hősnője Iluska?", o:["János vitéz","Toldi","Ludas Matyi","A helység kalapácsa"], d:1.

**part1_kat01-05.js:232** · `Félrecímkézett nehézség`  
> Ki fordította magyarra a Micimackót, amelyet sokan az ered

- **Baj:** A „Karinthy fordította a Micimackót” anekdota a magyar közműveltség része, hatból reálisan kettő-három tudja – ez 3★, nem 4★.
- **Javaslat:** d:3. (A „amelyet sokan az eredetinél is jobbnak tartanak” tagmondat is Karinthy felé mutat, elhagyható: „Ki fordította magyarra a Micimackót?”)

**part1_kat01-05.js:172** · `Félrecímkézett nehézség`  
> Ki írta a Himnusz szövegét?

- **Baj:** A Himnusz–Kölcsey párosítás legalább olyan széles körben ismert, mint a Toldi–Arany (ami 1★): hatból öt-hat tudja, tehát a 2★ alulértékeli a nehézségét felfelé.
- **Javaslat:** d:1 (a kvótát a 220. sor 4★→5★ mozgatása és a 242. sor visszaminősítése úgyis átrendezi).

**part1_kat01-05.js:220** · `Félrecímkézett nehézség`  
> Ki írta a Fanni hagyományai című szentimentalista regényt?

- **Baj:** Kármán József neve érettségi utáni, ritkán felidézett tudás; hatból reálisan egy tudja, ez az 5★ sávja – és épp itt keletkezik hely, mert a 242. sor lekerül 5★-ról.
- **Javaslat:** d:5.

**part1_kat01-05.js:216** · `Megfogalmazás`  
> Melyik költőnk múzsája volt Léda, akihez híres versciklusá

- **Baj:** A mellékmondat alanya átcsúszik (Léda a múzsa, de a „versciklusát” a költőé), felolvasva döcög – márpedig ezt a játékot felolvassák.
- **Javaslat:** q:"Melyik költőnk verseinek múzsája volt Léda, azaz Brüll Adél?" – az opciók változatlanul jók.


### Magyarország földrajza

**part1_kat01-05.js:257** · `Ismétlés / sablon`  
> Melyik nemzeti parkban található a Baradla-cseppkőbarlang?

- **Baj:** Három azonos sablon: „Melyik nemzeti parkban/nemzeti park területén/nemzeti parkhoz tartozik …?” (257 Baradla, 277 Szalajka-völgy, 287 bugaci puszta), és mindháromnál ugyanaz a négy nemzeti park forog disztraktorként. A kategóriában összesen 5 nemzeti park-kérdés van.
- **Javaslat:** Az egyiket fordítsd meg (park → nevezetesség): „Melyik látnivaló található a Hortobágyi Nemzeti Parkban?” ✓Kilenclyukú híd \| Szalajka-völgy \| Baradla-barlang \| Ős-Dráva ártér (d2).

**part1_kat01-05.js:338** · `A kérdés elárulja a válaszát`  
> Hány méter magas a mátrai Galyatető?

- **Baj:** A kérdés („mátrai Galyatető”) és a note („A Mátra második legmagasabb csúcsa.”) együtt odaadja a 265. sor válaszát („Melyik hegységben emelkedik a Kékes?” → Mátra), mert a 247. sor szerint a Kékes az ország legmagasabb pontja, a Galyatető pedig itt disztraktor.
- **Javaslat:** A note ne hivatkozzon a Mátra sorrendjére: „Az 1930-as években épült turistaháza az ország egyik első magashegyi üdülőhelye volt.”

**part1_kat01-05.js:342** · `A kérdés elárulja a válaszát`  
> Milyen hosszú a Sió-csatorna, amely a Balaton vizét a Dun

- **Baj:** A kérdés mellékmondata („amely a Balaton vizét a Dunába vezeti”) kiejti a Siót a 293. sor kérdésének („Melyik folyó torkollik a Balatonba?” → Zala) disztraktorai közül, vagyis négyből háromra szűkíti azt a kérdést.
- **Javaslat:** Rövidítsd a kérdést mellékmondat nélkülire: „Milyen hosszú a Sió-csatorna?” — a Sió ismerete nélkül is becsülhető, és nem szivárogtat.

**part1_kat01-05.js:261** · `Félrecímkézett nehézség`  
> Melyik folyó szeli ketté Budapestet?

- **Baj:** d:2-nek jelölve, de ezt hatból hatan tudják — könnyebb, mint a d:1-es szegedi párja (249). 90% fölötti találati arány mellett 90 pontot fizet.
- **Javaslat:** d:1

**part1_kat01-05.js:259** · `Félrecímkézett nehézség`  
> Melyik tó Közép-Európa legnagyobb tava?

- **Baj:** d:2, pedig a négy magyar tó közül a Balaton a mezőny messze legnagyobbja — magyar asztalnál gyakorlatilag mindenki rávágja.
- **Javaslat:** d:1 — vagy tartsd meg 2★-nak úgy, hogy a disztraktorok külföldi tavak legyenek (Bodeni-tó, Genfi-tó, Skadari-tó), ott már tényleg elbizonytalanodik a fél asztal.

**part1_kat01-05.js:321** · `Megfogalmazás`  
> Melyik a leghosszabb, teljes hosszában Magyarországon fol

- **Baj:** „…Magyarországon folyó folyó” — szóismétlés, felolvasva zavaró; a mondat elején a „leghosszabb” és a feltétel is nehezen fogható meg elsőre.
- **Javaslat:** „Melyik a leghosszabb folyónk, amely teljes hosszában Magyarországon halad?” (a Zagyva 179 km-es válasz marad)

**part1_kat01-05.js:253** · `Megfogalmazás`  
> Melyik országgal NEM határos Magyarország?

- **Baj:** Tagadó kérdés időnyomás alatt: könnyű félreolvasni, és a kategóriában ez az egyetlen ilyen. Ráadásul a 328. sor tippje ugyanezt a tudást kéri (hány országgal határos), így tematikusan is átfed.
- **Javaslat:** Fordítsd állítóra: „Melyik ország határa a legrövidebb a magyar határszakaszok közül?” ✓Szlovénia \| Ukrajna \| Ausztria \| Szerbia (d3) — vagy: „Melyik szomszédunkkal határos Magyarország a Duna mentén?”

**part1_kat01-05.js:332** · `Hiányzó note`  
> Hány négyzetkilométer Magyarország területe?

- **Baj:** A note („kb. 93 030 km²”) csak megismétli a választ, tehát semmit nem ad a vesztesnek — kihagyott ziccer.
- **Javaslat:** note: „Nagyjából akkora, mint Portugália – és épp elfér benne kétszer Belgium.”

**part1_kat01-05.js:329** · `Hiányzó note`  
> Hány kerülete van Budapestnek?

- **Baj:** Üres note.
- **Javaslat:** note: „A XXIII. kerület a legfiatalabb: Soroksár csak 1994-ben vált ki a XX. kerületből.”

**part1_kat01-05.js:330** · `Hiányzó note`  
> Hány méter magas a Kékes?

- **Baj:** Üres note. (A note ne mondja ki, hogy ez az ország legmagasabb pontja – azt a 247. sor kérdezi.)
- **Javaslat:** note: „A csúcson álló tévétorony kilátójából tiszta időben a Magas-Tátra is kivehető.”

**part1_kat01-05.js:339** · `Hiányzó note`  
> Hány méter magas a Bakony legmagasabb csúcsa, a Kőris-heg

- **Baj:** Üres note.
- **Javaslat:** note: „Csúcsát évtizedekig katonai objektum foglalta el, ezért sokáig zárt terület volt a turisták előtt.”

**part1_kat01-05.js:342** · `Hiányzó note`  
> Milyen hosszú a Sió-csatorna, amely a Balaton vizét a Dun

- **Baj:** Üres note.
- **Javaslat:** note: „A siófoki zsilippel szabályozzák a Balaton vízszintjét – a tónak ez az egyetlen kifolyása.”

**part1_kat01-05.js:344** · `Hiányzó note`  
> Mekkora Budapest területe?

- **Baj:** Üres note.
- **Javaslat:** note: „A mai kiterjedést 1950-ben kapta, amikor hét várost és tizenhat községet csatoltak a fővároshoz.”

**part1_kat01-05.js:345** · `Hiányzó note`  
> Milyen hosszú a magyar–osztrák határszakasz?

- **Baj:** Üres note.
- **Javaslat:** note: „Ezen a szakaszon, Sopronpuszta mellett nyílt meg 1989-ben a páneurópai piknik határkapuja.”

**part1_kat01-05.js:346** · `Hiányzó note`  
> Hány méter magas a lillafüredi Szinva-vízesés, Magyarorsz

- **Baj:** Üres note.
- **Javaslat:** note: „A Palotaszálló kertje alól zuhan alá – a víz a Hámori-tóból érkezik.”


### Magyar nyelv és szólások

**part1_kat01-05.js:369** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik nyelvcsaládba tartozik a magyar nyelv?

- **Baj:** A helyes válasz az egyetlen, amelyben zárójeles pontosítás van, és 2,53×-a a disztraktorok átlagának – a forma önmagában kijelöli. (Tartalmilag helyes.)
- **Javaslat:** o:["finnugor","indoeurópai","türk","sémi"] – így minden opció egyszavas nyelvcsalád-név, a helyes nem lóg ki.

**part1_kat01-05.js:391** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a régies „kelme” szó?

- **Baj:** Hossz-árulkodás (1,6×), és a „Fejfedő” feltűnően rövid. Kis kérdés, olcsó javítás.
- **Javaslat:** o:["Szövet, textília","Cserépkorsó, edény","Fejre való kendő","Faragott kéziszerszám"]

**part1_kat01-05.js:411** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a „hűbelebalázs módjára” kifejezés?

- **Baj:** Hossz-árulkodás (1,52×) – a helyes két hosszú határozószó, a rosszak egyre rövidülnek.
- **Javaslat:** o:["Meggondolatlanul, elhamarkodottan","Alaposan, körültekintően, lassan","Titokban, lopakodva, észrevétlen","Nagy zajjal, feltűnősködve"]

**part1_kat01-05.js:351** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a szólás: „Egyik kutya, másik eb”?

- **Baj:** A helyes válaszban lévő „(rossz)” zárójeles kiegészítés az egyetlen ilyen elem a négy opció közt – apró formai nyíl a megoldásra, és felolvasva is döccen (a játékot felolvassák).
- **Javaslat:** o:["Mindkettő egyformán rossz","Nagyon különböznek egymástól","Halálosan összevesztek","Elválaszthatatlan jó barátok"]

**part1_kat01-05.js:419** · `A kérdés elárulja a válaszát`  
> Mit jelent a régi latin mondás: „Extra Hungariam non est vita”?

- **Baj:** A „Hungariam … non est vita” latin szavai gyakorlatilag szó szerint megegyeznek a helyes válasszal („Magyarországon kívül nincs élet”) – minimális latin- vagy nyelvérzékkel kikövetkeztethető, tehát nem 4★-os tudáspróba, hanem fordítási feladat.
- **Javaslat:** A szállóige kevésbé ismert második felére kérdezz: q:"Hogyan folytatódik a szállóige? „Extra Hungariam non est vita, si est vita...”" · o:["...non est ita (nem ilyen)","...non est vera (nem igazi)","...non est mea (nem az enyém)","...non est bona (nem jó)"]

**part1_kat01-05.js:401** · `Rossz tippelős kérdés`  
> Melyik a leggyakoribb magánhangzó a magyar nyelvben?

- **Baj:** Ténybelileg rendben (az „e” a leggyakoribb betű is), de a négy opció közt nincs mit kikövetkeztetni: az „e” és az „a” közti választás az asztalnál tiszta érzés/szerencse, 3★-ért (100 p).
- **Javaslat:** Vagy d:2-re vidd le, vagy tedd következtethetővé: q:"Melyik magyar magánhangzónak nincs rövid párja a mai köznyelvben?" o:["á","o","ü","e"] – itt a kiejtésből tényleg le lehet vezetni.

**part1_kat01-05.js:399** · `Félrecímkézett nehézség`  
> Mit csinál az, aki „itatja az egereket”?

- **Baj:** Széles körben ismert, gyerekeknek is tanított szólás; a „Sír” egyszavas válasz mellett a többi opció sem igazán csábít. Reálisan 2★ (~70%), nem 3★.
- **Javaslat:** d:2

**part1_kat01-05.js:367** · `Ismétlés / sablon`  
> Melyik írásmód helyes?

- **Baj:** Négy helyesírási tétel fut szinte azonos kérdésszöveggel (355. „Melyik a helyes írásmód?”, 367. „Melyik írásmód helyes?”, 393., 405.). Tartalmilag mind más, de a játékban egymás után kerülve ismétlésnek hatnak, és a 40-ből 24 másik kérdés is ugyanaz a „Mit jelent a szólás…?” séma.
- **Javaslat:** Írd át a kérdésfejeket beszédesre – pl. 367: "Melyik szó van helyesen leírva a 'kevésbé nagy' jelentésben?", 355: "A négy alak közül melyiket fogadja el a helyesírási szabályzat?" –, és 2-3 szólás-kérdést válts át más agyi műveletre ("Melyik szólás jelenti azt, hogy…?", "Melyik szólásban szerepel a 'guba' szó?").

**part1_kat01-05.js:427** · `Ismétlés / sablon`  
> Mit jelentett a régi magyar nyelvben a „pest” szó, amely...

- **Baj:** A 427. és a 429. sor kérdésfeje karakterre majdnem azonos („Mit jelentett a régi magyar nyelvben a(z) … szó, amely …-ban él tovább?”), és a négy 5★-os kérdésből három ugyanaz a „mit jelentett eredetileg a szó” séma. Ugyanabban a paklikban egymás után kimondottan feltűnő.
- **Javaslat:** Egyikük váltson műveletet, pl.: q:"Melyik magyar városnév őrzi a 'kemence' jelentésű régi szót?" o:["Pest","Kaba","Gyoma","Tab"] – így a 429. sor „mit jelentett” sémája marad egyedül.


### Magyar néphagyomány

**part1_kat01-05.js:462** · `Félrecímkézett nehézség`  
> Gyertyaszentelőkor (február 2-án) melyik állat viselkedé

- **Baj:** A medve árnyékos időjóslása közismert (a köznyelvi „medve kibújik a barlangból” fordulat, a mesekönyvek és a Mackó-nap révén) – hatból négy-öt tudja, nem három.
- **Javaslat:** d: 3 → 2

**part1_kat01-05.js:450** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit tartottak régen a festett tulipános ládában?

- **Baj:** Enyhe hossz-árulkodás + halmaz-törés: a „A szerszámokat” (14 karakter) nyilvánvalóan nem illik egy díszes menyasszonyi bútorhoz, így három opcióra szűkül a választás.
- **Javaslat:** o:["A menyasszony kelengyéjét","A család ünnepi ruháit","A vasárnapi kalácsot és bort","A ház iratait és pénzét"]

**part1_kat01-05.js:486** · `A kérdés elárulja a válaszát`  
> Mit készítettek az aratás végén az utolsó kévéből?

- **Baj:** A kérdés „aratás” szava egyedül a helyes válaszban tér vissza („Aratókoszorút”) – a verify.js szóegyezés-szabálya is ezt fogja. Ráadásul a „Kenyérsütő lapátot” nem is kévéből készülhetne, tehát önként kiesik.
- **Javaslat:** q:"Mit fontak a régi falvakban az utolsó learatott kévéből?", o:["Aratókoszorút","Szalmabábut","Termésőrző csutakot","Kévekötő szalmakötelet"]

**part1_kat01-05.js:448** · `Ismétlés / sablon`  
> Melyik mesterember készíti a fahordót?

- **Baj:** A 482-es kérdés („Melyik mesterember készítette a szekérkereket?” → Bognár) ennek pontos tükre: a két kérdés egymás disztraktorát oldja meg. Ha egy játszmában mindkettő kijön, a második ingyen pont.
- **Javaslat:** Az egyiket írd át más művelet-sémára, pl. q:"Melyik mesterség eszköze a donga és az abroncs?", o:["A kádáré","A bognáré","A szíjgyártóé","A takácsé"] – vagy vedd ki a kádárt a 482 disztraktorai közül (helyette "Szűcs").

**part1_kat01-05.js:458** · `Érdektelen válasz`  
> Mit ültetnek hagyományosan Luca napján, hogy karácsonyra

- **Baj:** Három Luca-napi kérdés áll a kategóriában (452 lucaszék, 458 Luca-búza, 512 kotyolás – utóbbi helyes válasza is „Luca-napi”). Egyetlen 40 kérdéses kategóriában ez torlódás, és a 15 kérdéses paklikban is összejöhet kettő.
- **Javaslat:** Vagy a 458-at fogalmazd át tágabbra (q:"Melyik gabonát csíráztatták cserépben adventben, hogy karácsonyra kizöldüljön?"), vagy a hármas egyikét cseréld más jeles napra (pl. Aprószentek, Balázs-járás, Gergely-járás).

**part1_kat01-05.js:434** · `Második védhető válasz`  
> Hogyan kezdődik a legtöbb magyar népmese?

- **Baj:** Az „Az Óperenciás-tengeren is túl…” valójában UGYANANNAK a mesekezdő formulának a folytatása („Hol volt, hol nem volt, az Óperenciás-tengeren is túl…”) – egy tájékozott játékos védhetné. 1★-os slot, ahol semmi vitának nem szabad lennie.
- **Javaslat:** Cseréld a disztraktort semlegesre: o:["Hol volt, hol nem volt...","Réges-régen, messze földön...","Volt egyszer egy király...","Élt egyszer egy szegény ember..."]

**part1_kat01-05.js:478** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi volt a verbunkos eredeti szerepe?

- **Baj:** A négy opció nem egy halmaz: a helyes „Katonatoborzó tánc volt” mondat, a többi főnévi szerkezet („Lakodalmi búcsúztató”, „Gyászszertartás része”) – a regiszter-eltérés önmagában jelzés.
- **Javaslat:** o:["Katonatoborzó tánc volt","Lakodalmi búcsúztató tánc volt","Aratóünnepi körtánc volt","Gyászszertartás zárótánca volt"]

**part1_kat01-05.js:440** · `A kérdés elárulja a válaszát`  
> Mit készít a csizmadia mester?

- **Baj:** A „csizmadia” szó tartalmazza a csizmát, ami maga is lábbeli – a válasz a kérdésben van. 1★-os slotként elmegy, de a mérce szerint ez pont az a fajta „ingyen” kérdés, ami nem választ szét.
- **Javaslat:** Tedd izgalmasabbá ugyanabból a tudásból: q:"Melyik mesterember dolgozott kaptafával és dikiccsel?", o:["A csizmadia","A kádár","A bognár","A kalapos"] – marad 1–2★, de tanít is.

**part1_kat01-05.js:456** · `Megfogalmazás`  
> Kit nevezünk „a nagy mesemondónak”, a magyar gyermekiroda

- **Baj:** A kérdés kétszer mondja ki ugyanazt („a nagy mesemondó” + „klasszikus mesegyűjtő”), és a mellékmondat fölösleges – hosszú, felolvasva nehézkes. A mérce a fölösleges mellékmondatokat tiltja.
- **Javaslat:** q:"Kit neveznek a magyar gyermekirodalomban „a nagy mesemondónak”?" – az opciók maradhatnak.


### Gasztronómia

**part2_kat06-10.js:5** · `A kérdés elárulja a válaszát`  
> Melyik város híres a csabai kolbászról?

- **Baj:** A „csabai” jelző kimondja a választ (Csaba → Békéscsaba), a három disztraktor ráadásul borváros, nem kolbászváros – nem egy halmaz, így 1★-on is ingyen pont.
- **Javaslat:** Kérdés: „Melyik alföldi város kolbászfesztiválja a legrégebbi, és melyikről kapta a nevét a hungarikum kolbász?” helyett inkább kolbászos halmaz: helyes „Békéscsaba”, disztraktorok „Gyula”, „Debrecen”, „Szeged”.

**part2_kat06-10.js:11** · `Érdektelen válasz`  
> Melyik országból származik a pizza?

- **Baj:** Technikailag hibátlan, de nulla megkülönböztető erő és nulla „nahát”-élmény: mind a hat játékos rávágja, a helyes válasz a legunalmasabb a négy közül.
- **Javaslat:** Cseréld olyan 1★-ra, amin van mit tanulni, pl. „Melyik város a pizza szülővárosa?” – helyes „Nápoly”, disztraktorok „Róma”, „Milánó”, „Firenze”.

**part2_kat06-10.js:19** · `Ismétlés / sablon`  
> Melyik két város híres leginkább a halászléjéről?

- **Baj:** A 19. és az 57. sor kérdése azonos sémájú („Melyik két város…”), és két disztraktor-párjuk szó szerint egyezik („Debrecen és Gyula”, „Eger és Tokaj”) – egymás mellé kerülve gépiesnek hat, és aki az egyiket kizárta, a másikat is kizárja.
- **Javaslat:** Az egyik kérdés disztraktorait cseréld le (pl. halászlénél „Szolnok és Tiszafüred”, „Paks és Dunaújváros”, „Mohács és Baja” helyett új hármas), vagy fogalmazd át az egyiket egyes számúra.

**part2_kat06-10.js:41** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent az olasz konyhában az „al dente”?

- **Baj:** Hossz-árulkodás: a helyes opció a leghosszabb és a legárnyaltabb („A tészta harapható, kissé kemény marad”), a három rossz rövid és kategóriaidegen (szósz, frissesség, sajt) – a helyes az egyetlen, ami a tészta állagáról szól.
- **Javaslat:** Mind a négy opció szóljon az állagról, azonos hosszan: „A tészta kissé keményre főve marad” / „A tészta teljesen puhára fő” / „A tésztát hideg vízzel öblítik le” / „A tésztát a szószban főzik készre”.

**part2_kat06-10.js:43** · `Megfogalmazás`  
> Melyik francia sajt híres a kék penészereiről?

- **Baj:** Regiszter-keveredés: a helyes válasz magyaros átírással szerepel („Rokfort”), a három disztraktor eredeti francia alakban („Camembert”, „Brie”, „Gruyère”) – a kilógó írásmód önmagában jelzés.
- **Javaslat:** Írd egységesen: „Roquefort”, „Camembert”, „Brie”, „Gruyère”.

**part2_kat06-10.js:59** · `Félrecímkézett nehézség`  
> Mi a tarhonya?

- **Baj:** Kettős baj: a tarhonya konyhai alapismeret (2★ szint), a helyes opció ráadásul messze a leghosszabb („Apró, gömbölyded szemekre morzsolt tojásos száraztészta”) a három rövid disztraktorhoz képest.
- **Javaslat:** d: 2, és tömörítsd a helyes opciót („Morzsolt tojásos száraztészta”), a rosszakat pedig töltsd fel azonos hosszúságúra („Kukoricadarából főzött sűrű kása” → „Kukoricadarából főzött kása” stb.).

**part2_kat06-10.js:71** · `Elévülő tény`  
> Melyik ital a világ legtöbbet fogyasztott itala a víz után?

- **Baj:** Megdönthető rekord-szuperlatívusz („a legtöbbet fogyasztott”), ráadásul mérésfüggő (mennyiség vagy adagszám szerint mérve más jöhet ki) – a kérdésírási mérce ezt a típust vagy dátumhoz kötteti, vagy átfogalmaztatja.
- **Javaslat:** Fogalmazd át állandó tényre: „Melyik ital készül a világon a legrégebb óta termesztett teacserje leveléből?”, vagy: „Melyik ital fogyasztása terjedt el először Kínából a világ többi részére?” – helyes: a tea.

**part2_kat06-10.js:79** · `A kérdés elárulja a válaszát`  
> Mi a szusi mellé kínált zöld, csípős wasabi?

- **Baj:** Kereszt-szivárgás: a helyes opció („Japán torma”) kimondja, hogy a szusi japán – ez a 31. sor kérdésének („Melyik ország nemzeti étele a sushi?”) válasza. Ráadásul a két kérdés egyszerre is kijöhet ugyanabban a pakliban.
- **Javaslat:** A helyes opció legyen „Reszelt tormaféle gyökér”, a disztraktorok „Zöld chiliszósz” / „Avokádókrém” / „Erjesztett szójapaszta”; a japán vonatkozás menjen át a reveal-be vagy maradjon ki.

**part2_kat06-10.js:81** · `Félrecímkézett nehézség`  
> Miből készül a tofu?

- **Baj:** Konyhai alapismeret 3★-ra címkézve: a szójabab–tofu kapcsolat a boltok címkéiről is ismerős, a disztraktorok (rizs, kecsketej, búzasikér) nem kísértenek meg senkit.
- **Javaslat:** d: 2. Ha 3★-os slot kell, kérdezd inkább a seitan-t: „Miből készül a húshelyettesítő szejtán?” – „Búzasikérből” / „Szójababból” / „Borsófehérjéből” / „Kukoricakeményítőből”.

**part2_kat06-10.js:83** · `Félrecímkézett nehézség`  
> Miből erjesztik a japán szakét?

- **Baj:** A rizsbor-tudás széles körben ismert, a disztraktorok (szilva, árpa, édesburgonya) nem hihetőek eléggé – valós nehézsége 2★.
- **Javaslat:** d: 2, vagy nehezítsd hihető halmazra: a japán párlatok közül a „szocsu” alapanyagai (árpa, édesburgonya) valódi kísértést adnak, ha a kérdés így szól: „Melyik alapanyagból NEM készül hagyományosan szaké?” – de a tagadó kérdést kerüljük, tehát inkább maradjon 2★.

**part2_kat06-10.js:85** · `Második védhető válasz`  
> Mi a közel-keleti hummusz fő alapanyaga?

- **Baj:** A szezámmag (tahini formájában) a hummusz másik definitív alapanyaga, tehát egy tájékozott játékos védeni tudná – csak a „fő” szó menti meg a kérdést.
- **Javaslat:** Egyértelműsítsd: „Melyik hüvelyesből készül a hummusz krémes alapja?” – így a szezámmag disztraktor is maradhat, de már nem védhető válasz.

**part2_kat06-10.js:93** · `Ténybeli hiba / vitatott adat`  
> Melyik ország rakott padlizsános étele a musszaka?

- **Baj:** Balkáni-oszmán közös étel: a bolgár musaka valódi, létező változat (ott jellemzően burgonyával), tehát a Bulgária disztraktor részben védhető – a görög változatot a besamel és a padlizsán különbözteti meg.
- **Javaslat:** Kösd a kérdést a jellegzetes görög jegyhez: „Melyik ország padlizsános rakott étele készül vastag besamelréteggel a tetején?” – Görögország / Bulgária / Libanon / Törökország.

**part2_kat06-10.js:97** · `Félrecímkézett nehézség`  
> Miből párolják a rumot?

- **Baj:** A cukornád–rum kapcsolat 2★ szintű általános műveltség; a burgonya és a szőlő disztraktorként nem működik (mindkettő más, közismert párlathoz kötődik).
- **Javaslat:** d: 2. 3★-os változat ugyanerre: „Melyik párlat készül cukornádmelaszból, és melyik a présmaradékból (bagasse)?” helyett inkább: „Miből párolják a cachaçát?” – „Friss cukornádléből” / „Melaszból” / „Kukoricából” / „Manióka gyökeréből”.

**part2_kat06-10.js:101** · `Félrecímkézett nehézség`  
> Miből készül a marcipán?

- **Baj:** Cukrászati alapismeret, a magyar családoknál a szentendrei marcipánmúzeum révén is közismert – reálisan 2★, nem 3★. Ugyanez a felülcímkézés érinti a 91. (fondü), 95. (tortilla) és 99. (pesto) sort is.
- **Javaslat:** d: 2 mind a négy kérdésnél; így a 3★-os sáv felszabadul a valóban 50%-os kérdéseknek.

**part2_kat06-10.js:107** · `Ténybeli hiba / vitatott adat`  
> Melyik magvas alapanyag jellemzi hagyományosan az Esterházy-torta…

- **Baj:** Vitatható adat: az osztrák Esterházytorte hagyományosan MANDULA- (részben mogyoró-) lapokból készül, a dió a magyar cukrászhagyomány változata. A mandula nem szerepel az opciók közt, ezért játékként működik, de a „hagyományosan” szó ténybelileg támadható.
- **Javaslat:** Pontosíts: „Melyik magvas alapanyagból készülnek a magyar cukrászhagyomány szerinti Esterházy-torta lapjai?” – így a dió egyértelműen helyes.

**part2_kat06-10.js:115** · `A kérdés elárulja a válaszát`  
> Milyen tejből készül az eredeti olasz mozzarella di bufala?

- **Baj:** A „bufala” szó a kérdésben lényegében kimondja a „bivalytej” választ még annak is, aki egy szót sem tud olaszul – 4★-hoz képest ez ingyen pont.
- **Javaslat:** „Milyen tejből készül a Nápoly környéki, eredetvédett campaniai mozzarella?” – Bivalytejből / Kecsketejből / Juhtejből / Tehéntejből (a tehéntej itt valódi kísértés: a boltinak az az alapja).

**part2_kat06-10.js:117** · `Ténybeli hiba / vitatott adat`  
> Melyik országból származik eredetileg a croissant őse, a kifli?

- **Baj:** Legendán alapuló eredettörténet (a bécsi kipferl és az 1683-as ostrom), amit a gasztrotörténet-írás vitat; a kérdés mégis tényként kezeli. A „croissant őse” betoldás ráadásul Franciaországot mint disztraktort erősen valószínűtlenné teszi.
- **Javaslat:** Fogalmazz óvatosan és ellenőrizhetően: „A hagyomány szerint melyik város péksüteménye, a kipferl volt a croissant előképe?” – Bécs / Párizs / Milánó / Prága.

**part2_kat06-10.js:141** · `Félrecímkézett nehézség`  
> Miről kapta a nevét a konyak?

- **Baj:** 5★-ra címkézve, de a francia Cognac város és a párlat kapcsolata középszintű általános műveltség; a disztraktorok (szőlőfajta, szerzetesrend, folyó) közül csak a szerzetesrend kísért – reálisan 3–4★.
- **Javaslat:** d: 4 (vagy 3). 5★-os változat: „Melyik francia borvidék párlata a konyak alapja?” – „Charente” / „Bordeaux” / „Burgundia” / „Provence”.


### Világtörténelem

**part2_kat06-10.js:174** · `Félrecímkézett nehézség`  
> Melyik ókori városban voltak a világ hét csodája közé sorolt fü

- **Baj:** A „babiloni függőkert” egybeforrott kifejezés a magyar nyelvben, tehát a kérdés lényegében a saját válaszát idézi fel. 3★-hoz túl könnyű.
- **Javaslat:** d:2. 3★-os alternatíva: „Melyik város kikötőjében állt a hét csoda közé sorolt világítótorony?” ✓Alexandriában \| Rodoszon \| Epheszoszban \| Karthágóban.

**part2_kat06-10.js:182** · `Félrecímkézett nehézség`  
> Melyik karthágói hadvezér kelt át i. e. 218-ban elefántjaival az

- **Baj:** Hannibál és az elefántok az Alpokban a legismertebb ókori képek egyike; a három disztraktor (Hasdrubal, Hamilkar, Mago) közül egyik sem ismerős annyira, hogy elbizonytalanítson. 3★-hoz könnyű.
- **Javaslat:** d:2. Ugyanebből a témából 4★-os feladat: „Melyik csatában semmisítette meg Hannibál a római sereget i. e. 216-ban?” ✓Cannae-nál \| Zamánál \| Trasimenus-tónál \| Trebiánál.

**part2_kat06-10.js:200** · `Félrecímkézett nehézség`  
> Melyik egyiptomi fáraó érintetlen sírját találta meg Howard Cart

- **Baj:** Tutanhamon aranymaszkja és az „érintetlen sír” fordulat elválaszthatatlanul összekapcsolódott; a többi fáraó (II. Ramszesz, Kheopsz, Ehnaton) sírja nem érintetlenként ismert. 3★-hoz könnyű.
- **Javaslat:** d:2.

**part2_kat06-10.js:202** · `Félrecímkézett nehézség`  
> Melyik makedón uralkodó terjesztette ki birodalmát egészen India

- **Baj:** A „makedón uralkodó” + „birodalom Indiáig” gyakorlatilag definíciója Nagy Sándornak. A II. Philipposz jó disztraktor, a Leónidasz (spártai) és a Perszeusz viszont nem tartja a szintet.
- **Javaslat:** d:2. 4★-os változat: „Melyik csatában győzte le Nagy Sándor III. Dareioszt i. e. 331-ben?” ✓Gaugamélánál \| Isszosznál \| Granikosznál \| a Hüdaszpésznél.

**part2_kat06-10.js:192** · `A kérdés elárulja a válaszát`  
> Melyik orosz uralkodó alapította Szentpétervárt?

- **Baj:** A város neve tartalmazza az uralkodó nevét („Péter”) – a helyes opció egy szava ott áll a kérdésben, a rossz opciókban pedig sehol. A mérce 3. pontja szerint ez egy nyíl a megoldásra, akkor is, ha a város valójában Szent Péter apostolról kapta a nevét.
- **Javaslat:** Fogalmazd át úgy, hogy a névegyezés eltűnjön: q:"Melyik orosz uralkodó nyitott »ablakot Európára« egy új, Néva-parti fővárossal?" – az opciók maradhatnak.

**part2_kat06-10.js:196** · `Ismétlés / sablon`  
> Melyik spanyol hódító igázta le az Inka Birodalmat?

- **Baj:** A 180. sor kérdése („Melyik indián birodalmat igázta le Hernán Cortés?” → az aztékot) és ez a kérdés ugyanannak a párosításnak a két oldala. Ha az egyik előbb jön, a másikban a Cortés-opció automatikusan kiesik, tehát négy helyett három válaszra szűkül a mezőny.
- **Javaslat:** Az egyiket írd át más agyi műveletre: „Melyik inka uralkodót ejtette foglyul és végeztette ki Pizarro Cajamarcában?” ✓Atahualpát \| Huaszkart \| Manco Kapakot \| Tupac Amarut — a téma marad, az átfedés megszűnik.

**part2_kat06-10.js:231** · `Rossz tippelős kérdés`  
> Melyik évben tört ki a második világháború?

- **Baj:** A 230. sorral (a háború vége) párban áll: két 1★-os évszám ugyanarról a háborúról. A kettőből legalább az egyik felszabadítható más feladattípusra.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:2, q:"Hány elefánttal indult el Hannibál az Alpokon át Itáliába?", a:37, unit:"elefánt", note:"Az átkelést alig néhány élte túl, és a csatákban is hamar elpusztultak – a legenda mégis róluk maradt fenn."} — így egy nem-évszámos ókori tétel is bekerül.

**part2_kat06-10.js:233** · `Hiányzó note`  
> Melyik évben omlott le a berlini fal?

- **Baj:** A note mindössze „november 9-én” – ez adat, nem „nahát”-tény, tehát a vesztes semmit nem visz haza a kérdésből. A mérce szerint az üres/sovány note kihagyott ziccer.
- **Javaslat:** note:"November 9-én egy sajtótájékoztatón félreolvasott mondat nyitotta meg a határt – az őrök a tömeget látva maguktól emelték fel a sorompót."

**part2_kat06-10.js:241** · `Hiányzó note`  
> Melyik évben koronázták császárrá Nagy Károlyt Rómában?

- **Baj:** A note egyetlen szókapcsolat („karácsony napján”), és nincs benne semmi meglepő. Egy 3★-os tipp után ennél többet érdemel az asztal.
- **Javaslat:** note:"800 karácsonyán III. Leó pápa a mise közben, váratlanul tette a fejére a koronát – Károly állítólag nem örült neki, mert így úgy tűnt, a koronát a pápától kapja."

**part2_kat06-10.js:236** · `Megfogalmazás`  
> Időszámításunk előtt melyik évben gyilkolták meg Julius Caesart

- **Baj:** Az üres unit miatt a játék évszámként formázza a 44-et, a kérdés viszont időszámítás előtti évet kér. Aki gyorsan olvas, könnyen ír −44-et vagy 44-et találgatva, hogy melyiket várja a mező.
- **Javaslat:** Tedd egyértelművé a beviteli formát: q:"Hányban gyilkolták meg Julius Caesart – írd be az időszámításunk előtti évszámot pozitív számként!" – vagy váltsd nem-évszámosra: „Hány késszúrást kapott Julius Caesar a merénylők szerint?” a:23, unit:"szúrás".

**part2_kat06-10.js:206** · `Félrecímkézett nehézség`  
> Melyik államférfi nevéhez kötődik az athéni demokrácia fénykora

- **Baj:** A „Periklész kora” a magyar tankönyvekben állandósult kifejezés az athéni demokrácia fénykorára, tehát a kérdés lényegében a bevésett szókapcsolatot kéri vissza. 4★-hoz könnyű; a Szolón és Kleiszthenész viszont valóban jó disztraktor.
- **Javaslat:** d:3. 4★-os változat ugyanezekkel az opciókkal: „Melyik athéni államférfi vezette be az adósrabszolgaság eltörlését?” ✓Szolón.

**part2_kat06-10.js:154** · `Érdektelen válasz`  
> Melyik országban uralkodtak a fáraók?

- **Baj:** Technikailag hibátlan 1★, de a helyes válasz nem tanít semmit, és a négy opció közül kettő (Mezopotámia, Perzsia) nem is ország a kérdés értelmében – tehát a halmaz sem egységes.
- **Javaslat:** Tartsd meg az 1★-os szintet, de legyen fogása: „Melyik folyó áradása tette termékennyé a fáraók birodalmát?” ✓A Nílus \| Az Eufrátesz \| A Tigris \| A Jordán — mind folyó, mind ókori, és a válasz mond is valamit.

**part2_kat06-10.js:156** · `A kérdés elárulja a válaszát`  
> Melyik ország uralkodója volt VIII. Henrik, a hat feleségéről is

- **Baj:** A „hat feleségéről is híres” mellékmondat nem a válaszra mutat, de fölösleges segítség (mérce 3. pont), és megakadályozza, hogy valaha írható legyen egy „Hány felesége volt VIII. Henriknek?” tipp – az ugyanis innen kiolvasható lenne.
- **Javaslat:** q:"Melyik ország uralkodója volt VIII. Henrik, aki szakított a pápasággal?" — így a mellékmondat is tanít valamit, és felszabadul a hat feleség egy későbbi kérdésre.

**part2_kat06-10.js:268** · `Rossz tippelős kérdés`  
> Melyik évben állította meg Martell Károly az arab előrenyomulást

- **Baj:** 5★-os évszám (732), amit a magyar asztalnál senki nem tud behatárolni jobban, mint „valamikor a 8. században” – tehát 125 pont a szerencsének. (A dátum ráadásul forrásfüggő: több feldolgozás 733-at ír.)
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:4, q:"Hány évig tartott a mórok uralma az Ibériai-félsziget egy részén, a partraszállástól Granada elestéig?", a:781, unit:"év", note:"711-től 1492-ig – a spanyol történelemben ezt a hosszú visszafoglalást nevezik reconquistának."}

**part2_kat06-10.js:247** · `Rossz tippelős kérdés`  
> Melyik évben fogadták el az amerikai Függetlenségi nyilatkozatot

- **Baj:** A 264. sorral (párizsi béke, 1783) együtt két évszám ugyanarról a függetlenségi háborúról; a note ráadásul kiírja a július 4-ét, ami a magyar játékosnak is közismert kapaszkodó.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:2, q:"Hány gyarmat kiáltotta ki függetlenségét az amerikai Függetlenségi nyilatkozatban?", a:13, unit:"gyarmat", note:"Ezért van tizenhárom csík az amerikai zászlón – a csillagok száma azóta nőtt, a csíkoké nem."}

**part2_kat06-10.js:253** · `Rossz tippelős kérdés`  
> Melyik évben pusztította el egy vulkánkitörés Pompeji városát?

- **Baj:** Kétjegyű évszám (79) egy olyan skálán, ahol a játékos nem tudja, hogy évszázadot vagy évtizedet kell-e célozni; aki „100 körül”-t ír, ugyanolyan messze jár, mint aki „50 körül”-t. Kevés kikövetkeztetnivaló, nagy szerencsefaktor.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:3, q:"Hány méter vastag hamu- és habkőréteg temette be Pompejit?", a:6, unit:"méter", note:"Épp ez a réteg őrizte meg a várost: a hamu megkeményedett a testek körül, és az így maradt üregekbe öntött gipsz mutatja ma az utolsó pillanatokat."}

**part2_kat06-10.js:265** · `Rossz tippelős kérdés`  
> Melyik évben indult el Magellán flottája az első Föld körüli haj

- **Baj:** 5★-os évszám (1519), amit a note maga is „lelő” azzal, hogy megadja az 1522-es visszatérést – így a kérdés nehézsége attól függ, ki hallotta már a note-ot. Kikövetkeztetni nem lehet.
- **Javaslat:** Cseréld: {cat:7, type:'tip', d:4, q:"Hányan tértek vissza Magellán öt hajójának mintegy 270 fős legénységéből?", a:18, unit:"fő", note:"Egyetlen hajó, a Victoria futott be Spanyolországba – Magellán maga a Fülöp-szigeteken esett el."}

**part2_kat06-10.js:216** · `A kérdés elárulja a válaszát`  
> Melyik konferencián osztották fel a szövetségesek az európai érd

- **Baj:** A kérdésszöveg évszáma (1945 februárjában) egyszerre segít a válaszban (Potsdam július, Teherán 1943, München 1938 – az évszám gyakorlatilag kizárja mindhármat) és szivárogtat a 230. sor tippjének megoldására.
- **Javaslat:** Vedd ki az évszámot, és a dátum helyett a résztvevőkkel horgonyozz: q:"Melyik konferencián egyezett meg Sztálin, Roosevelt és Churchill az európai érdekszférákról a háború végén?" — a négy opció így valóban dolgozni kezd.


### Világföldrajz

**part2_kat06-10.js:306** · `Félrecímkézett nehézség`  
> Melyik tengerszoros választja el Európát Afrikától?

- **Baj:** A Gibraltári-szoros az egyetlen opció, amelyik nem a török tengerszorosok vagy Itália környékén van – aki csak nagyjából ismeri a térképet, kizárásos alapon is odatalál. Reálisan 70% körüli tudás.
- **Javaslat:** d:2 (a 3★-os slotot a 342-es Boszporusz-kérdés amúgy is lefedi).

**part2_kat06-10.js:316** · `Félrecímkézett nehézség`  
> Melyik országban található a Machu Picchu?

- **Baj:** Az inkák és Peru összekapcsolása általános műveltség, az asztalnál a felnőttek biztosan tudják – 3★ helyett 2★-os tétel.
- **Javaslat:** d:2.

**part2_kat06-10.js:320** · `Félrecímkézett nehézség`  
> Melyik ország fővárosa Buenos Aires?

- **Baj:** Buenos Aires argentin volta a foci és a tangó révén széles körben ismert; a disztraktorok (Chile, Uruguay, Peru) sem bizonytalanítanak el. Reálisan 2★.
- **Javaslat:** d:2.

**part2_kat06-10.js:322** · `Félrecímkézett nehézség`  
> Melyik sivatag terül el Mongólia és Kína határvidékén?

- **Baj:** A Góbi a legismertebb ázsiai sivatag; a Takla-Makán, a Karakum és a Kizilkum ugyan jó, azonos halmazú disztraktorok, de a helyeset szinte mindenki tudja. Reálisan 2★.
- **Javaslat:** d:2.

**part2_kat06-10.js:334** · `Félrecímkézett nehézség`  
> Melyik a világ legmagasabb vízesése?

- **Baj:** Az Angel-vízesés „legmagasabb” volta klasszikus kvíztudás, a másik három (Viktória, Niagara, Iguazú) inkább bőségéről vagy szélességéről híres – a félig tájékozott is rátalál. 4★ helyett 3★.
- **Javaslat:** d:3.

**part2_kat06-10.js:330** · `Félrecímkézett nehézség`  
> Melyik két ország határán fekszik a Titicaca-tó?

- **Baj:** A Titicaca–Peru–Bolívia hármas iskolai törzsanyag; a párokat felkínáló forma tovább könnyíti. Reálisan 3★.
- **Javaslat:** d:3.

**part2_kat06-10.js:290** · `Félrecímkézett nehézség`  
> Melyik ország fővárosa Tokió?

- **Baj:** Gyakorlatilag mindenki tudja (a legfiatalabbat is beleértve) – 2★ helyett 1★-os tétel, most 90 pontot fizet ingyen.
- **Javaslat:** d:1.

**part2_kat06-10.js:286** · `Félrecímkézett nehézség`  
> Melyik óceán választja el Európát Észak-Amerikától?

- **Baj:** Alsó tagozatos tananyag, az asztalnál 95% rávágja – 1★-os slot.
- **Javaslat:** d:1.

**part2_kat06-10.js:282** · `Félrecímkézett nehézség`  
> Melyik kontinensen folyik az Amazonas?

- **Baj:** Az Amazonas és Dél-Amerika összekapcsolása gyerekeknek is megy; a 2★ itt felárat fizet.
- **Javaslat:** d:1 – vagy tedd 3★-ossá a feladat cseréjével: „Melyik két ország osztozik az Amazonas torkolatvidékén?” jellegű kérdéssel.

**part2_kat06-10.js:280** · `Érdektelen válasz`  
> Melyik ország fővárosa Canberra?

- **Baj:** A 40 mc-ből HAT azonos sablonú „Melyik ország fővárosa X?” (280 Canberra, 290 Tokió, 298 Ottawa, 308 Wellington, 320 Buenos Aires, 328 Najpjidó) – ugyanaz az agyi művelet hatszor, ettől listaszerű lesz a kategória.
- **Javaslat:** Kettőt-hármat írj át más sémára, ugyanabból a tudásból: „Melyik fővárost építették a nulláról, kifejezetten azért, hogy két rivális nagyváros vitáját lezárja?” o:["Canberra","Sydney","Melbourne","Brisbane"] · „Melyik ország fővárosa NEM a legnépesebb városa?” helyett inkább: „Melyik város veszítette el fővárosi rangját Ottawa javára?” · a Najpjidó-kérdés maradhat sablonos, mert ott a név maga az érdekesség.

**part2_kat06-10.js:372** · `A kérdés elárulja a válaszát`  
> Hány méter mély a Tanganyika-tó legmélyebb pontja?

- **Baj:** A note („Afrika legmélyebb tava”) kereszt-szivárgás a 300. sor mc-jéhez („Melyik a Föld legmélyebb tava?”), ahol épp a Tanganyika-tó az egyik disztraktor: aki látta ezt a note-ot, kizárja onnan.
- **Javaslat:** note:"Olyan mély és olyan régi, hogy a legalsó rétegeiben nincs oxigén – az élővilág a felső 200 méterben szorong." (A „legmélyebb” szuperlatívusz elhagyásával a szivárgás megszűnik.)

**part2_kat06-10.js:357** · `Ténybeli hiba / vitatott adat`  
> Milyen széles a La Manche csatorna a legkeskenyebb pontjá

- **Baj:** A Doveri-szoros legkeskenyebb szélességére a források 33 és 34 km-t is írnak (18 tengeri mérföld ≈ 33,3 km). A tipp így egy kilométeren múlhat, és a telitalálat forrásfüggő.
- **Javaslat:** note:"A Doveri-szorosnál, Dover és Calais között – ez 18 tengeri mérföld, tiszta időben át lehet látni a túlpartra. A leggyorsabb átúszás alig hét óra volt." (A 33-34 km-es szórás így legalább megmagyarázódik; a d:2 maradhat.)

**part2_kat06-10.js:354** · `Hiányzó note`  
> Hány tagországa maradt az Európai Uniónak az Egyesült Kir

- **Baj:** A note („Az Egyesült Királyság 2020-as kilépése óta.”) szó szerint megismétli a kérdés felét – nulla információ, kihagyott ziccer.
- **Javaslat:** note:"Az EU eddigi történetében egyetlen ország lépett ki, viszont Grönland már 1985-ben otthagyta – anélkül, hogy Dánia távozott volna."

**part2_kat06-10.js:373** · `Hiányzó note`  
> Hány méter magas a venezuelai Angel-vízesés?

- **Baj:** A note („Venezuelában, a Canaima Nemzeti Parkban zuhog alá”) a kérdésben már elhangzott országot ismétli, és mondatvégi pont sincs rajta.
- **Javaslat:** note:"Olyan magasról esik, hogy a víz java része már ködként ér földet – a szakadékot csak 1933-ban, repülőgépről vették észre."


### Világirodalom

**part2_kat06-10.js:409** · `Félrecímkézett nehézség`  
> Ki írta a Don Quijote című regényt?

- **Baj:** 3★, de Cervantes neve a Don Quijotéval együtt közismert, a másik három spanyol név (Lope de Vega, Calderón, Lorca) drámaíró/költő — a regény szó is elterel tőlük.
- **Javaslat:** d:2. Vagy tartsd a 3★-ot, de a feladatot cseréld: q:"Melyik regény hősének Sancho Panza a fegyverhordozója?", o:["A Don Quijote","A Lazarillo de Tormes","A Gargantua és Pantagruel","Az Orlando furioso"].

**part2_kat06-10.js:439** · `Félrecímkézett nehézség`  
> Ki írta A per és Az átváltozás című műveket?

- **Baj:** 4★, de Kafka és Az átváltozás (a bogárrá változó Gregor Samsa) a köztudat része, a „kafkai” jelző is segít; reálisan 45-55% tudja.
- **Javaslat:** d:3.

**part2_kat06-10.js:455** · `Ténybeli hiba / vitatott adat`  
> Melyik orosz író műve a Holt lelkek?

- **Baj:** Gogol ukrajnai (poltavai) születésű, orosz nyelven alkotó szerző — az „orosz író” besorolás vitatható, és épp az irodalomban járatos családtag fog belekötni. A kérdésnek amúgy sincs szüksége a nemzetiség-megjelölésre, mert mind a négy opció orosz nyelvű szerző.
- **Javaslat:** q:"Melyik szerző műve a Holt lelkek?" (a nemzetiség elhagyva); d:4, mert a Gogol–Holt lelkek páros érettségi anyag.

**part2_kat06-10.js:389** · `Gyenge disztraktor / hossz-árulkodás`  
> Ki írta A kis herceg című könyvet?

- **Baj:** Ugyanaz a hossz-árulkodás: „Antoine de Saint-Exupéry” (24 karakter) mellett „Albert Camus” és „Jules Verne” féltucat betűvel rövidebb; a hosszú, arisztokratikus hangzású név magától kiugrik.
- **Javaslat:** o:["Antoine de Saint-Exupéry","Alphonse de Lamartine","Jean de La Fontaine","Anatole France"] — mind francia, mind többtagú név.

**part2_kat06-10.js:379** · `A kérdés elárulja a válaszát`  
> Melyik dán meseíró írta A kis hableányt és A rút kiskacsát?

- **Baj:** A „dán” jelző egyedül Andersenre illik a négy opció közül (Grimm német, Perrault francia, Lindgren svéd) — aki a nemzetiségeket tudja, mesetudás nélkül is talál. 1★-on ez még megbocsátható, de fölösleges segítség.
- **Javaslat:** q:"Melyik meseíró írta A kis hableányt és A rút kiskacsát?" (a „dán” elhagyva) — a nehézség marad 1★, a válasz viszont a mesékből jön.

**part2_kat06-10.js:401** · `Gyenge disztraktor / hossz-árulkodás`  
> Ki írta a Száz év magány című regényt?

- **Baj:** Pablo Neruda költő, egyetlen regényt sem írt — a „regényt” szó kizárja, tehát csak díszlet a negyedik helyen. Borges is kizárólag novellista, ő még védhető, de a mezőny fele nem működik.
- **Javaslat:** o:["Gabriel García Márquez","Mario Vargas Llosa","Julio Cortázar","Carlos Fuentes"] — mind latin-amerikai regényíró, mind a „boom” nemzedékből.

**part2_kat06-10.js:431** · `Ismétlés / sablon`  
> Ki írta A dzsungel könyvét?

- **Baj:** Harmadik „Ki írta…?” ugyanazzal a Kipling/London/Twain/Stevenson kalandíró-mezőnnyel, ami a 411. és a 423. sorban is majdnem azonos. A mű szereplői viszont mindenkinek megvannak.
- **Javaslat:** q:"Melyik mű szereplője Bagira, a fekete párduc és Balu, a medve?", o:["A dzsungel könyve","A Vadon szava","Az elveszett világ","A kincses sziget"], d:2.

**part2_kat06-10.js:427** · `Ismétlés / sablon`  
> Ki írta a Büszkeség és balítélet című regényt?

- **Baj:** A négy angol írónő jó halmaz, de a feladat megint puszta szerző-párosítás. Ennél a regénynél kínálja magát a leghíresebb magyar fordításban is idézhető kezdősor — ez az egyetlen idézetes kérdés lehetne a kategóriában.
- **Javaslat:** q:"Melyik regény kezdősora: „Általánosan elismert igazság, hogy a legényembernek, ha vagyonos, okvetlenül kell feleség”?", o:["A Büszkeség és balítélet","A Jane Eyre","Az Üvöltő szelek","A Middlemarch"], d:3.

**part2_kat06-10.js:435** · `Ismétlés / sablon`  
> Ki írta A Mester és Margarita című regényt?

- **Baj:** Negyedik szerző-párosítás az orosz blokkban (385., 391., 419., 435. mind ugyanaz a séma, részben átfedő névlistával). A regénynek viszont az egyik legemlékezetesebb nyitánya van az egész kategóriában.
- **Javaslat:** q:"Melyik regényben érkezik az ördög Woland professzor képében Moszkvába, beszélő fekete kandúr kíséretében?", o:["A Mester és Margarita","A Doktor Zsivágó","A Rákkórház","A Sötétség délben"], d:4.

**part2_kat06-10.js:425** · `Ismétlés / sablon`  
> Ki írta a Gulliver utazásait?

- **Baj:** A 423. sorral (Robinson Crusoe) kölcsönösen elárulják egymást: mindkettőben szerepel Defoe és Swift is opcióként, csak felcserélt sorrendben. Ha a paklinál egymás után jönnek, a második ingyen pont annak, aki az elsőt megjegyezte.
- **Javaslat:** Vagy tartsd meg csak az egyiket szerző-kérdésnek, vagy cseréld a mezőnyt átfedés nélkülire: o:["Jonathan Swift","Laurence Sterne","Henry Fielding","Tobias Smollett"].

**part2_kat06-10.js:393** · `Második védhető válasz`  
> Ki írta A három testőrt?

- **Baj:** Az „Alexandre Dumas” név kettejüké: az apáé (A három testőr, Monte Cristo grófja) és a fiáé (A kaméliás hölgy). A válasz így technikailag pontatlan, és pont az fog megszólalni, aki tudja, hogy két Dumas van.
- **Javaslat:** o:["Idősebb Alexandre Dumas","Ifjabb Alexandre Dumas","Honoré de Balzac","Eugène Sue"] — így a kérdés ráadásul tanít is; d:3.


### Képzőművészet

**part2_kat06-10.js:490** · `Félrecímkézett nehézség`  
> Ki festette a Sikoly című képet?

- **Baj:** A Sikoly mém-szintű ismertségű kép, Munch neve ráragadt; a Klimt/Schiele/Kandinszkij hármas nem bizonytalanít el senkit, aki egyszer is látta a képet. 3★-ként (100 pont) túl van fizetve.
- **Javaslat:** d:2, vagy váltás a kevésbé ismert testvér-tényre: „Melyik norvég festő sorozatának része az Életfríz, amelyben a Sikoly is szerepel?”

**part2_kat06-10.js:504** · `Félrecímkézett nehézség`  
> Melyik mexikói festőnő vált világhírűvé jellegzetes önarck

- **Baj:** Frida Kahlo a köztudatban a mexikói festőnő; a „mexikói” jelző önmagában kizárja a lengyel Lempickát és az amerikai O'Keeffe-et, így egyedül Remedios Varo maradna – ő viszont az asztalnál senkinek nem jut eszébe (bár szigorúan véve ő is mexikói állampolgárként halt meg, tehát félig védhető). 3★ helyett 2★.
- **Javaslat:** d:2. Ha maradna 3★, cseréld Varót Maria Izquierdóra vagy Leonora Carringtonra, és hagyd el a „mexikói” jelzőt: „Melyik festőnő önarcképein tér vissza a szemöldökpár és a virágkoszorú?”

**part2_kat06-10.js:526** · `Félrecímkézett nehézség`  
> Melyik francia impresszionista festett előszeretettel balet

- **Baj:** A Degas–balett-táncosnő párosítás tankönyvi közhely, a másik három impresszionista pedig egészen más témákról ismert (tavirózsa, társasági jelenet, almás csendélet) – aki bármennyire otthon van, rávágja. 4★-ként (110 pont) ez a legtúlfizetettebb kérdés a kategóriában, reálisan 3★.
- **Javaslat:** d:3. Vagy tartsd 4★-on egy szűkebb ténnyel: „Melyik impresszionista készített viaszból is táncosnő-szobrot (A tizennégy éves kis táncosnő)?”

**part2_kat06-10.js:492** · `Ismétlés / sablon`  
> Melyik művészeti irányzat képviselője volt Claude Monet?

- **Baj:** Kettős gond: (a) szó szerint ugyanaz a séma és majdnem ugyanaz az opciólista, mint a 470-es Dalí-kérdésé (irányzat→művész, ugyanaz a négy izmus) – ha egy pakliba kerülnek, a második ingyen van; (b) az opciók itt KISBETŰVEL kezdődnek, miközben a kategória összes többi kérdésénél nagybetűvel – regiszter-eltérés. Az „impresszionizmus” szó ráadásul Monet nevéből (Impression, soleil levant) ered, ez d:3-nál könnyebb.
- **Javaslat:** Nagybetűs opciók (Impresszionizmus / Expresszionizmus / Kubizmus / Szürrealizmus), d:2, és inkább váltsd a feladatot: „Melyik Monet-kép címéből származik az impresszionizmus elnevezése?” → Impresszió, a felkelő nap \| Tavirózsák \| A roueni katedrális \| Japán híd.

**part2_kat06-10.js:488** · `Ismétlés / sablon`  
> Ki festette a Vénusz születése című képet?

- **Baj:** A kategóriában tízszer szerepel a „Ki festette a … című képet?” sablon (460, 468, 486, 488, 490, 494, 500, 516, 524, 534) – a 40 kérdés negyede ugyanaz az agyi művelet. Ez a kérdés a legjobb jelölt a séma-váltásra, mert a képnek erős vizuális története van.
- **Javaslat:** Fordítsd meg az irányt (leírás→mű): q:"Melyik festményen érkezik kagylóhéjon a partra a szerelem istennője?" o:["Vénusz születése","A tavasz","Az athéni iskola","A gyönyörök kertje"], d:3 – így a mű-cím tudás is játékba kerül.

**part2_kat06-10.js:500** · `Ismétlés / sablon`  
> Ki festette a Leány gyöngy fülbevalóval című képet?

- **Baj:** Ugyanaz a „Ki festette…?” sablon, ráadásul a 494-es Rembrandt-kérdéssel közös a névkészlet (Rembrandt, Frans Hals felcserélt szerepben) – a két kérdés kölcsönösen segíti egymást.
- **Javaslat:** Váltsd becenév→mű sémára: q:"Melyik festményt nevezik gyakran »északi Mona Lisá«-nak?" o:["Leány gyöngy fülbevalóval","Az éjjeli őrjárat","A tejet öntő nő","Az Arnolfini házaspár"], d:3.

**part2_kat06-10.js:478** · `A kérdés elárulja a válaszát`  
> Melyik katalán építész tervezte a barcelonai Sagrada Famíl

- **Baj:** A „katalán” jelző felesleges nyíl: a négy opció közül egyedül Gaudí katalán (Calatrava valenciai, Le Corbusier svájci-francia, Niemeyer brazil), így a jelző tudás nélkül is szűkít. A „barcelonai” önmagában elég kontextus.
- **Javaslat:** q:"Melyik építész tervezte a barcelonai Sagrada Famíliát?" – a jelző elhagyásával a kérdés ugyanolyan tisztességes marad, de nem ad ingyen tippet.

**part2_kat06-10.js:508** · `Megfogalmazás`  
> Melyik magyar származású művészt tartják az op-art atyjána

- **Baj:** Az „Amerigo Tot-ot” helyesírása hibás: a Tot mássalhangzóra végződő, szabályosan ejtett név, ezért kötőjel nélkül toldalékolandó. Felolvasva is zavaró.
- **Javaslat:** o:["Victor Vasarelyt","Moholy-Nagy Lászlót","Amerigo Totot","Kepes Györgyöt"].

**part2_kat06-10.js:528** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik olasz barokk festő volt a drámai fény-árnyék hatáso

- **Baj:** Regiszter-törés az opciókban: három ragadványnév (Caravaggio, Tintoretto, Veronese) mellett egy teljes név (Annibale Carracci) áll – a kilógó formátum önmagában is jelzés. Emellett a „Medúza-fej” gyenge horgony: a kép kevéssé ismert, a kérdés súlya így a „fény-árnyék mestere” közhelyre esik, ami egyértelműen Caravaggióra mutat.
- **Javaslat:** Egységes regiszter és erősebb horgony: q:"Melyik olasz barokk festő vitte utcai alakokra a szentek arcát a Szent Máté elhívásán?" o:["Caravaggio","Tintoretto","Veronese","Carracci"].

**part2_kat06-10.js:476** · `Érdektelen válasz`  
> Mi a freskó?

- **Baj:** Tiszta lexikondefiníció, amin veszíteni sem érdekes: a helyes válasz nem tanít semmi elmesélhetőt. A kategóriában ez a harmadik „Hogy nevezzük / Mi a…?” fogalomkérdés (464, 476, 510) is.
- **Javaslat:** Tedd a technika érdekes következményét kérdéssé: q:"Miért kellett a freskófestőnek egyetlen nap alatt befejeznie egy képmezőt?" o:["Mert a vakolat száradás előtt veszi be a festéket","Mert a pigment fényre azonnal fakul","Mert az állványt naponta bontották","Mert a mész éjjel megfagyott"], d:3 – így a válasz maga a „nahát!” tény.


### Filozófia

**part3_kat11-15.js:37** · `Félrecímkézett nehézség`  
> Mit jelent a Horatiustól származó „carpe diem” jelmondat?

- **Baj:** A carpe diem tetovált, pólóra nyomtatott közhely: hatfős családi asztalnál 5-6 ember tudja, nem 3. A d:3 (100 pont) felülárazza.
- **Javaslat:** d:2 (ha a fenti opciócsere megtörtént), vagy tartsd a 3★-ot úgy, hogy kevésbé ismert idézetet kérdezel.

**part3_kat11-15.js:41** · `A kérdés elárulja a válaszát`  
> Hogy hívják az irányzatot, amely szerint egy tett értékét a b

- **Baj:** A kérdésben szereplő „haszon” szó a magyar szakszó (haszonelvűség) és a latin utilitas felé mutat – aki soha nem hallott az irányzatról, a szótőből is kitalálja. Emellett a „közös haszon” a pragmatizmusra is ráolvasható, bár az utilitarizmus a jobb válasz.
- **Javaslat:** Cseréld a szót az elv tartalmára: q:"Melyik irányzat szerint az a helyes tett, amely a lehető legtöbb ember boldogságát növeli?", o:["Utilitarizmus","Pragmatizmus","Hedonizmus","Racionalizmus"].

**part3_kat11-15.js:35** · `Második védhető válasz`  
> Melyik görög gondolkodó paradoxonjában nem éri utol Akhilleus

- **Baj:** Két híres Zénón van: az eleai (a paradoxonok szerzője) és a kitioni (a sztoa alapítója). A puszta „Zénón” opció a 19. sori sztoicizmus-kérdés mellett zavart kelthet az asztalnál.
- **Javaslat:** Pontosíts az opcióban: o:["Eleai Zénón","Gorgiasz","Prótagorasz","Kratülosz"] – a disztraktorok maradhatnak, mind kortárs görög gondolkodó.

**part3_kat11-15.js:7** · `Megfogalmazás`  
> Melyik nép nyelvéből származik a filozófia szó, amelynek jele

- **Baj:** A kérdés népet kérdez („melyik nép nyelvéből”), az opciók viszont nyelvnevek ragozva („A görögből”, „Az egyiptomiból”) – a kérdés és a válaszok nem illeszkednek nyelvtanilag.
- **Javaslat:** q:"Melyik nyelvből származik a filozófia szó, amelynek jelentése »a bölcsesség szeretete«?" – az opciók változatlanul maradhatnak.

**part3_kat11-15.js:9** · `Félrecímkézett nehézség`  
> Melyik kínai bölcs tanításait őrzi a Beszélgetések és mondáso

- **Baj:** A Lun-jü magyar címét („Beszélgetések és mondások”) családi asztalnál nem ismeri fel tíz emberből kilenc; Konfuciusz ugyan a legkézenfekvőbb tipp, de Lao-ce valódi csábítás. Ez 2★-os feladat, nem 1★-os rávágós.
- **Javaslat:** d:2. Ha 1★-os slot kell, a klasszikus mondás felől kérdezz: q:"Melyik kínai bölcs tanítása: »Amit magadnak nem kívánsz, ne tedd másnak«?".

**part3_kat11-15.js:23** · `Félrecímkézett nehézség`  
> Ki írta A fejedelem című művet a hatalom megszerzésének művés

- **Baj:** A „machiavellista” jelző a köznyelv része, a mű és a szerző párosítása a legismertebbek közé tartozik – hatból 4-5 ember tudja, ez 2★, nem 3★ (100 pont).
- **Javaslat:** d:2, vagy tartsd a 3★-ot közelebbi disztraktorokkal (Hobbes és Erasmus jó, de Dante messze esik – helyette pl. Thomas More vagy Guicciardini).

**part3_kat11-15.js:25** · `Félrecímkézett nehézség`  
> Melyik filozófus híres kijelentése: „Isten halott”?

- **Baj:** Az „Isten halott” a legtöbbet idézett filozófiai mondat, és Nietzsche neve mellette szinte automatikus – 3★-nál (100 pont) reálisabb a 2★.
- **Javaslat:** d:2. 3★-os változat ugyanebből a tudásból: q:"Melyik művében beszél Nietzsche az »emberfeletti emberről«?", o:["Így szólott Zarathustra","A tragédia születése","A vidám tudomány","Túl jón és rosszon"].

**part3_kat11-15.js:13** · `Érdektelen válasz`  
> Ki volt Platón leghíresebb tanítványa?

- **Baj:** A helyes válasz semmi újat nem ad („Platón tanítványa Arisztotelész”), és a kategória amúgy is erősen sablonos: a 25 kérdésből 21 „Ki írta / Melyik filozófus” séma. Ez a slot elpazarolt – ugyanabból a tudásból mesélhető tény is kérhető.
- **Javaslat:** Ugyanaz a válasz, érdekesebb úton: q:"Melyik filozófus volt a fiatal Nagy Sándor nevelője?", o:["Arisztotelész","Platón","Diogenész","Iszokratész"], d:2 – tanít is, és nem a tanár-tanítvány közhelyet ismétli.


### Állatok

**part3_kat11-15.js:76** · `Félrecímkézett nehézség`  
> Melyik hüllő képes a színét a környezetéhez igazítani?

- **Baj:** A kaméleon színváltása óvodás szintű ismeret, a gekkó/leguán/varánusz nem versenytárs. 2★ (90 pont) helyett 1★.
- **Javaslat:** d:1. Nehezebb változat 4★-ra: "Mi a kaméleon színváltásának valódi fő szerepe?" ✓A hőmérséklet-szabályozás és a társak közti jelzés \| A rejtőzködés \| …

**part3_kat11-15.js:72** · `Félrecímkézett nehézség`  
> Melyik éjszakai madár a bölcsesség jelképe?

- **Baj:** Kettős rávezetés (éjszakai + bölcsesség), a holló/sas/varjú egyike sem versenyez. 2★ helyett 1★.
- **Javaslat:** d:1. Vagy tedd tartalmassá: "Melyik istennő madara volt a bagoly az ókori görögöknél?" ✓Athéné.

**part3_kat11-15.js:106** · `Félrecímkézett nehézség`  
> Melyik rágcsáló gyűjti a magvakat a pofazacskójában?

- **Baj:** A hörcsög pofazacskója közismert (a szólás is él: „tömi, mint a hörcsög”), tehát 3★-hoz könnyű. Emellett a „mókus” enyhén védhető: a csíkos földimókusnak (chipmunk) valóban van pofazacskója, és sokan azt hívják mókusnak.
- **Javaslat:** d:2, és cseréld a mókust egyértelműen pofazacskó nélküli fajra: o:["A hörcsög","A pocok","A patkány","A pele"].

**part3_kat11-15.js:90** · `Félrecímkézett nehézség`  
> Melyik ragadozó él szigorú rangsorú falkában, és „énekel” éjsza

- **Baj:** A farkasüvöltés és a falkarend együtt túl erős rávezetés (a hiúz, a róka és a borz nem is falkás állat) – 3★ helyett 2★.
- **Javaslat:** d:2, vagy élesítsd: "Ki nevel a farkasfalkában? Melyik állítás igaz a farkasfalka szerkezetére?" ✓Rendszerint egyetlen szülőpár és a kölykeik alkotják.

**part3_kat11-15.js:96** · `Félrecímkézett nehézség`  
> Melyik a világ leglassabb emlőse, amely szinte egész életét fej

- **Baj:** A lajhár lassúsága és fejjel lefelé lógása két külön rávezetés ugyanarra; a koala/hangyász/lóri nem hitelesíthető alternatíva. 3★ helyett 2★.
- **Javaslat:** d:2. Nehezebb változat: "Miért mászik le hetente egyszer a földre a lajhár, ami az életébe is kerülhet?" ✓Hogy ott ürítsen.

**part3_kat11-15.js:116** · `Félrecímkézett nehézség`  
> Melyik madár éri el a legnagyobb sebességet zuhanórepülésben?

- **Baj:** A vándorsólyom mint a leggyorsabb madár iskolai törzsanyag – 4★ (110 pont) helyett reálisan 2–3★.
- **Javaslat:** d:2. 4★-os alternatíva ugyanerről: "Melyik madár a leggyorsabb VÍZSZINTES repülésben?" ✓A sarlósfecske – de akkor a 128. sori kérdést át kell írni, hogy ne ütközzön.

**part3_kat11-15.js:128** · `Második védhető válasz`  
> Melyik madár tölti élete nagy részét a levegőben, még aludni is

- **Baj:** Az albatrosz védhető második válasz: hónapokig marad a levegőben, és róla is dokumentált a repülés közbeni alvás. A sarlósfecske és az albatrosz között a kérdés szövege nem választ.
- **Javaslat:** Élesítsd a sarlósfecske egyedi vonására: q="Melyik madár akár tíz hónapig is a levegőben marad, mert a lába leszállásra alig alkalmas?" – vagy tedd a különbséget kérdéssé: "Melyik madár tud a levegőben aludni, párzani és inni is?" ✓A sarlósfecske, d:4.

**part3_kat11-15.js:124** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik sarkvidéki cetet nevezik hosszú, csavart agyara miatt a 

- **Baj:** A „csukabálna” nem létező, felismerhetően kitalált opció – aki bizonytalan, azonnal kizárja, így a kérdés háromesélyessé zsugorodik. A halmaz többi tagja rendben van.
- **Javaslat:** Cseréld valódi cetre: o:["A narvált","A belugát","A szürke bálnát","A grönlandi bálnát"]. (Vigyázz: a grönlandi bálna szerepel a 175. sori tippben – ott csak az élettartam a téma, nem ütközik.)

**part3_kat11-15.js:58** · `Megfogalmazás`  
> Melyik állat építi gátakkal tele a folyókat?

- **Baj:** A mondat magyartalan és nehezen felolvasható („építi gátakkal tele a folyókat”), pedig ez a játék felolvasásra készül. Emellett a hód gátat nem folyókra, hanem kisebb patakokra épít.
- **Javaslat:** q="Melyik állat épít gátat a patakokon, hogy tavat duzzasszon maga köré?" – a négy opció maradhat.

**part3_kat11-15.js:157** · `Második védhető válasz`  
> Hány évig élhet az ara papagáj?

- **Baj:** A kérdés „élhet”-et kérdez, a note viszont azt írja, hogy fogságban akár 80 évig is – vagyis a note maga cáfolja az 50-es megoldást. A játékos joggal tippel 60–80-at.
- **Javaslat:** Tedd egyértelművé: q="Hány évig él átlagosan az ara papagáj a vadonban?", a:50, note:"Gondozásban akár a 80 évet is megérheti – nem ritka, hogy örökölni kell egy arát."

**part3_kat11-15.js:148** · `Ténybeli hiba / vitatott adat`  
> Hány méter hosszúra nőhet a kék bálna, a Föld legnagyobb állata

- **Baj:** A note állítása („Nagyobb, mint bármelyik valaha élt dinoszaurusz”) hosszban vitatható: több szauropoda becsült hossza eléri vagy meghaladja a 30-35 métert. Tömegben viszont egyértelmű a kék bálna elsősége.
- **Javaslat:** Pontosítsd a note-ot: "Nehezebb, mint bármelyik valaha élt dinoszaurusz – csak a nyelve annyit nyom, mint egy elefánt."

**part3_kat11-15.js:167** · `Második védhető válasz`  
> Hány százalékban egyezik meg az ember és a csimpánz DNS-e?

- **Baj:** Konvenciófüggő szám: a számítási módtól függően 96, 98 vagy 99 százalék szerepel a forrásokban – ugyanaz a csapda, mint a 600/650 izomnál.
- **Javaslat:** Vagy kösd a kérdésben („a fehérjekódoló szakaszokat összevetve hány százalék?”, a:99), vagy cseréld: q="Hány kromoszómapárja van a csimpánznak?", a:24, unit:"pár", note:"Eggyel több, mint az embernek: nálunk két ősi kromoszóma összeolvadt."

**part3_kat11-15.js:179** · `Ténybeli hiba / vitatott adat`  
> Hány g-nek megfelelő lassulást visel el a harkály feje kopácsol

- **Baj:** Konvenciófüggő és forrásonként erősen szóró adat (a mérések 1000–1400 g között adnak értéket), tippelősként ezért igazságtalan; ráadásul az újabb kutatások szerint a koponya nem is „csillapít”, hanem merev kalapácsként működik.
- **Javaslat:** Írd át biztosabb, kikövetkeztethető számra: q="Hányszor koppint másodpercenként a harkály, amikor odút váj?", a:20, unit:"koppantás", note:"Napi több ezer ütés – a nyelve a koponyája köré tekeredve rögzíti a fejét."

**part3_kat11-15.js:178** · `Második védhető válasz`  
> Hány kamrából áll a csótány szíve?

- **Baj:** Forrásonként 12 vagy 13 kamrát írnak (a hátulsó szegmens számítása vitatott) – konvenciófüggő adat, 5★-os súllyal.
- **Javaslat:** Vagy 12-13 helyett tedd a kérdést robusztussá: q="Hány napig képes fej nélkül életben maradni a csótány?", a:7, unit:"nap", note:"Nem a fején át lélegzik, hanem a testén lévő légzőnyílásokon – éhen hal, nem fulladásba."

**part3_kat11-15.js:165** · `Második védhető válasz`  
> Hány évig él átlagosan a ló?

- **Baj:** Az „átlagosan” és a 30 év feszül egymásnak: a lovak átlagos élettartamát a szakirodalom 25-30 évre teszi, tehát a 25-ös tipp is védhető. Ugyanez a kérdés tipp-jokerrel (utolsó számjegy) ráadásul triviálissá válik.
- **Javaslat:** q="Hány évig él egy jól gondozott hátasló?", a:30 – vagy cseréld: "Hány foga van a felnőtt lónak?", a:40, unit:"db", note:"A ló korát a fogai kopásáról szokták megbecsülni – innen a mondás, hogy ajándék lónak ne nézd a fogát."

**part3_kat11-15.js:180** · `Rossz tippelős kérdés`  
> Hány métert képes siklani a levegőben a repülőhal?

- **Baj:** A note („Kedvező szélben ennek a többszörösét is megteheti”) ellentmond a megoldásnak: ha a többszöröse is megtehető, akkor a kérdésre a 200 nem egyértelmű felső határ.
- **Javaslat:** q="Hány métert siklik egyetlen ugrással egy jó repülőhal?", a:200, note:"A rekordot 45 másodperces, mintegy 400 méteres siklásként jegyezték fel egy japán hajóról."

**part3_kat11-15.js:118** · `Félrecímkézett nehézség`  
> Melyik amerikai erszényes „játssza halottnak” magát veszély ese

- **Baj:** Az „amerikai erszényes” megszorítás egyedül az oposszumra illik a négy opció közül (a tatu, a mosómedve és a skunk nem erszényes) – 4★-hoz így túl könnyű annak, aki egyáltalán ismeri a fogalmat.
- **Javaslat:** d:3, vagy cseréld a disztraktorokat valódi erszényesekre: o:["Az oposszum","A vombat","A kuszkusz","A bandikut"] és maradhat d:4.

**part3_kat11-15.js:155** · `A kérdés elárulja a válaszát`  
> Hány foga van a felnőtt kutyának?

- **Baj:** A note („Tíz foggal több, mint az embernek”) kimondja az ember 32 fogát – ez keresztbe elárulhat egy másik élő kérdést, és a fordított irányban is: aki tudja az embert, itt már nem tippel, hanem számol.
- **Javaslat:** Cseréld a note-ot önállóra: "A kölyökkutyának még csak 28 teje van, ezeket fél éves korára váltja le."

**part3_kat11-15.js:74** · `Félrecímkézett nehézség`  
> Melyik rovar világít a nyári éjszakákban?

- **Baj:** A szentjánosbogár világítása magyar gyerekdal- és mese-szintű tudás, a cserebogár/katica/szarvasbogár nem hitelesíthető alternatíva. 2★ helyett 1★.
- **Javaslat:** d:1. 3★-os változat: "A szentjánosbogárnál melyik ivar az, amelyik jellemzően szárnyatlan, és a fűből világít?" ✓A nőstény.


### Növények és kertészet

**part3_kat11-15.js:230** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik hagymaféle vékony, üde zöld szálait szórjuk a rántott

- **Baj:** A helyes válasz zárójeles szinonimával 27 karakter, a három disztraktor 10–14 – a leghosszabb opció megint a helyes. A zárójel önmagában is „ez a fontos” jelzés.
- **Javaslat:** Töröld a zárójelet („A metélőhagymát”), és tedd egyenletessé a mezőnyt: „A póréhagymát”, „A medvehagymát”, „A salátahagymát”.

**part3_kat11-15.js:256** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi a pikírozás a kertészetben?

- **Baj:** Helyes: 40 karakter, disztraktorok átlaga 25 (1,6×) – határeset, de ugyanaz a minta, mint a többi fogalom-magyarázó kérdésnél.
- **Javaslat:** Rövidebb helyes + feltöltött rosszak: helyes „A palánták ritkítva átültetése”, disztraktorok: „A rózsatövek szemzése alvó rüggyel”, „A gyümölcsfák koronájának alakítása”, „A magvak csíráztatása vizes vattán”.

**part3_kat11-15.js:212** · `A kérdés elárulja a válaszát`  
> Melyik fa kérgéből készül a parafa dugó?

- **Baj:** A „parafa” és a „paratölgy” közös szótöve odaadja a választ annak is, aki sosem látott paratölgyet. Emiatt a d: 3 sem tartható.
- **Javaslat:** Kerüld meg a szótövet: „Melyik fa vastag, évente újranövő kérgéből vágják a borosüvegek dugóját?” — az opciók maradhatnak; így a 3★ is megáll.

**part3_kat11-15.js:184** · `A kérdés elárulja a válaszát`  
> Melyik virág nyílik elsőként, sokszor még a hó alól kibújva?

- **Baj:** A kérdésbeli „hó” szó a helyes válaszban is ott van („hóvirág”), a három disztraktorban nem. 1★-nál ez kevésbé drága hiba, de a minta ugyanaz.
- **Javaslat:** „Melyik virág nyílik a legkorábban, sokszor még télvégi fagyban is?” – a hó szó kikerül, az opciók maradnak.

**part3_kat11-15.js:186** · `A kérdés elárulja a válaszát`  
> Melyik virág fordítja tányérját mindig a nap felé?

- **Baj:** A „nap felé fordul” szó szerint a „napraforgó” szó etimológiája – a kérdés a saját válaszát mondja ki. Ráadásul tényileg pontatlan: csak a fiatal bimbós hajtás követi a napot, a kinyílt tányér már fixen keletre néz.
- **Javaslat:** Írd át tényhelyesre és szivárgásmentesre: „Melyik növény fiatal bimbója követi napközben a napjárást, a kinyílt tányér viszont már mindig kelet felé néz?” – a helyes marad, a tény pedig érdekesebb lesz, mint a közhely.

**part3_kat11-15.js:222** · `Félrecímkézett nehézség`  
> Melyik égszínkék virág nyílik a gabonatáblák szélén, a magya

- **Baj:** A „gabonatábla” + „égszínkék” páros együtt kizárja a pipacsot, a szarkalábat és a katángkórót is; a „búza-” előtag pedig a gabona-utalásból adódik. 3★-ként túlárazott, reálisan 2★.
- **Javaslat:** Vidd `d`: 2-re, vagy szűkítsd nehezebbre: „Melyik égszínkék mezei virág volt Ferenc József kedvence, és lett a német romantika jelképe?”

**part3_kat11-15.js:258** · `Félrecímkézett nehézség`  
> Melyik növénybetegség okozta az 1840-es évek pusztító írorsz

- **Baj:** Az „írországi éhínség” a köztudatban krumplivészként él, tehát a válasz szinte automatikus – 5★ helyett reálisan 3★. Emellett az „A szőlő filoxéra” opció nyelvileg hibás (egybeírandó: szőlőfiloxéra), ami rontja a halmaz egységét.
- **Javaslat:** `d`: 3, és javítsd az opciót „A szőlőfiloxéra” alakra. 5★-os pótlásnak: „Melyik gomba okozta kórokozó a burgonyavész?” (Phytophthora infestans / Fusarium / Botrytis cinerea / Puccinia graminis).

**part3_kat11-15.js:188** · `Második védhető válasz`  
> Melyik zöldségtől „sírunk”, amikor felvágjuk?

- **Baj:** A frissen reszelt torma legalább annyira könnyeztet, mint a hagyma – a torma opció védhető. A „felvágjuk” ige csak épphogy kizárja.
- **Javaslat:** Zárd ki a másik jelöltet a hatóanyaggal: „Melyik zöldség kénvegyülete csap fel a szemünkbe, amikor felszeleteljük?” – a helyes marad, a torma pedig már nem védhető (abban izotiocianát van, és reszelni kell hozzá).

**part3_kat11-15.js:198** · `Megfogalmazás`  
> Melyik fa rózsaszín virágzása, a szakura Japán egyik jelképe

- **Baj:** A mondat vesszőzése és szerkezete zavaros („Melyik fa rózsaszín virágzása, a szakura … jelképe?”) – felolvasva megbotlik rajta az ember, pedig ezt a játékot felolvassák.
- **Javaslat:** „Melyik fa virágzását ünneplik Japánban szakura néven?” – rövidebb, egyértelmű, ugyanaz a tudás.

**part3_kat11-15.js:262** · `Megfogalmazás`  
> Melyik növénycsalád magja a világ legapróbb magja?

- **Baj:** A „magja … magja” ismétlés ügyetlen. Emellett a „páfrányoké” opció szakmailag kilóg a halmazból: a páfrányoknak nincs magjuk, csak spórájuk – aki ezt tudja, egy opciót ingyen kizár.
- **Javaslat:** „Melyik növénycsalád termel porszemnyi, a világon a legapróbb magvakat?”, és a páfrány helyett egy valódi magvas jelölt: „A harangvirágféléké”.

**part3_kat11-15.js:275** · `Ismétlés / sablon`  
> Hány százalék víz van a friss uborkában?

- **Baj:** Sémában és feladatban is ugyanaz, mint a 269. sor („Hány százalék víz van a görögdinnyében?”, 92%) – a két érték (96 és 92) egymás mellett a pakliban egyszerű ismétlésnek hat, és a másodikat az elsőből lehet horgonyozni.
- **Javaslat:** Cseréld más agyi műveletre ugyanezen a d2 szinten: q: „Hány nap alatt lesz szedhető méretű a kikelt kígyóuborka termése?”, a: 12, unit: „nap”, note: „Nyáron kétnaponta végig kell szedni a tövet, különben megsárgul rajta a termés.”

**part3_kat11-15.js:298** · `Elévülő tény`  
> Hány méter magas volt a valaha mért legmagasabb napraforgó?

- **Baj:** Megdönthető rekord-szuperlatívusz a kérdés szövegében (a note már dátumhoz köti, de a kérdés nem) – ha valaki magasabbat nevel, a kérdés csendben hamissá válik.
- **Javaslat:** Kösd dátumhoz a kérdésben is: „Hány méter magas volt a 2014-ben rekordot állító német óriásnapraforgó?” – a note maradhat.

**part3_kat11-15.js:272** · `Rossz tippelős kérdés`  
> Átlagosan hány szem borsó van egy hüvelyben?

- **Baj:** A note maga írja, hogy 5–8 szem a szokásos, tehát a „7” egy tartományból önkényesen kiragadott szám: a mezőny fele 6-ot vagy 8-at ír, és a telitalálat +25%-a tiszta szerencse.
- **Javaslat:** Kérdezz egyértelműen meghatározott értéket: q: „Hány hüvelyt hoz átlagosan egy jól fejlett borsótő?”, a: 40, unit: „db”, note: „Ezért kell egy tál főzelékhez jó tenyérnyi ágyás.” Vagy tartsd meg a mostanit, de vidd le d: 1-re, hogy olcsóbb legyen a szerencse.

**part3_kat11-15.js:274** · `Hiányzó note`  
> Hány méter magasra nő a jegenyenyár?

- **Baj:** A note nem a válaszról szól: a magasság helyett a gyökérzetről beszél („Gyökerei messzire kúsznak…”). A vesztes így nem kap „nahát!”-élményt a megtippelt adathoz, és a note a 286. sor (lucerna gyökérmélység) irányába is elviszi a figyelmet.
- **Javaslat:** Cseréld a válaszhoz kötődő tényre: „Gyorsan nő: húsz év alatt eléri ezt a magasságot, ezért ültették útjelzőnek az alföldi dűlőutak mellé.”

**part3_kat11-15.js:287** · `Ténybeli hiba / vitatott adat`  
> Hány méter hosszúra nő a sütőtök indája egy nyár alatt?

- **Baj:** A 10 méter a felső szélsőérték; a kerti sütőtök indája jellemzően 4–6 méter, tehát a jól tájékozott kertész pont mellétippel. A note („az egész kertet befutja”) nem horgonyoz.
- **Javaslat:** Vidd a valósághoz: a: 5, note: „Ha hagyják, egy tő öt-hat méteren keresztül kúszik, és útközben minden csomójánál gyökeret is ereszt.”


### Fizika, kémia, biológia

**part3_kat11-15.js:397** · `Második védhető válasz`  
> Hány Celsius-fok az egészséges ember testhőmérséklete?

- **Baj:** A magyar tankönyvek 36,6 °C-ot tanítanak, ami egészre 37, de a játékosok fele 36-ot fog írni – a különbség itt telitalálat vagy vereség.
- **Javaslat:** q: „Hány Celsius-fok az egészséges ember testhőmérséklete egészre kerekítve?” a:37, note: „Pontosabban 36,6 °C körül, napszaktól függően néhány tized fokot ingadozva.”

**part3_kat11-15.js:415** · `Második védhető válasz`  
> Hány milliárd éves a világegyetem?

- **Baj:** A mért 13,8 milliárd évet a köznyelv „13,8”-ként idézi; sokan 13-at fognak tippelni, holott a megoldás a felfelé kerekített 14. A note maga is 13,8-at mond.
- **Javaslat:** q: „Hány milliárd éves a világegyetem egész számra kerekítve?” a:14 (a note maradhat).

**part3_kat11-15.js:423** · `Ténybeli hiba / vitatott adat`  
> Hány kémiai elem fordul elő természetes formában a Föld

- **Baj:** Konvenció-függő: a források 88, 90, 92 és 94 közt ingadoznak (a technécium és a promécium gyakorlatilag hiányzik, a neptúnium és a plutónium viszont nyomokban előfordul). A 92 az „uránnal bezárólag” értelmezés.
- **Javaslat:** q: „Hány elem fordul elő a természetben az uránnal bezárólag?” a:92, note: „A nála nehezebbeket – néhány nyomnyi kivételtől eltekintve – laboratóriumban állították elő.”

**part3_kat11-15.js:330** · `Ismétlés / sablon`  
> Hogy nevezzük, amikor a víz a felszínéről lassan gőzzé a

- **Baj:** A 358. sorral (szublimáció) tükörpár: a két kérdés egymás disztraktorát kéri megoldásként, azonos halmazállapot-szókészletből. Egymás után kihúzva ismétlésnek hat.
- **Javaslat:** Az egyiket alakítsd jelenség→név helyett példa→név típusúvá: „Hogyan tűnik el maradék nélkül a hó a fagyos, napos időben, olvadás nélkül?” → Szublimációval.

**part3_kat11-15.js:338** · `Ismétlés / sablon`  
> Melyik vércsoportú vér adható szükséghelyzetben szinte b

- **Baj:** A 360. sor (univerzális recipiens) ugyanennek a témának a tükörkérdése, majdnem azonos opciókészlettel – a második kihúzás után az elsőt már nem kell tudni.
- **Javaslat:** Tartsd meg mindkettőt, de a 360-at fogalmazd át esetleírásra: „Egy AB pozitív vércsoportú beteg melyik vércsoportból NEM kaphat vért?” – vagy egyszerűbben a másodikat cseréld Rh-faktoros kérdésre.

**part3_kat11-15.js:336** · `Félrecímkézett nehézség`  
> Melyik gázból tartalmaz sokkal többet a kilélegzett leve

- **Baj:** 3★ (100 pont) egy alsó tagozatos tényért – hatból hatan tudják.
- **Javaslat:** d:1. 3★-os változat: „A kilélegzett levegő hány százaléka oxigén?” (kb. 16%) mc-ként, 21 / 16 / 10 / 4 százalékos opciókkal.

**part3_kat11-15.js:356** · `Félrecímkézett nehézség`  
> Melyik gáz rétege védi a Földet a káros ultraibolya sugá

- **Baj:** 3★, pedig az „ózonréteg–UV” párosítás közismert, a disztraktorok (szén-dioxid, hidrogén, metán) egyike sem társul UV-védelemhez.
- **Javaslat:** d:1–2. Nehezebb változat: „Hányatomos molekulából áll az ózon?” vagy „Melyik anyagcsoport használatát tiltotta be a montreali jegyzőkönyv az ózonréteg védelmében?” → A freonokét.

**part3_kat11-15.js:348** · `Félrecímkézett nehézség`  
> Mit mérnek a Richter-skálával?

- **Baj:** 3★-ként túlárazott: gyakorlatilag mindenki tudja, a három disztraktor pedig nem is létező skála-használat.
- **Javaslat:** d:1. 3★-os alternatíva: „Melyik skála a földrengés helyszínen érzékelt pusztító hatását osztályozza?” → A Mercalli-skála (disztraktorok: Richter, Beaufort, Mohs).

**part3_kat11-15.js:372** · `Félrecímkézett nehézség`  
> Mi az emberi test legkeményebb anyaga?

- **Baj:** 4★ (110 pont) egy közismert tényért; a porc és a combcsont nem hihető versenytárs a keménységben.
- **Javaslat:** d:2, és cseréld a disztraktorokat valóban kemény szövetekre: „A dentin”, „A csontok külső, tömör állománya”, „A körömlemez”.

**part3_kat11-15.js:390** · `Érdektelen válasz`  
> Hány Celsius-fokon forr a víz normál légnyomáson?

- **Baj:** Tippelősként nem működik: mindenki pontosan tudja, így nem tippverseny lesz belőle, hanem gépelési sebességverseny (holtversenynél a gyorsabb nyer). Ugyanez a hiba a 391. (7 szín) és a 392. (5 érzékszerv) sorban.
- **Javaslat:** Ezek közül egyet hagyj meg 1★-os bemelegítőnek, a többit tedd behatárolhatóvá: „Hány Celsius-fokon forr a víz a Mount Everest csúcsán?” a:70, note: „A harmadára csökkent légnyomás miatt – ezért nem lehet ott rendesen teát főzni.”

**part3_kat11-15.js:364** · `A kérdés elárulja a válaszát`  
> Melyik bolygó forog gyakorlatilag az oldalára dőlve, csa

- **Baj:** A „csaknem 98 fokos tengelyferdeséggel” tagmondat ugyanazt mondja el másodszor, amit az „oldalára dőlve” – felesleges magyarázó toldat, ami a félig tudónak is odaadja a megerősítést.
- **Javaslat:** q: „Melyik bolygó forgástengelye dől csaknem 98 fokban, vagyis gyakorlatilag az oldalán gurul?” helyett tömören: „Melyik bolygó forog az oldalára dőlve?” d:3.

**part3_kat11-15.js:409** · `Ismétlés / sablon`  
> Hányszor dobban az emberi szív egy nap alatt?

- **Baj:** A megoldás pontosan ugyanaz a kerek szám (100000), mint a 421. sorban (érhálózat hossza) – egy meccsen belül kihúzva furcsa egybeesés, és a második kérdésnél a játékosok az elsőre fognak visszaemlékezni.
- **Javaslat:** Az egyiket pontosítsd: a szívdobbanásnál a:100000 helyett kérdezz percenkénti értéket („Hányat dobban nyugalomban egy felnőtt szíve percenként?” a:70), a note-ban maradhat a napi százezres nagyságrend.


### Feltalálók és találmányok

**part3_kat11-15.js:524** · `Rossz tippelős kérdés`  
> Melyik évben halt meg Semmelweis Ignác?

- **Baj:** Halálozási évszám – sablonos, és a note már ki is írja a születésnaphoz kötődő adatot. Ugyanez a tudás kérhető úgy is, hogy közben tippelni lehessen rá.
- **Javaslat:** Cseréld: {cat:15,type:'tip',d:3,q:"Hány évesen hunyt el Semmelweis Ignác?",a:47,unit:"év",note:"1818. július 1-jén született; ez a nap ma a magyar egészségügy napja."}

**part3_kat11-15.js:531** · `Rossz tippelős kérdés`  
> Melyik évben kapott orvosi Nobel-díjat Bárány Róbert az egy…

- **Baj:** A negyedik Nobel-díj-évszám a tételben (515, 521, 530, 531, 532). A note kiváló („a díj hírét orosz hadifogságban kapta”), de maga a feladat ismétlődik.
- **Javaslat:** Cseréld egy tömeg-alapú tippre: {cat:15,type:'tip',d:3,q:"Hány gramm volt a világ első mobiltelefonja, a Motorola DynaTAC prototípusa?",a:1100,unit:"gramm",note:"Martin Cooper 1973-ban ezzel telefonált az utcán – a szakma csak „téglának” hívta."}

**part3_kat11-15.js:523** · `Rossz tippelős kérdés`  
> Melyik évben alapította Richter Gedeon gyógyszerész a késő…

- **Baj:** További évszám-tipp ugyanabban a tételben. Ha a fenti hat cserét végrehajtod, az arány 82%-ról ~55%-ra esik; ezzel a hetedikkel megy 50% alá, ami a mérce célja.
- **Javaslat:** Cseréld: {cat:15,type:'tip',d:4,q:"Hány méter magasra emelkedett Asbóth Oszkár helikoptere a legsikeresebb kísérleti felszállásán?",a:4,unit:"méter",note:"1928-ban több mint fél órán át lebegett a levegőben ebben a magasságban."}

**part3_kat11-15.js:522** · `Második védhető válasz`  
> Hány kis kockából (elemből) áll össze a klasszikus 3×3-as R…

- **Baj:** Konvenció-függő szám: aki a 3×3×3-ból indul ki, 27-et mond (és sok forrás így is számol), aki a szerkezetet ismeri, 26-ot. A tippelősben a telitalálat +25%-ot ér, tehát ez pénzbe kerül.
- **Javaslat:** Tedd egyértelművé, melyik számítást kéred: q:"Hány mozgatható elemből (sarok-, él- és középső kockából) áll a klasszikus 3×3-as Rubik-kocka? A belső kereszt-tengely nem számít." – a note maradhat.

**part3_kat11-15.js:440** · `A kérdés elárulja a válaszát`  
> Mi fűződik Jedlik Ányos nevéhez?

- **Baj:** Mind a három disztraktor egy másik ÉLŐ kérdés helyes válasza ebben a kategóriában: a transzformátor (468: Bláthy–Déri–Zipernowsky), a telefonhírmondó (478: Puskás Tivadar), a helikopter (498: Asbóth Oszkár). Aki már látta azokat, kizárásos alapon megoldja ezt.
- **Javaslat:** Cseréld a disztraktorokat olyanokra, amelyek NEM válaszai másik kérdésnek: o:["A dinamó elve","Az ívlámpa","A szénszálas izzó","Az elektromos akkumulátor"] – mind hihető 19. századi villamossági találmány.

**part3_kat11-15.js:458** · `Gyenge disztraktor / hossz-árulkodás`  
> Milyen találmány fűződik Bánki Donát és Csonka János nevéhe…

- **Baj:** Hossz-árulkodás: „A porlasztó (karburátor)” a zárójeles magyarázattal 1,6-szerese a disztraktor-átlagnak, és egyedül ez van kétszeresen megnevezve.
- **Javaslat:** Töltsd fel a rosszakat azonos hosszúságra: o:["A porlasztó (karburátor)","A dízel befecskendezőszivattyú","A mágneses gyújtógyertya","A kétütemű benzinmotor"]

**part3_kat11-15.js:466** · `Félrecímkézett nehézség`  
> Melyik magyar származású fizikust nevezik a hidrogénbomba a…

- **Baj:** „Teller Ede = hidrogénbomba atyja” tankönyvi közhely; hatból négyen-öten rávágják, tehát nem 3★ (~50%), hanem 2★ (~70%). Így 100 pont helyett 90-et kellene érnie.
- **Javaslat:** d:2

**part3_kat11-15.js:474** · `Félrecímkézett nehézség`  
> Melyik magyar matematikus alkotta meg a nemeuklideszi geome…

- **Baj:** Bolyai János a nemeuklideszi geometriával az általános iskolai törzsanyag; a Bolyai Farkas-disztraktor okoz némi hezitálást, de a helyes választ ettől még a többség tudja. 3★ helyett 2★.
- **Javaslat:** d:2

**part3_kat11-15.js:482** · `Félrecímkézett nehézség`  
> Ki vezette be elsőként a futószalagos tömeggyártást az autó…

- **Baj:** Kettős: (1) a nehézség 3★-nak jelölt, de „Henry Ford = futószalag” ~80-90%-os ismertségű, tehát 1-2★; (2) az „elsőként … az autóiparban” apró tárgyi kockázat: álló szerelősort már Ransom Olds is használt 1901-ben, Fordé a MOZGÓ futószalag (1913).
- **Javaslat:** d:2 és pontosítsd: q:"Ki állította hadrendbe elsőként a mozgó futószalagot az autógyártásban?"

**part3_kat11-15.js:502** · `Félrecímkézett nehézség`  
> Melyik feltaláló nevéhez fűződik a váltakozó áramú indukció…

- **Baj:** 4★-nak (~30%) jelölve, pedig a „váltakozó áram” szó gyakorlatilag Tesla-nyíl: aki bármit hallott az áramháborúról, rávágja. A Faraday/Siemens/Edison disztraktorok nem bizonytalanítanak el senkit ezen a ponton.
- **Javaslat:** d:3 – vagy tartsd meg a 4★-ot úgy, hogy a kérdés a konkrét szerkezetre megy: „Ki szabadalmaztatta a forgó mágneses mezőn alapuló, kefe nélküli váltakozó áramú motort?”, és a disztraktorok közé kerüljön Galileo Ferraris.

**part3_kat11-15.js:480** · `Félrecímkézett nehézség`  
> Melyik városban nyílt meg a világ első földalatti vasútja 1…

- **Baj:** London mint az első metró helyszíne közismert (és a Párizs/New York/Berlin hármas nem is nagyon bizonytalanít el). 3★ helyett 2★.
- **Javaslat:** d:2

**part3_kat11-15.js:476** · `Félrecímkézett nehézség`  
> Melyik magyar származású matematikus volt a BASIC programoz…

- **Baj:** Fordított irányú hiba: Kemény János a BASIC-kel jóval kevésbé ismert, mint Neumann vagy Erdős, és pont ők állnak disztraktorként – reálisan 30% alatt van a találati arány. 3★ helyett 4★.
- **Javaslat:** d:4

**part3_kat11-15.js:450** · `Félrecímkézett nehézség`  
> Melyik magyar tudós alkotta meg az első hazai szódavízgyárt…

- **Baj:** A „Jedlik = szódavíz” tény kevésbé ismert, mint a dinamó, és a Than Károly / Kempelen disztraktorok tényleg elbizonytalanítanak. 2★ (~70%) helyett reálisan 3★.
- **Javaslat:** d:3

**part3_kat11-15.js:513** · `A kérdés elárulja a válaszát`  
> Hány különböző színt használ a klasszikus Rubik-kocka?

- **Baj:** Enyhébb változata a 514-es hibának: a „kocka” szó maga adja a hat lapot, tehát a hat színt is – nincs mire tippelni. 1★-ként még elfogadható „bemelegítő”, de a note szintén felsorolja mind a hatot.
- **Javaslat:** Ha a 514-et a fenti 54 matricás kérdésre cseréled, ez maradhat 1★-os bemelegítőnek; ha mindkettőt megtartanád, ezt érdemesebb törölni, mert a kettő ugyanaz a gondolatmenet.

**part3_kat11-15.js:519** · `Ténybeli hiba / vitatott adat`  
> Melyik évben szabadalmaztatta Thomas Edison a szénszálas iz…

- **Baj:** A kérdés maga korrekt (a „szabadalmaztatta” lehorgonyozza az elsőbbségi vitát), de a note – „Az izzó tömeggyártásával az elektromos világítás korszakát nyitotta meg” – az asztalnál kiváltja a Joseph Swan-vitát, aki egy évvel korábban mutatta be a magáét.
- **Javaslat:** note:"Az angol Joseph Swan szinte egyszerre jutott ugyanoda – végül közös céget alapítottak Ediswan néven."

**part3_kat11-15.js:442** · `Érdektelen válasz`  
> Melyik magyar származású tudós nevéhez fűződik a modern szá…

- **Baj:** Sémaismétlés a kategória egészében: a 40 mc-ből 14 „Melyik magyar (származású) …” kezdetű, további 10 „Ki …”, és 8 a „Milyen X fűződik Y nevéhez / milyen kutatásaiért kapott Nobel-díjat” képlet. A tudás jó, de a játék listaszerűvé válik.
- **Javaslat:** Legalább 5-6 kérdést fordíts meg vagy fogalmazz át más agyi műveletre: leírás→név helyett név→találmány („Mit tudott az a szerkezet, amit Tihanyi Kálmán 1926-ban szabadalmaztatott?”), időrend („Melyik találmány született korábban: a telefon vagy a fonográf?”), ok-okozat („Miért kellett a Ganz-transzformátorhoz zárt vasmag?”), párosítás („Melyik páros helyes?”).


### Űrkutatás és informatika

**part4_kat16-19.js:43** · `Elévülő tény`  
> Melyik űrszonda jutott a legtávolabbra a Földtől az embe

- **Baj:** Megdönthető rekord-szuperlatívusz („a legtávolabbra jutott”). Gyakorlatilag évszázadokig igaz marad, de a mérce szerint az ilyet dátumhoz kell kötni vagy másképp kérdezni.
- **Javaslat:** q: „Melyik űrszonda lépett ki elsőként a csillagközi térbe, a Nap részecskeszelének határán túlra 2012-ben?” – ugyanaz a válasz (Voyager–1), de időtálló és tanít is.

**part4_kat16-19.js:45** · `Elévülő tény`  
> Melyik cég fejlesztette ki a ChatGPT mesterségesintellig

- **Baj:** A leggyorsabban avuló téma: a Microsoft nem véletlenül védhető-érzésű disztraktor (fő befektető és a technológia terjesztője), és a cégviszonyok bármikor változhatnak. Az évhez kötés stabillá tenné.
- **Javaslat:** q: „Melyik cég mutatta be 2022 végén a ChatGPT-t?” – a történelmi tény nem avul, és a Microsoft-tévedés is tisztán elválik.

**part4_kat16-19.js:11** · `Félrecímkézett nehézség`  
> Melyik cég gyártja a Falcon 9 rakétát?

- **Baj:** d:1 = ~90% tudná hatból. Egy nagyszülő-generációs asztalnál a Falcon 9 név messze nem ilyen ismert; ráadásul a NASA nem cég, tehát a disztraktor-halmaz sem tiszta. Reálisan 2–3★.
- **Javaslat:** d:2, és a NASA helyett cég-disztraktor: o:["SpaceX","Blue Origin","Boeing","Airbus"]. (Megjegyzés: a 17. sor kérdése is SpaceX-ről szól – a kettő közel áll egymáshoz, érdemes az egyiket másik témára fordítani.)

**part4_kat16-19.js:25** · `Félrecímkézett nehézség`  
> Mi a @ jel magyar beceneve?

- **Baj:** A „kukac” Magyarországon gyakorlatilag mindenki számára ismert, e-mail-cím diktálásából is – ez 1★-os tudás 90 pontért.
- **Javaslat:** d:1 – vagy fordítsd meg és tedd izgalmasabbá: „Melyik ország nyelvében hívják a @ jelet »kis kutyának«?” (orosz), d:4.

**part4_kat16-19.js:57** · `Félrecímkézett nehézség`  
> Melyik leírónyelvvel készül a weboldalak szerkezete? (ne

- **Baj:** A d:3 a jelenlegi disztraktorokkal tarthatatlan (lásd a disztraktor-találatot); még jó disztraktorokkal is legfeljebb 2★.
- **Javaslat:** d:2.

**part4_kat16-19.js:59** · `Félrecímkézett nehézség`  
> Melyik online áruházat alapította Jeff Bezos?

- **Baj:** Bezos–Amazon párosítás ma köznyelvi tudás, a disztraktorok (eBay, Alibaba, PayPal) sem bizonytalanítanak el. Reálisan 2★, nem 3★. (Bezos disztraktorként a 17. sorban is szerepel, ami tovább könnyíti.)
- **Javaslat:** d:2 – vagy nehezítsd: „Milyen terméket árult először, 1995-ben az Amazon?” o:["Könyvet","CD-t","Játékot","Elektronikát"], d:3.

**part4_kat16-19.js:31** · `Félrecímkézett nehézség`  
> Ki volt az első nő, aki a világűrbe jutott?

- **Baj:** Tyereskova neve a magyar iskolai anyag része, és a négy opcióból egyedül az övé illik az 1960-as évekhez – aki nem tudja, is kizárásos alapon rátalál. 2★.
- **Javaslat:** d:2 – vagy tartsd a 3★-ot úgy, hogy Szavickaja mellé egy másik korai szovjet női név kerül, hogy a kizárás ne működjön automatikusan.

**part4_kat16-19.js:81** · `Félrecímkézett nehézség`  
> Melyik ország űrszondája hajtotta végre az első sikeres 

- **Baj:** d:5 = 10–15% tudná. Négy opcióból (Szovjetunió, USA, Japán, Kína) a Japán és a Kína korszakidegen, az 1970-es évek »elsőit« pedig a köztudat a Szovjetunióhoz köti – reálisan 3★.
- **Javaslat:** d:3 – vagy tartsd meg az 5★-ot a szonda nevével: „Melyik szonda küldött elsőként adatokat a Vénusz felszínéről?” o:["Venyera–7","Mariner–2","Magellan","Pioneer–Venus"].

**part4_kat16-19.js:73** · `Megfogalmazás`  
> Ki volt a világ első programozója, Lord Byron matematiku

- **Baj:** A „Lord Byron matematikus lánya” szerkezet félreolvasható úgy, mintha Byron lett volna matematikus (valójában költő volt). Felolvasva biceg.
- **Javaslat:** q: „Ki volt a világ első programozója, Byron költő matematikus lánya?” vagy „…, aki Byron költő lányaként matematikával foglalkozott?”

**part4_kat16-19.js:90** · `Rossz tippelős kérdés`  
> Hány bit alkot egy bájtot?

- **Baj:** Nem becsülhető szám: vagy tudod (8), vagy vaktában lősz – hiányzik a tippelős kérdés lényege, a kikövetkeztethetőség. Ráadásul a helyes tippelők között így csak a gyorsaság dönt.
- **Javaslat:** Cseréld olyan mennyiségre, ahol a nagyságrend kitalálható: „Hány karaktert lehet elküldeni egyetlen SMS-ben?” a:160, unit:"karakter", note:"A 160-as korlátot Friedhelm Hillebrand találta ki: kipróbálta, hogy egy hétköznapi mondat általában belefér."

**part4_kat16-19.js:96** · `Rossz tippelős kérdés`  
> Körülbelül hány kilométer magasan kering a Nemzetközi Űr

- **Baj:** Konvenció-függő szám: az ISS pályamagassága 370–420 km között ingadozik, több forrás 408-at, 410-et vagy 400-at ír. A telitalálat +25%-os bónusza így véletlenre fizet.
- **Javaslat:** Vagy pontosítsd („Kerekítve tíz kilométerre, milyen magasan…”), vagy váltsd arány-kérdésre: „Hányszor magasabban kering az ISS, mint amilyen magasan az utasszállító repülőgépek?” (kb. 40×) – ez kikövetkeztethető.

**part4_kat16-19.js:91** · `Ismétlés / sablon`  
> Melyik évben hajtotta végre a Wright fivérek gépe az els

- **Baj:** A Wright fivérek repülése tematikailag a 15-ös (Feltalálók és találmányok) kategóriába tartozik, nem az űrkutatás-informatikába; mivel a két kategória közös »feltalalo« tipp-tételben van, könnyen ütközhet egy ottani azonos kérdéssel.
- **Javaslat:** Ellenőrizd a cat 15 tippjeit ugyanerre a tényre, és ha ott is szerepel, ezt töröld – a helyére jöjjön egy űrkutatási mennyiség (pl. az Apollo-holdkőzet tömege).

**part4_kat16-19.js:86** · `Megfogalmazás`  
> Melyik évben lépett az első ember a Holdra? (note-forma)

- **Baj:** Több note mondattöredék, kisbetűvel kezdődik és nincs lezárva: 86. sor „július 20-án”, 93. sor „A Sony és a Philips közös szabványa alapján készült”, 97. sor „korábban DVD-kölcsönző volt”. Felolvasva ezek csonkán hatnak.
- **Javaslat:** Egészítsd ki teljes mondattá, pl. 86: "1969. július 20-án – a leszállást világszerte több százmillióan nézték élőben." · 97: "A Netflix korábban postán küldött DVD-ket kölcsönzött, a streaminget csak ráadásként indította."

**part4_kat16-19.js:9** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent a WWW rövidítés?

- **Baj:** A három disztraktor ugyanannak a három szónak a felcserélt sorrendje – nem valódi tévhitek, csak töltelék; a kérdés inkább olvasási feladat, mint tudáspróba, és a helyes válasza sem tanít semmit.
- **Javaslat:** Vagy hagyd meg 1★-os „menjen a játék” kérdésnek (így rendben van), vagy tedd tartalmassá: „Mit jelent a webcímekben látható HTTP rövidítés első két szava?” – illetve cseréld erre: „Melyik jel választja el a webcímben a protokollt a kiszolgáló nevétől?”


### Magyar film, tévé és sorozatok

**part4_kat16-19.js:121** · `Félrecímkézett nehézség`  
> Melyik magyar rajzfilm címszereplője egy kisróka?

- **Baj:** A Vuk minden generáció közös nevezője, és a kérdés szövege („kisróka”) gyakorlatilag odaadja a választ annak is, aki csak a plakátot látta. Ez 1★-os slot, nem 2★-os.
- **Javaslat:** d:1, vagy nehezítsd a feladatot: „Melyik rajzfilm főhőse veszíti el a szüleit a vadász miatt?” – így a cím-felismerés helyett a történetre kell emlékezni.

**part4_kat16-19.js:149** · `Félrecímkézett nehézség`  
> Ki rendezte az Oscar-díjas Mephisto című filmet?

- **Baj:** A Szabó István–Mephisto párosítás a magyar közműveltség egyik legszilárdabb ténye, és a kérdés maga is kiemeli az Oscart, ami tovább szűkít. d:3 (hatból három) alábecsli a köztudást; reálisan 2★.
- **Javaslat:** d:2 – vagy tartsd 3★-on úgy, hogy az Oscar-utalás kikerül a kérdésből: „Ki rendezte a Mephistót Klaus Mann regényéből?”

**part4_kat16-19.js:167** · `Félrecímkézett nehézség`  
> Melyik budapesti lakótelepen játszódott a Szomszédok című teleregény?

- **Baj:** A „gazdagréti” jelző annyira összenőtt a sorozattal, hogy a Szomszédokat ismerők közel 100%-a tudja; aki nem ismeri a sorozatot, annak viszont tiszta érme-feldobás. Ez inkább 2★-os ismeret, mint 3★-os.
- **Javaslat:** d:2.

**part4_kat16-19.js:221** · `Félrecímkézett nehézség`  
> Melyik utcában állt a Magyar Rádió történelmi székháza Budapesten?

- **Baj:** A Bródy Sándor utca 1956 miatt tankönyvi ismeret (a rádió ostroma), tehát a felnőttek jó része tudja – ez nem az az „egy ember tudja” pillanat, amit az 5★ (125 pont) ígér.
- **Javaslat:** d:3.

**part4_kat16-19.js:143** · `Ismétlés / sablon`  
> Ki alakította Pelikán Józsefet A tanú című filmben?

- **Baj:** Három tétel ugyanarról a filmről: 143 (főszereplő), 151 (rendező), 253 (készítés éve). Egy 15 kérdéses játszmában így kétszer is előjöhet ugyanaz a film, ami szűknek érezteti a kategóriát.
- **Javaslat:** Tartsd meg a 143-at és a 253-at (különböző feladat), a 151-es rendező-kérdést cseréld olyan Bacsó-tételre, ami nem A tanú: „Melyik film híres mondata: »Az élet nem habostorta«?” o:[„A tanú”,„Régi idők focija”,„Megáll az idő”,„Szerencsés Dániel”] – illetve inkább egy másik rendező (Makk Károly, Gothár) egy-egy filmje.

**part4_kat16-19.js:230** · `Hiányzó note`  
> Melyik évben indult a Barátok közt?

- **Baj:** Üres note – a vesztes semmit nem kap a kérdésért cserébe.
- **Javaslat:** note:„Több mint két évtizeden át ment, és a magyar tévétörténet leghosszabb napi sorozata lett.”

**part4_kat16-19.js:236** · `Hiányzó note`  
> Hány mentor ült a zsűriben a magyar X-Faktor egy-egy évadában?

- **Baj:** Üres note.
- **Javaslat:** note:„Mindegyik mentor egy-egy kategóriát vitt: fiúk, lányok, idősebbek és csapatok.”

**part4_kat16-19.js:237** · `Hiányzó note`  
> Melyik évben nyert Oscar-díjat a Mephisto című magyar film?

- **Baj:** Üres note egy olyan kérdésnél, ahol kínálja magát a „nahát!” tény.
- **Javaslat:** note:„Szabó István filmje Klaus Mann regényéből készült, a főszerepben Klaus Maria Brandauerrel.”

**part4_kat16-19.js:257** · `Hiányzó note`  
> Melyik évben indult el a Magyar Televízió rendszeres adása?

- **Baj:** Üres note.
- **Javaslat:** note:„A rendszeres adás 1957. május 1-jén indult; akkor még pár ezer készülék volt az országban.”

**part4_kat16-19.js:226** · `A kérdés elárulja a válaszát`  
> Hány feje van Süsünek, a bábfilmsorozat sárkányának?

- **Baj:** A figura köznyelvi neve maga „Süsü, az egyfejű sárkány” – aki egyszer hallotta, annak a kérdés a saját válaszát mondja ki. 1★-os slotnak még elmegy, de tanítani nem tanít semmit.
- **Javaslat:** Ha marad, a note adjon hozzá valamit: „A hétfejű sárkányok családjában épp az egyetlen feje miatt lett kitaszított.” Alternatíva: „Hány feje van a mesebeli sárkánynak, akit Süsü apja megtestesít?” helyett inkább egy Csukás-tétel.

**part4_kat16-19.js:179** · `Második védhető válasz`  
> Melyik csatornán futott a Big Brother első magyar szériája?

- **Baj:** A negyedik opció „MTV” – ez magyar szövegkörnyezetben egyszerre jelentheti a Magyar Televíziót és a zenei MTV-t. Az asztalnál ebből vita lesz, nem tudásmérés.
- **Javaslat:** Cseréld egyértelműre: „Magyar Televízió” vagy „Duna TV”. A négy opció így is egy halmaz marad.

**part4_kat16-19.js:153** · `Második védhető válasz`  
> Ki volt Bud Spencer legendás magyar szinkronhangja?

- **Baj:** Bud Spencernek több magyar hangja volt (Bujtor István mellett Kránitz Lajos is számos filmben); a „legendás” jelző oldja ugyan, de a filmrajongó családtag joggal érvelhet mással. A 113. sorral együtt ráadásul két Bujtor-tétel van egymás mellett.
- **Javaslat:** Kösd konkrét filmhez: „Ki adta Bud Spencer magyar hangját a Bűnvadászok című filmben?” – vagy hagyd, de a 113-as Ötvös Csöpi kérdést cseréld (pl. „Melyik magyar színész rendezte és játszotta Ötvös Csöpit?” helyett egy Kern András-tételre).

**part4_kat16-19.js:165** · `Második védhető válasz`  
> Melyik vetélkedő fűződik Rózsa György nevéhez?

- **Baj:** A Kapcsoltam valóban az ő műsora, de a disztraktorok közt olyan MTV-s vetélkedők állnak (Szerencsekerék, Telemázli), amelyek műsorvezetői köre részben átfed a korszak ugyanazon arcaival – ezt beírás előtt tételesen ellenőrizni kell, különben második védhető válasz keletkezik. (A Kapcsoltamot később Vitray Tamás is vezette a TV2-n, tehát a fordított irány sem tiszta.)
- **Javaslat:** Ellenőrizd a Szerencsekerék és a Telemázli műsorvezetőit; ha bármelyik köthető Rózsa Györgyhöz, cseréld biztos idegen műsorra: „Játék határok nélkül”, „Mindent vagy semmit!”, „Csináljuk a fesztivált!”.

**part4_kat16-19.js:247** · `Elévülő tény`  
> Melyik évben rendezték meg az első Ki mit tud? tehetségkutató...

- **Baj:** A note rekord-szuperlatívuszt állít („Évtizedekig ez volt az ország legnézettebb műsora”), ami nem alátámasztható és a mérce szerint kerülendő megfogalmazás.
- **Javaslat:** note:„A hatvanas–hetvenes években egész utcák ürültek ki az adás idejére – innen indult Koncz Zsuzsa és Halász Judit pályája is.”

**part4_kat16-19.js:261** · `Elévülő tény`  
> Hány epizódból áll a Magyar népmesék klasszikus, 2011-ig készült...

- **Baj:** Maga a kérdés jól horgonyzott (2011-ig), de a note friss hírre hivatkozik („2024-ben új epizódok készítését is bejelentették”), ami pár év alatt elavul vagy félreérthetővé válik.
- **Javaslat:** note:„A sorozat 1980-ban indult, és Jankovics Marcell tervei nyomán lett a magyar népi díszítőművészet mozgó tárháza.”

**part4_kat16-19.js:119** · `Ismétlés / sablon`  
> Melyik magyar sorozat középpontjában áll a Berényi család?

- **Baj:** A 109. és a 230. sorral együtt három Barátok közt-tétel van a kategóriában (csatorna, család, indulás éve). Ez egy 59 mc-s készletben már érezhető ismétlés.
- **Javaslat:** Ezt a kérdést tartsd meg (ez a legjobb a háromból: szereplő → mű séma), a 109-est írd át vagy töröld a csatorna-sablon felszámolásakor.

**part4_kat16-19.js:219** · `Gyenge disztraktor / hossz-árulkodás`  
> Milyen művészi végzettséggel rendelkezett Antal Imre, a Szeszélyes...

- **Baj:** Mind a négy opció „… volt” alakban végződik, ami fölösleges szóismétlés a felolvasásnál, és a mondat hosszát is aszimmetrikussá teszi („Balett-táncos volt” vs „Zongoraművész volt”).
- **Javaslat:** o:[„Zongoraművész”,„Operaénekes”,„Hegedűművész”,„Karmester”] – rövidebb, azonos regiszterű halmaz, és a karmester hihetőbb disztraktor a balett-táncosnál.

**part4_kat16-19.js:107** · `Félrecímkézett nehézség`  
> Melyik magyar film nyerte el 2016-ban a legjobb idegen nyelvű...

- **Baj:** d:1 (hatból öten tudják) a Saul fiára reális a felnőtteknél, de a disztraktorok között ott a Mindenki, amely szintén Oscart nyert (rövidfilm-kategóriában, 2017-ben) – a részben tájékozott játékos épp emiatt bizonytalanodik el. Ez inkább 2★.
- **Javaslat:** d:2, és ha teljesen tiszta akarsz lenni, a kérdés mondja ki: „Melyik magyar EGÉSZ ESTÉS film nyerte el 2016-ban…”.


### Magyar könnyűzene

**part4_kat16-19.js:316** · `Félrecímkézett nehézség`  
> Melyik együttes slágere a „Santa Maria”?

- **Baj:** 3★-nak jelölve, de a Neoton Família „Santa Maria”-ja a szülők generációjának egyértelmű, és a disztraktorok (Hungária, Dolly Roll, Első Emelet) stílusban távol állnak – kevesen bizonytalanodnak el. Reálisan 2★.
- **Javaslat:** d:2, vagy maradjon 3★, de kerüljön mellé olyan disztraktor, ami tényleg összekeverhető (pl. „A Neoton” korai neve / „A Színes Rádió” helyett: Kati és a Kerek Perec, V'Moto-Rock).

**part4_kat16-19.js:306** · `Félrecímkézett nehézség`  
> Melyik együttes frontembere volt Fenyő Miklós?

- **Baj:** Fenyő Miklós és a Hungária összekapcsolása a 40+ korosztálynak automatikus; a Dolly Roll disztraktor ugyan a Hungária utódja, de Fenyő sosem volt tagja. 3★ helyett 2★.
- **Javaslat:** d:2. 3★-os változat ugyanebből a tudásból: „Melyik zenekar tagjaiból alakult 1983-ban a Dolly Roll?” (Hungária).

**part4_kat16-19.js:272** · `Félrecímkézett nehézség`  
> Melyik együttes slágere a Gyöngyhajú lány?

- **Baj:** A kategória legismertebb dala 2★-on áll, miközben a pakliban csak 2 db 1★ van a 4-es cél helyett. Ez a kérdés a klasszikus „rávágják és megy tovább a játék” tétel.
- **Javaslat:** d:1 – ezzel a nehézség-eloszlás is közelebb kerül a 4/8/16/8/4 célhoz.

**part4_kat16-19.js:344** · `Félrecímkézett nehézség`  
> Melyik együttes frontembereként kezdte pályafutását Ákos, azaz Ko

- **Baj:** 5★ (≈10–15%) túlzás: a Bonanza Banzai a 40–55 éves korosztálynak közismert, egy hatfős családi asztalnál jellemzően 2-3 ember tudja. Reálisan 4★.
- **Javaslat:** d:4. Valódi 5★ ugyanebből: „Melyik évben oszlott fel a Bonanza Banzai?” helyett inkább „Ki volt a Bonanza Banzai másik állandó tagja Ákos mellett?” (Menyhárt János).

**part4_kat16-19.js:308** · `Érdektelen válasz`  
> Melyik városból származik Majka, azaz Majoros Péter?

- **Baj:** A születési hely bemagolható adat, nem következtethető ki – a négy északi város közül aki nem tudja, az érmét dob (négyből egy), és veszíteni sem jó rajta: nincs mit elmesélni utána. Az Ózd egyébként helyes.
- **Javaslat:** Cseréld érdekesebb tényre, pl.: „Melyik tehetségkutató műsorban tűnt fel 2003-ban Majka?” (Megasztár / Csillag születik / X-Faktor / Sztárban sztár) – ez ráadásul feladattípust is vált.

**part4_kat16-19.js:278** · `Elévülő tény`  
> Ki a Tankcsapda frontembere?

- **Baj:** Jelen idejű állítás egy működő zenekarról – felállás-változásnál a kérdés csendben hamissá válik. A kategória többi tétele következetesen múlt idejű vagy dátumhoz kötött.
- **Javaslat:** Fordítsd meg és kösd dátumhoz: „Melyik debreceni rockzenekart alapította 1989-ben Lukács László?” – így időtálló, és a sablon-túlsúlyt is oldja.

**part4_kat16-19.js:270** · `A kérdés elárulja a válaszát`  
> Melyik színésznő-énekesnő lemezein nőttek fel generációk gyerekei

- **Baj:** A „színésznő-énekesnő” jelző a négy opció közül egyedül Halász Juditra illik – aki nem ismeri a dalt, az is kizárja a másik hármat. Ráadásul a mondat hosszú, felolvasva nehézkes.
- **Javaslat:** „Melyik énekesnő gyerekdala a »Boldog születésnapot«?” – az opciók változatlanok maradhatnak, a jelző nélkül a kérdés tényleg 1★-os tudást mér.

**part4_kat16-19.js:288** · `Második védhető válasz`  
> Ki énekelte az „Elmegyek” című örökzöld slágert?

- **Baj:** Az „Elmegyek” cím több magyar dalon osztozik (népdalfeldolgozások, Kormorán), és az „örökzöld sláger” megjelölés nem szűkít. A négy opción belül nem áll elő második védhető válasz, de a tájékozott játékos elbizonytalanodik – rossz okból.
- **Javaslat:** Használj összetéveszthetetlen Máté Péter-dalt: „Ki énekelte a »Zene nélkül mit érek én« című dalt?” (Máté Péter / Szécsi Pál / Korda György / Aradszky László).

**part4_kat16-19.js:286** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik együttes magyar slágere a „Paff, a bűvös sárkány”?

- **Baj:** Enyhe hossz-árulkodás: „A 100 Folk Celsius” (18) a disztraktor-átlag (11,7) másfélszerese fölött van. A tény helyes (100 Folk Celsius, 1984-es lemez), de a Kaláka és a Bojtorján stílusban is közel áll, tehát a hossz az egyetlen ingyen kapaszkodó.
- **Javaslat:** Egyenlítsd ki a hosszakat: „A 100 Folk Celsius”, „A Gerilla együttes”, „A Kaláka együttes”, „A Bojtorján együttes” – vagy mindegyikről hagyd el az „együttes”/névelő-toldalékot.


### Komolyzene

**part4_kat16-19.js:367** · `Félrecímkézett nehézség`  
> Ki komponálta A négy évszak című hegedűverseny-sorozatot?

- **Baj:** A Négy évszak a klasszikus zene egyik legtöbbet hallott műve (reklámok, telefonos várakoztatás); hatfős családi asztalnál 60–70% tudja, tehát 2★, nem 3★.
- **Javaslat:** d:2. Ha 3★-os marad a slot, élesíts: q:"Melyik évszak koncertje nyitja Vivaldi A négy évszak sorozatát?" o:["A tavasz","A nyár","Az ősz","A tél"].

**part4_kat16-19.js:359** · `Félrecímkézett nehézség`  
> Melyik zeneszerző alkotott úgy is, hogy teljesen elvesztette a hallását?

- **Baj:** Beethoven süketsége a legismertebb komolyzenei közhely — bőven 90% fölött tudják, ez 1★-os slot, nem 2★.
- **Javaslat:** d:1. (A kategóriában van hely: a 2★-os sávot inkább a Bánk bán / Kodály-kérdés töltse ki.)

**part4_kat16-19.js:393** · `Félrecímkézett nehézség`  
> Melyik német városban rendezik a híres nyári Wagner-ünnepi játékokat?

- **Baj:** A Bayreuth–Wagner párosítás erősen bevésett; a disztraktorok közül a Salzburg (Mozart) is közismerten máshoz kötődik, így a felnőttek jó része kizárásos alapon is odatalál. Inkább 3★.
- **Javaslat:** d:3, vagy nehezítsd a kérdést a színház nevével: q:"Milyen néven hívják a Wagner tervei szerint épült bayreuthi ünnepi színházat?" o:["Festspielhaus","Semperoper","Gewandhaus","Staatsoper"], d:5.

**part4_kat16-19.js:357** · `Félrecímkézett nehézség`  
> Melyik magyar zeneszerző operája a Bánk bán?

- **Baj:** A Bánk bán Erkel-opera volta iskolai törzsanyag Magyarországon, a Hazám, hazám ária közismert — reálisan 1★. Emellett a kategóriában az „Erkel Ferenc” kétszer is helyes válasz (351. sor is), ami 25 kérdésnél már érezhető ismétlés.
- **Javaslat:** d:1. Az ismétlés oldására a Bánk bánt fordítsd meg: q:"Melyik opera leghíresebb áriája a Hazám, hazám?" o:["Bánk bán","Hunyadi László","Sába királynője","Háry János"] — így nem Erkel a válasz.

**part4_kat16-19.js:379** · `Megfogalmazás`  
> Ki szerezte a Kék Duna keringőt?

- **Baj:** A negyedik opció „Franz Léhar” — hibás alak: vagy Lehár Ferenc (magyarul), vagy Franz Lehár (németül), de sosem „Léhar”. Ráadásul a Lehár mint helyes válasz szerepel a 373. sorban, itt meg disztraktorként — a két kérdés egymás mellé sorsolva zavaró.
- **Javaslat:** o:["Ifj. Johann Strauss","Id. Johann Strauss","Josef Lanner","Émile Waldteufel"] — így a négy opció egységesen 19. századi keringőszerző, és nincs átfedés a Lehár-kérdéssel.

**part4_kat16-19.js:395** · `Megfogalmazás`  
> Melyik Händel-oratóriumban csendül fel a híres Halleluja-kórus?

- **Baj:** Az „Az Izrael Egyiptomban-ban” magyartalan és felolvasva megbotlik rajta a játékvezető (ezt a játékot felolvassák). A négy opció hossza is szétesik.
- **Javaslat:** Egységes, rövid alakok: o:["A Messiásban","A Sámsonban","A Salamonban","A Júdás Makkabeusban"].

**part4_kat16-19.js:397** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik operát írta Goldmark Károly, a 19. századi magyar zeneszerző?

- **Baj:** A négy opció nem egy halmaz: a Sába királynője és a Hunyadi László opera, A mosoly országa viszont Lehár-OPERETT, „Az aranyember” pedig elsősorban Jókai-regényként él (opera-címként alig ismert). Aki tudja a műfajokat, kettőt ingyen kizár egy 5★-os kérdésnél.
- **Javaslat:** Csupa 19. századi magyar operacím: o:["Sába királynője","Hunyadi László","Brankovics György","István király"] — mind opera (Erkel, ill. Goldmark kortársai), a nehézség így valóban 5★-os marad. A „, a 19. századi magyar zeneszerző” tagmondat kihagyható.


### Nemzetközi filmek

**part5_kat20-23.js:19** · `Ismétlés / sablon`  
> Ki rendezte az E.T. – A földönkívüli és a Cápa című f

- **Baj:** Harmadik „Ki rendezte…" az első tíz kérdés között, és a Jurassic Park-tipp note-ja („Steven Spielberg rendezte") ugyanezt a nevet tanítja — a kettő együtt redundáns.
- **Javaslat:** q:"Melyik Spielberg-filmben hangzik el a „Kell egy nagyobb hajó" mondat?" o:["Cápa","E.T. – A földönkívüli","Az elveszett frigyláda fosztogatói","Ryan közlegény megmentése"] (d:3)

**part5_kat20-23.js:17** · `A kérdés elárulja a válaszát`  
> Melyik rajzfilm főhőse Simba, az oroszlánkölyök?

- **Baj:** Az „oroszlánkölyök" szó szerepel a helyes opcióban (Az oroszlánkirály), a másik háromban nem — a mérce szerint ez egy nyíl a megoldásra. 2★-nak is túl könnyű.
- **Javaslat:** q:"Melyik rajzfilm főhőse Simba?" o:["Az oroszlánkirály","A dzsungel könyve","Madagaszkár","Kung Fu Panda"], d:1 — a név önmagában is elég támpont, de már nem ingyen.

**part5_kat20-23.js:23** · `Félrecímkézett nehézség`  
> Melyik mesefilm főhőse a zöld ogre, aki a mocsarában 

- **Baj:** 2★, de a Shrek-leírás annyira egyértelmű, hogy gyakorlatilag mindenki tudja (a másik három opció egyikében sincs ogre). Reálisan 1★.
- **Javaslat:** d:1 — vagy legyen 2★-os igazi kérdés: q:"Milyen állat Shrek leghűségesebb társa a mesében?" o:["Szamár","Öszvér","Kecske","Póni"]

**part5_kat20-23.js:27** · `Második védhető válasz`  
> Melyik filmsorozat titkosügynöke a 007-es?

- **Baj:** A kérdés filmsorozatot kér, de a helyes opció egy szereplő neve (James Bond), miközben a „Mission: Impossible" tényleg sorozatcím — a négy opció nincs egy halmazban. Egy pedáns játékos jogosan mondhatja, hogy a sorozat neve nem „James Bond". 2★-nak is túl könnyű.
- **Javaslat:** q:"Melyik filmsorozat főhőse a 007-es kódszámú titkosügynök?" o:["James Bond-filmek","Mission: Impossible","Bourne-filmek","Kingsman"], d:1 — vagy váltsd a feladatot: „Melyik márkájú autó a leggyakoribb James Bond-szolgálati autó?"

**part5_kat20-23.js:15** · `Érdektelen válasz`  
> Ki alakította Forrest Gumpot az azonos című filmben?

- **Baj:** Technikailag hibátlan, de a válasz (Tom Hanks) nulla „nahát"-élményt ad, és az „azonos című filmben" tagmondat is felesleges. A mérce 7. pontja szerint a helyes válasz legyen a legérdekesebb a négy közül.
- **Javaslat:** q:"Milyen sportban lett bajnok Forrest Gump, mielőtt Kínába utazott volna?" o:["Asztalitenisz","Amerikai foci","Atlétika","Ökölvívás"] (d:3) — a Tom Hanks-tudás egy másik filmen keresztül is kérdezhető.

**part5_kat20-23.js:79** · `Félrecímkézett nehézség`  
> Mi a neve a szállodának Stanley Kubrick Ragyogás című

- **Baj:** 5★ (125 pont), de aki látta a filmet vagy olvasta a King-regényt, annak az Overlook név azonnal beugrik — a 10–15%-os sávnál lényegesen többen tudják. Reálisan 4★.
- **Javaslat:** d:4 — az 5★-os slotot inkább a Méliès- vagy a Morricone-kérdés érdemli.

**part5_kat20-23.js:75** · `Félrecímkézett nehézség`  
> Ki komponálta a Star Wars és az Indiana Jones filmzen

- **Baj:** 4★, de John Williams neve két ekkora franchise mellett a filmzene-kedvelők körén túl is ismert, a disztraktorok pedig más korszakhoz/stílushoz kötődnek. Reálisan 3★.
- **Javaslat:** d:3 — vagy maradjon 4★ nehezebb feladattal: q:"Melyik filmhez írta John Williams a cápa közeledését jelző kéthangú motívumot?" (ez viszont ütközne a Cápa-kérdéssel, tehát inkább a d csökkentése a javasolt)

**part5_kat20-23.js:73** · `Félrecímkézett nehézség`  
> Melyik francia színész volt a Kifulladásig sztárja, a

- **Baj:** 4★, de a kaszkadőrmutatványaira utaló mellékmondat egyértelműen Belmondóra mutat (a másik három színészt senki nem köti kaszkadőrködéshez) — a segítő tagmondat itt a válasz felét odaadja. Reálisan 3★.
- **Javaslat:** Hagyd el a segítő tagmondatot és állítsd d:3-ra: q:"Melyik francia színész játszotta a főszerepet Godard Kifulladásig című filmjében?" — a kaszkadőrös tény jobb helyen lenne egy külön kérdésben.

**part5_kat20-23.js:33** · `Félrecímkézett nehézség`  
> Ki rendezte az Oscar-díjas Élősködők című dél-koreai 

- **Baj:** 3★, pedig a négy koreai/japán rendezőnév közül választani a magyar családi asztalnál inkább 4★-os feladat — a film ismert, a rendező neve sokkal kevésbé.
- **Javaslat:** d:4 — vagy tedd 3★-ossá a filmre kérdezéssel: q:"Melyik film lett az első nem angol nyelvű alkotás, amely elnyerte a legjobb film Oscar-díját?" o:["Élősködők","Roma","A tigris és a sárkány","Az élet szép"]

**part5_kat20-23.js:98** · `Ténybeli hiba / vitatott adat`  
> Melyik évben mutatták be A dzsesszénekest, az első ha

- **Baj:** Az „első hangosfilm" megfogalmazás pontatlan: A dzsesszénekes az első egész estés film volt szinkronizált beszéddel és énekkel — hangosfilm-kísérletek már évekkel korábban is voltak (Vitaphone-rövidfilmek, 1926). Egy tájékozott játékos jogosan akadhat fenn rajta.
- **Javaslat:** q:"Melyik évben mutatták be A dzsesszénekest, az első egész estés filmet szinkronizált beszéddel?" note:"„Még nem hallottatok semmit!" — Al Jolson rögtönzött mondata lett a hangosfilm-korszak nyitánya."

**part5_kat20-23.js:81** · `Második védhető válasz`  
> Melyik film nyerte el a legelső Oscar-gálán a legjobb

- **Baj:** Az 1929-es első gálán KÉT egyenrangú fődíj volt: az „Outstanding Picture" (Szárnyak) és az „Unique and Artistic Picture" (Napkelte). Aki ezt tudja — épp a legtájékozottabb —, joggal bizonytalanodik el, ha a Napkelte nincs is az opciók közt.
- **Javaslat:** Zárd ki a vitát a kérdésben: q:"Melyik film kapta az első Oscar-gálán a kiemelkedő produkciónak járó fődíjat, amelyből a mai legjobb film díja lett?" o:["Szárnyak (Wings)","A dzsesszénekes","Aranypolgár","Elfújta a szél"]

**part5_kat20-23.js:13** · `Érdektelen válasz`  
> Ki rendezte a Ponyvaregényt?

- **Baj:** A negyedik „Ki rendezte / Ki alakította" sablon az első hat kérdésben; a Tarantino-válasz önmagában semmit nem tanít, pedig a filmből rengeteg érdekes tény kérdezhető.
- **Javaslat:** q:"Melyik étteremláncról nevezték el a Ponyvaregényben azt a hamburgert, amit Vincent és Jules emleget?" túl szűk — inkább: q:"Melyik Tarantino-film meséli el a történetét szándékosan felcserélt időrendben, három összefonódó szálon?" o:["Ponyvaregény","Kill Bill","Django elszabadul","Aljas nyolcas"] (d:3)


### Nemzetközi popzene

**part5_kat20-23.js:111** · `Félrecímkézett nehézség`  
> Melyik városból indult a Beatles?

- **Baj:** Liverpool a Beatleshez ugyanúgy hozzátartozik, mint a név maga; egy hatfős családi asztalnál ez bőven 90% fölött van, tehát 1★.
- **Javaslat:** d:2 → d:1 (a 109. sorral cserélve épp kiadja a helyes 1★/2★ arányt).

**part5_kat20-23.js:139** · `Félrecímkézett nehézség`  
> Melyik énekesnő albuma a „Like a Virgin”?

- **Baj:** A Like a Virgin Madonna védjegye; a 80-as évek zenéjét ismerő szülőgeneráció egy embernek tudja, és a cím maga is összeforrt a névvel. Ez nem 50%-os (3★), hanem inkább 70%-os kérdés.
- **Javaslat:** d:3 → d:2. Ha 3★-on akarod tartani, kérdezd nehezebb lemezről: „Melyik Madonna-album címadó dala szólal meg a Ki vagy, doki? …” helyett pl. a Ray of Light (1998) albumról.

**part5_kat20-23.js:155** · `Megfogalmazás`  
> Melyik együttes slágere a „(I Can't Get No) Satisfaction”?

- **Baj:** Az „A The Who” opcióban kettős névelő van (magyar „a” + angol „The”). Felolvasva kifejezetten zavaró, és formailag elüt a másik három opciótól.
- **Javaslat:** o:["A Rolling Stones","A Beatles","A Who","A Kinks"] – vagy egységesen névelő nélkül mind a négy.

**part5_kat20-23.js:123** · `Megfogalmazás`  
> Kit neveznek a rock and roll királyának?

- **Baj:** Itt „Elvis Presley-t” kötőjellel szerepel, a 105. sorban ugyanez „Elvis Presleyt” kötőjel nélkül. A Presley végi -y magyarul [i]-nek hangzik, tehát a kötőjel nélküli alak a helyes; a két kérdés között az eltérés következetlen.
- **Javaslat:** o[0]: "Elvis Presley-t" → "Elvis Presleyt".

**part5_kat20-23.js:151** · `A kérdés elárulja a válaszát`  
> Ki énekelte a My Way című dalt, amely örökre összeforrt...

- **Baj:** Az „amely örökre összeforrt a nevével” mellékmondat semmilyen információt nem ad, viszont azt sugallja, hogy egy egyértelműen ikonikus névre kell gondolni – a négy crooner közül ez azonnal Sinatra felé terel. A mérce 3. pontja szerinti „segítőnek szánt mellékmondat”.
- **Javaslat:** q:"Ki énekelte a My Way című dalt?" – és mivel így is szinte automatikus, d:3 → d:2. A note-értékű érdekesség (a dallam eredetileg Claude François francia sanzonja, a Comme d'habitude) inkább külön kérdést érdemelne.

**part5_kat20-23.js:167** · `Félrecímkézett nehézség`  
> Ki volt a Led Zeppelin gitárosa?

- **Baj:** A négy opcióból három maga a Led Zeppelin (Page, Plant, Jones), és aki csak felületesen ismeri a zenekart, is tudja, hogy Plant az énekes – így a kérdés inkább 50%-os, mint 30%-os.
- **Javaslat:** d:4 → d:3, vagy nehezítsd a valódi keveréssel: „Melyik együttesben játszott Jimmy Page a Led Zeppelin előtt?” o:["A Yardbirds","A Kinks","A Small Faces","A Cream"].

**part5_kat20-23.js:181** · `Gyenge disztraktor / hossz-árulkodás`  
> Mi volt Freddie Mercury születési neve?

- **Baj:** Keveredik a regiszter: a „Reza Pahlavi” valós iráni uralkodóházi név (nem előadóművész), a „Faruk Mercur” pedig áttetsző tréfa – a művésznév fele benne van, ezért senki nem választja. Ráadásul a 179. sorral együtt két egymás utáni „mi a születési neve” kérdés áll a pakliban, ami monotonná teszi az 5★-os blokkot.
- **Javaslat:** o:["Farrokh Bulsara","Farid Bulsani","Ahmed Zanzibari","Feroz Barsala"] – négy egyforma regiszterű, hihető párszi/zanzibári név. A 179-es Elton John-kérdést pedig érdemes más sémára váltani (pl. melyik Elton John-dalt írta át Diana hercegnő temetésére).

**part5_kat20-23.js:147** · `Második védhető válasz`  
> Melyik országból származik az AC/DC együttes?

- **Baj:** A zenekar valóban Sydney-ben alakult, de az alapító Young fivérek (és Bon Scott) Skóciában születtek – az asztalnál a legtájékozottabb játékos épp az „Egyesült Királyság” mellett kezdhet érvelni. Nem hibás kérdés, de a „származik” szó nyitva hagyja a vitát.
- **Javaslat:** q:"Melyik országban alakult meg az AC/DC együttes?" – ezzel a második védhető válasz eltűnik, és a note-ba kívánkozó érdekesség (a Young fivérek Glasgow-ból vándoroltak ki) megmarad beszédtémának.


### Mémek és internetkultúra

**part5_kat20-23.js:256** · `A kérdés elárulja a válaszát`  
> Miről szólt a legelső YouTube-videó, a „Me at the zoo”?

- **Baj:** A cím fele („at the zoo”) elárulja, hogy állatkertben járunk, és egyedül a helyes opció említ állatkertet – a másik három (táncoló baba, zongorázó macska, gördeszkás esés) nyilvánvalóan nem oda való. Ezzel négyből egy azonnal kizáródik, sőt a helyes ki is emelkedik.
- **Javaslat:** Tartsd az állatkertet mind a négy opcióban: o:["Az elefántok ormányáról","A pingvinek etetéséről","Egy szökött majomról","Az oroszlánok altatásáról"], és a kérdés maradhat. Így valódi választás lesz belőle.

**part5_kat20-23.js:224** · `Félrecímkézett nehézség`  
> Mi veszi körül a kalapos kutyát a This is fine feliratú

- **Baj:** A „This is fine” képregénykocka az angol nyelvű Twitter-kultúra terméke; magyar családi közegben a nagyszülők-szülők nem találkoztak vele. A lángoló szoba kitalálható a mém iróniájából, de csak annak, aki érti az angol feliratot.
- **Javaslat:** d:3 → d:4, vagy adj magyar kapaszkodót a kérdésbe: q:"A „This is fine” (minden rendben) mémképen mi veszi körül a nyugodtan kávézó, kalapos kutyát?" és maradhat d:3.

**part5_kat20-23.js:248** · `Félrecímkézett nehézség`  
> Ki volt automatikusan minden új MySpace-felhasználó els

- **Baj:** A MySpace Magyarországon soha nem volt tömeges – itthon az iWiW töltötte be ezt a szerepet –, ezért a „Tom” sztori a magyar asztalnál nem közös emlék. Négy keresztnév közül tippelnek, 110 pontért.
- **Javaslat:** Emeld d:5-re, vagy cseréld magyar megfelelőre (iWiW-es kérdés már van, ezért inkább valamelyik pótlásra).

**part5_kat20-23.js:262** · `Félrecímkézett nehézség`  
> Melyik programban rajzolta meg alkotója a vigyorgó Trol

- **Baj:** A tény helyes (MS Paint, 2008), és a válasz kikövetkeztethető a rajz durva, egérrel húzott vonalaiból – de csak annak, aki ismeri a Trollface-t. Az asztal többségének ez négyesélyes tipp 125 pontért. Az 5★ határeset, de a kategória sok hasonló kérdése miatt ez az egyik, amit érdemes elengedni.
- **Javaslat:** Ha marad, adj a kérdésbe fogódzót: q:"Melyik egyszerű, minden Windowson megtalálható rajzolóprogramban készült 2008-ban a vigyorgó Trollface?" – így a kikövetkeztetés valóban működik, és marad d:4.

**part5_kat20-23.js:206** · `Gyenge disztraktor / hossz-árulkodás`  
> Mit jelent az OMG internetes rövidítés?

- **Baj:** Az „Oh my gosh darn” értelmetlen halandzsa, nem hihető disztraktor – aki nem tudja a választ, ezt azonnal kizárja. Emellett az OMG a magyar köznyelvben is elterjedt, tehát 2★ helyett 1★.
- **Javaslat:** o:["Oh my God (te jó ég)","On my go (indulok)","Only my guess (csak tipp)","Over my grade (nekem magas)"], d:1.

**part5_kat20-23.js:190** · `Megfogalmazás`  
> Mit jelent a LOL rövidítés?

- **Baj:** Következetlenség a kategórián belül: az OMG-nél (206. sor) minden opcióhoz jár magyar fordítás zárójelben, itt egyikhez sem. Aki nem tud angolul, a négy angol szókapcsolat között nem tud választani – pedig maga a válasz („hangosan nevetve”) magyarul közismert.
- **Javaslat:** o:["Laughing out loud (hangosan nevetve)","Lots of love (sok szeretet)","Loud online laugh (hangos online kacaj)","League of Laughs (nevetők ligája)"] – marad d:1.

**part5_kat20-23.js:192** · `Érdektelen válasz`  
> Mit jelent a szelfi?

- **Baj:** A kérdés nem választ szét senkit (az asztalnál mind a hatan tudják), a helyes válasza pedig nem tanít semmit – elpazarolt slot. Ráadásul a 254. sor kérdésében a „szelfi” disztraktorként szerepel, ami tovább csökkenti az önálló értékét.
- **Javaslat:** Cseréld olyan 1★-osra, ami legalább egy „nahát!”-ot ad: pl. a pótlásban javasolt kukac (@) kérdésre, vagy: q:"Melyik évben lett a szelfi az Oxford szótár év szava?" – de az már a 254-gyel ütközne, ezért inkább a pótlást használd.

**part5_kat20-23.js:216** · `Gyenge disztraktor / hossz-árulkodás`  
> Melyik betegség kutatását támogatta a 2014-es jeges vöd

- **Baj:** Enyhe hossz- és formaárulkodás: egyedül a helyes opció kap zárójeles magyarázatot („Az ALS-t (egy idegrendszeri betegséget)”), a másik három egyszavas betegségnév. A magyarázat itt indokolt, de a formai kilógás elárulja a választ.
- **Javaslat:** Told a magyarázatot a kérdésbe: q:"Melyik idegrendszeri betegség kutatását támogatta a 2014-es jeges vödrös kihívás?", o:["Az ALS-t","A Parkinson-kórt","A sclerosis multiplexet","Az Alzheimer-kórt"] – így négy azonos regiszterű opció áll szemben, és a kérdés tanít is.

**part5_kat20-23.js:218** · `Félrecímkézett nehézség`  
> Milyen szolgáltatás volt a 2000-es évek nagy magyar int

- **Baj:** Ez a kategória legjobb iránya (magyar, generációkon átívelő emlék), de a nehézsége túlárazott: aki az iWiW nevét egyáltalán hallotta, az tudja, hogy közösségi oldal volt – a felnőttek biztosan. 3★ helyett 2★.
- **Javaslat:** d:3 → d:2. Bővítés esetén ebbe az irányba érdemes menni (Startlap, Freemail, kukac, magyar mémek).

**part5_kat20-23.js:254** · `Félrecímkézett nehézség`  
> Mi lett az Oxford Dictionaries „év szava” 2015-ben?

- **Baj:** A tény helyes (a sírva nevető emoji), de a válasz semmilyen úton nem következtethető ki: négy egyformán hihető jelölt közül kell eltalálni egy szótárkiadó egyszeri döntését. 110 pont a szerencsének. A „szelfi” opció ráadásul a 192. sor kérdésével fed át.
- **Javaslat:** Ha marad, d:5. Jobb: fordítsd emlékezetesebbre – q:"Az Oxford szótár 2015-ben először választott év szavának valamit, ami nem is szó. Mi volt az?", o:["A sírva nevető emoji","A hashtag jel","A lájk-ikon","A kukac jel"], d:3 – így a kérdés maga adja a fogódzót.

**part5_kat20-23.js:208** · `Ismétlés / sablon`  
> Hogy nevezik az online játékokban a kezdő, ügyetlen ját

- **Baj:** Nem valódi duplikátum, de átfedés: a „Trollnak” itt disztraktor, a 238. sorban pedig egy önálló kérdés tárgya („Mit csinál az internetes troll?”). Ha a kettő egy pakliba kerül, az egyik segít a másikban, és a téma is ismétlődik.
- **Javaslat:** Cseréld a „Trollnak” opciót „Lamernek”-re vagy „Kezdőnek”-re (utóbbi túl árulkodó, ezért inkább „Lamernek”), így a két kérdés függetlenné válik.

**part5_kat20-23.js:202** · `Elévülő tény`  
> Milyen figura látható a Snapchat sárga logójában?

- **Baj:** Nem hibás, de a kategória legmúlékonyabb típusa: egy konkrét alkalmazás aktuális logójára épül. A Snapchat maga is generációfüggő (a szülők nem használják), és egy logócsere – ahogy a Twitternél történt – azonnal elavulttá teszi. A 236. sor kérdése jól mutatja a megoldást: múlt időben, „éveken át” fogalmazva.
- **Javaslat:** Fogalmazd időtállóan: q:"Milyen fehér figura díszíti éveken át a Snapchat sárga logóját?" helyett inkább "Melyik alkalmazás sárga logójában látható egy fehér szellem?", o:["A Snapchat","Az Instagram","A Viber","A Telegram"] – ez a logócsere után is javítható marad.


### Sport

**part5_kat20-23.js:299** · `Félrecímkézett nehézség`  
> Melyik országban rendezik a wimbledoni teniszbajnokságot?

- **Baj:** 2★-ként jelölve, de Wimbledon angol volta ~90%-os tudás; a „wimbledoni” jelző maga is angol helynév. Reálisan 1★.
- **Javaslat:** d: 1. (A 321. sor Wembley-kérdésével együtt így is marad az elfogadott Wembley–Anglia szópár a baseline-ban.)

**part5_kat20-23.js:351** · `A kérdés elárulja a válaszát`  
> Melyik válogatott nyerte meg óriási meglepetésre a 2004-es labdar

- **Baj:** Az „óriási meglepetésre” fordulat a segítő mellékmondat esete: rámutat a négy közül a legesélytelenebbre (Görögország), és kizárja a hazai pályán szereplő Portugáliát meg Hollandiát.
- **Javaslat:** Egyszerűen: „Melyik válogatott nyerte meg a 2004-es labdarúgó-Európa-bajnokságot?” – a meglepetés maradjon a reveal-re szánt note-nak/beszélgetésnek.

**part5_kat20-23.js:422** · `A kérdés elárulja a válaszát`  
> Hány Grand Slam-tornát nyert egyesben Serena Williams?

- **Baj:** A note („A nőknél ez a nyílt éra rekordja.”) félig elárulja a 429. sor Margaret Court-tippjét: a játékos megtudja, hogy Court értéke 23 fölött van, tehát 24 körül tippel.
- **Javaslat:** note: „A 23-ból hetet-hetet nyert Melbourne-ben és Wimbledonban.” – összehasonlítás nélkül.

**part5_kat20-23.js:425** · `Megfogalmazás`  
> Hány gólt szerzett Just Fontaine az 1958-as labdarúgó-világbajnok

- **Baj:** A note mondata zavaros: „Máig ez az egyetlen világbajnokságon szerzett gólok rekordja.” – az „egyetlen” itt „egyetlen tornán”-t akar jelenteni, de nem ezt mondja.
- **Javaslat:** note: „Máig ez a rekord egyetlen világbajnokságon szerzett gólokból – hat mérkőzésen érte el.”

**part5_kat20-23.js:414** · `Elévülő tény`  
> Hányszor nyerte meg Rafael Nadal a Roland Garrost egyesben?

- **Baj:** A szám maga már lezárt (Nadal visszavonult), de a note „Minden idők rekordja ez egyetlen Grand Slam-tornán” megfogalmazása rekord-szuperlatívusz, amit a verify.js is jelezni fog.
- **Javaslat:** note: „Tizennégy párizsi címéből az elsőt 19 évesen, 2005-ben szerezte.”

**part5_kat20-23.js:385** · `Félrecímkézett nehézség`  
> Melyik NBA-játékos dobott 100 pontot egyetlen mérkőzésen 1962-ben

- **Baj:** 5★-nak (≈10–15%) van jelölve, de a 100 pontos meccs a kosárlabda egyik legismertebb sztorija, és a korabeli disztraktorok közül Chamberlain a magától értetődő tipp – reálisan 4★.
- **Javaslat:** d: 4.

**part5_kat20-23.js:383** · `Félrecímkézett nehézség`  
> Melyik városban ugrotta Bob Beamon a 8,90 méteres távolugró világ

- **Baj:** 5★-ként jelölve, de az 1968-as évszám + a magaslati ugrás legendája a sportot kicsit is követőknek egyértelműen Mexikóvárost adja; reálisan 4★.
- **Javaslat:** d: 4.

**part5_kat20-23.js:309** · `Félrecímkézett nehézség`  
> Melyik poszton játszott az Aranycsapatban Grosics Gyula, a "Fekete

- **Baj:** 3★ (≈50%), de Grosics kapus volta az Aranycsapat legalapvetőbb ismerete, ráadásul a „Fekete Párduc” becenév maga is kapus-attribútum. Reálisan 2★.
- **Javaslat:** d: 2, vagy élesítés: „Melyik újítás fűződik Grosics Gyula nevéhez a kapusjátékban?” → a büntetőterületen kívülre kifutó, „söprögető” kapus.

**part5_kat20-23.js:275** · `Érdektelen válasz`  
> Hány játékos van egy labdarúgócsapatban a pályán?

- **Baj:** Séma-ismétlés: három „hány játékos/versenyző” kérdés van a kategóriában (ez, a 400. sor kosárlabda-tippje és a 391. sor kajak-tippje). A 11 ráadásul ~100%-os tudás, és a válasz semmi újat nem tanít.
- **Javaslat:** Cserélje más agyi műveletre, pl. ok-okozat vagy eredet: „Mit jelent a labdarúgásban a les (offside) szabály lényege?” vagy „Melyik országban fektették le a modern labdarúgás első hivatalos szabálykönyvét 1863-ban?” → Anglia.

**part5_kat20-23.js:420** · `A kérdés elárulja a válaszát`  
> Hány olimpiai aranyérmet nyert Kárpáti Rudolf kardvívó?

- **Baj:** Gyenge kereszt-utalás: a 307. sor mc-kérdése („7 aranyéremmel”) disztraktorként hozza Kárpáti Rudolfot, ez a tipp pedig kimondja, hogy neki 6 van – aki mindkettőt látja, kizárhatja.
- **Javaslat:** Nem hiba, de ha a 307. sor kérdését a javasolt „hat egymást követő olimpia” formára írja át, a két tétel teljesen függetlenné válik.


---

## ➕ Javasolt ÚJ kérdések (25)

A kis kategóriák feltöltésére és a kulturális kinyitásra (európai film/zene, magyar internetkultúra).

### Filozófia

- Pótlás 1/5 – természetfilozófia, a kategóriából teljesen hiányzó szál; a válasz érdekes (az atom fogalma 2400 éves), mind a négy opció preszókratikus, azonos hosszú.

```js
{cat:11,type:'mc',d:3,q:"Melyik ókori görög gondolkodó tanította, hogy az anyag tovább nem osztható parányokból áll?",o:["Démokritosz","Empedoklész","Anaximenész","Anaxagorasz"], c:0},
```

- Pótlás 2/5 – keleti gondolkodás, a Konfuciusz-kérdés párja; a disztraktorok mind valódi kínai szerzők, így a félig tudó elbizonytalanodik.

```js
{cat:11,type:'mc',d:3,q:"Melyik kínai bölcs nevéhez fűzik a Tao Te King (Az út és erény könyve) című művet?",o:["Lao-ce","Konfuciusz","Csuang-ce","Szun-ce"], c:0},
```

- Pótlás 3/5 – más agyi művelet (fogalom → jelentés), nem a szokásos szerző-párosítás; a négy opció azonos hosszú és mind valódi filozófiai tétel, így nincs hossz-árulkodás.

```js
{cat:11,type:'mc',d:3,q:"Mit jelent a filozófiában a „tabula rasa” kifejezés?",o:["Az emberi elme születéskor üres, íratlan tábla","Az érzékelés mindig megtéveszti az elmét","A világ csak a gondolkodásunk képzete","A lélek a halál után új testbe költözik"], c:0},
```

- Pótlás 4/5 – az újkori politikai filozófia hiányzó darabja Rousseau és Machiavelli mellé; a disztraktorok mind angol kortársak, azonos rangúak.

```js
{cat:11,type:'mc',d:4,q:"Melyik filozófus írta a Leviatán című művet az állam hatalmáról?",o:["Thomas Hobbes","John Locke","Francis Bacon","David Hume"], c:0},
```

- Pótlás 5/5 – a kategóriában egyetlen női gondolkodó sem szerepel; a válasz családbarát és jól mesélhető, a disztraktorok mind 20. századi szerzőnők.

```js
{cat:11,type:'mc',d:4,q:"Melyik gondolkodó írta A második nem című könyvét a női szerepekről?",o:["Simone de Beauvoir","Hannah Arendt","Susan Sontag","Iris Murdoch"], c:0},
```


### Komolyzene

- A kategória 25 kérdésből áll a 40-es alap helyett, és Kodály színpadi műve teljesen hiányzik. Ez egyben feladat-váltás is (nem „ki írta”, hanem szereplő→mű).

```js
{cat:19,type:'mc',d:3,q:"Melyik magyar daljáték hőse egy nagyotmondó öreg huszár, aki azt állítja, egymaga fogta el Napóleont?",o:["Háry János","Bánk bán","János vitéz","A cigánybáró"], c:0},
```

- Bartókból csak az Allegro barbaro és a Kékszakállú szerepel; a Mikrokozmosz világszerte tanított sorozat, jó 4★-os slot.

```js
{cat:19,type:'mc',d:4,q:"Melyik Bartók-sorozat 153 zongoradarabban vezet végig a legelső ujjgyakorlatoktól a virtuóz darabokig?",o:["A Mikrokozmosz","A Gyermekeknek","A Szabadban","A Táncszvit"], c:0},
```

- A 25 kérdésből mindössze kettő szól hangszerről, és egyik sem magyar vonatkozású. Családi asztalnál a hangszeres kérdés a legjobban megosztott tudás (a nagyszülők tudják).

```js
{cat:19,type:'mc',d:2,q:"Melyik húros hangszert kis kalapácsokkal, verőkkel szólaltatja meg a játékos?",o:["A cimbalmot","A citerát","A tekerőlantot","A kobozt"], c:0},
```

- Beethovenből csak a süketség-kérdés van, pedig a IX. szimfónia zárókórusa a legismertebb komolyzenei dallam Európában. A séma is más: nem szerzőt, hanem művet kell azonosítani.

```js
{cat:19,type:'mc',d:3,q:"Hányadik Beethoven-szimfónia zárótételében szólal meg énekkarral az Örömóda?",o:["A kilencedik","Az ötödik","A hetedik","A harmadik"], c:0},
```

- Egyetlen kérdés sem kér zenei szakszó-jelentést, pedig ez az a tudás, amit a félig tájékozott játékos is meg tud tippelni — pont a 3★ alatti sáv élménye. Az opciók azonos hosszúak, nincs hossz-árulkodás.

```js
{cat:19,type:'mc',d:2,q:"Mit jelent a zenében az a cappella?",o:["Hangszerkíséret nélküli éneklést","Fokozatosan halkuló játékot","Nagyon gyors, kapkodó tempót","Szólóhangszeres bevezetőt"], c:0},
```


### Nemzetközi filmek

- A kategóriában egyetlen olasz kérdés sincs, ami a szereplőkre/történetre kérdezne (csak Benigni és Fellini rendezőként). A Cinema Paradiso a magyar tévében sokszor ment, a nagyszülők generációja is ismeri, és a leírás-alapú feladat változatosságot hoz a rendezős sablonok közé.

```js
{cat:20,type:'mc',d:3,q:"Melyik olasz filmben barátkozik össze a kisfiú a falusi mozi vetítőgépészével?",o:["Cinema Paradiso","Az élet szép","Rómeó és Júlia","Ragyogó napfény"], c:0},
```

- A francia jelenlét kimerül Louis de Funès-ben, Belmondóban és az Amélie-ben — mind a régmúltból. Az Életrevalók az elmúlt évtizedek legnézettebb francia filmje Magyarországon is, családbarát, és leírás→cím feladatként új sémát hoz.

```js
{cat:20,type:'mc',d:2,q:"Melyik francia filmben lesz egy kerekesszékes milliomos ápolója egy külvárosi fiatalember?",o:["Életrevalók","Amélie csodálatos élete","Az aranyhalak","Nyolc nő"], c:0},
```

- A Sissi-filmek a magyar karácsonyi tévéműsor állandó darabjai, Erzsébet királyné miatt kifejezetten magyar vonatkozásúak, és pont a nagyszülők generációjának adnak egy kérdést — miközben osztrák/német film jelenleg nulla van a kategóriában.

```js
{cat:20,type:'mc',d:3,q:"Melyik színésznő játszotta a Sissi-filmtrilógia címszerepét?",o:["Romy Schneider","Senta Berger","Maria Schell","Nadja Tiller"], c:0},
```

- Spanyol film egyáltalán nem szerepel a kategóriában, pedig Almodóvar a kortárs európai film egyik legismertebb neve. Az „ország → rendező" feladat új séma, és a disztraktorok mind valódi spanyol nyelvű rendezők, tehát a félig tudó elbizonytalanodik.

```js
{cat:20,type:'mc',d:4,q:"Melyik ország filmrendezője Pedro Almodóvar, a Mindent anyámról alkotója?",o:["Spanyolország","Argentína","Portugália","Mexikó"], c:0},
```

- Latin-amerikai film nincs a kategóriában. A Roma Oscar-díjas, fekete-fehér, széles körben ismert, és a kérdés az ország-szintű tudást kéri, nem a rendezőét — így nem szaporítja a „Ki rendezte" sablont.

```js
{cat:20,type:'mc',d:4,q:"Melyik országban játszódik a Roma című, Oscar-díjas fekete-fehér film?",o:["Mexikó","Olaszország","Argentína","Spanyolország"], c:0},
```


### Nemzetközi popzene

- A kategória 40 kérdéséből 35 angolszász előadóról szól. Az ABBA jelenleg csak származási országként szerepel (107. sor); a magyar családok repertoárjában viszont dalonként is ott van. Ez a kérdés az összes opcióval ABBA-slágert kínál, tehát valódi tudást mér, nem felismerést.

```js
{cat:21,type:'mc',d:2,q:"Melyik dalával nyerte meg az ABBA az 1974-es Eurovíziós Dalfesztivált?",o:["Waterloo","Mamma Mia","Fernando","Dancing Queen"], c:0},
```

- A 80-as évek német eurodiszkója Magyarországon sokkal ismerősebb, mint az azonos évtized amerikai közepe – a szülőgeneráció fejből énekli. A négy opció mind német (vagy Németországban futtatott) duó/formáció, tehát a félig tudó elbizonytalanodik.

```js
{cat:21,type:'mc',d:3,q:"Melyik német duó világslágere a „You're My Heart, You're My Soul”?",o:["A Modern Talking","A Bad Boys Blue","A Boney M.","Az Alphaville"], c:0},
```

- Olasz előadó egyáltalán nincs a kategóriában, pedig a San Remó-i vonal a magyar nagyszülő-generáció alapélménye. Mind a négy opció olasz férfi énekes, azonos rangban – a nehézség tisztán a disztraktorokban lakik.

```js
{cat:21,type:'mc',d:3,q:"Ki énekli az „Azzurro” című örökzöld olasz slágert?",o:["Adriano Celentano","Toto Cutugno","Al Bano","Eros Ramazzotti"], c:0},
```

- Francia sanzon sincs a paklikban. A négy opció mind francia énekesnő, közel azonos korszakból – a dal ráadásul filmzenéként (Eredet) a fiatalabb generációnak is ismerős, tehát generációkon átível.

```js
{cat:21,type:'mc',d:3,q:"Melyik francia énekesnő világslágere a „Non, je ne regrette rien”?",o:["Édith Piaf","Mireille Mathieu","Dalida","Juliette Gréco"], c:0},
```

- Skandináv előadó csak az ABBA származási kérdésében szerepel. Itt mind a négy opció skandináv sláger-formáció (norvég, svéd, svéd, dán), tehát az „északi” jelző nem árulja el a választ, viszont a dal maga mindenkinek beugrik.

```js
{cat:21,type:'mc',d:3,q:"Melyik skandináv együttes slágere a „Take On Me”?",o:["Az a-ha","A Roxette","Az Ace of Base","Az Aqua"], c:0},
```


### Mémek és internetkultúra

- Magyar nyelvi netkultúra, amit a nagyszülők is tudnak, mégis van benne „nahát!”: minden nyelv más állatot lát az @ jelben. Igazi 1★-os indítókérdés, ami szétválaszt a legfiatalabbaktól, és tanít is.

```js
{cat:22,type:'mc',d:1,q:"Melyik állatról nevezték el a magyarok az e-mail címekben szereplő @ jelet?",o:["A kukacról","A csigáról","A majomról","A pókról"], c:0},
```

- Nemzetközi, de a szülők generációja is használja a szót, és az eredete valódi „jó rajta veszíteni” tény: egy amerikai konzervhús márkaneve, amit a Monty Python egyik jelenete tett a kéretlen áradat szinonimájává. Kikövetkeztethető is: a négy opció közül csak egy nem technikai.

```js
{cat:22,type:'mc',d:3,q:"Miről kapta a nevét a kéretlen reklámlevelek gyűjtőneve, a spam?",o:["Egy amerikai konzervhúsról","Egy korai számítógépes vírusról","Egy amerikai reklámügynökségről","Egy angol rövidítésből"], c:0},
```

- A magyar internet közös emléke: a 2000-es években szinte minden gépen ez volt a kezdőlap. A szülők biztosan tudják, a gyerekek nem – tehát pont fordítva választ szét, mint a kategória többi kérdése, ami a családi asztalnál külön öröm.

```js
{cat:22,type:'mc',d:2,q:"Melyik oldal volt a 2000-es években a magyar internetezők legnépszerűbb linkgyűjtő kezdőlapja?",o:["A Startlap","A Freemail","A Vatera","A Sulinet"], c:0},
```

- Köznyelvbe került fogalom (a híradók is használják), a helyes válasz pedig tanít: a szó az orvosi „vírus” szóból ered, mert a tartalom fertőzésszerűen terjed. A három disztraktor mind valós netes fogalom, tehát a félig tudó elbizonytalanodik.

```js
{cat:22,type:'mc',d:2,q:"Minek a mintájára nevezzük virálisnak a neten futótűzként terjedő videót?",o:["A vírusfertőzés terjedéséről","A rádióhullámok szóródásáról","A hólabda gurulásáról","A lánclevelek postázásáról"], c:0},
```

- A mozgóképes mémek hordozója, amit a szülők is felismernek névről (a chatalkalmazások gombján is ott van), és a kérdés a képformátumok közti valódi különbséget tanítja meg. Négy azonos halmazba tartozó opció, egyetlen védhető válasszal.

```js
{cat:22,type:'mc',d:3,q:"Melyik képformátum tud egyetlen fájlban rövid, ismétlődő mozgóképet tárolni – ezért lett a mémek kedvence?",o:["A GIF","A JPEG","A PNG","A BMP"], c:0},
```

