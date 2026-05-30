/* ============================================
   Tennis-Rückhand · Klasse 10 · 25 Min
   app.js · Vanilla ES6+
   ============================================ */

'use strict';

/* ------------------------------------------------------------
   DATA: Phases (Stundenverlaufsplan)
------------------------------------------------------------ */
const PHASES = [
  { n:1, start:0,    dur:180, name:'Begrüßung + Demo + Kernsatz',
    content:'Lehrkraft demonstriert beidhändige Rückhand 2× in Zeitlupe (positiv, NICHT spiegelverkehrt). Kernsatz wird verbalisiert: „Linke Hand wie Vorhand, rechte Hand wie ein Hammer — Schulter zum Netz, Treffpunkt vor dem vorderen Fuß, Schwung über die Schulter."',
    src:'Bandura-Modelllernen (Messmer 2023, S. 197); Verstehen vor Üben (Leineweber et al. 2025)' },
  { n:2, start:180,  dur:120, name:'Aktivierung „Ballklavier"',
    content:'Jede:r SuS prellt den Ball frei mit beidhändigem Griff — kein Schlagziel, freie Materialerkundung. Trainer:innen verteilen sich, beobachten Griff.',
    src:'Constraint-Led Approach (Renshaw et al. 2019); Bollnow-Glücksgefühl (Messmer 2023, S. 211)' },
  { n:3, start:300,  dur:60,  name:'Gruppenbildung 3 × 8–10 SuS',
    content:'Lehrkraft teilt die Klasse in drei Gruppen (farbige Bänder); jede Gruppe wird einer Trainer:in zugeteilt und zu ihrer Startstation geführt.',
    src:'Sozialform-Wechsel (Amaro-Amreín in Messmer 2023, S. 260)' },
  { n:4, start:360,  dur:300, name:'Station A · Bewegungsspur',
    content:'Schattenschwung ohne Ball mit Schnur als Treffpunkt-Markierung auf Hüfthöhe. Drei Niveaustufen: Schwung ohne / mit Schritt / mit geschlossenen Augen.',
    src:'External Focus (Wulf 2013); Coaching im Timeout-Stil (Messmer 2023, S. 206)' },
  { n:5, start:660,  dur:300, name:'Station B · Sanfter Zuwurf',
    content:'Trainer:in wirft Ball sanft aus 3 m; SuS schlägt mit beidhändiger Rückhand zur Wand. Niveau über Wurftempo + Aufsprunghöhe.',
    src:'Schrittweise Komplexitätserhöhung (Roth/Hossner 1996); kognitive → assoziative Phase (Fitts/Posner 1967)' },
  { n:6, start:960,  dur:300, name:'Station C · Mini-Rallye über Schnur',
    content:'Paarweise hin-und-her über 1-m-Schnur; Trainer:in füttert Bälle nach. Ziel: möglichst viele Schläge in Folge — affektives Erfolgserleben.',
    src:'Spielnaher Transfer (KLP NRW BF7); offene Aufgabenstellung (Messmer 2023, S. 279)' },
  { n:7, start:1260, dur:240, name:'Reflexionssitzkreis',
    content:'„Wo lag dein Treffpunkt? Was war einfach, was schwer? Welcher Cue hat geholfen?" — 3–4 Wortmeldungen; Ausblick auf Folgestunde.',
    src:'Strukturierte Reflexion als Ko-Konstruktion (Leineweber et al. 2025); UK-Kompetenz KLP NRW G9' }
];
const TOTAL_DURATION = 1500; // 25:00

/* ------------------------------------------------------------
   DATA: Stations
------------------------------------------------------------ */
const STATIONS = [
  {
    letter:'A', name:'Bewegungsspur',
    motor:'Beidhändiger Schwung mit korrekter Seitstellung, Treffpunkt-Imagination, Finish über die Schulter.',
    cogn:'Bewegungsvorstellung des beidhändigen Rückhand-Schwungs mental verankern.',
    duration:'5:00 min',
    task:[
      'Seitstellung einnehmen, Schulter zum imaginierten Netz drehen.',
      '5× Schattenschwung langsam — Treffpunkt am Hütchen imaginieren.',
      '5× zügig schwingen — 2 Sek in der Finish-Position einfrieren.'
    ],
    levels:{
      light: 'Schwung ohne Schritt — Stand bleibt fest.',
      mid:   'Schwung + Ausfallschritt des vorderen Fußes.',
      hard:  'Schwung + Schritt + Augen geschlossen (Propriozeption).'
    },
    cues:[
      '„Schicke den Schläger zur Decke hinter dir."',
      '„Schaue mit der Schulter zum Netz."'
    ],
    error:{ name:'SuS steht frontal zum imaginierten Netz, Seitstellung fehlt.',
            fix:'„Schaue mit der Schulter zum Netz."' },
    tabu:['Spiegelverkehrte Demo (verwirrt Anfänger:innen)',
          'Negative Demo ohne sofortige Positivversion',
          'Mehr als zwei Hinweise gleichzeitig']
  },
  {
    letter:'B', name:'Sanfter Zuwurf',
    motor:'Bewegungsfluss bei extern zugespieltem Ball aufrechterhalten — erster realer Ballkontakt.',
    cogn:'Flugbahn antizipieren und Treffpunkt-Timing anpassen.',
    duration:'5:00 min',
    task:[
      'In Bereitschaftsposition ca. 3 m vor Trainer:in stehen.',
      'Zugeworfenen Ball mit beidhändigem Rückhandschlag zur Wand spielen.',
      'Nach 8 Würfen weiterrücken, nächste:r SuS tritt vor.'
    ],
    levels:{
      light: 'Wurf ohne Aufsprung — Ball kommt direkt auf Hüfthöhe.',
      mid:   'Ein Aufsprung, mittlere Höhe — SuS wartet kurz auf Treffpunkt.',
      hard:  'Wurf leicht seitlich versetzt — SuS muss Anpassschritt machen.'
    },
    cues:[
      '„Lass den Schläger an der Schulter parken."',
      '„Triff den Ball vor dem Fuß."'
    ],
    error:{ name:'Ausschwung bricht vorzeitig ab, Schläger bleibt auf Hüfthöhe.',
            fix:'„Lass den Schläger an der Schulter parken."' },
    tabu:['Mehr als ein Hinweis pro 3 Versuche',
          'Vergleichende Kommentare zwischen SuS',
          'Interne Korrekturen wie „Streck den Arm" — nur External-Focus-Cues']
  },
  {
    letter:'C', name:'Mini-Rallye',
    motor:'Beidhändigen Rückhandschlag in spielnaher Situation flüssig anwenden (Transfer).',
    cogn:'Erfolgserlebnis durch gemeinsames Gelingen einer Serie (affektives Lernziel).',
    duration:'5:00 min',
    task:[
      'Paarweise auf beiden Seiten der 1-m-Schnur, ca. 3–4 m Abstand.',
      'Sanft über die Schnur spielen — möglichst viele Schläge in Folge.',
      'Schläge laut mitzählen; Trainer:in füttert Bälle nach Fehlern nach.'
    ],
    levels:{
      light: 'SuS prellt Ball zuerst auf den Boden, dann Schlag (Halbvolley aus dem Selbstaufwurf).',
      mid:   'Direktes Spielen — Ball nach einem Aufsprung treffen.',
      hard:  'Längste Serie zählen — Welches Paar schafft 10 in Folge?'
    },
    cues:[
      '„Wie schafft ihr 5 Schläge in Folge?"',
      '„Spielt zur Mitte des Partners / der Partnerin."'
    ],
    error:{ name:'Verkrampfung und überhastete Schläge im Wettbewerb-Modus.',
            fix:'„Spielt ruhig, spielt zur Mitte des Partners."' },
    tabu:['Keine Ranglisten zwischen Paaren öffentlich aushängen',
          'Wettbewerb-Modus nur einsetzen wenn Grundschläge sitzen']
  }
];

