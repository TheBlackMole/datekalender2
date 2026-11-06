/* =========================================================
   CONFIG – hier anpassen
   ========================================================= */
const CONFIG = {
  von: "Leon",
  // EINSTIEGSFENSTER: erscheint beim ersten Öffnen, bevor irgendetwas von der Seite zu sehen ist.
  // Es verrät nichts über das Thema. Erst nach "Bestätigen" wird die Welt "generiert".
  // Pro Gerät nur einmal; danach geht die Seite direkt auf. Nach dem Geburtstag kannst du aktiv auf false setzen.
  // Zum Testen (erscheint immer, wird nicht gemerkt): index.html?intro
  // Zeilenumbrüche im Text mit \n
  intro: {
    aktiv: true,
    titel: "Liebe Nell,",
    text: "erst einmal wünsche ich dir natürlich alles Liebe und Gute zu deinem 20. Geburtstag <3 Ich hoffe, du hast heute einen tollen Tag und insbesondere eine wunderbare Party! \n\nIch freue mich wirklich sehr auf ein weiteres tolles Jahr mit dir und wünsche dir für dein erstes Jahr als \"Nicht-Teenagerin\" nur das Beste <3 \n\nDa der Date-Kalender letztes Jahr ja recht gut bei dir angekommen ist, dachte ich mir, eine zweite Auflage wäre doch eigentlich ganz schön. Jetzt fragst du dich vlt: \"Aber ich bin doch jetzt in Spananien?\" und das stimmt natürlich auch, aber ich denke ich habe dafür ein paar gute Lösungen gefunden ;)\n\nEin durchaus wichtiger Bestandteil dieser Idee befindet btw auf deinem IPad, also guck doch mal nach...",
    gruss: "Ich liebe dich <3\nDein Leon",
    button: "Ich bin bereit"
  },

  // Firebase-Datenbank-URL für die gemeinsame Speicherung (Anleitung siehe Chat).
  // Leer lassen = alles wird nur lokal auf dem jeweiligen Gerät gespeichert.
  // Beispiel: "https://unsere-welt-1234-default-rtdb.europe-west1.firebasedatabase.app"
  datenbank: "https://unsere-welt-6ac7f-default-rtdb.europe-west1.firebasedatabase.app/",
  // Wann die Fernbeziehungs-Phase beginnt (Start der XP-Leiste)
  abschied: "2026-11-07",
  // Ihre endgültige Rückkehr (letzte Truhe)
  rueckkehr: "2027-06-06",
  // Uhrzeit für Countdowns
  uhrzeit: "12:00",

  // BESUCHE: einfach eintragen, sobald einer feststeht (Reihenfolge egal).
  // Jeder Besuch bekommt eine eigene Bonus-Truhe, und der Countdown zählt bis zum nächsten Treffen.
  // Solange die Liste leer ist, sieht sie davon nichts.
  //   ort: "spanien"     -> du besuchst sie
  //        "deutschland" -> sie kommt nach Deutschland
  //        ""            -> egal / noch offen
  //   t, text (optional): eigener Titel / Text für die Truhe, sonst wird ein passender gewählt
  // Beispiele:
  //   { datum: "2026-12-23", ort: "deutschland" },
  //   { datum: "2027-03-05", ort: "spanien", text: "Wir fahren ans Meer!" },
  // Zum Testen ohne Eintragen: index.html?vorschau=1&besuch=2027-02-20
  besuche: [

  ]
};

/* Ein Date pro Truhe. d = Freischaltdatum (JJJJ-MM-TT), icon = Pixel-Symbol (siehe SPRITES),
   need = was sie braucht, prep = Notiz nur für dich (nur im Vorschau-Modus sichtbar),
   vorlauf = so viele Tage vor dem Date sollte die Vorbereitung erledigt sein (für deine Planungsliste). */
