// Testi e struttura del Santo Rosario, verificati sulle fonti:
// Padre Nostro del Messale Romano 2020, Credo e Gloria al Padre CEI,
// "Gesù mio" dal libretto vaticano del rosario (2025), Litanie CEI 2021,
// titoli dei misteri da vatican.va, versetti CEI 2008 (bibbiaedu.it) ridotti
// a frasi intere.

export type PreghieraId =
  | "segno"
  | "credo"
  | "padreNostro"
  | "aveMaria"
  | "gloria"
  | "fatima"
  | "salveRegina"
  | "litanie"
  | "sanMichele"

export type Testo = {
  titolo: string
  paragrafi?: string[]
  // Invocation and response, for litanies and versicles.
  righe?: { v: string; r?: string }[]
  chiusa?: string[]
}

export const testi: Record<PreghieraId, Testo> = {
  segno: {
    titolo: "Segno della croce",
    paragrafi: ["Nel nome del Padre e del Figlio e dello Spirito Santo. Amen."],
  },
  credo: {
    titolo: "Credo",
    paragrafi: [
      "Io credo in Dio Padre onnipotente, creatore del cielo e della terra; e in Gesù Cristo, suo unico Figlio, nostro Signore, il quale fu concepito di Spirito Santo, nacque da Maria Vergine, patì sotto Ponzio Pilato, fu crocifisso, morì e fu sepolto; discese agli inferi; il terzo giorno risuscitò da morte; salì al cielo, siede alla destra di Dio Padre onnipotente; di là verrà a giudicare i vivi e i morti.",
      "Credo nello Spirito Santo, la santa Chiesa cattolica, la comunione dei santi, la remissione dei peccati, la risurrezione della carne, la vita eterna. Amen.",
    ],
  },
  padreNostro: {
    titolo: "Padre Nostro",
    paragrafi: [
      "Padre nostro, che sei nei cieli, sia santificato il tuo nome, venga il tuo regno, sia fatta la tua volontà, come in cielo così in terra.",
      "Dacci oggi il nostro pane quotidiano, e rimetti a noi i nostri debiti come anche noi li rimettiamo ai nostri debitori, e non abbandonarci alla tentazione, ma liberaci dal male. Amen.",
    ],
  },
  aveMaria: {
    titolo: "Ave Maria",
    paragrafi: [
      "Ave, o Maria, piena di grazia, il Signore è con te. Tu sei benedetta fra le donne e benedetto è il frutto del tuo seno, Gesù.",
      "Santa Maria, Madre di Dio, prega per noi peccatori, adesso e nell'ora della nostra morte. Amen.",
    ],
  },
  gloria: {
    titolo: "Gloria al Padre",
    paragrafi: [
      "Gloria al Padre e al Figlio e allo Spirito Santo. Come era nel principio, e ora e sempre nei secoli dei secoli. Amen.",
    ],
  },
  fatima: {
    titolo: "Gesù mio",
    paragrafi: [
      "Gesù mio, perdona le nostre colpe, preservaci dal fuoco dell'inferno, porta in cielo tutte le anime, specialmente le più bisognose della tua misericordia.",
    ],
  },
  salveRegina: {
    titolo: "Salve Regina",
    paragrafi: [
      "Salve, Regina, madre di misericordia, vita, dolcezza e speranza nostra, salve. A te ricorriamo, esuli figli di Eva; a te sospiriamo, gementi e piangenti in questa valle di lacrime.",
      "Orsù dunque, avvocata nostra, rivolgi a noi gli occhi tuoi misericordiosi. E mostraci, dopo questo esilio, Gesù, il frutto benedetto del tuo Seno. O clemente, o pia, o dolce Vergine Maria!",
    ],
    righe: [{ v: "Prega per noi, Santa Madre di Dio.", r: "E saremo degni delle promesse di Cristo." }],
  },
  litanie: {
    // Official Italian text: CEI Notiziario 2021 n. 2 and vatican.va, with the
    // three invocations added in 2020.
    titolo: "Litanie lauretane",
    righe: [
      { v: "Signore, pietà.", r: "Signore, pietà." },
      { v: "Cristo, pietà.", r: "Cristo, pietà." },
      { v: "Signore, pietà.", r: "Signore, pietà." },
      { v: "Cristo, ascoltaci.", r: "Cristo, ascoltaci." },
      { v: "Cristo, esaudiscici.", r: "Cristo, esaudiscici." },
      { v: "Padre del cielo, che sei Dio,", r: "abbi pietà di noi." },
      { v: "Figlio, Redentore del mondo, che sei Dio,", r: "abbi pietà di noi." },
      { v: "Spirito Santo, che sei Dio,", r: "abbi pietà di noi." },
      { v: "Santa Trinità, unico Dio,", r: "abbi pietà di noi." },
      ...[
        "Santa Maria,",
        "Santa Madre di Dio,",
        "Santa Vergine delle vergini,",
        "Madre di Cristo,",
        "Madre della Chiesa,",
        "Madre di misericordia,",
        "Madre della divina grazia,",
        "Madre della speranza,",
        "Madre purissima,",
        "Madre castissima,",
        "Madre sempre vergine,",
        "Madre immacolata,",
        "Madre degna d'amore,",
        "Madre ammirabile,",
        "Madre del buon consiglio,",
        "Madre del Creatore,",
        "Madre del Salvatore,",
        "Vergine prudente,",
        "Vergine degna di onore,",
        "Vergine degna di lode,",
        "Vergine potente,",
        "Vergine clemente,",
        "Vergine fedele,",
        "Specchio di perfezione,",
        "Sede della Sapienza,",
        "Fonte della nostra gioia,",
        "Tempio dello Spirito Santo,",
        "Tabernacolo dell'eterna gloria,",
        "Dimora consacrata di Dio,",
        "Rosa mistica,",
        "Torre della santa città di Davide,",
        "Fortezza inespugnabile,",
        "Santuario della divina presenza,",
        "Arca dell'alleanza,",
        "Porta del cielo,",
        "Stella del mattino,",
        "Salute degli infermi,",
        "Rifugio dei peccatori,",
        "Conforto dei migranti,",
        "Consolatrice degli afflitti,",
        "Aiuto dei cristiani,",
        "Regina degli angeli,",
        "Regina dei patriarchi,",
        "Regina dei profeti,",
        "Regina degli Apostoli,",
        "Regina dei martiri,",
        "Regina dei confessori della fede,",
        "Regina delle vergini,",
        "Regina di tutti i santi,",
        "Regina concepita senza peccato,",
        "Regina assunta in cielo,",
        "Regina del rosario,",
        "Regina della famiglia,",
        "Regina della pace,",
      ].map((v) => ({ v, r: "prega per noi." })),
      { v: "Agnello di Dio che togli i peccati del mondo,", r: "perdonaci, Signore." },
      { v: "Agnello di Dio che togli i peccati del mondo,", r: "ascoltaci, Signore." },
      { v: "Agnello di Dio che togli i peccati del mondo,", r: "abbi pietà di noi." },
      { v: "Prega per noi, Santa Madre di Dio.", r: "E saremo degni delle promesse di Cristo." },
    ],
    chiusa: [
      "Preghiamo. Concedi ai tuoi fedeli, Signore Dio nostro, di godere sempre la salute del corpo e dello spirito, per la gloriosa intercessione di Maria santissima, sempre vergine, salvaci dai mali che ora ci rattristano e guidaci alla gioia senza fine. Per Cristo nostro Signore. Amen.",
    ],
  },
  sanMichele: {
    titolo: "Preghiera a San Michele Arcangelo",
    // Same wording as on /preghiere/mattino, so the site doesn't carry two versions.
    paragrafi: [
      "San Michele Arcangelo, difendici nella lotta: sii il nostro aiuto contro la malvagità e le insidie del demonio. Supplichevoli preghiamo che Dio lo domini e Tu, Principe della Milizia Celeste, con il potere che ti viene da Dio, incatena nell'inferno satana e gli spiriti maligni, che si aggirano per il mondo per far perdere le anime. Amen.",
    ],
  },
}