/* ------------------------------------------------------------
   DATA: Trainer Principles (Accordion)
------------------------------------------------------------ */
const PRINCIPLES = [
  { title:'1. External Focus statt Internal Focus',
    body:'Sage NICHT: „Strecke deinen Arm." Sondern: „Schicke den Ball Richtung Hallenlampe." External Focus = Bewegungseffekt außen, Internal Focus = eigener Körper. Wulf (2013) zeigt in einer Meta-Analyse über 70 Studien: External Focus erhöht Lernrate UND Bewegungseffizienz signifikant.',
    src:'Wulf 2013' },
  { title:'2. Positive Demonstration',
    body:'Zeigt nur die KORREKTE Form vor. Stellt euch NEBEN die SuS, NICHT gegenüber (keine spiegelverkehrte Demo bei präzisen Zielformen). KEINE negative Demonstration — sie ist stigmatisierend.',
    src:'Bandura 1977; Messmer 2023, S. 197 / 198 / 200 f.' },
  { title:'3. Bollnow-Übungskriterien',
    body:'Eine gute Übung erfüllt 4 Kriterien: (a) angemessen schwierig, (b) konzentrationsförderlich, (c) selbstkorrigierbar, (d) erfolgserlebnisstiftend („Glücksgefühl"). Frustriert? → Niveau RUNTER. Gelangweilt? → Niveau HOCH.',
    src:'Bollnow 1978; in Messmer 2023, S. 211' },
  { title:'4. Ein Hinweis pro 3 Versuche',
    body:'Keine Hinweisflut. SuS brauchen Zeit zum Spüren. Faustregel: SuS macht 3 Versuche → kurzer Cue → 3 weitere → ggf. neuer Cue.',
    src:'Coaching im Timeout-Stil (Messmer 2023, S. 206)' },
  { title:'5. Sicherheit zuerst',
    body:'Mindestabstand 3 m beim Schwungholen. Wartereihe SEITLICH der schwingenden SuS, NIE hinter. Bälle nach jeder Runde einsammeln. Schläger nicht werfen. Bei Schmerz im Handgelenk → Pause + sofort Lehrkraft.',
    src:'DGUV-Information 202-005' }
];

/* ------------------------------------------------------------
   DATA: External-Focus Cue Cards
------------------------------------------------------------ */
const CUES = [
  { cue:'„Triff den Ball vor deinem vorderen Fuß."',          when:'Treffpunkt-Korrektur · Ball wird hinter dem Körper getroffen' },
  { cue:'„Schicke den Schläger zur Decke hinter dir."',       when:'Finish über die Schulter · Ausschwung fehlt' },
  { cue:'„Schicke den Ball Richtung Hallenlampe."',           when:'Ball geht ins Netz · Schläger zu waagerecht' },
  { cue:'„Lass den Schläger an der Schulter parken."',        when:'Ausschwung bricht vorzeitig ab' },
  { cue:'„Schaue mit der Schulter zum Netz."',                when:'Stand frontal statt seitlich · Seitstellung fehlt' },
  { cue:'„Spielt zur Mitte des Partners."',                   when:'Mini-Rallye · Verkrampfung im Wettbewerbs-Modus' }
];

/* ------------------------------------------------------------
   DATA: Theory Sections
------------------------------------------------------------ */
const THEORY = [
  { title:'Verstehen vor Üben (Leineweber et al. 2025)',
    body:'Leineweber, Lüsebrink, Volkmann und Wolters (2025) zeigen in ihrer videografischen Rekonstruktion einer Übungsstunde Weitsprung in einer 4. Klasse, dass Üben im Sportunterricht häufig durch organisatorische Sicherungs- und Ordnungshandlungen überlagert wird und der eigentliche Bewegungsinhalt aus dem Blick gerät. Sie plädieren dafür, das Üben als „eine in pädagogischen Settings ko-konstruierte Praxis" zu begreifen. Die Stunde übersetzt diesen Anspruch in ein Demo-plus-Kernsatz-Format und einen Reflexionssitzkreis.',
    src:'Leineweber et al. 2025, S. 590 f.' },
  { title:'External Focus (Wulf 2013)',
    body:'„Focusing on the effects of one\'s movements (external focus) results in more effective performance and learning than focusing on the body movements themselves (internal focus)" (Wulf 2013, S. 78). Über 15 Jahre Forschung und 70+ Studien belegen: Lernende erwerben Bewegungen schneller und stabiler, wenn ihre Aufmerksamkeit auf Ball, Schläger, Ziel statt auf den eigenen Körper gerichtet ist. Erklärung: die Constrained Action Hypothesis.',
    src:'Wulf 2013' },
  { title:'Bollnow-Übungskriterien (Bollnow 1978)',
    body:'Vier Kriterien einer guten Übung: (a) angemessen schwierig, (b) konzentrationsförderlich, (c) selbstkorrigierbar, (d) erfolgserlebnisstiftend („Glücksgefühl"). Bollnow: „Die Übung muß einen Schwierigkeitsgrad aufweisen, der im Lernenden ein Können hervortreibt, ohne ihn zu überfordern." Brinkmann (2021) ergänzt eine pädagogisch-anthropologische Dimension: Im Üben begegnet die Lernende sich selbst in ihrer Vorläufigkeit.',
    src:'Bollnow 1978; in Messmer 2023, S. 211; Brinkmann 2021' },
  { title:'Bandura-Modelllernen (Bandura 1977)',
    body:'Bewegungslernen erfolgt über Beobachtung eines Modells, kognitive Aufschlüsselung und motorische Reproduktion in zunehmend komplexeren Bedingungen. Daraus folgt: positive Demonstration NEBEN den SuS (nicht gegenüber), keine negative Demo, klare Kernsatz-Verbalisierung synchron zur Demo.',
    src:'Bandura 1977; in Messmer 2023, S. 197 ff.' },
  { title:'Constraints-Led Approach (Renshaw et al. 2019)',
    body:'Bewegungslernen wird über drei Constraint-Typen gesteuert: individuelle (Lernende), umweltbezogene (Halle), aufgabenbezogene (Schnurhöhe, Wandabstand, Tee-Höhe). Constraints sind keine Hindernisse, sondern Bewegungskorridore, in denen sich die Zieltechnik selbstorganisiert herauskristallisiert. Stationen B, C, D nutzen diesen Ansatz systematisch.',
    src:'Renshaw, Davids, Newcombe & Roberts 2019' },
  { title:'Fitts/Posner Drei-Phasen-Modell (1967)',
    body:'Bewegungslernen durchläuft drei Phasen: kognitiv (verstehen WAS zu tun ist), assoziativ (WIE verfeinern), autonom (ohne bewusste Kontrolle). Eine 25-Min-Anfänger:innenstunde adressiert ausschließlich die kognitive Phase. Diese Selbstbescheidung ist nicht resignativ, sondern ehrlich: Erfolg misst sich daran, ob die SuS am Ende benennen können, WAS eine korrekte Rückhand ist — nicht daran, ob sie sie schon können.',
    src:'Fitts & Posner 1967' }
];