const DATES = [
  { d:"2026-11-07", vorlauf:2, icon:"block",  t:"Spawnpunkt",
    text:"Unser erster Abend in unserer neuen Welt. Heißt für uns: Einloggen, umschauen und unser erstes gemeinsames Bauprojekt starten! Und Augen auf, vlt findest du ja auch den ein oder anderes Schatz... ;)",
    need:"iPad, Kopfhörer, Snacks",
    prep:"Vorher am Spawn eine Überraschung bauen und Bücher mit kleinen Briefen in eine Truhe legen." },
  { d:"2026-11-21", vorlauf:5, icon:"cake",   t:"Kochduell auf Distanz",
    text:"Kochen im Videocall, mit Länderwechsel: Du kochst was typisch Deutsches, ich was Spanisches. Am Ende wird verglichen, wessen Teller schöner aussieht. Geschmack bewerten geht leider erst wieder im Juni :)",
    need:"Die Zutaten von der Liste, die ich dir vorher schicke",
    prep:"Zwei Rezepte aussuchen (deutsch für sie, spanisch für dich), ihre Zutatenliste ein paar Tage vorher schicken. Zutaten sollten in Spanien gut zu kriegen sein." },
  { d:"2026-12-05", vorlauf:14, icon:"cookie", t:"Plätzchen-Schicht",
    text:"Adventszeit! Wir backen zusammen Plätzchen im Videocall. In deinem Briefkasten sollte vorher ein kleines Paket gelandet sein. Öffne es erst heute.",
    need:"Zutaten für Teig, das Paket, Musik",
    prep:"Ausstechformen + Rezeptkarte nach Spanien schicken, mind. 2 Wochen vorher (Auslandspost)." },
  { d:"2026-12-19", vorlauf:3, icon:"gift",   t:"Winterlichter",
    text:"Wir gehen gleichzeitig über einen Weihnachtsmarkt, ich in Heidelberg, du bei dir in Spanien, und zeigen uns im Videocall, was es bei uns so gibt. Danach bauen wir uns auf dem Server ein Winterdorf mit Lichtern, Schnee und einem riesigen Baum.",
    need:"Warme Jacke, Handy mit Akku, was Warmes zu trinken",
    prep:"Schauen, ob es bei ihr einen Weihnachtsmarkt gibt (sonst: Spaziergang durch die beleuchtete Stadt)." },
  { d:"2027-01-02", vorlauf:2, icon:"star",   t:"Sternschnuppen",
    text:"Wie im Juli, nur diesmal aus der Ferne: Anfang Januar sind die Quadrantiden unterwegs, ein Sternschnuppenstrom. Wir gehen beide raus, telefonieren und schauen in denselben Himmel. Ich erkläre dir, was du siehst, und wer zuerst eine Sternschnuppe entdeckt, darf sich etwas wünschen.",
    need:"Warme Jacke, Decke, Kopfhörer, dunkler Ort",
    prep:"Wetter an beiden Orten checken, bei Wolken verschieben. Sternbilder raussuchen, die sie von Spanien aus gut sieht (Sternbilder im Süden stehen dort etwas höher als bei uns)." },
  { d:"2027-01-16", vorlauf:14, icon:"film",   t:"Kinoabend",
    text:"Watch-Party: Wir starten den Film auf drei, gleichzeitig, und bleiben im Call. Du suchst den Film aus, ich kümmere mich um die Snacks. Schau mal in deinen Briefkasten.",
    need:"Gemütliche Ecke, Filmauswahl",
    prep:"Snack-Paket nach Spanien schicken (gern deutsche Snacks, die sie dort vermisst), ca. 2 Wochen vorher." },
  { d:"2027-01-30", icon:"gem",    t:"Tiefenexpedition",
    text:"Große Höhlenexpedition: Wir graben uns gemeinsam so tief es geht und suchen nach seltenen Erzen. Wer zuerst Diamanten findet, darf das nächste Bauprojekt aussuchen.",
    need:"Fackeln. Viele Fackeln.",
    prep:"" },
  { d:"2027-02-13", vorlauf:14, icon:"heart",  t:"Valentins-Edition",
    text:"Wir schreiben uns vorher echte Briefe und schicken sie per Post, heute öffnen wir sie gleichzeitig. Zum Abendessen bestellen wir uns gegenseitig etwas: Du suchst aus, was bei mir ankommt, und ich, was bei dir ankommt.",
    need:"Meinen Brief (noch zu lassen!), Hunger",
    prep:"Brief ca. 2 Wochen vorher abschicken. Lieferdienste an ihrem Ort in Spanien checken (z. B. Glovo/Just Eat), Bezahlung vorher testen." },
  { d:"2027-02-27", vorlauf:3, icon:"dice",   t:"Quizduell",
    text:"Jede:r baut ein Quiz mit zehn Fragen über den anderen und über uns. Wer verliert, baut der Gewinnerin oder dem Gewinner ein Denkmal auf dem Server.",
    need:"Dein Quiz, gutes Gedächtnis",
    prep:"Eigenes Quiz vorbereiten." },
  { d:"2027-03-13", vorlauf:14, icon:"map",    t:"Das gleiche Puzzle",
    text:"Wir haben beide dasselbe Puzzle, deins kommt per Post. Wir puzzeln parallel im Call, und das Ziel ist, gleichzeitig das letzte Teil zu legen.",
    need:"Das Puzzle-Paket, großer Tisch",
    prep:"Zwei identische Puzzles kaufen (ca. 500 Teile), eins nach Spanien schicken, mind. 2 Wochen vorher." },
  { d:"2027-03-27", vorlauf:14, icon:"flower", t:"Frühlingsgarten",
    text:"Wir säen beide dieselben Samen am selben Tag und vergleichen ab jetzt, wessen Pflanze schneller wächst. Danach legen wir in Minecraft einen riesigen Blumengarten an.",
    need:"Blumentopf, Erde, die Samen von mir",
    prep:"Samen mitschicken (z. B. mit dem Puzzle-Paket). Am besten verpackte Samentütchen aus dem Laden." },
  { d:"2027-04-10", icon:"camera", t:"Fotospaziergang",
    text:"Wir gehen gleichzeitig spazieren, jede:r bei sich, im Call. Fotoaufgaben: etwas Lila, etwas, das dich an mich erinnert, und der schönste Blick des Tages. Am Ende tauschen wir die Bilder.",
    need:"Bequeme Schuhe, Handy mit Akku",
    prep:"" },
  { d:"2027-04-24", vorlauf:2, icon:"moon",   t:"Private Sternführung",
    text:"Eine Sternwartenführung nur für dich: Ich zeige dir per Videocall, was der Frühlingshimmel zu bieten hat. Um diese Zeit sind auch die Lyriden-Sternschnuppen unterwegs.",
    need:"Warme Jacke, klarer Himmel (bitte bestellen)",
    prep:"Objekte für ihren Ort raussuchen, Wetter checken." },
  { d:"2027-05-08", vorlauf:3, icon:"dice",   t:"Spieleabend",
    text:"Ein Abend mit Online-Spielen: ein Koop-Rätsel, ein Brett- oder Kartenspiel. Hauptsache zusammen, und ausnahmsweise mal ohne Minecraft.",
    need:"Laune auf Spiele",
    prep:"2–3 Online-Spiele raussuchen, die auf iPad + Laptop laufen." },
  { d:"2027-05-22", icon:"map",    t:"Unser Ort",
    text:"Wir bauen in Minecraft einen Ort nach, der für uns beide wichtig ist, vielleicht die Altstadt oder den Weihnachtsmarkt aus unserem ersten Date-Kalender. Und wir planen den Tag, an dem du zurückkommst: Was machen wir als Allererstes?",
    need:"Erinnerungen, Vorfreude",
    prep:"" },
  { d:"2027-06-06", vorlauf:3, icon:"house",  t:"Wiedersehen", finale:true,
    text:"Die letzte Truhe. Heute brauchen wir weder Laptop noch iPad. Du bist zurück, und dieses Date findet ganz in echt statt.",
    need:"Nur dich",
    prep:"Blumen besorgen. Erstes Date nach der Rückkehr planen." }
];

