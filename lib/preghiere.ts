// Testi dai PDF "Preghiere del mattino" e "Preghiere della sera".
// Rispetto ai PDF sono corretti solo refusi evidenti e l'ordine delle strofe
// della sequenza allo Spirito Santo, riportato a quello del Veni Sancte Spiritus.

export type Blocco =
  | { tipo: "prosa"; testo: string }
  | { tipo: "versi"; strofe: string[][] }
  | { tipo: "rubrica"; testo: string }
  | { tipo: "sottotitolo"; testo: string }
  | { tipo: "invocazioni"; righe: { testo: string; risposta: string }[] }
  // Non è una preghiera da recitare ma un elenco da scorrere, quindi ha un
  // blocco suo: incorniciato e diviso in gruppi, per non confonderlo con le
  // preghiere che stanno sopra e sotto.
  | { tipo: "esame"; nota: string; gruppi: { titolo: string; voci: string[] }[] }

export type Preghiera = {
  slug: string
  titolo: string
  blocchi: Blocco[]
}

const treAveMaria = (apertura: string): Preghiera => ({
  slug: "tre-ave-maria",
  titolo: "Devozione delle Tre Ave Maria",
  blocchi: [
    { tipo: "prosa", testo: apertura },
    {
      tipo: "invocazioni",
      righe: [
        { testo: "per il Potere che ti ha concesso l'Eterno Padre.", risposta: "Ave Maria." },
        { testo: "per la Sapienza che ti ha concesso il Divin Figlio.", risposta: "Ave Maria." },
        { testo: "per l'Amore che ti ha concesso lo Spirito Santo.", risposta: "Ave Maria." },
      ],
    },
    {
      tipo: "prosa",
      testo:
        "Vieni, Spirito Santo, vieni per la potente intercessione della Vergine Maria, tua Sposa amatissima. Illumina le nostre menti, infiamma i nostri cuori e distruggi tutto ciò che ti addolora.",
    },
    { tipo: "rubrica", testo: "Un Gloria al Padre." },
  ],
})

const giaculatoria = (fine: "!" | "."): Preghiera => ({
  slug: "giaculatoria",
  titolo: "Giaculatoria",
  blocchi: [
    {
      tipo: "versi",
      strofe: [
        [
          `Gesù, Giuseppe e Maria, vi dono il cuore e l'anima mia${fine}`,
          `Gesù, Giuseppe e Maria, assistetemi nell'ultima mia agonia${fine}`,
          `Gesù, Giuseppe e Maria, spiri in pace con voi l'anima mia${fine}`,
        ],
      ],
    },
  ],
})

const treOrazioni = { tipo: "rubrica", testo: "Un Padre Nostro, un'Ave Maria, un Gloria al Padre." } as const