/* ------------------------------------------------------------
   DATA: Bibliography (16 sources)
------------------------------------------------------------ */
const BIBLIO = [
  'Bandura, A. (1977). <i>Social learning theory</i>. Prentice-Hall.',
  'Bollnow, O. F. (1978). <i>Vom Geist des Übens. Eine Rückbesinnung auf elementare didaktische Erfahrungen</i>. Verlag Freies Geistesleben.',
  'Brinkmann, M. (2021). Üben – pädagogische Aspekte einer anthropologischen Grundkategorie. In M. Brinkmann (Hrsg.), <i>Üben – Lernen – Können</i>. Springer VS.',
  'Buszard, T., Reid, M., Masters, R. S. W., & Farrow, D. (2016). Scaling the equipment and play area in children\'s sport to improve motor skill acquisition. <i>Sports Medicine, 46</i>(6), 829–843.',
  'Deutsche Gesetzliche Unfallversicherung (o. J.). <i>DGUV Information 202-005: Sicherheits- und Gesundheitsförderung im Schulsport</i>. DGUV.',
  'Ferrauti, A., Maier, P., & Weber, K. (2016). <i>Handbuch für Tennistraining</i> (4. Aufl.). Meyer & Meyer.',
  'Fitts, P. M., & Posner, M. I. (1967). <i>Human performance</i>. Brooks/Cole.',
  'Klafki, W. (2007). <i>Neue Studien zur Bildungstheorie und Didaktik</i> (6. Aufl.). Beltz.',
  'Leineweber, H., Lüsebrink, I., Volkmann, V., & Wolters, P. (2025). Empirische Rekonstruktion von Übungsprozessen im Sportunterricht. <i>German Journal of Exercise and Sport Research, 55</i>(4), 589–598.',
  'Meinel, K., & Schnabel, G. (2015). <i>Bewegungslehre – Sportmotorik</i> (12. Aufl.). Meyer & Meyer.',
  'Messmer, R. (Hrsg.) (2023). <i>Sportdidaktik. Eine Einführung</i>. UTB.',
  'MSB NRW (2019). <i>Kernlehrplan für die Sekundarstufe I – Gymnasium in Nordrhein-Westfalen, Sport</i> (Heft 3426). Düsseldorf.',
  'MSB NRW (2020). <i>Sicherheitsförderung im Schulsport</i> (RdErl. v. 03.01.2020, BASS 18-23 Nr. 2, Heft 1033).',
  'Renshaw, I., Davids, K., Newcombe, D., & Roberts, W. (2019). <i>The constraints-led approach: Principles for sports coaching and practice design</i>. Routledge.',
  'Schönborn, R. (2016). <i>Optimales Tennistraining</i> (4. Aufl.). Spitta.',
  'Schulz, W. (1996). <i>Anleitung zum didaktischen Denken</i>. Beltz.',
  'Wulf, G. (2013). Attentional focus and motor learning: A review of 15 years. <i>International Review of Sport and Exercise Psychology, 6</i>(1), 77–104.'
];

/* ------------------------------------------------------------
   DATA: Material list
------------------------------------------------------------ */
const MATERIAL = [
  ['Tennisschläger', 'Standard / Junior 27"', '30', '1/SuS + 5 Reserve'],
  ['Tennisbälle', 'normal (druckvoll)', '50', '15/Station + 5 Reserve'],
  ['Schaumstoffbälle', 'für Niveau ◐', '12', 'Niveau-1-Wahl Stationen B+C'],
  ['Hütchen', 'klein', '20', 'Treffpunkt-Markierung Station A'],
  ['Schnur-Set', '5 m', '2', 'Station A + Station C'],
  ['Pylonen', '1 m', '4', 'Schnüre kippsicher (2 pro Schnur)'],
  ['Weichmatten', 'klein', '2', 'Sicherheit Station C / Reserve'],
  ['Pfeife', 'Lehrkraft', '1', 'Rotationssignal alle 5 Min'],
  ['Stationenkarten', 'A5 laminiert', '3', 'je Station'],
  ['Klemmbretter', 'mit Stift', '3', 'pro Trainer:in'],
  ['Erste-Hilfe-Tasche', '', '1', 'Position bekanntgeben'],
  ['Klebeband', '3-m-Markierung', '1', 'Sicherheitszone zwischen Stationen']
];