/* Texte für Besuchs-Truhen (werden der Reihe nach verwendet, wenn kein eigener Text gesetzt ist) */
const BESUCH_TEXTE = {
  spanien: [
    { t:"Besuch in Spanien", text:"Ich komme zu dir! Diesmal bist du die Reiseführerin: Zeig mir deine Lieblingsorte, dein Lieblingscafé und alles, was du mir bisher nur am Telefon beschrieben hast." },
    { t:"Wieder in Spanien", text:"Ich bin wieder da! Diesmal suchen wir uns etwas aus, das wir beide noch nie gemacht haben, und probieren es zusammen aus." },
    { t:"Spanien, Teil 3", text:"Heute kein großes Programm: nur wir zwei, gutes Essen und ein Sonnenuntergang." }
  ],
  deutschland: [
    { t:"Heimatbesuch", text:"Du kommst nach Hause! Heute steht nichts auf dem Plan außer Zeit zu zweit. Ich hole dich ab, um den Rest kümmere ich mich." },
    { t:"Wieder daheim", text:"Du bist wieder da! Wir holen ein Date nach, das über den Bildschirm einfach nicht geht." },
    { t:"Besuch Nr. 3", text:"Wir machen einen Ort aus unserer Minecraft-Welt zum echten Ausflugsziel." }
  ],
  "": [
    { t:"Wiedersehen", text:"Wir sehen uns! Heute brauchen wir weder Laptop noch iPad." }
  ]
};
const BESUCH_NEED = { spanien:"Zeit für mich und deine Lieblingsorte", deutschland:"Nur dich", "":"Nur dich" };
const BESUCH_VORLAUF = { spanien:30, deutschland:3, "":3 };
const BESUCH_PREP = { spanien:"Anreise buchen, eine Kleinigkeit aus Deutschland mitbringen, die sie vermisst.", deutschland:"Abholung klären, Plan für den Tag machen.", "":"Plan für den Tag machen." };

const PROJEKTE_START = [
  "Unser gemeinsames Haus",
  "Bauernhof mit Tieren",
  "Brücke zwischen unseren Basen",
  "Leuchtturm am Meer",
  "Kleine Sternwarte auf einem Berg",
  "Riesiges Blumenfeld",
  "Achterbahn",
  "Unterwasser-Basis"
];

/* =========================================================
   PIXEL-SPRITES (eigene Zeichnungen, 8x8 bzw. 10x9)
   ========================================================= */
