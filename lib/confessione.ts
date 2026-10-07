// Guida per una buona confessione sacramentale, dal libretto in PDF.
// Il testo è quello del libretto: le uniche modifiche sono la divisione in
// cinque passi con un titolo ciascuno e qualche inciso spostato in nota, per
// poterlo seguire sullo schermo. Nel PDF i peccati gravi sono in grassetto:
// qui sono segnati con il rombo pieno in oro, come dice la legenda.

export type Voce = { testo: string; grave: boolean; nota?: string }

export type Passo = {
  slug: string
  numero: number
  titolo: string
  sottotitolo?: string
  paragrafi?: string[]
  preghiera?: { testo: string; dopo?: string[] }
  esame?: { titolo: string; voci: Voce[] }[]
}

export const premesse: string[] = [
  "Il sacramento della confessione è l'incontro gioioso con la misericordia di Dio, che conosce le nostre miserie e le nostre debolezze e che mai nega il suo perdono a chi è sinceramente pentito e ricorre a Lui. Grazie a questo sacramento io posso essere sicuro di essere in grazia di Dio, ovvero di vivere nella Sua amicizia e posso pertanto accostarmi con gioia e letizia interiore alla Santa Comunione, quando partecipo alla Santa Messa.",
  "Questo sacramento è necessario per ottenere il perdono di tutte le colpe gravi di cui si è coscienti, ma è vivamente raccomandato anche per purificarsi dai peccati veniali, ricorrendovi con una certa frequenza, all'incirca una volta al mese, per tenere pulita la nostra anima che si macchia con le colpe quotidiane. Ciò è necessario specialmente se ci si accosta regolarmente alla Santa Comunione.",
  "Le colpe veniali, infatti, formano come delle piccole macchie sulla nostra anima: ma cosa succede ad una tovaglia bianca macchiata con 200 piccole macchioline? Di certo non potrei adoperarla se ho ospiti a pranzo! La stessa cosa succede se mi accosto a ricevere Gesù nella comunione sacramentale: posso accogliere l'Ospite divino su una tovaglia tanto macchiata? Per questo la Chiesa ha sempre raccomandato la confessione frequente, dando anche diversi insegnamenti su come vivere bene questo meraviglioso sacramento.",
  "Per fare una buona confessione si richiedono alcuni atti: il pentimento, la confessione, preceduta da un buon esame di coscienza, e l'adempimento della penitenza sacramentale che il sacerdote impartisce prima di dare l'assoluzione.",
]