/* ------------------------------------------------------------
   DATA: Safety Checklist
------------------------------------------------------------ */
const SAFETY = {
  vor: [
    'Hallenboden trocken, sauber, frei von Hindernissen',
    'Schlägerbespannungen intakt, Griff-Bänder fest',
    'Bälle ohne Risse / lose Filzfetzen',
    'Schnüre fest gespannt, Pylonen kippsicher',
    'Erste-Hilfe-Tasche griffbereit, Position bekannt',
    'Notfallnummern bekannt: 112 / Schulleitung',
    'SuS in Sportkleidung mit Hallenschuhen',
    'Brillenträger:innen ggf. Sportbrille',
    'Schmuck ablegen lassen',
    'Trinkflaschen seitlich, NICHT im Spielbereich',
    'Trainer:innen vorab gebrieft (Datei 05)'
  ],
  waehrend: [
    'Mindestabstand 3 m zwischen schwingenden SuS',
    'Wartereihen IMMER seitlich, nie hinter Schwungrichtung',
    'Bälle nach jeder Runde einsammeln',
    'Schläger nicht werfen — sofort intervenieren',
    'Bei Schmerz Handgelenk/Schulter → Pause, Lehrkraft',
    'Lehrkraft hat Gesamtüberblick, Rotation per Pfeife'
  ],
  nach: [
    'Bälle einsammeln (Eimer-Zählung)',
    'Schläger zählen (Vollständigkeit)',
    'Schnüre, Hütchen, Matten zurück in Geräteraum',
    'Trainer-Bögen einsammeln',
    'Hallenboden grob sichten'
  ]
};

/* ============================================================
   THEME TOGGLE + LOCAL STORAGE
============================================================ */
function initTheme() {
  const saved = localStorage.getItem('tennis-theme');
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  document.getElementById('themeToggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? '' : 'dark';
    if (next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('tennis-theme', next);
  });
}

/* ============================================================
   TIMER STATE + LOGIC
============================================================ */
const Timer = {
  running: false,
  elapsed: 0,
  intervalId: null,
  lastTickAt: null,

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTickAt = performance.now();
    this.intervalId = setInterval(() => this.tick(), 250);
    document.getElementById('btnStart').disabled = true;
    document.getElementById('btnPause').disabled = false;
  },
  pause() {
    if (!this.running) return;
    this.running = false;
    clearInterval(this.intervalId);
    document.getElementById('btnStart').disabled = false;
    document.getElementById('btnPause').disabled = true;
  },
  reset() {
    this.pause();
    this.elapsed = 0;
    this.render();
  },
  toggle() { this.running ? this.pause() : this.start(); },

  tick() {
    const now = performance.now();
    const delta = (now - this.lastTickAt) / 1000;
    this.lastTickAt = now;
    const prevPhase = this.currentPhase();
    this.elapsed = Math.min(this.elapsed + delta, TOTAL_DURATION);
    const newPhase = this.currentPhase();
    if (newPhase && (!prevPhase || prevPhase.n !== newPhase.n)) {
      this.onPhaseChange(newPhase);
    }
    if (this.elapsed >= TOTAL_DURATION) {
      this.pause();
      this.onPhaseChange({ n:0, name:'Stunde beendet' });
    }
    this.render();
  },

  currentPhase() {
    return PHASES.find(p => this.elapsed >= p.start && this.elapsed < p.start + p.dur) || null;
  },

  onPhaseChange(phase) {
    if (document.getElementById('soundToggle').checked) playBeep();
    if (document.getElementById('notifyToggle').checked && 'Notification' in window && Notification.permission === 'granted') {
      try { new Notification('Tennis-Rückhand · Phasenwechsel', { body: phase.name }); } catch(e){}
    }
  },

  render() {
    const phase = this.currentPhase();
    const remainInPhase = phase ? Math.max(0, phase.start + phase.dur - this.elapsed) : 0;
    const overallPct = (this.elapsed / TOTAL_DURATION) * 100;

    document.getElementById('timerLabel').textContent =
      phase ? `Phase ${phase.n} · ${phase.name}` : (this.elapsed >= TOTAL_DURATION ? 'Stunde beendet' : 'Bereit');
    document.getElementById('timerClock').textContent = fmtMMSS(remainInPhase);
    document.getElementById('overallFill').style.width = overallPct + '%';
    document.getElementById('overallText').textContent = fmtMMSS(this.elapsed) + ' / 25:00';
    document.getElementById('miniTimerPhase').textContent = phase ? `Phase ${phase.n}` : 'Bereit';
    document.getElementById('miniTimerClock').textContent = fmtMMSS(remainInPhase);

    document.querySelectorAll('.phase-item').forEach(el => {
      const n = parseInt(el.dataset.phase, 10);
      el.classList.remove('is-active','is-done');
      if (phase && n === phase.n) el.classList.add('is-active');
      else if (phase && n < phase.n) el.classList.add('is-done');
      else if (!phase && this.elapsed >= TOTAL_DURATION) el.classList.add('is-done');
    });
  }
};

function fmtMMSS(s) {
  const sec = Math.max(0, Math.round(s));
  const m = Math.floor(sec / 60);
  const r = sec % 60;
  return String(m).padStart(2,'0') + ':' + String(r).padStart(2,'0');
}

/* Web Audio API beep (no external asset) */
let _audioCtx = null;
function playBeep() {
  try {
    _audioCtx = _audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const ctx = _audioCtx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.value = 880;
    o.type = 'sine';
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
    o.connect(g).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.45);
  } catch(e) {}
}

/* ============================================================
   RENDER FUNCTIONS
============================================================ */
function renderPhases() {
  const list = document.getElementById('phaseList');
  list.innerHTML = PHASES.map(p => {
    const fromMin = Math.floor(p.start / 60);
    const fromSec = p.start % 60;
    const toMin = Math.floor((p.start + p.dur) / 60);
    const toSec = (p.start + p.dur) % 60;
    const range = `${fromMin}:${String(fromSec).padStart(2,'0')}–${toMin}:${String(toSec).padStart(2,'0')}`;
    return `
      <li class="phase-item" data-phase="${p.n}" tabindex="0" role="button" aria-label="Phase ${p.n}: ${p.name}">
        <div class="phase-time">${range}</div>
        <div class="phase-content">
          <strong>Phase ${p.n} · ${p.name}</strong>
          <p>${p.content}</p>
          <span class="src">${p.src}</span>
        </div>
        <span class="phase-status">offen</span>
      </li>`;
  }).join('');

  list.querySelectorAll('.phase-item').forEach(el => {
    el.addEventListener('click', () => {
      const n = parseInt(el.dataset.phase, 10);
      const phase = PHASES.find(x => x.n === n);
      if (phase) {
        Timer.elapsed = phase.start;
        Timer.render();
      }
    });
  });
}