export const mattino: Preghiera[] = [
  {
    slug: "ti-adoro",
    titolo: "Ti adoro",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "Ti adoro, mio Dio, e ti amo con tutto il cuore. Ti ringrazio di avermi creato, fatto cristiano e conservato in questa notte. Ti offro le azioni della giornata, fa' che siano tutte secondo la Tua santa volontà per la maggior tua gloria. Preservami dal peccato e da ogni male. La tua grazia sia sempre con me e con tutti i miei cari. Amen.",
      },
      treOrazioni,
    ],
  },
  {
    slug: "atto-di-fede",
    titolo: "Atto di Fede",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "Mio Dio, perché sei verità infallibile, credo tutto quello che tu hai rivelato e la santa Chiesa ci propone a credere. Credo in te, unico vero Dio in tre persone uguali e distinte, Padre e Figlio e Spirito Santo. Credo in Gesù Cristo, Figlio di Dio incarnato, morto e risorto per noi, il quale darà a ciascuno, secondo i meriti, il premio o la pena eterna. Conforme a questa fede voglio sempre vivere. Signore, accresci la mia fede.",
      },
    ],
  },
  {
    slug: "atto-di-speranza",
    titolo: "Atto di Speranza",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "Mio Dio, spero dalla tua bontà, per le tue promesse e per i meriti di Gesù Cristo nostro Salvatore, la vita eterna e le grazie necessarie per meritarla con le buone opere che io debbo e voglio fare. Signore, che io possa goderti in eterno.",
      },
    ],
  },
  {
    slug: "atto-di-carita",
    titolo: "Atto di Carità",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "Mio Dio, ti amo con tutto il cuore sopra ogni cosa, perché sei bene infinito e nostra eterna felicità; e per amore tuo amo il prossimo come me stesso e perdono le offese ricevute. Signore, che io ti ami sempre più.",
      },
    ],
  },
  {
    slug: "sacro-cuore",
    titolo: "Consacrazione della giornata al Sacro Cuore",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "Cuore divino di Gesù, io ti offro, per mezzo del Cuore Immacolato di Maria madre della Chiesa, in unione al Sacrificio Eucaristico, le preghiere, le azioni, le gioie e le sofferenze di questo giorno: in riparazione dei peccati e per la salvezza di tutti gli uomini, nella grazia dello Spirito Santo, a gloria del Divin Padre.",
      },
    ],
  },
  {
    slug: "spirito-santo",
    titolo: "Preghiera allo Spirito Santo",
    blocchi: [
      {
        tipo: "versi",
        strofe: [
          ["Vieni, Santo Spirito,", "manda a noi dal cielo", "un raggio della tua luce."],
          ["Vieni, padre dei poveri,", "vieni, datore dei doni,", "vieni, luce dei cuori."],
          ["Consolatore perfetto,", "ospite dolce dell'anima,", "dolcissimo sollievo."],
          ["Nella fatica, riposo,", "nella calura, riparo,", "nel pianto, conforto."],
          ["O luce beatissima,", "invadi nell'intimo", "il cuore dei tuoi fedeli."],
          ["Senza la tua forza,", "nulla è nell'uomo,", "nulla senza colpa."],
          ["Lava ciò che è sordido,", "bagna ciò che è arido,", "sana ciò che sanguina."],
          ["Piega ciò che è rigido,", "scalda ciò che è gelido,", "raddrizza ciò ch'è sviato."],
          ["Dona ai tuoi fedeli", "che solo in te confidano", "i tuoi santi doni."],
          ["Dona virtù e premio,", "dona morte santa,", "dona gioia eterna. Amen."],
        ],
      },
    ],
  },
  {
    slug: "maria",
    titolo: "Consacrazione della giornata a Maria Santissima",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "Sotto la Tua protezione cerchiamo rifugio, Santa Madre di Dio: non disprezzare le suppliche di noi che siamo nella prova, e liberaci da ogni pericolo, o Vergine gloriosa e benedetta.",
      },
    ],
  },
  treAveMaria(
    "Maria, Madre di Gesù e Madre mia, difendimi dalle insidie del Maligno e dal pericolo di cadere in peccato mortale in vita e nell'ora della morte:",
  ),
  {
    slug: "san-giuseppe",
    titolo: "Consacrazione della giornata a San Giuseppe",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "A te o beato Giuseppe, stretti dalla tribolazione, ricorriamo e fiduciosi invochiamo il tuo patrocinio dopo quello della tua santissima Sposa. Deh! Per il sacro vincolo di carità che ti strinse all'Immacolata Vergine Madre di Dio e per l'amore paterno che portasti al Fanciullo Gesù, riguarda, te ne preghiamo, con occhio benigno la cara eredità che Gesù Cristo acquistò con il Suo Sangue e col tuo potere ed aiuto sovvieni ai nostri bisogni.",
      },
      {
        tipo: "prosa",
        testo:
          "Proteggi, o provvido custode della divina Famiglia, l'eletta prole di Gesù Cristo, allontana da noi, o Padre amatissimo, la peste di errori e di vizi che ammorba il mondo; assistici propizio dal cielo in questa lotta contro il potere delle tenebre, o nostro fortissimo protettore; e come un tempo salvasti dalla morte la minacciata vita del pargoletto Gesù, così ora difendi la santa Chiesa di Dio dalle ostili insidie e da ogni avversità; stendi ognora sopra ciascuno di noi il tuo patrocinio, affinché col tuo esempio e mediante il tuo soccorso, possiamo virtuosamente vivere, piamente morire e conseguire l'eterna beatitudine in cielo. Così sia.",
      },
    ],
  },
  giaculatoria("!"),
  {
    slug: "san-michele",
    titolo: "Consacrazione della giornata a San Michele Arcangelo e al proprio Angelo Custode",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "Principe nobilissimo delle Gerarchie angeliche, valoroso guerriero dell'Altissimo, amatore zelante della gloria del Signore, terrore degli angeli ribelli, amore e delizia di tutti gli angeli giusti, mio dilettissimo Arcangelo San Michele, poiché io desidero di essere contato nel numero dei devoti e dei tuoi servi, oggi io come tale mi offro, mi dono e mi consacro a te, e pongo me stesso, la mia famiglia e quanto mi appartiene sotto la tua potentissima protezione.",
      },
      {
        tipo: "prosa",
        testo:
          "È piccola l'offerta della mia servitù, poiché sono un miserabile, peccatore. Ma tu gradisci l'affetto del mio cuore. Ricordati inoltre che se da oggi in avanti sono sotto il tuo patrocinio, tu devi assistermi in tutta la mia vita e procurarmi il perdono dei miei molti e gravi peccati, la grazia di amare di cuore il mio Dio, il mio caro Salvatore Gesù e la mia dolce Madre Maria, ed impetrarmi quegli aiuti che mi sono necessari per arrivare alla corona della gloria.",
      },
      {
        tipo: "prosa",
        testo:
          "Difendimi sempre dai nemici dell'anima mia specialmente nel punto estremo della mia vita. Vieni, allora, o Principe gloriosissimo, ed assistimi nell'ultima lotta. Con la tua arma potente respingi lontano da me nell'abisso dell'inferno quell'angelo prevaricatore e superbo che un giorno hai prostrato nel combattimento in cielo. Amen.",
      },
      {
        tipo: "prosa",
        testo:
          "San Michele Arcangelo, difendici nella lotta: sii il nostro aiuto contro la malvagità e le insidie del demonio. Supplichevoli preghiamo che Dio lo domini e Tu, Principe della Milizia Celeste, con il potere che ti viene da Dio, incatena nell'inferno satana e gli spiriti maligni, che si aggirano per il mondo per far perdere le anime. Amen.",
      },
      {
        tipo: "prosa",
        testo:
          "Angelo di Dio che sei il mio custode illumina, custodisci, reggi e governa a me che ti fui affidato dalla Pietà Celeste. Amen.",
      },
    ],
  },
]

