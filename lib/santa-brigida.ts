// Le quindici orazioni rivelate da nostro Signore a Santa Brigida, dal
// libretto fotografato pagina per pagina. Il testo è trascritto tale e quale,
// comprese le virgolette basse e i puntini di "Padre nostro... Ave Maria...".
// Le due righe finali e il Padre nostro con l'Ave Maria si ripetono dopo ogni
// orazione, quindi stanno una volta sola qui e il componente le mette in fondo
// a ciascuna carta.

export type Carta = { titolo: string; paragrafi: string[]; chiusa: boolean }

export const premessa = "Compiendo questo esercizio ogni giorno, si recitano in un anno tante orazioni con Pater e Ave quanti sono stati i colpi ricevuti da Gesù nella sua dolorosa Passione."

export const testimonianza: string[] = [
  "Mio amatissimo fratello, io ero immersa nelle più grandi amarezze della vita. Il dolore, la malattia, la povertà, l'abbandono, mi affliggevano.",
  "Con amore, ogni sera ho letto queste Orazioni, e la mia vita si è miracolosamente trasformata e il Signore fedele alle sue promesse mi ha colmata di gioia, di benessere, di ricchezza e di consolazioni.",
  "Quello che Gesù ha fatto per me, miserabile peccatrice, lo farà anche per te, mio amato fratello. Leggi ogni giorno queste Orazioni.",
]

export const promesseIntro: string[] = [
  "Siccome era molto tempo che Brigida desiderava sapere il numero dei colpi che nostro Signore aveva ricevuto durante la sua Passione, un giorno Egli le apparve dicendole:",
]

export const promesseCitazione = "Figlia mia, ho ricevuto sul mio Corpo 5480 colpi. Se tu vorrai onorarli, dirai 15 Pater e 15 Ave con le Orazioni seguenti (che le insegnò), durante un anno. Trascorso l'anno, tu avrai salutato ognuna delle mie Piaghe."

export const promesseApertura = "Chiunque dirà queste Orazioni durante un anno avrà questi benefici:"

export const promesse: string[] = [
  "Libererà dal Purgatorio 15 anime della sua stirpe.",
  "15 giusti della sua stirpe saranno confermati e conservati in grazia.",
  "15 peccatori della sua stirpe si convertiranno.",
  "La persona che le dirà avrà il primo grado di perfezione.",
  "15 giorni prima di morire riceverà il mio prezioso Corpo, in modo che sarà liberato dalla fame eterna e berrà il mio prezioso Sangue perché non abbia sete in eterno.",
  "15 giorni prima di morire avrà una perfetta conoscenza e contrizione amara di tutti i suoi peccati.",
  "Metterò il segno della mia Croce vittoriosa davanti a lei per soccorrerla e difenderla contro gli attacchi dei suoi nemici.",
  "Prima della sua morte Io verrò da lei con la mia amatissima e cara Madre.",
  "Riceverò benignamente la sua anima e la condurrò alle gioie eterne.",
  "E conducendola fino là, Io le darò con singolare tratto da bere alla fonte della mia Deità; cosa che non farò con quelli che non avranno recitato queste Orazioni.",
  "Occorre sapere che chiunque avesse vissuto durante 30 anni in peccato mortale e dirà devotamente o si sarebbe proposto di dire queste Orazioni, Io gli perdonerò tutti i suoi peccati.",
  "Lo difenderò dalle tentazioni.",
  "Gli conserverò i suoi 5 sensi.",
  "Lo preserverò dalla morte improvvisa.",
  "Salverò la sua anima dalle pene eterne.",
  "Otterrà tutto quello che domanderà a Dio e alla Santa Vergine Maria.",
  "Se avesse vissuto sempre secondo la sua volontà e fosse dovuto morire l'indomani, la sua vita si prolungherà.",
  "Tutte le volte che reciterà queste orazioni guadagnerà l'indulgenza parziale.",
  "Sarà sicuro di essere aggiunto al coro degli Angeli.",
  "Se qualcuno le insegnerà ad un altro, avrà gioia e merito senza fine, che saranno stabili sulla terra e dureranno eternamente in Cielo.",
  "Dove sono e saranno dette queste Orazioni, Dio è presente con la sua grazia.",
]