function renderStations() {
  const grid = document.getElementById('stationsGrid');
  grid.innerHTML = STATIONS.map((s, idx) => `
    <article class="station-card" data-station="${idx}">
      <div class="station-letter">${s.letter}</div>
      <h3>${s.name}</h3>
      <p class="station-goal"><strong>Motorisch:</strong> ${s.motor}</p>
      <p class="station-goal"><strong>Kognitiv:</strong> ${s.cogn}</p>
      <p class="muted small">Dauer: ${s.duration}</p>

      <strong>Aufgabe</strong>
      <ol class="station-task">
        ${s.task.map(t => `<li>${t}</li>`).join('')}
      </ol>

      <strong>Niveau-Differenzierung</strong>
      <div class="level-tabs" role="tablist">
        <button class="level-tab active" data-level="light" role="tab">◐ leicht</button>
        <button class="level-tab" data-level="mid" role="tab">◐◐ mittel</button>
        <button class="level-tab" data-level="hard" role="tab">◐◐◐ schwer</button>
      </div>
      <div class="level-content">${s.levels.light}</div>

      <strong>External-Focus-Cues</strong>
      <ul class="cues-list">
        ${s.cues.map(c => `<li>${c}</li>`).join('')}
      </ul>

      <div class="station-error">
        <strong>Anfängerfehler:</strong> ${s.error.name}<br>
        <span><strong style="color:var(--accent)">Korrektur:</strong> ${s.error.fix}</span>
      </div>

      <div class="station-tabu">
        <strong>Tabu</strong>
        <ul>${s.tabu.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>

      <button type="button" class="btn ghost small print-button" data-print-station="${idx}">Als A5-Stationenkarte drucken</button>
    </article>
  `).join('');

  grid.querySelectorAll('.station-card').forEach(card => {
    const idx = parseInt(card.dataset.station, 10);
    const station = STATIONS[idx];
    const tabs = card.querySelectorAll('.level-tab');
    const content = card.querySelector('.level-content');
    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      content.textContent = station.levels[t.dataset.level];
    }));
    card.querySelector('[data-print-station]').addEventListener('click', () => printStation(idx));
  });
}

function renderPrinciples() {
  const acc = document.getElementById('principlesAccordion');
  acc.innerHTML = PRINCIPLES.map(p => `
    <div class="accordion-item">
      <button class="accordion-header" type="button">${p.title}</button>
      <div class="accordion-body">
        <p>${p.body}</p>
        <p class="src">Quelle: ${p.src}</p>
      </div>
    </div>
  `).join('');
}

function renderCues() {
  const grid = document.getElementById('cueGrid');
  grid.innerHTML = CUES.map((c, i) => `
    <button type="button" class="cue-card" aria-label="Cue ${i+1}: ${c.cue}">
      <div class="cue-card-inner">
        <div class="cue-card-front" data-num="#${i+1}">${c.cue}</div>
        <div class="cue-card-back">
          <strong>Wann anwenden?</strong>
          ${c.when}
        </div>
      </div>
    </button>
  `).join('');
  grid.querySelectorAll('.cue-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('is-flipped'));
  });
}

function renderTheory() {
  const acc = document.getElementById('theoryAccordion');
  acc.innerHTML = THEORY.map(t => `
    <div class="accordion-item">
      <button class="accordion-header" type="button">${t.title}</button>
      <div class="accordion-body">
        <p>${t.body}</p>
        <p class="src">Quelle: ${t.src}</p>
      </div>
    </div>
  `).join('');
}

function renderBibliography() {
  const ol = document.getElementById('bibliography');
  ol.innerHTML = BIBLIO.map(b => `<li>${b}</li>`).join('');
}

function renderMaterial() {
  const t = document.getElementById('materialTable');
  t.innerHTML = `
    <thead><tr><th>Item</th><th>Art</th><th>Anz</th><th>Hinweis</th></tr></thead>
    <tbody>${MATERIAL.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody>`;
}

function renderSafety() {
  Object.keys(SAFETY).forEach(group => {
    const ul = document.querySelector(`.check-list[data-group="${group}"]`);
    if (!ul) return;
    ul.innerHTML = SAFETY[group].map((item, i) => {
      const id = `safety-${group}-${i}`;
      const stored = localStorage.getItem('tennis-safety-' + id) === '1';
      return `<li>
        <input type="checkbox" id="${id}" ${stored ? 'checked' : ''}>
        <label for="${id}" class="${stored ? 'checked' : ''}">${item}</label>
      </li>`;
    }).join('');
    ul.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        const lbl = cb.parentElement.querySelector('label');
        lbl.classList.toggle('checked', cb.checked);
        localStorage.setItem('tennis-safety-' + cb.id, cb.checked ? '1' : '0');
      });
    });
  });

  document.getElementById('resetSafety').addEventListener('click', () => {
    Object.keys(localStorage).forEach(k => { if (k.startsWith('tennis-safety-')) localStorage.removeItem(k); });
    renderSafety();
  });
}

/* ============================================================
   FLOORPLAN SVG (27 × 15 m)
============================================================ */
function renderFloorplan() {
  const svg = `
    <svg viewBox="0 0 540 320" xmlns="http://www.w3.org/2000/svg" aria-label="Hallenplan 27 × 15 m mit 3 Stationen und Sitzkreis">
      <defs>
        <marker id="arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#2d6a4f"/>
        </marker>
      </defs>
      <rect x="20" y="20" width="500" height="280" fill="#fbfbf9" stroke="#2d6a4f" stroke-width="3"/>
      <text x="270" y="14" text-anchor="middle" font-size="11" fill="#6b6b6b">27 m</text>
      <text x="10" y="165" text-anchor="middle" font-size="11" fill="#6b6b6b" transform="rotate(-90 10 165)">15 m</text>

      <!-- Wand top label -->
      <rect x="20" y="20" width="500" height="6" fill="#2d6a4f"/>
      <text x="270" y="38" text-anchor="middle" font-size="9" fill="#fff" font-weight="700">WAND (Station B spielt zur Wand)</text>

      <!-- Sitzkreis center -->
      <circle cx="270" cy="160" r="44" fill="#d8efe1" stroke="#2d6a4f" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="270" y="156" text-anchor="middle" font-size="11" fill="#1b4332" font-weight="700">SITZKREIS</text>
      <text x="270" y="172" text-anchor="middle" font-size="9" fill="#1b4332">Phase 1 + 7 · L</text>

      <!-- Station boxes -->
      <g font-family="-apple-system, sans-serif" font-size="11" fill="#fff">
        <!-- Station A (top-left) - Bewegungsspur -->
        <rect x="50" y="55" width="140" height="70" rx="6" fill="#2d6a4f"/>
        <text x="120" y="80" text-anchor="middle" font-weight="800" font-size="15">A · Bewegungsspur</text>
        <text x="120" y="98" text-anchor="middle" font-size="9">Schattenschwung an Schnur</text>
        <text x="120" y="113" text-anchor="middle" font-size="9">[T] · 8–10 SuS · 5 Min</text>

        <!-- Station B (top-right) - Sanfter Zuwurf -->
        <rect x="350" y="55" width="140" height="70" rx="6" fill="#2d6a4f"/>
        <text x="420" y="80" text-anchor="middle" font-weight="800" font-size="15">B · Sanfter Zuwurf</text>
        <text x="420" y="98" text-anchor="middle" font-size="9">Trainer:in wirft → Wand</text>
        <text x="420" y="113" text-anchor="middle" font-size="9">[T] · 8–10 SuS · 5 Min</text>

        <!-- Station C (bottom-center) - Mini-Rallye -->
        <rect x="200" y="225" width="140" height="70" rx="6" fill="#2d6a4f"/>
        <text x="270" y="250" text-anchor="middle" font-weight="800" font-size="15">C · Mini-Rallye</text>
        <text x="270" y="268" text-anchor="middle" font-size="9">Paare über Schnur · zählen</text>
        <text x="270" y="283" text-anchor="middle" font-size="9">[T] · 8–10 SuS · 5 Min</text>
      </g>

      <!-- Rotation arrows A → B → C -->
      <g fill="none" stroke="#74c69d" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#arrowhead)">
        <!-- A → B (oben quer) -->
        <path d="M195 90 Q270 60 345 90"/>
        <!-- B → C (rechts runter) -->
        <path d="M420 130 Q400 200 340 250"/>
        <!-- C → A (links hoch) -->
        <path d="M200 250 Q140 200 120 130"/>
      </g>

      <!-- Rotation label -->
      <text x="270" y="312" text-anchor="middle" font-size="10" fill="#2d6a4f" font-weight="700">Rotation: A → B → C (alle 5 Min · Pfeifsignal der Lehrkraft)</text>

      <!-- Material depot -->
      <g>
        <rect x="475" y="155" width="40" height="50" fill="#f3f3ef" stroke="#c9c9c1" stroke-width="1.5" rx="3"/>
        <text x="495" y="170" text-anchor="middle" font-size="7" fill="#6b6b6b">Material</text>
        <text x="495" y="180" text-anchor="middle" font-size="7" fill="#6b6b6b">Reserve</text>
        <text x="495" y="190" text-anchor="middle" font-size="7" fill="#b91c1c" font-weight="700">1. Hilfe</text>
        <text x="495" y="200" text-anchor="middle" font-size="7" fill="#6b6b6b">Bälle</text>
      </g>
    </svg>
  `;
  document.getElementById('floorplan').innerHTML = svg;
}