export type Serie = "gaudiosi" | "luminosi" | "dolorosi" | "gloriosi"

export type Mistero = { titolo: string; riferimento: string; versetto: string }

export const serie: Record<Serie, { nome: string; aggettivo: string; giorni: string; misteri: Mistero[] }> = {
  gaudiosi: {
    nome: "Gaudiosi",
    aggettivo: "gaudioso",
    giorni: "Lunedì e sabato",
    misteri: [
      { titolo: "L'annunciazione dell'angelo a Maria Vergine", riferimento: "Lc 1,38", versetto: "Allora Maria disse: «Ecco la serva del Signore: avvenga per me secondo la tua parola». E l'angelo si allontanò da lei." },
      { titolo: "La visita di Maria santissima a santa Elisabetta", riferimento: "Lc 1,42", versetto: "«Benedetta tu fra le donne e benedetto il frutto del tuo grembo!»" },
      { titolo: "La nascita di Gesù nella grotta di Betlemme", riferimento: "Lc 2,7", versetto: "Diede alla luce il suo figlio primogenito, lo avvolse in fasce e lo pose in una mangiatoia, perché per loro non c'era posto nell'alloggio." },
      { titolo: "La presentazione di Gesù al tempio", riferimento: "Lc 2,22", versetto: "Quando furono compiuti i giorni della loro purificazione rituale, secondo la legge di Mosè, portarono il bambino a Gerusalemme per presentarlo al Signore." },
      { titolo: "Il ritrovamento di Gesù nel tempio", riferimento: "Lc 2,46", versetto: "Dopo tre giorni lo trovarono nel tempio, seduto in mezzo ai maestri, mentre li ascoltava e li interrogava." },
    ],
  },
  luminosi: {
    nome: "Luminosi",
    aggettivo: "luminoso",
    giorni: "Giovedì",
    misteri: [
      { titolo: "Il battesimo di Gesù nel Giordano", riferimento: "Mt 3,17", versetto: "Ed ecco una voce dal cielo che diceva: «Questi è il Figlio mio, l'amato: in lui ho posto il mio compiacimento»." },
      { titolo: "Le nozze di Cana", riferimento: "Gv 2,5", versetto: "Sua madre disse ai servitori: «Qualsiasi cosa vi dica, fatela»." },
      { titolo: "L'annuncio del regno di Dio", riferimento: "Mc 1,15", versetto: "«Il tempo è compiuto e il regno di Dio è vicino; convertitevi e credete nel Vangelo»." },
      { titolo: "La trasfigurazione di Gesù", riferimento: "Lc 9,35", versetto: "E dalla nube uscì una voce, che diceva: «Questi è il Figlio mio, l'eletto; ascoltatelo!»." },
      { titolo: "L'istituzione dell'Eucaristia", riferimento: "Lc 22,19", versetto: "Poi prese il pane, rese grazie, lo spezzò e lo diede loro dicendo: «Questo è il mio corpo, che è dato per voi; fate questo in memoria di me»." },
    ],
  },
  dolorosi: {
    nome: "Dolorosi",
    aggettivo: "doloroso",
    giorni: "Martedì e venerdì",
    misteri: [
      { titolo: "L'agonia di Gesù nel Getsemani", riferimento: "Lc 22,42", versetto: "«Padre, se vuoi, allontana da me questo calice! Tuttavia non sia fatta la mia, ma la tua volontà»." },
      { titolo: "La flagellazione di Gesù", riferimento: "Gv 19,1", versetto: "Allora Pilato fece prendere Gesù e lo fece flagellare." },
      { titolo: "L'incoronazione di spine", riferimento: "Mt 27,29", versetto: "Intrecciarono una corona di spine, gliela posero sul capo e gli misero una canna nella mano destra. Poi, inginocchiandosi davanti a lui, lo deridevano: «Salve, re dei Giudei!»." },
      { titolo: "Il viaggio al Calvario di Gesù carico della croce", riferimento: "Gv 19,17", versetto: "Ed egli, portando la croce, si avviò verso il luogo detto del Cranio, in ebraico Gòlgota." },
      { titolo: "La crocifissione e la morte di Gesù", riferimento: "Lc 23,46", versetto: "Gesù, gridando a gran voce, disse: «Padre, nelle tue mani consegno il mio spirito». Detto questo, spirò." },
    ],
  },
  gloriosi: {
    nome: "Gloriosi",
    aggettivo: "glorioso",
    giorni: "Mercoledì e domenica",
    misteri: [
      { titolo: "La risurrezione di Gesù", riferimento: "Lc 24,5-6", versetto: "«Perché cercate tra i morti colui che è vivo? Non è qui, è risorto»." },
      { titolo: "L'ascensione di Gesù al cielo", riferimento: "At 1,9", versetto: "Detto questo, mentre lo guardavano, fu elevato in alto e una nube lo sottrasse ai loro occhi." },
      { titolo: "La discesa dello Spirito Santo nel Cenacolo", riferimento: "At 2,4", versetto: "E tutti furono colmati di Spirito Santo e cominciarono a parlare in altre lingue, nel modo in cui lo Spirito dava loro il potere di esprimersi." },
      { titolo: "L'assunzione di Maria al cielo", riferimento: "Lc 1,48-49", versetto: "D'ora in poi tutte le generazioni mi chiameranno beata. Grandi cose ha fatto per me l'Onnipotente e Santo è il suo nome." },
      { titolo: "L'incoronazione di Maria regina del cielo e della terra", riferimento: "Ap 12,1", versetto: "Un segno grandioso apparve nel cielo: una donna vestita di sole, con la luna sotto i suoi piedi e, sul capo, una corona di dodici stelle." },
    ],
  },
}