const PAL = {
  K:"#2b1a0e", B:"#a8743a", b:"#6e4720", "#":"#1a0f07", Y:"#f2c94c", y:"#c99a2e",
  D:"#8a5a33", d:"#5f3c1f", G:"#6ab04c", g:"#4c8a33", R:"#d33a3a", r:"#a52626",
  W:"#f4f1e8", C:"#9a9a9a", S:"#6b6b6b", s:"#4a4a4a", P:"#a77bd8", p:"#7d55b3",
  L:"#5fd3e0", l:"#2e9aa8", T:"#e8d6a8", t:"#b08d4f", O:"#f39c32", N:"#1e2b4a"
};
const SPRITES = {
  chest:[".KKKKKKKK.","KBBBBBBBBK","KbBBBBBBbK","KbBBBBBBbK","KKKKYYKKKK","KBBBYYBBBK","KbBBBBBBbK","KbBBBBBBbK","KKKKKKKKKK"],
  chestOpen:[".KKKKKKKK.","KBBBBBBBBK","KKKKKKKKKK","K##Y##Y##K","KKKKYYKKKK","KBBBYYBBBK","KbBBBBBBbK","KbBBBBBBbK","KKKKKKKKKK"],
  block:["GGGGGGGG","GgGGgGGg","gDgDDgDD","DDDdDDDD","DdDDDDdD","DDDDdDDD","DDdDDDDD","DDDDDDdD"],
  cake:["...R....","...W....",".WWWWWW.",".WRWWRW.",".BBBBBB.",".bbbbbb.",".BBBBBB.","........"],
  cookie:["..BBBB..",".BdBBBB.","BBBBBdBB","BBdBBBBB","BBBBBBdB","BdBBdBBB",".BBBBBB.","..BBBB.."],
  gift:["..R..R..","...RR...","YYYRRYYY","YYYRRYYY",".yYRRYy.",".yYRRYy.",".yYRRYy.",".yyrryy."],
  star:["...Y....","...Y....","..YYY...","YYYYYYY.",".YYYYY..","..YyY...",".YY.YY..",".Y...Y.."],
  film:["WKWKWKW.","KKKKKKKK","KSSSSSSK","KSCSSSSK","KSSSSCSK","KSSSSSSK","KKKKKKKK","........"],
  gem:["..LLLL..",".LWLLLL.","LWLLLLLl","LLLLLLLl",".LLLLLl.","..LLLl..","...Ll...","........"],
  heart:["........",".RR.RR..","RWRRRRR.","RRRRRRR.",".RRRRr..","..RRr...","...r....","........"],
  dice:["WWWWWWW.","WKWWWKW.","WWWWWWW.","WWWKWWW.","WWWWWWW.","WKWWWKW.","WWWWWWW.","CCCCCCC."],
  map:["TTTTTTTT","TtTTTTTT","TTtTTTTT","TTTtTTTT","TTTTtTTT","TTTTTtRT","TTTTTRtR","TTTTTTTT"],
  flower:[".P.P.P..","..PPP...",".PPgPP..","..PPP...",".P.G.P..","...G.G..","..GGG...","...G...."],
  camera:["........","..ss....","SSSSSSSS","SSSKKSSS","SSKLLKSS","SSKLlKSS","SSSKKSSS","SSSSSSSS"],
  moon:["...YYY..","..YY....",".YY.....",".YY.....",".YY.....",".YY.....","..YY....","...YYY.."],
  house:["...RR...","..RRRR..",".RRRRRR.","RRRRRRRR",".WWWWWW.",".WLWWBW.",".WWWWBW.",".WWWWBW."]
};
function sprite(name){
  const rows = SPRITES[name] || SPRITES.chest;
  const h = rows.length, w = rows[0].length;
  let r = "";
  rows.forEach((row,y)=>[...row].forEach((c,x)=>{
    if(PAL[c]) r += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${PAL[c]}"/>`;
  }));
  return `<svg viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`;
}

/* =========================================================
   Hilfsfunktionen
   ========================================================= */