/* ============================================================
   GRIP DIAGRAM SVG (octagonal grip cross-section)
============================================================ */
function renderGripDiagram() {
  // Zwei Sub-Diagramme nebeneinander:
  // 1) Längsansicht des Schlägergriffs mit Hand-Anordnung
  // 2) Oktagonaler Griff-Querschnitt mit V-Positionen
  const svg = `
    <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" role="img"
         aria-label="Beidhändiger Tennisgriff: Längsansicht und Querschnitt"
         style="width:100%;height:auto;">

      <!-- ========= 1) LÄNGSANSICHT (links, x: 0–210) ========= -->
      <text x="105" y="20" text-anchor="middle" font-size="12" font-weight="700"
            fill="#1b4332">Längsansicht</text>

      <!-- Schaft -->
      <rect x="85" y="35" width="40" height="220" rx="4"
            fill="#f3f3ef" stroke="#c9c9c1" stroke-width="1.5"/>

      <!-- Schlägerkopf-Andeutung oben -->
      <ellipse cx="105" cy="32" rx="24" ry="6" fill="#1b4332"/>
      <text x="105" y="50" text-anchor="middle" font-size="10"
            fill="#1b4332" font-weight="600">↑ zum Schlägerkopf</text>

      <!-- Knauf unten -->
      <rect x="81" y="255" width="48" height="10" rx="3" fill="#1b4332"/>
      <text x="105" y="278" text-anchor="middle" font-size="10"
            fill="#1b4332" font-weight="600">Knauf</text>

      <!-- Linke Hand (oben) – Eastern-Vorhand -->
      <rect x="65" y="80" width="80" height="58" rx="22"
            fill="#95d5b2" stroke="#2d6a4f" stroke-width="2"/>
      <text x="105" y="105" text-anchor="middle" font-size="11"
            font-weight="700" fill="#1b4332">Linke Hand</text>
      <text x="105" y="121" text-anchor="middle" font-size="10"
            fill="#1b4332">Eastern-Vorhand</text>

      <!-- Rechte Hand (unten) – Continental -->
      <rect x="65" y="155" width="80" height="58" rx="22"
            fill="#2d6a4f" stroke="#1b4332" stroke-width="2"/>
      <text x="105" y="180" text-anchor="middle" font-size="11"
            font-weight="700" fill="#fff">Rechte Hand</text>
      <text x="105" y="196" text-anchor="middle" font-size="10"
            fill="#fff">Continental</text>

      <!-- Hinweis Hände berühren sich -->
      <text x="155" y="142" font-size="9" fill="#6b6b6b">Hände</text>
      <text x="155" y="153" font-size="9" fill="#6b6b6b">berühren</text>
      <text x="155" y="164" font-size="9" fill="#6b6b6b">sich</text>

      <!-- Trennlinie -->
      <line x1="220" y1="20" x2="220" y2="295" stroke="#dadbd5" stroke-width="1"
            stroke-dasharray="3 3"/>

      <!-- ========= 2) OKTAGON-QUERSCHNITT (rechts, x: 230–440) ========= -->
      <text x="335" y="20" text-anchor="middle" font-size="12" font-weight="700"
            fill="#1b4332">Querschnitt</text>
      <text x="335" y="34" text-anchor="middle" font-size="9" fill="#6b6b6b">
        (von hinten / Knaufseite)
      </text>

      <!-- Octagon: Mittelpunkt 335,150; Radius ~52 -->
      <polygon points="335,98 372,113 387,150 372,187 335,202 298,187 283,150 298,113"
               fill="#f3f3ef" stroke="#1b4332" stroke-width="2.5"/>

      <!-- Kantennummern 1–8 im Inneren -->
      <text x="335" y="118" text-anchor="middle" font-size="9" fill="#6b6b6b">1</text>
      <text x="362" y="129" text-anchor="middle" font-size="9" fill="#6b6b6b">2</text>
      <text x="372" y="155" text-anchor="middle" font-size="9" fill="#6b6b6b">3</text>
      <text x="362" y="180" text-anchor="middle" font-size="9" fill="#6b6b6b">4</text>
      <text x="335" y="190" text-anchor="middle" font-size="9" fill="#6b6b6b">5</text>
      <text x="308" y="180" text-anchor="middle" font-size="9" fill="#6b6b6b">6</text>
      <text x="298" y="155" text-anchor="middle" font-size="9" fill="#6b6b6b">7</text>
      <text x="308" y="129" text-anchor="middle" font-size="9" fill="#6b6b6b">8</text>

      <!-- Continental V-Punkt (Bevel 2) -->
      <circle cx="370" cy="125" r="5" fill="#2d6a4f" stroke="#fff" stroke-width="2"/>
      <line x1="370" y1="125" x2="395" y2="80" stroke="#2d6a4f" stroke-width="1.5"/>
      <text x="395" y="74" text-anchor="end" font-size="10" font-weight="700" fill="#2d6a4f">Continental</text>
      <text x="395" y="86" text-anchor="end" font-size="9" fill="#1b4332">rechte Hand · Bevel 2</text>

      <!-- Eastern-Vorhand V-Punkt (Bevel 3) -->
      <circle cx="386" cy="155" r="5" fill="#95d5b2" stroke="#1b4332" stroke-width="2"/>
      <line x1="386" y1="155" x2="410" y2="220" stroke="#1b4332" stroke-width="1.5"/>
      <text x="410" y="232" text-anchor="end" font-size="10" font-weight="700" fill="#1b4332">Eastern-Vorhand</text>
      <text x="410" y="244" text-anchor="end" font-size="9" fill="#1b4332">linke Hand · Bevel 3</text>

      <!-- Legende unten -->
      <text x="335" y="280" text-anchor="middle" font-size="9" fill="#6b6b6b">
        ● = V (Daumen + Zeigefinger)
      </text>
      <text x="335" y="294" text-anchor="middle" font-size="8" fill="#9a9a92">
        Achteckiges Griffprofil, 8 Bevels
      </text>
    </svg>
  `;
  document.getElementById('gripDiagram').innerHTML = svg;
}