export const ordineSerie: Serie[] = ["gaudiosi", "luminosi", "dolorosi", "gloriosi"]

// Indexed by Date.getDay(): 0 is Sunday.
export const seriePerGiorno: Serie[] = [
  "gloriosi",
  "gaudiosi",
  "dolorosi",
  "gloriosi",
  "luminosi",
  "dolorosi",
  "gaudiosi",
]

export const ordinali = ["Primo", "Secondo", "Terzo", "Quarto", "Quinto"]

// Prayers whose text already lives on /preghiere/mattino and /preghiere/sera:
// the rosary reuses those blocks so the site never carries two versions.
export type PreghieraCondivisa = "sanGiuseppe" | "defunti"

export type Passo = {
  // Id of the bead lit while this prayer is said.
  grano: string
  preghiera: PreghieraId | PreghieraCondivisa | "mistero"
  fase: "inizio" | "decina" | "fine"
  decina?: number
  ave?: number
  nota?: string
}

// Beads: "croce", then up the pendant "p1", "a1".."a3", "p2", then the
// "medaglia" where the loop closes. Around the loop each decade is
// "d{n}-1".."d{n}-10", with the big bead "p-d{n}" after decades 1 to 4.
export function costruisciPassi(): Passo[] {
  const passi: Passo[] = [
    { grano: "croce", preghiera: "segno", fase: "inizio", nota: "Prendi in mano il crocifisso e fai il segno della croce." },
    { grano: "croce", preghiera: "credo", fase: "inizio", nota: "Sempre tenendo il crocifisso, si recita il Credo." },
    { grano: "p1", preghiera: "padreNostro", fase: "inizio", nota: "Sul primo grano grande." },
    { grano: "a1", preghiera: "aveMaria", fase: "inizio", ave: 1, nota: "Sui tre grani piccoli si recitano tre Ave Maria. Questa è per la fede." },
    { grano: "a2", preghiera: "aveMaria", fase: "inizio", ave: 2, nota: "Per la speranza." },
    { grano: "a3", preghiera: "aveMaria", fase: "inizio", ave: 3, nota: "Per la carità." },
    { grano: "p2", preghiera: "gloria", fase: "inizio", nota: "Prima di cominciare la prima decina." },
  ]

  for (let n = 1; n <= 5; n++) {
    const grande = n === 1 ? "p2" : `p-d${n - 1}`
    if (n > 1) {
      passi.push({ grano: grande, preghiera: "gloria", fase: "decina", decina: n - 1, nota: "La decina si chiude con il Gloria." })
      passi.push({ grano: grande, preghiera: "fatima", fase: "decina", decina: n - 1 })
    }
    passi.push({ grano: grande, preghiera: "mistero", fase: "decina", decina: n })
    passi.push({ grano: grande, preghiera: "padreNostro", fase: "decina", decina: n, nota: "Sul grano grande, dopo aver annunciato il mistero." })
    for (let k = 1; k <= 10; k++) {
      passi.push({ grano: `d${n}-${k}`, preghiera: "aveMaria", fase: "decina", decina: n, ave: k })
    }
  }

  passi.push(
    { grano: "medaglia", preghiera: "gloria", fase: "decina", decina: 5, nota: "L'ultima decina si chiude con il Gloria." },
    { grano: "medaglia", preghiera: "fatima", fase: "decina", decina: 5 },
    { grano: "medaglia", preghiera: "salveRegina", fase: "fine", nota: "Terminate le cinque decine." },
    { grano: "medaglia", preghiera: "litanie", fase: "fine", nota: "Dopo ogni invocazione a Maria si risponde «prega per noi»." },
    { grano: "medaglia", preghiera: "sanGiuseppe", fase: "fine" },
    { grano: "medaglia", preghiera: "sanMichele", fase: "fine" },
    { grano: "medaglia", preghiera: "defunti", fase: "fine", nota: "Il rosario si conclude pregando per i defunti." },
    { grano: "croce", preghiera: "segno", fase: "fine", nota: "Infine, il segno della croce." },
  )

  return passi
}