const $ = s => document.querySelector(s);
const PARAMS = new URLSearchParams(location.search);
const PREVIEW = PARAMS.has("vorschau");
// Testmodus wie im ersten Date-Kalender: ?date=2027-01-02 oder ?date=2027-01-02T18:30 simuliert ein Datum
const SIM = (()=>{ const m=/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?$/.exec(PARAMS.get("date")||""); return m ? new Date(+m[1],m[2]-1,+m[3],+(m[4]||0),+(m[5]||0)) : null; })();
const SIM_START = Date.now();
const now = () => SIM ? new Date(SIM.getTime() + (Date.now()-SIM_START)) : new Date();
const parseDate = (s, time="00:00") => { const [y,m,d]=s.split("-").map(Number); const [hh,mm]=time.split(":").map(Number); return new Date(y,m-1,d,hh,mm); };
const fmt = s => parseDate(s).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"});
const fmtLong = s => parseDate(s).toLocaleDateString("de-DE",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
// freigeschaltet = Datum erreicht; geöffnet = jemand hat die Truhe tatsächlich aufgemacht
const isUnlocked = item => PREVIEW || now() >= parseDate(item.d);
const isOpened = item => PREVIEW || geoeffnet.has(item.d);
const daysUntil = s => Math.ceil((parseDate(s) - now()) / 864e5);
const store = {
  get(k, f){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : f; }catch(e){ return f; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
// Besuche als Bonus-Truhen einfügen
const BESUCHE = [...CONFIG.besuche];
if(PARAMS.get("besuch")) BESUCHE.push({ datum: PARAMS.get("besuch"), ort: PARAMS.get("ort") || "spanien" });
BESUCHE.sort((a,b)=>a.datum.localeCompare(b.datum));
const zaehler = {};
BESUCHE.forEach(b=>{
  const ort = BESUCH_TEXTE[b.ort] ? b.ort : "";
  const pool = BESUCH_TEXTE[ort], k = zaehler[ort] = (zaehler[ort] ?? -1) + 1;
  const vorlage = pool[Math.min(k, pool.length-1)];
  DATES.push({ d:b.datum, icon:ort==="spanien" ? "map" : "house", bonus:true, ort,
    t: b.t || vorlage.t, text: b.text || vorlage.text, need: b.need || BESUCH_NEED[ort], prep: b.prep || BESUCH_PREP[ort], vorlauf: b.vorlauf ?? BESUCH_VORLAUF[ort] });
});
DATES.sort((a,b)=>a.d.localeCompare(b.d));
// Truhen-Nummern (Besuchs-Truhen zählen nicht mit)
(()=>{ let n=0; DATES.forEach(x=>{ x.label = x.finale ? "LETZTE TRUHE" : x.bonus ? "BESUCH" : "TRUHE " + (++n); }); })();
const KEY = SIM || PREVIEW ? "_test" : "";
let doneDates = new Set(store.get("staffel2-done"+KEY, []));
let geoeffnet = new Set(store.get("staffel2-geoeffnet"+KEY, []));
let planung = new Set(store.get("unsere-welt-planung", []));

/* =========================================================
   Himmel & Boden
   ========================================================= */
(function scenery(){
  const stars = $("#stars");
  for(let i=0;i<70;i++){
    const s = document.createElement("div");
    s.className = "star";
    s.style.left = Math.random()*100+"%";
    s.style.top = Math.random()*70+"%";
    s.style.animationDelay = (Math.random()*3).toFixed(2)+"s";
    if(Math.random()<.2){ s.style.width = s.style.height = "6px"; }
    stars.appendChild(s);
  }
  // Boden-Kachel prozedural erzeugen
  const c = document.createElement("canvas"); c.width = 16; c.height = 16;
  const x = c.getContext("2d");
  const grass = ["#6ab04c","#5c9e40","#78bf58"], dirt = ["#8a5a33","#7a4e2b","#9a6a3f","#6b4424"];
  for(let i=0;i<16;i++) for(let j=0;j<16;j++){
    const edge = 3 + ((i*7)%3===0 ? 1 : 0);
    const pal = j < edge ? grass : dirt;
    x.fillStyle = pal[Math.floor(Math.random()*pal.length)];
    x.fillRect(i,j,1,1);
  }
  const g = $("#ground");
  g.style.backgroundImage = `url(${c.toDataURL()})`;
})();

/* =========================================================
   Countdown & XP
   ========================================================= */
function treffen(){
  return [...BESUCHE.map(b=>({s:b.datum, ort:b.ort})), {s:CONFIG.rueckkehr, final:true}]
    .map(x=>Object.assign(x, {t:parseDate(x.s, CONFIG.uhrzeit)})).sort((a,b)=>a.t-b.t);
}
function nextReunion(){
  const n = now(), list = treffen();
  return list.find(x=>x.t>n) || list[list.length-1];
}
function tick(){
  const r = nextReunion();
  const diff = Math.max(0, r.t - now());
  const d = Math.floor(diff/864e5), h = Math.floor(diff/36e5)%24, m = Math.floor(diff/6e4)%60, s = Math.floor(diff/1e3)%60;
  $("#cdD").textContent = d;
  $("#cdH").textContent = String(h).padStart(2,"0");
  $("#cdM").textContent = String(m).padStart(2,"0");
  $("#cdS").textContent = String(s).padStart(2,"0");
  const was = r.final ? "Deine Rückkehr" : r.ort==="spanien" ? "Ich komme zu dir" : r.ort==="deutschland" ? "Du kommst nach Hause" : "Nächstes Treffen";
  $("#cdDate").textContent = `${was} · ${fmtLong(r.s)}`;
  $("#cdLabel").textContent = diff === 0 ? "Endlich wieder zusammen!" : "Noch";
}
function xp(){
  const start = parseDate(CONFIG.abschied), end = parseDate(CONFIG.rueckkehr, CONFIG.uhrzeit), t = now();
  const p = Math.min(1, Math.max(0, (t-start)/(end-start)));
  $("#xpFill").style.width = (p*100).toFixed(1)+"%";
  $("#xpLevel").textContent = DATES.filter(isOpened).length;
  $("#xpNote").textContent = `${Math.round(p*100)} % der Strecke geschafft · Level = geöffnete Truhen`;
  const wartend = DATES.filter(x=>isUnlocked(x) && !isOpened(x)).length;
  const next = DATES.find(x=>!isUnlocked(x));
  $("#nextUp").innerHTML = wartend
    ? `<b>${wartend === 1 ? "Eine Truhe wartet" : wartend + " Truhen warten"} darauf, geöffnet zu werden!</b>`
    : next
    ? `Nächste Truhe: <b>${fmt(next.d)}</b> (in ${daysUntil(next.d)} ${daysUntil(next.d)===1?"Tag":"Tagen"})`
    : `Alle Truhen sind offen.`;
}

/* =========================================================
   Truhen
   ========================================================= */
function renderGrid(){
  const grid = $("#grid"); grid.innerHTML = "";
  DATES.forEach((item, i)=>{
    const frei = isUnlocked(item), offen = isOpened(item), done = doneDates.has(item.d);
    const bereit = frei && !offen;
    const b = document.createElement("button");
    b.className = "slot" + (frei ? "" : " locked") + (bereit ? " ready" : "") + (item.finale ? " finale" : "") + (item.bonus ? " bonus" : "");
    b.innerHTML = `
      ${done ? `<span class="badge">✓</span>` : bereit ? `<span class="badge ready">!</span>` : !frei ? `<span class="badge lock">${daysUntil(item.d)}T</span>` : ""}
      <span class="ep">${item.label}</span>
      ${sprite(offen ? "chestOpen" : "chest")}
      <span class="title">${offen ? item.t : bereit ? "Öffnen!" : "???"}</span>
      <span class="when">${fmt(item.d)}</span>`;
    b.addEventListener("click", ()=>openModal(i));
    grid.appendChild(b);
  });
}
function openModal(i){
  const item = DATES[i], frei = isUnlocked(item), offen = isOpened(item), done = doneDates.has(item.d);
  const m = $("#modal");
  if(frei && !offen){
    m.innerHTML = `
      <div class="locked-msg">
        <div class="chest-big" id="bigChest">${sprite("chest")}</div>
        <div class="big">BEREIT</div>
        <p>${item.bonus ? "Eine Bonustruhe" : "Diese Truhe"} wartet darauf, geöffnet zu werden.${DB ? "<br>Einmal geöffnet, ist sie für uns beide offen." : ""}</p>
      </div>
      <div class="actions"><button class="btn" data-close>Später</button><button class="btn green" id="openBtn">Truhe öffnen</button></div>`;
    $("#openBtn").addEventListener("click", ()=>truheOeffnen(i));
  } else if(!frei){
    const n = daysUntil(item.d);
    m.innerHTML = `
      <div class="locked-msg">
        <div style="width:96px;margin:0 auto">${sprite("chest")}</div>
        <div class="big">VERSCHLOSSEN</div>
        <p>Diese Truhe öffnet sich am ${fmtLong(item.d)}.<br>Noch ${n} ${n===1?"Tag":"Tage"} Geduld.</p>
      </div>
      <div class="actions"><button class="btn" data-close>Zurück</button></div>`;
  } else {
    m.innerHTML = `
      <div class="top opening">
        ${sprite(item.icon)}
        <div>
          <div class="ep">${item.finale ? "LETZTE TRUHE" : item.bonus ? "BONUSTRUHE: BESUCH" : item.label} · ${fmt(item.d)}</div>
          <h2 class="h">${item.t}</h2>
        </div>
      </div>
      <p>${item.text}</p>
      ${item.need ? `<div class="need"><b>DU BRAUCHST</b>${item.need}</div>` : ""}
      ${PREVIEW && item.prep ? `<div class="prep"><b>NOTIZ FÜR ${CONFIG.von.toUpperCase()}</b>${item.prep}</div>` : ""}
      <div class="actions">
        <button class="btn" data-close>Schließen</button>
        <button class="btn green" id="doneBtn">${done ? "Nicht erledigt" : "Date erledigt ✓"}</button>
      </div>`;
    $("#doneBtn").addEventListener("click", ()=>{
      const fertig = !doneDates.has(item.d);
      if(fertig){ doneDates.add(item.d); toast(item.icon, item.t); } else doneDates.delete(item.d);
      saveLocal(); renderGrid(); closeModal();
      fertig ? write("PUT", `done/${item.d}`, true) : write("DELETE", `done/${item.d}`);
    });
  }
  $("#modalBg").classList.add("show");
  m.querySelector("[data-close]").addEventListener("click", closeModal);
}
function truheOeffnen(i){
  const item = DATES[i], box = $("#bigChest");
  document.querySelectorAll("#modal .actions .btn").forEach(b=>b.disabled = true);
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  box.classList.add("shake");
  setTimeout(()=>{
    box.classList.remove("shake");
    box.innerHTML = sprite("chestOpen");
    for(let k=0;k<14;k++){
      const s = document.createElement("i"); s.className = "spark";
      const a = Math.random()*Math.PI - Math.PI, r = 50 + Math.random()*60;
      s.style.setProperty("--x", Math.cos(a)*r + "px"); s.style.setProperty("--y", Math.sin(a)*r + "px");
      s.style.background = ["#f2c94c","#fff3b0","#a77bd8","#80ff20"][k%4];
      box.appendChild(s);
    }
  }, still ? 0 : 700);
  setTimeout(()=>{
    geoeffnet.add(item.d); saveLocal(); renderGrid(); xp();
    write("PUT", `geoeffnet/${item.d}`, true);
    if($("#modalBg").classList.contains("show")) openModal(i);
  }, still ? 200 : 1500);
}
function closeModal(){ $("#modalBg").classList.remove("show"); }
$("#modalBg").addEventListener("click", e=>{ if(e.target.id==="modalBg") closeModal(); });
document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeModal(); });

let toastTimer;
function toast(icon, text, titel="Erfolg erzielt!"){
  $("#toastIcon").innerHTML = sprite(icon);
  $("#toastTitle").textContent = titel;
  $("#toastText").textContent = text;
  $("#toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>$("#toast").classList.remove("show"), 3200);
}

/* =========================================================
   Projekte
   ========================================================= */
let projects = store.get("staffel2-projekte"+KEY, null) || PROJEKTE_START.map((t,i)=>({id:"p"+i, t, done:false, ts:i}));
function saveLocal(){ store.set("staffel2-projekte"+KEY, projects); store.set("staffel2-done"+KEY, [...doneDates]); store.set("staffel2-geoeffnet"+KEY, [...geoeffnet]); }
function renderProjects(){
  const ul = $("#projList"); ul.innerHTML = "";
  projects.forEach(p=>{
    const li = document.createElement("li");
    li.className = "proj" + (p.done ? " done" : "");
    li.innerHTML = `<input type="checkbox" ${p.done?"checked":""} aria-label="erledigt"><span></span><button class="del" aria-label="Löschen">X</button>`;
    li.querySelector("span").textContent = p.t;
    li.querySelector("input").addEventListener("change", e=>{
      p.done = e.target.checked; saveLocal(); renderProjects();
      if(p.done) toast("block", p.t);
      write("PATCH", `projekte/${p.id}`, {done:p.done});
    });
    li.querySelector(".del").addEventListener("click", ()=>{
      if(!confirm(`„${p.t}“ wirklich löschen?`)) return;
      projects = projects.filter(x=>x.id!==p.id); saveLocal(); renderProjects();
      write("DELETE", `projekte/${p.id}`);
    });
    ul.appendChild(li);
  });
  const d = projects.filter(p=>p.done).length;
  $("#projCount").textContent = `${d} von ${projects.length} Projekten fertig gebaut`;
}
$("#projForm").addEventListener("submit", e=>{
  e.preventDefault();
  const v = $("#projInput").value.trim();
  if(!v) return;
  const p = {id:"p"+Date.now(), t:v, done:false, ts:Date.now()};
  projects.push(p);
  $("#projInput").value = ""; saveLocal(); renderProjects();
  write("PUT", `projekte/${p.id}`, {t:p.t, done:false, ts:p.ts});
});

/* =========================================================
   Planungsliste für Leon (nur im Vorschau-Modus sichtbar)
   ========================================================= */
const addDays = (s, n) => { const d = parseDate(s); d.setDate(d.getDate() + n); return d; };
const fmtD = d => d.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"});
function renderPlanung(){
  if(!PREVIEW) return;
  $("#planung").hidden = false;
  const heute = now(); heute.setHours(0,0,0,0);
  const items = DATES.filter(x=>x.prep).map(x=>({ x, bis: addDays(x.d, -(x.vorlauf || 0)) })).sort((a,b)=>a.bis-b.bis);
  const ul = $("#planList"); ul.innerHTML = "";
  items.forEach(({x, bis})=>{
    const erledigt = planung.has(x.d), tage = Math.round((bis - heute) / 864e5);
    const vorbei = parseDate(x.d) < heute;
    const status = erledigt || vorbei ? "" : tage < 0 ? "overdue" : tage <= 7 ? "soon" : "";
    const li = document.createElement("li");
    li.className = "proj plan " + status + (erledigt || vorbei ? " done" : "");
    li.innerHTML = `<input type="checkbox" ${erledigt?"checked":""} aria-label="erledigt">
      <span><b class="bis"></b><small class="was"></small><br><em class="prep-text"></em></span>`;
    li.querySelector(".bis").textContent = `bis ${fmtD(bis)}` + (status==="overdue" ? " · überfällig!" : status==="soon" ? ` · in ${tage} ${tage===1?"Tag":"Tagen"}` : "");
    li.querySelector(".was").textContent = ` ${x.label}: ${x.t} (${fmt(x.d)})`;
    li.querySelector(".prep-text").textContent = x.prep;
    li.querySelector("input").addEventListener("change", e=>{
      e.target.checked ? planung.add(x.d) : planung.delete(x.d);
      store.set("unsere-welt-planung", [...planung]); renderPlanung();
      e.target.checked ? write("PUT", `planung/${x.d}`, true, "unsere-welt") : write("DELETE", `planung/${x.d}`, undefined, "unsere-welt");
    });
    ul.appendChild(li);
  });
  const offen = items.filter(({x})=>!planung.has(x.d) && parseDate(x.d) >= heute);
  const naechste = offen[0];
  $("#planCount").textContent = `${items.length - offen.length} von ${items.length} Vorbereitungen erledigt` +
    (naechste ? ` · nächste fällig: ${fmtD(naechste.bis)}` : "");
}

/* =========================================================
   Gemeinsame Speicherung (Firebase Realtime Database, REST)
   Test-/Vorschaumodus schreibt in einen eigenen Bereich, damit echte Daten unberührt bleiben.
   ========================================================= */
const DB = (CONFIG.datenbank || "").trim().replace(/\/+$/, "");
const DB_PATH = (SIM || PREVIEW) ? "unsere-welt-test" : "unsere-welt";
const dbUrl = (p="", base=DB_PATH) => `${DB}/${base}${p ? "/" + p : ""}.json`;
function syncStatus(ok){
  const el = $("#syncStatus");
  if(!DB){ el.textContent = "Gespeichert auf diesem Gerät"; el.className = "sync local"; return; }
  el.textContent = ok ? "■ Welt synchronisiert" : "□ Keine Verbindung zur Welt";
  el.className = "sync " + (ok ? "ok" : "off");
}
async function req(method, p, body, base){
  const r = await fetch(dbUrl(p, base), { method, cache:"no-store",
    headers: body === undefined ? {} : {"Content-Type":"application/json"},
    body: body === undefined ? undefined : JSON.stringify(body) });
  if(!r.ok) throw new Error("HTTP " + r.status);
  return r.json();
}
async function write(method, p, body, base){
  if(!DB) return;
  try{ await req(method, p, body, base); syncStatus(true); }
  catch(e){ syncStatus(false); toast("chest", "Keine Verbindung, das wurde nicht gespeichert.", "Hoppla!"); setTimeout(pull, 1500); }
}
async function pull(){
  if(!DB) return;
  try{
    let data = await req("GET") || {};
    if(!data.angelegt){
      // Erster Start: Startliste der Projekte (bzw. das, was schon lokal da ist) hochladen
      const obj = {}; projects.forEach((p,i)=>obj[p.id] = {t:p.t, done:!!p.done, ts:p.ts ?? i});
      const done = {}; doneDates.forEach(d=>done[d] = true);
      const offen = {}; geoeffnet.forEach(d=>offen[d] = true);
      data = {angelegt:true, projekte:obj, done, geoeffnet:offen};
      await req("PUT", "", data);
    }
    doneDates = new Set(Object.keys(data.done || {}));
    geoeffnet = new Set(Object.keys(data.geoeffnet || {}));
    projects = Object.entries(data.projekte || {})
      .map(([id,v])=>({id, t:v.t, done:!!v.done, ts:v.ts || 0})).sort((a,b)=>a.ts-b.ts);
    if(PREVIEW){
      // Deine Planungs-Häkchen liegen immer im echten Bereich (nur Ja/Nein pro Datum, kein Inhalt)
      planung = new Set(Object.keys(await req("GET", "planung", undefined, "unsere-welt") || {}));
      store.set("unsere-welt-planung", [...planung]);
    }
    saveLocal(); renderGrid(); renderProjects(); renderPlanung(); xp(); syncStatus(true);
  }catch(e){ syncStatus(false); }
}
function live(){
  if(!DB) return;
  let t; const neuLaden = ()=>{ clearTimeout(t); t = setTimeout(pull, 250); };
  if(window.EventSource){
    const es = new EventSource(dbUrl());
    es.addEventListener("put", neuLaden);
    es.addEventListener("patch", neuLaden);
    es.addEventListener("cancel", ()=>syncStatus(false));
    es.onerror = ()=>syncStatus(false);
  }
  setInterval(pull, 60000);  // Sicherheitsnetz
  document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState === "visible") pull(); });
}