/* ============================================================
   COURT DIAGRAM SVG (tennis court ITF)
============================================================ */
function renderCourtDiagram() {
  // Tennis court 23.77 × 10.97 m, scaled
  const svg = `
    <svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" aria-label="Tennisplatz nach ITF Rules of Tennis 2026">
      <!-- Doppelfeld -->
      <rect x="40" y="30" width="400" height="180" fill="#74c69d" opacity="0.25" stroke="#1b4332" stroke-width="2"/>
      <!-- Einzelfeld -->
      <line x1="40"  y1="60"  x2="440" y2="60"  stroke="#1b4332" stroke-width="2"/>
      <line x1="40"  y1="180" x2="440" y2="180" stroke="#1b4332" stroke-width="2"/>
      <!-- Aufschlagfelder -->
      <line x1="120" y1="60"  x2="120" y2="180" stroke="#1b4332" stroke-width="2"/>
      <line x1="360" y1="60"  x2="360" y2="180" stroke="#1b4332" stroke-width="2"/>
      <line x1="120" y1="120" x2="360" y2="120" stroke="#1b4332" stroke-width="2"/>
      <!-- Mittellinie Aufschlag -->
      <line x1="240" y1="60"  x2="240" y2="180" stroke="#1b4332" stroke-width="0" />
      <!-- Netz -->
      <line x1="240" y1="20"  x2="240" y2="220" stroke="#1b4332" stroke-width="3" stroke-dasharray="2 2"/>
      <text x="240" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="#1b4332">NETZ · Mitte 0,914 m · Pfosten 1,07 m</text>

      <!-- Maße -->
      <text x="240" y="232" text-anchor="middle" font-size="11" fill="#1b4332" font-weight="700">23,77 m</text>
      <line x1="50" y1="225" x2="430" y2="225" stroke="#1b4332" stroke-width="1" />
      <line x1="50" y1="222" x2="50" y2="228" stroke="#1b4332" stroke-width="1" />
      <line x1="430" y1="222" x2="430" y2="228" stroke="#1b4332" stroke-width="1" />

      <!-- Höhen-Maße -->
      <text x="450" y="125" font-size="10" fill="#1b4332" font-weight="700" transform="rotate(-90 450 125)">10,97 m</text>
      <text x="22" y="125" font-size="9" fill="#1b4332" transform="rotate(-90 22 125)">8,23 m (Einzel)</text>

      <!-- Beschriftungen -->
      <text x="80"  y="100" font-size="9" fill="#1b4332">Aufschlag links</text>
      <text x="80"  y="155" font-size="9" fill="#1b4332">Aufschlag rechts</text>
      <text x="320" y="100" font-size="9" fill="#1b4332">Aufschlag rechts</text>
      <text x="320" y="155" font-size="9" fill="#1b4332">Aufschlag links</text>

      <!-- Gangkanten -->
      <text x="240" y="48" text-anchor="middle" font-size="8" fill="#6b6b6b">Doppelgang</text>
      <text x="240" y="200" text-anchor="middle" font-size="8" fill="#6b6b6b">Doppelgang</text>
    </svg>
  `;
  document.getElementById('courtDiagram').innerHTML = svg;
}

/* ============================================================
   ACCORDIONS (generic)
============================================================ */
function bindAccordions() {
  document.querySelectorAll('.accordion-header').forEach(h => {
    h.addEventListener('click', () => h.parentElement.classList.toggle('open'));
  });
}

/* ============================================================
   OBSERVATION TABLE
============================================================ */
function renderObservationTable() {
  const t = document.getElementById('observationTable');
  const headers = ['SuS-Name','Griff','Seitstellung','Treffpunkt','Finish','Niveau','Notiz'];
  const scaleCells = (name) => `<td class="scale-cell">
    <label><input type="radio" name="${name}" value="1">1</label>
    <label><input type="radio" name="${name}" value="2">2</label>
    <label><input type="radio" name="${name}" value="3">3</label>
  </td>`;
  const niveauCell = (name) => `<td class="scale-cell">
    <label><input type="radio" name="${name}" value="leicht">◐</label>
    <label><input type="radio" name="${name}" value="mittel">◐◐</label>
    <label><input type="radio" name="${name}" value="schwer">◐◐◐</label>
  </td>`;
  let rows = '';
  for (let i = 1; i <= 6; i++) {
    rows += `<tr>
      <td class="name-cell"><input type="text" name="sus${i}_name" placeholder="Name SuS ${i}"></td>
      ${scaleCells('sus'+i+'_griff')}
      ${scaleCells('sus'+i+'_seit')}
      ${scaleCells('sus'+i+'_treff')}
      ${scaleCells('sus'+i+'_finish')}
      ${niveauCell('sus'+i+'_niveau')}
      <td><input type="text" name="sus${i}_notiz" placeholder="1-Wort-Cue"></td>
    </tr>`;
  }
  t.innerHTML = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows}</tbody>`;
}

/* ============================================================
   SUS REFLEXIONSKARTEN (6 Karten)
============================================================ */
function renderSusCards() {
  const sheet = document.getElementById('susCardsSheet');
  const cardHTML = `
    <article class="sus-card">
      <h4>MEINE RÜCKHAND-STUNDE</h4>
      <p class="muted small" style="margin:0">Datum: 30.05.2026</p>
      <div class="field"><strong>1. Wo lag dein Treffpunkt?</strong><br>
        ☐ vor dem Fuß &nbsp; ☐ neben dem Fuß &nbsp; ☐ hinter dem Fuß
      </div>
      <div class="field"><strong>2. Was war heute leicht?</strong><br>____________________________</div>
      <div class="field"><strong>3. Was war schwer?</strong><br>____________________________</div>
      <div class="field"><strong>4. Was nehme ich mit für nächstes Mal? (1 Wort)</strong><br>____________________________</div>
      <div class="thumbs">Daumen: 👍 &nbsp; 👍👍 &nbsp; 👍👍👍</div>
    </article>`;
  sheet.innerHTML = cardHTML.repeat(6);
}

/* ============================================================
   PRINT FUNCTIONS
============================================================ */
function printStation(idx) {
  const s = STATIONS[idx];
  // iOS-Safari-robust: separates Print-Window mit eigenem Stylesheet,
  // damit der Druck nicht die ganze Hauptseite umfasst.
  const html = `<!doctype html>