export const sera: Preghiera[] = [
  {
    slug: "ti-adoro",
    titolo: "Ti adoro",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "Ti adoro, mio Dio, e ti amo con tutto il cuore. Ti ringrazio di avermi creato, fatto cristiano e conservato in questo giorno. Perdonami il male oggi commesso e, se qualche bene ho compiuto, accettalo. Custodiscimi nel riposo e liberami dai pericoli. La tua grazia sia sempre con me e con tutti i miei cari. Amen.",
      },
      treOrazioni,
    ],
  },
  {
    slug: "esame-di-coscienza",
    titolo: "Esame di coscienza",
    blocchi: [
      { tipo: "rubrica", testo: "Da farsi al termine della giornata e per la confessione frequente." },
      {
        tipo: "esame",
        nota: "Non è una preghiera da recitare. È un elenco su cui fermarsi, una voce alla volta.",
        gruppi: [
          {
            titolo: "VERSO DIO",
            voci: [
              "Amore di Dio sopra ogni cosa",
              "Negligenze o omissioni nei doveri religiosi",
              "Irriverenze in Chiesa",
              "Santificazione della festa",
              "Mancanza di rispetto verso persone o cose sacre",
              "Dubbi sulla fede",
              "Rispetto umano",
              "Bestemmie",
              "Imprecazioni",
              "Mancanza di fiducia e di rassegnazione",
              "Resistenza alla grazia",
            ],
          },
          {
            titolo: "VERSO IL PROSSIMO",
            voci: [
              "Amore al prossimo per amor di Dio",
              "Mancanza di sollecitudine, di obbedienza",
              "Ostinazione",
              "Durezza",
              "Disprezzo",
              "Freddezza",
              "Odio",
              "Gelosia",
              "Ingiurie",
              "Perdono delle ingiurie",
              "Scherni",
              "Calunnie",
              "Maldicenze",
              "False testimonianze",
              "Violenze",
              "Menzogne",
              "Cattivi esempi",
              "Incitamento al male",
              "Scandalo",
              "Ingiustizie",
              "Danni alla reputazione o ai beni",
              "Debiti",
              "Furto",
              "Doveri verso la Patria, verso la Società",
            ],
          },
          {
            titolo: "VERSO SÉ STESSI",
            voci: [
              "Vittoria sul nostro difetto principale",
              "Superficialità",
              "Generosità",
              "Orgoglio",
              "Vanità",
              "Avarizia",
              "Desideri, sguardi, letture, parole e azioni impure",
              "Intemperanza",
              "Gola",
              "Mollezza",
              "Immortificazione",
              "Collera",
              "Impazienza",
              "Pigrizia nell'adempimento dei doveri del proprio stato",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "atto-di-dolore",
    titolo: "Atto di dolore",
    blocchi: [
      { tipo: "rubrica", testo: "Preceduto da un esame di coscienza della giornata." },
      {
        tipo: "prosa",
        testo:
          "Mio Dio, mi pento e mi dolgo con tutto il cuore dei miei peccati, perché peccando ho meritato i Tuoi castighi e molto più perché ho offeso Te, infinitamente buono e degno di essere amato sopra ogni cosa. Propongo col Tuo santo aiuto di non offenderti mai più e fuggire le occasioni prossime di peccato. Signore, misericordia, perdonami.",
      },
    ],
  },
  giaculatoria("."),
  {
    slug: "angelo-custode",
    titolo: "Preghiera all'Angelo Custode",
    blocchi: [
      {
        tipo: "prosa",
        testo:
          "O Angelo Santo, che per infinita bontà di Dio sei chiamato a custodirmi, assistimi nei bisogni, consolami nelle mie afflizioni, difendimi dai nemici, allontanami dalle occasioni di peccato, fa' che io sia docile e obbediente alle tue ispirazioni, proteggimi particolarmente nell'ora della mia morte, e non mi abbandonare fino a che non mi abbia guidato al mio celeste soggiorno in Paradiso. Amen.",
      },
      { tipo: "rubrica", testo: "Un Angelo di Dio." },
    ],
  },
  {
    slug: "per-i-defunti",
    titolo: "Per i defunti",
    blocchi: [
      { tipo: "sottotitolo", testo: "SALMO 130" },
      {
        tipo: "versi",
        strofe: [
          ["Dal profondo a te grido, o Signore;", "Signore, ascolta la mia voce."],
          ["Siano i tuoi orecchi attenti", "alla voce della mia preghiera."],
          ["Se consideri le colpe, Signore,", "Signore, chi potrà sussistere?"],
          ["Ma presso di te è il perdono:", "e avremo il tuo timore."],
          ["Io spero nel Signore,", "l'anima mia spera nella sua parola."],
          ["L'anima mia attende il Signore", "più che le sentinelle l'aurora."],
          [
            "Israele attenda il Signore,",
            "perché presso il Signore è la misericordia",
            "e grande presso di lui la redenzione.",
          ],
          ["Egli redimerà Israele", "da tutte le sue colpe."],
          [
            "Gloria al Padre e al Figlio",
            "e allo Spirito Santo.",
            "Come era nel principio,",
            "ora e sempre",
            "nei secoli dei secoli. Amen.",
          ],
        ],
      },
      { tipo: "sottotitolo", testo: "L'ETERNO RIPOSO" },
      {
        tipo: "prosa",
        testo:
          "L'eterno riposo dona loro, o Signore, e splenda ad essi la luce perpetua. Riposino in pace. Amen.",
      },
      { tipo: "rubrica", testo: "Tre volte." },
    ],
  },
  treAveMaria(
    "Maria, Madre di Gesù e Madre mia, difendimi dal Maligno e dal pericolo di cadere in peccato mortale in vita e nell'ora della morte:",
  ),
]