export const dopoPromesse = "Tutti questi privilegi sono stati promessi a Santa Brigida da un'immagine di nostro Signore Gesù Cristo crocifisso, a condizione che recitasse tutti i giorni queste Orazioni, e sono pure promessi a tutti coloro che le reciteranno devotamente ogni giorno durante il periodo di un anno."

export const approvazioni: string[] = [
  "Papa Urbano VI incoraggiò a moltiplicare gli esemplari delle rivelazioni di Santa Brigida che i re, i sovrani, i vescovi, gli universitari, i conventi e le biblioteche si disputavano.",
  "I libri contenenti queste Orazioni e le promesse sono stati approvati da un gran numero di prelati, fra i quali il cardinale Giraud di Cambrai nel 1845 e Monsignor Florian Arcivescovo di Tolosa nel 1863.",
  "La collezione dei piccoli libri ove si trovano queste Orazioni, fu benedetta da Papa Pio IX il 21 maggio 1862.",
  "Infine questa collezione è stata specialmente raccomandata dal Gran Congresso di Malines, il 22 agosto 1863.",
  "Coloro che visitano la Basilica di San Paolo a Roma, possono vedere il crocifisso di grandezza naturale, scolpito da Pietro Cavallini, davanti al quale si teneva in ginocchio Santa Brigida, e l'iscrizione che esiste nella Basilica «Pendentis, pendente Dei verba accepit aure accipit at verbum corde Brigitta Deum. Anno jubilei MCCCL» che ricorda il prodigio del crocifisso che parlava a Brigida.",
]