<html lang="de"><head><meta charset="utf-8">
<title>Station ${s.letter} · ${s.name}</title>
<style>
  @page { size: A5 portrait; margin: 1cm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    color: #1a1a1a;
    line-height: 1.4;
    padding: 1.5cm;
  }
  h1 { font-size: 18pt; margin: 0 0 4pt; color: #1b4332; }
  .letter {
    font-size: 96pt; line-height: .9; color: #2d6a4f;
    font-weight: 800; margin: 4pt 0 8pt;
  }
  .meta { color: #555; font-size: 10pt; margin-bottom: 8pt; }
  h2 {
    font-size: 12pt; margin: 12pt 0 4pt; color: #1b4332;
    border-bottom: 1px solid #95d5b2; padding-bottom: 2pt;
  }
  ol, ul { margin: 4pt 0 4pt 18pt; padding: 0; }
  li { margin-bottom: 3pt; font-size: 10.5pt; }
  p { margin: 4pt 0; font-size: 10.5pt; }
  .levels p { margin: 3pt 0; padding-left: 8pt; border-left: 2px solid #95d5b2; }
  @media print {
    body { padding: 0; }
    .print-action { display: none !important; }
  }
  .print-action {
    position: fixed; top: 12pt; right: 12pt;
    background: #2d6a4f; color: #fff; border: 0;
    padding: 8pt 14pt; border-radius: 4pt;
    font: inherit; font-weight: 600; cursor: pointer;
  }
</style>
</head><body>
  <button class="print-action" onclick="window.print()">Drucken</button>
  <h1>Station ${s.letter} · ${s.name}</h1>
  <div class="letter">${s.letter}</div>
  <p class="meta"><strong>Dauer:</strong> ${s.duration}</p>
  <p><strong>Lernziel motorisch:</strong> ${s.motor}</p>
  <p><strong>Lernziel kognitiv:</strong> ${s.cogn}</p>
  <h2>Aufgabe</h2>
  <ol>${s.task.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ol>
  <h2>Drei Niveaustufen</h2>
  <div class="levels">
    <p><strong>◐ leicht:</strong> ${escapeHtml(s.levels.light)}</p>
    <p><strong>◐◐ mittel:</strong> ${escapeHtml(s.levels.mid)}</p>
    <p><strong>◐◐◐ anspruchsvoll:</strong> ${escapeHtml(s.levels.hard)}</p>
  </div>
  <script>
    // Auf iOS Safari klappt window.print() im onload-Handler oft
    // erst nach Viewport-Settle. Daher mit kurzer Verzögerung.
    window.addEventListener('load', function () {
      setTimeout(function () { try { window.print(); } catch (e) {} }, 350);
    });
  </script>
</body></html>`;

  const w = window.open('', '_blank', 'noopener,noreferrer');
  if (!w) {
    // Popup blockiert (typisch iOS) — Fallback: data-URL
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.location.href = url;
    return;
  }
  w.document.open();
  w.document.write(html);
  w.document.close();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

function printObservation() {
  document.body.classList.add('print-observation-mode');
  setTimeout(() => {
    window.print();
    document.body.classList.remove('print-observation-mode');
  }, 100);
}

function printSusCards() {
  document.body.classList.add('print-sus-cards-mode');
  setTimeout(() => {
    window.print();
    document.body.classList.remove('print-sus-cards-mode');
  }, 100);
}

/* ============================================================
   SUBTABS (Observation form)
============================================================ */
function bindSubtabs() {
  document.querySelectorAll('.subtab').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      document.querySelectorAll('.subtab').forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', isActive);
      });
      document.querySelectorAll('.subtab-panel').forEach(p => {
        p.classList.toggle('active', p.id === target);
      });
    });
  });
}

/* ============================================================
   KEYBOARD SHORTCUTS
============================================================ */
function bindKeyboard() {
  window.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) || '';
    if (['INPUT','TEXTAREA','SELECT'].includes(tag)) return;
    if (e.code === 'Space') { e.preventDefault(); Timer.toggle(); }
    else if (e.key === 'r' || e.key === 'R') { e.preventDefault(); Timer.reset(); }
  });
}

/* ============================================================
   NOTIFICATION PERMISSION (lazy)
============================================================ */
function bindNotifyToggle() {
  const cb = document.getElementById('notifyToggle');
  cb.addEventListener('change', () => {
    if (cb.checked && 'Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission().then(perm => {
        if (perm !== 'granted') cb.checked = false;
      });
    }
  });
}

/* ============================================================
   START LESSON BUTTON
============================================================ */
function bindStartButton() {
  document.getElementById('startLessonBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('timeline').scrollIntoView({ behavior:'smooth' });
    setTimeout(() => Timer.start(), 600);
  });
  document.getElementById('btnStart').addEventListener('click', () => Timer.start());
  document.getElementById('btnPause').addEventListener('click', () => Timer.pause());
  document.getElementById('btnReset').addEventListener('click', () => Timer.reset());
  document.getElementById('printObservation').addEventListener('click', printObservation);
  document.getElementById('printSusCards').addEventListener('click', printSusCards);
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPhases();
  renderStations();
  renderPrinciples();
  renderCues();
  renderTheory();
  renderBibliography();
  renderMaterial();
  renderSafety();
  renderFloorplan();
  renderGripDiagram();
  renderCourtDiagram();
  renderObservationTable();
  renderSusCards();
  bindAccordions();
  bindSubtabs();
  bindKeyboard();
  bindNotifyToggle();
  bindStartButton();
  Timer.render();
});