export const passi: Passo[] = [
  {
    slug: "preparazione",
    numero: 1,
    titolo: "Preparati",
    sottotitolo: "Prima di entrare in confessionale.",
    paragrafi: [
      "Prima di confessarsi è bene chiedere a Dio che ci illumini la coscienza, ci aiuti a conoscere i nostri peccati e la loro gravità, a pentircene sinceramente, a detestarli proponendo di non commetterli nuovamente nell'avvenire. Posso rivolgere a Dio una preghiera come questa.",
    ],
    preghiera: {
      testo:
        "Signore, so che Tu sei il mio Salvatore, a te mi rivolgo pieno di fiducia e di amore: aiutami, con il tuo Santo Spirito, in questa confessione, guidami, fammi conoscere le mie miserie e confessarle con sincero pentimento, aiutami e parlami attraverso il sacerdote che riceverà la mia confessione. Ho bisogno del tuo amore, della tua pace. O Maria, rifugio dei peccatori e Madre mia dolcissima, che raccomandi ai tuoi figli di accostarsi con frequenza, fiducia e amore a questo sacramento, stammi vicino, guidami, accoglimi come Madre dolcissima, portami tra le braccia piene di amore del Tuo Figlio Gesù.",
      dopo: [
        "Dopo aver pregato, comincio ad esaminare la mia coscienza, con l'aiuto dello schema seguente. Comincio dai peccati più gravi, cioè quelli contro Dio, proibiti dai primi tre comandamenti; poi passo a verificare i miei rapporti col prossimo e con me stesso.",
      ],
    },
  },
  {
    slug: "esame-di-coscienza",
    numero: 2,
    titolo: "Esamina la coscienza",
    sottotitolo: "Scorri le domande una per una, senza fretta.",
    esame: [
      {
        titolo: "IL RAPPORTO CON DIO",
        voci: [
      { testo: "Ho fatto la santa comunione in stato di peccato mortale senza essermi prima confessato?", grave: true },
      { testo: "Ho bestemmiato il nome di Dio, della Madonna o dei Santi (anche mentalmente)?", grave: true },
      { testo: "Ho santificato, con la partecipazione alla santa Messa, tutte le Domeniche e le feste comandate?", grave: true },
      { testo: "Ho fatto delle promesse (voti) a Dio, senza mantenerli?", grave: true },
      { testo: "Ho giurato (su Dio, la Madonna, o i santi) il falso?", grave: true },
      { testo: "Ho pregato almeno la mattina e la sera?", grave: true },
      { testo: "Ho partecipato a sedute spiritiche, o mi sono rivolto a maghi, medium, cartomanti?", grave: true },
      { testo: "Ho lavorato di Domenica o nelle feste comandate senza un vero e grave motivo o senza una necessità impostami dal mio lavoro?", grave: true },
      { testo: "Ho pubblicamente combattuto e contrastato alcune verità di fede e di morale cattolica rivelate da Dio e insegnate dalla Chiesa?", grave: true },
      { testo: "Ho aderito a dottrine condannate dalla Chiesa (divorzio, aborto, eutanasia, fecondazione artificiale) o ad associazioni scomunicate (come la Massoneria)?", grave: true },
      { testo: "Ho profanato la santità dei luoghi sacri (Chiese, Cappelle, Santuari) vestendo in modo indecente?", grave: true },
      { testo: "Durante le mie confessioni passate, ho mai nascosto, per paura o per vergogna, al confessore qualche peccato grave?", grave: true, nota: "Se l'ho fatto, devo dirlo nella prossima confessione, specificando che si tratta di peccati appartenenti al passato." },
      { testo: "Ho impedito a mio figlio di seguire la chiamata del Signore a consacrargli la vita?", grave: true },
      { testo: "Ho dubitato volontariamente di qualche verità di fede?", grave: false },
      { testo: "Sono superstizioso (corni, ferri di cavallo, gatti neri, Venerdì 17, etc.)?", grave: false },
      { testo: "Ho avuto vergogna di farmi riconoscere in pubblico come cristiano?", grave: false },
      { testo: "Ho difeso la fede cristiana quando veniva attaccata?", grave: false },
      { testo: "Mi sono distratto durante la santa Messa, ho chiacchierato, riso, disturbato?", grave: false },
      { testo: "Il mio comportamento in Chiesa è decoroso e dignitoso?", grave: false, nota: "Non parlo mai ad alta voce, faccio bene il segno della croce, faccio la genuflessione al Tabernacolo, durante la santa Messa sto in ginocchio almeno durante la consacrazione, rispondo e partecipo con viva attenzione e raccoglimento alle celebrazioni." },
      { testo: "Ho pregato male, con fretta e con distrazione?", grave: false },
      { testo: "Sto trascurando di curare la crescita della mia fede e la mia formazione cristiana?", grave: false },
      { testo: "Ho parlato male della Chiesa, dei sacerdoti, dei consacrati?", grave: false },
      { testo: "Ho giurato per cose poco importanti oppure il falso?", grave: false },
      { testo: "Ho messo sempre Dio al primo posto, oppure ci sono altri idoli (i soldi, il lavoro, il sesso, il successo, la mia superbia) al suo posto?", grave: false },
        ],
      },
      {
        titolo: "IL RAPPORTO CON IL PROSSIMO E CON SE STESSI",
        voci: [
      { testo: "Ho trattato in modo gravemente offensivo i miei genitori?", grave: true },
      { testo: "Ho ucciso una persona, l'ho ferita, l'ho percossa e picchiata?", grave: true },
      { testo: "Ho tentato il suicidio o seriamente pensato di compierlo?", grave: true },
      { testo: "Odio qualche persona?", grave: true },
      { testo: "Sono in lite con qualcuno, specialmente familiari, a cui ho tolto la parola o il saluto?", grave: true, nota: "Fratelli, sorelle, parenti prossimi, magari per motivi ereditari." },
      { testo: "Nutro profondi rancori o propositi di vendetta?", grave: true, nota: "Farla pagare per il male subito." },
      { testo: "Ho fatto uso di droghe, anche leggere?", grave: true },
      { testo: "Ho ecceduto nel consumo dell'alcool fino a ubriacarmi?", grave: true },
      { testo: "Ho guidato in modo da mettere in pericolo l'incolumità mia e altrui?", grave: true },
      { testo: "Ho commesso il delitto di aborto o ho spinto qualcuno a farlo?", grave: true },
      { testo: "Ho usato, a fini abortivi, la «pillola del giorno dopo» (RU 486)?", grave: true },
      { testo: "Ho commesso atti impuri, da solo o con altri? Ho tradito il mio coniuge?", grave: true },
      { testo: "Convivo o sono sposato solo al comune?", grave: true },
      { testo: "Vivo cristianamente, nella castità e nel rispetto, il tempo del fidanzamento?", grave: true },
      { testo: "Sono divorziato e risposato civilmente?", grave: true },
      { testo: "Adopero mezzi anticoncezionali che, in qualunque modo, impediscano il concepimento di una nuova vita?", grave: true },
      { testo: "Ho praticato la fecondazione assistita o l'inseminazione?", grave: true },
      { testo: "Vesto in maniera casta, decorosa e dignitosa?", grave: true },
      { testo: "Ho visto spettacoli immorali, letto stampa immorale, avuto pensieri impuri?", grave: true },
      { testo: "Ho rispettato, amato e ubbidito ai genitori? Ho dato loro qualche dispiacere?", grave: false },
      { testo: "Ho compiuto con diligenza il mio lavoro professionale o di studente?", grave: false },
      { testo: "Ho cercato di educare i miei figli, dedicandogli tempo, consigliandoli e correggendoli quando era necessario? Ho dedicato tempo e attenzioni al coniuge?", grave: false },
      { testo: "Sto cercando di educare in modo cristiano i miei figli? Ho insegnato loro a pregare? Gli parlo di Dio? Recito le preghiere prima dei pasti?", grave: false },
      { testo: "Ho osservato le leggi civili?", grave: false },
      { testo: "Ho trattato il prossimo sempre con affabilità, cordialità, dolcezza e carità?", grave: false },
      { testo: "Mi sono adirato, perdendo la pazienza?", grave: false },
      { testo: "Sono stato superbo, parlando sempre bene di me, presentando le cose che faccio come se fossero le migliori, etc.?", grave: false },
      { testo: "Sono stato pigro?", grave: false },
      { testo: "Ho offeso qualcuno con parole o gesti? Ho giudicato le intenzioni del prossimo?", grave: false },
      { testo: "Ho usato parole volgari o indecenti?", grave: false },
      { testo: "Ho mentito, detto bugie anche se a fin di bene, calunniato?", grave: false },
      { testo: "Ho parlato male di qualcuno, spettegolato, rivelato qualche segreto, criticato?", grave: false },
      { testo: "Ho pagato le tasse? Ho frodato qualcuno? Ho rubato o trattenuto cose non mie?", grave: false },
      { testo: "Ho ecceduto disordinatamente nel mangiare, nei dolci, nelle sigarette? Ho osservato i giorni di digiuno (Le Ceneri e Venerdì santo) e di astinenza (il Venerdì) prescritti dalla Chiesa?", grave: false },
        ],
      },
    ],
  },
  {
    slug: "pentimento",
    numero: 3,
    titolo: "Pentiti",
    sottotitolo: "Dolore per i peccati commessi e proposito di non ricadervi.",
    paragrafi: [
      "Dopo aver esaminato la mia coscienza e prima di accostarmi alla confessione, chiedo sinceramente perdono di tutto a Dio, provando dispiacere e dolore per quello in cui ho mancato, anche se si tratta di piccole mancanze. Se non provo dolore, chiederò a Gesù di suscitarlo in me e comunque gli offrirò alcuni buoni propositi per non ricadere negli stessi peccati, cominciando dai più gravi.",
      "I maestri di spirito consigliano di prendere uno o due impegni, pochi, tra una confessione e l'altra, che consistono nel fare particolare attenzione a non ricadere negli stessi peccati fuggendone le occasioni. Il sacerdote mi chiederà, dopo la confessione, di esprimere in forma sacramentale il mio dolore, recitando l'atto di dolore.",
    ],
    preghiera: {
      testo:
        "Mio Dio, mi pento e mi dolgo con tutto il cuore dei miei peccati, perché peccando ho meritato i tuoi castighi, e molto più perché ho offeso te, infinitamente buono e degno di essere amato sopra ogni cosa. Propongo con il tuo santo aiuto di non offenderti mai più e di fuggire le occasioni prossime di peccato. Signore, misericordia, perdonami.",
    },
  },
  {
    slug: "confessione",
    numero: 4,
    titolo: "Confessati",
    sottotitolo: "Davanti al sacerdote.",
    paragrafi: [
      "Quando mi troverò davanti al sacerdote, devo essere fermamente persuaso che in realtà io, pur vedendo lui, sono di fronte a Gesù in persona. Confesso con semplicità e umiltà i miei peccati, senza troppe parole e senza scusarmi o autogiustificarmi.",
      "Non devo, per nessun motivo, nascondere al sacerdote qualche peccato grave, solo perché mi vergogno di dirlo o ho paura di quel che potrebbe pensare. Se sono preso da questa tentazione, è meglio rimandare la confessione, perché una confessione non sincera costituisce un sacrilegio.",
      "Se il sacerdote mi chiede qualche chiarimento, glielo porgo con semplicità. Anche io posso chiedere a lui chiarimenti o consigli di qualunque genere, che possano aiutarmi nella mia crescita cristiana. Ascolto la sua breve esortazione e ricevo l'assoluzione con gioia. Quando il sacerdote mi dirà «Io ti assolvo» è Gesù che sta parlando attraverso lui!",
    ],
  },
  {
    slug: "penitenza",
    numero: 5,
    titolo: "Compi la penitenza",
    sottotitolo: "L'ultimo passo, da non rimandare.",
    paragrafi: [
      "Al termine della confessione, il sacerdote mi indica la penitenza sacramentale che devo adempiere. Cerco di farla al più presto, perché non adempiere alla penitenza sacramentale è un peccato grave.",
      "La penitenza sacramentale consiste in un'opera buona, preghiera, elemosina o sacrificio, che il sacerdote mi affida come segno ed espressione concreta della mia volontà di cambiare vita e di purificare la mia anima dai disordini che le hanno procurato i miei peccati.",
      "Anticamente la disciplina della Chiesa era più severa, e si raccomandava di imporre penitenze anche molto onerose e impegnative. Oggi la disciplina della Chiesa tende ad essere molto più mite, lasciando alla libertà ed alla coscienza del penitente l'impegno di assumersi eventualmente opere penitenziali più onerose per purificarsi dalle proprie colpe.",
      "La penitenza sacramentale è proporzionale al numero e alla gravità dei peccati commessi, e deve essere adempiuta il più presto possibile. La gioia di aver ritrovato l'amicizia di Dio mi renderà dolce e soave il suo adempimento.",
    ],
  },
]