/* =========================================================
   Einstiegsfenster & Übergang
   ========================================================= */
const INTRO_KEY = "unsere-welt-intro-gesehen";
const introErzwungen = PARAMS.has("intro");
const introNoetig = () => introErzwungen || (CONFIG.intro && CONFIG.intro.aktiv && !store.get(INTRO_KEY, false));
function seiteZeigen(){
  document.documentElement.classList.remove("vorhang");
  document.title = "Unsere Welt";
  $("#themeColor").content = "#0b1026";
  const fav = $("#favicon"); fav.type = "image/png"; fav.href = "icon.png";
  if(!document.querySelector('link[rel="apple-touch-icon"]')){
    const l = document.createElement("link"); l.rel = "apple-touch-icon"; l.href = "icon.png"; document.head.appendChild(l);
  }
}
function erdKachel(){
  const c = document.createElement("canvas"); c.width = c.height = 16;
  const x = c.getContext("2d"), pal = ["#8a5a33","#7a4e2b","#9a6a3f","#6b4424","#5f3c1f"];
  for(let i=0;i<16;i++) for(let j=0;j<16;j++){ x.fillStyle = pal[Math.floor(Math.random()*pal.length)]; x.fillRect(i,j,1,1); }
  return c.toDataURL();
}
function startIntro(){
  const I = CONFIG.intro || {};
  $("#introTitle").textContent = I.titel || "";
  $("#introText").textContent = I.text || "";
  $("#introGruss").textContent = I.gruss || "";
  $("#introGruss").hidden = !I.gruss;
  $("#introBtn").textContent = I.button || "Weiter";
  $("#intro").hidden = false;
  $("#introBtn").focus({preventScroll:true});
  $("#introBtn").addEventListener("click", ()=>{
    if(!introErzwungen) store.set(INTRO_KEY, true);
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const T = still ? {fade:0, load:400, out:0} : {fade:550, load:2800, out:650};
    $("#introCard").classList.add("weg");
    setTimeout(()=>{
      $("#intro").hidden = true;
      const L = $("#loader");
      L.style.backgroundImage = `url(${erdKachel()})`;
      L.hidden = false;
      const texte = ["Gelände wird erzeugt …", "Truhen werden versteckt …", "Spawnpunkt wird gesucht …"];
      let k = 0; $("#loadSub").textContent = texte[0];
      const iv = setInterval(()=>{ k = Math.min(k+1, texte.length-1); $("#loadSub").textContent = texte[k]; }, T.load/3);
      requestAnimationFrame(()=>requestAnimationFrame(()=>{ $("#loadFill").style.width = "100%"; }));
      setTimeout(()=>{
        clearInterval(iv);
        window.scrollTo(0,0);
        seiteZeigen();
        L.classList.add("weg");
        setTimeout(()=>{ L.hidden = true; L.classList.remove("weg"); }, T.out);
      }, T.load);
    }, T.fade);
  }, {once:true});
}

/* =========================================================
   Navigation & Start
   ========================================================= */
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click", ()=>{
  document.getElementById(b.dataset.go).scrollIntoView({behavior:"smooth", block:"start"});
}));
if(PREVIEW || SIM){ $("#previewBanner").hidden = false; if(SIM && !PREVIEW) $("#previewBanner").textContent = "TESTMODUS: simuliertes Datum " + SIM.toLocaleString("de-DE"); }
$("#footer").textContent = `Gebaut für dich, Block für Block. ${CONFIG.von}`;
if(PREVIEW){
  const b = document.createElement("button"); b.className = "btn"; b.textContent = "Planung";
  b.addEventListener("click", ()=>$("#planung").scrollIntoView({behavior:"smooth", block:"start"}));
  $("nav.tabs").prepend(b);
}
introNoetig() ? startIntro() : seiteZeigen();
renderGrid(); renderProjects(); renderPlanung(); tick(); xp();
syncStatus(!DB); pull(); live();
setInterval(tick, 1000);
setInterval(()=>{ xp(); }, 60000);