export const carte: Carta[] = [
  {
    titolo: "PRIMA ORAZIONE",
    paragrafi: [
      "O Signore Gesù Cristo, dolcezza eterna di coloro che Ti amano, gioia che trapassa ogni gioia ed ogni desiderio, salvezza ed amore di coloro che si pentono, ai quali dicesti: «Le mie delizie sono con i figli degli uomini», e Ti sei fatto uomo per la loro salvezza, ricordati dei motivi che Ti spinsero a prendere la carne umana e di tutte le sofferenze che sopportasti dal momento della tua incarnazione fino al tempo della tua santa Passione, così come era stato decretato e ordinato dall'eternità nel pensiero divino.",
      "Ricordati del dolore che, come affermi Tu stesso, ebbe la tua anima quando dicesti: «La mia anima è triste fino alla morte»; e quando nell'ultima cena con i tuoi discepoli, dopo aver loro lavato i piedi, Tu desti loro il tuo sacro Corpo e il tuo prezioso Sangue e, consolandoli con dolcezza, predicesti la tua imminente Passione.",
      "Ricordati del tremito, dell'angoscia e del dolore che sopportasti nel santissimo Corpo prima di salire sul patibolo della Croce, quando, dopo aver pregato per tre volte il Padre, coperto del sudore di sangue, fosti tradito da uno dei tuoi discepoli, preso dal tuo popolo eletto, accusato da falsi testimoni, ingiustamente condannato a morte da tre giudici al tempo solenne della Pasqua, tradito, deriso, spogliato dei tuoi vestiti, bendato e schiaffeggiato, legato alla colonna, flagellato e coronato di spine.",
      "Per il ricordo che serbo di queste pene, Ti prego, dolcissimo Gesù, di concedermi prima della mia morte, una vera contrizione, una sincera confessione e la remissione di tutti i miei peccati. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "SECONDA ORAZIONE",
    paragrafi: [
      "O Gesù, vera letizia degli Angeli e Paradiso di delizie, ricordati degli orribili tormenti che provasti quando i tuoi nemici come leoni feroci Ti attorniarono e con schiaffi, sputi, graffi e altri supplizi, Ti tormentarono a piacere.",
      "In considerazione delle parole ingiuriose, delle crudeli percosse e dei durissimi tormenti con i quali i tuoi nemici Ti afflissero, Ti supplico, o mio Salvatore, di liberarmi dai miei nemici visibili e invisibili, di proteggermi all'ombra delle tue ali e di donarmi la salvezza eterna. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "TERZA ORAZIONE",
    paragrafi: [
      "O Verbo incarnato, onnipotente Creatore del mondo, che sei immenso, incomprensibile, e puoi racchiudere l'universo nel palmo della tua mano, ricordati del dolore amarissimo che soffristi quando le tue sacre mani e i tuoi delicatissimi piedi furono trafitti con chiodi acuminati e fissati sul legno della Croce.",
      "Quale dolore provasti, o Gesù, quando i tuoi crocifissori con una crudeltà spaventosa dilaniarono le tue membra e Ti slogarono le congiunture delle ossa tirando il tuo Corpo per ogni verso, a loro piacere.",
      "Io Ti scongiuro, o Gesù, in memoria di questi terribili dolori da Te sopportati sulla Croce, di concedermi che io Ti ami e tema quanto si conviene. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "QUARTA ORAZIONE",
    paragrafi: [
      "O Gesù, Medico celeste innalzato sulla Croce per guarire le nostre piaghe con le tue, ricordati dei dolori che provasti nelle tue membra già lacerate, mentre la Croce veniva alzata.",
      "Dai piedi alla testa, nessuna parte del tuo Corpo fu senza strazio; tuttavia, dimenticando le atroci sofferenze, porgesti pietose preghiere al Padre per i tuoi nemici dicendo: «Padre, perdona loro, perché non sanno quello che fanno».",
      "Per questa smisurata carità e misericordia, e per la memoria dei tuoi dolori, concedimi di ricordare la tua amarissima Passione affinché essa operi in me una perfetta contrizione e la remissione di tutti i miei peccati. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "QUINTA ORAZIONE",
    paragrafi: [
      "O Gesù, specchio di eterna chiarezza, ricordati dell'afflizione che provasti quando, oltre alla salvezza offerta alle anime mediante la tua Passione, prevedesti anche che molte non l'avrebbero accolta.",
      "Pertanto Ti chiedo, per la tua infinita misericordia che mostrasti non solo nell'aver dolore dei perduti e disperati, ma nell'adoperarla verso il ladrone, quando gli dicesti: «Oggi sarai con me in Paradiso», che Tu voglia, o pietoso Gesù, riversarla su di me nell'ora della mia morte. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "SESTA ORAZIONE",
    paragrafi: [
      "O Gesù Re amabile, ricordati del dolore che provasti quando nudo e disprezzato pendevi in Croce, senza avere, tra tanti amici e conoscenti che Ti erano accanto, chi Ti consolasse eccetto la tua diletta Madre, alla quale raccomandasti il discepolo prediletto, dicendo: «Donna, ecco tuo figlio!» ed al discepolo: «Ecco tua Madre!».",
      "Fiducioso Ti prego, pietosissimo Gesù, per la spada di dolore che Le trapassò l'anima, di avere compassione di me, nelle mie afflizioni e tribolazioni tanto fisiche che spirituali, e di consolarmi procurandomi aiuto e gioia in ogni prova ed avversità. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "SETTIMA ORAZIONE",
    paragrafi: [
      "O Signore Gesù Cristo, fonte di dolcezza infinita, che con amore dicesti in Croce: «Ho sete», cioè desidero sommamente la salvezza del genere umano, Ti preghiamo di accendere in noi il desiderio di vivere santamente spegnendo del tutto la sete delle nostre concupiscenze e la ricerca dei piaceri mondani. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "OTTAVA ORAZIONE",
    paragrafi: [
      "O Signore Gesù Cristo, dolcezza dei cuori e soavità dello spirito, per l'amarezza dell'aceto e del fiele che per noi gustasti nell'ora della tua morte, concedi a noi, miseri peccatori, che in ogni tempo e specialmente nell'ora della nostra morte, ci possiamo nutrire del tuo Corpo e Sangue non indegnamente, ma come rimedio e consolazione alle nostre anime. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "NONA ORAZIONE",
    paragrafi: [
      "O Signore Gesù Cristo, giubilo dello spirito, ricordati dell'angoscia e del dolore che patisti quando per l'amarezza della morte e l'insulto dei Giudei gridasti al Padre tuo: «Dio mio, Dio mio, perché mi hai abbandonato?».",
      "Per questo Ti chiedo di non abbandonarmi nell'ora della morte. Signore mio e Dio mio. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "DECIMA ORAZIONE",
    paragrafi: [
      "O Signore Gesù Cristo, principio e termine ultimo di tutte le cose, che dalla pianta dei piedi fino alla cima del capo Ti immergesti nel mare dei patimenti, Ti prego, per le tue larghe e profondissime Piaghe, di insegnarmi ad operare perfettamente con vera carità nella Legge e nei tuoi precetti. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "UNDICESIMA ORAZIONE",
    paragrafi: [
      "O Signore Gesù Cristo, profondo abisso di pietà e di misericordia, Ti chiedo, per la profondità delle Piaghe che trapassarono non solo la tua carne e le midolla delle ossa, ma anche le più intime viscere, di sollevare me, sommerso nei peccati, e nascondermi nelle tue sante piaghe. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "DODICESIMA ORAZIONE",
    paragrafi: [
      "O Gesù Cristo, specchio di verità, segno di unità e legame di carità, ricordati le innumerevoli ferite di cui fu ricoperto il tuo Corpo, lacerato e imporporato dal tuo preziosissimo Sangue.",
      "Scrivi, Ti prego, con quello stesso Sangue le tue ferite nel mio cuore, affinché nella meditazione del tuo dolore e del tuo amore, si rinnovi in me ogni giorno il dolore del tuo patire, si accresca l'amore, ed io perseveri continuamente nel renderti grazie sino alla fine della mia vita, quando verrò da Te, pieno di tutti i beni e di tutti i meriti che Ti degnasti di donarmi dal tesoro della tua Passione. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "TREDICESIMA ORAZIONE",
    paragrafi: [
      "O Signore Gesù Cristo, Re invincibile ed immortale, ricordati del dolore che provasti quando essendo venute meno tutte le forze del Corpo e del tuo Cuore, chinando il capo dicesti: «Tutto è compiuto!».",
      "Perciò Ti prego, per tale angustia e dolore, abbi misericordia di me nell'ultima ora della mia vita, quando la mia anima sarà turbata dall'ansia dell'agonia. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "QUATTORDICESIMA ORAZIONE",
    paragrafi: [
      "O Gesù Cristo, Unigenito del Padre altissimo, splendore e immagine della sua sostanza, ricordati dell'umile preghiera con la quale raccomandasti il tuo Spirito dicendo: «Padre, nelle tue mani consegno il mio Spirito». E dopo aver piegato il capo e aperte le viscere della tua misericordia per riscattarci, emanasti l'ultimo respiro.",
      "Per questa preziosissima morte Ti prego, Re dei Santi, fortificami nel resistere alle tentazioni del diavolo, del mondo e della carne, affinché, morto al mondo, io viva solo in Te, e nell'ultima ora della mia vita Tu riceva il mio spirito che dopo lungo esilio e pellegrinaggio desidera ritornare alla sua Patria. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "QUINDICESIMA ORAZIONE",
    paragrafi: [
      "O Gesù, vera e feconda vite, ricordati dell'abbondante effusione del tuo Sangue sparso dal tuo sacro Corpo come l'uva nel torchio, e di quando, piegato il capo sulla Croce, il soldato Longino Ti squarciò il costato da cui uscirono le ultime gocce di sangue ed acqua.",
      "Per questa amarissima Passione Ti prego, dolcissimo Gesù, di ferire il mio cuore, affinché giorno e notte io versi lacrime di penitenza e di amore. Convertimi totalmente a Te, perché il mio cuore sia tua perpetua dimora, la mia conversione Ti piaccia e Ti sia accetta, ed il termine della mia vita sia lodevole, per lodarti insieme con tutti i Santi in eterno. Amen.",
    ],
    chiusa: true,
  },
  {
    titolo: "PREGHIERA FINALE",
    paragrafi: [
      "O Signore mio Gesù Cristo, Figlio di Dio vivo, accetta questa preghiera con lo stesso sviscerato amore col quale sopportasti tutte le Piaghe del tuo santissimo Corpo; abbi di noi misericordia, ed a tutti i fedeli, vivi e defunti, concedi la tua misericordia, la tua grazia, la remissione di tutte le colpe e pene, e la vita eterna. Amen.",
    ],
    chiusa: false,
  },
]

export const chiusa: string[] = [
  "O dolcissimo Signore Gesù Cristo, abbi misericordia di me peccatore.",
  "O Gesù, Figlio di Dio, nato da Maria Vergine, per la nostra salvezza crocifisso, regnante ora in cielo, abbi pietà di noi.",
]

export const rubrica = "Padre nostro... Ave Maria..."

// Dal libretto. Nella foto la data è in parte coperta dal dito.
export const imprimatur = "Imprimatur. Vicarius Generalis L. Muscari, Hydrunti, 7 januari 1918."
