import type { Chapter, Source } from "@/components/programma-guide"

export const chapters: Chapter[] = [
  {
    slug: "capitolo-1",
    number: 1,
    title: "Costruisci prima di pretendere",
    tesi: "L'autorità si guadagna con quello che porti, non con quello che chiedi.",
    menzogna:
      "Ti hanno cresciuto dicendoti che meriti. Rispetto, amore, un posto nel mondo, tutto dovuto per il semplice fatto di esistere. E ti hanno detto che il percorso era già scritto: studia, manda curriculum, aspetta il tuo turno. Poi il turno non è arrivato, perché il sistema che doveva accoglierti offre stage gratuiti e contratti a termine, e in dieci anni l'Italia ha perso 153.000 imprese guidate da under 35, quarantadue al giorno, ogni giorno, per dieci anni. Nessuno ti aveva preparato alla riscossione mancata, e la rabbia che provi è comprensibile. Solo che la rabbia non costruisce niente: il piano sì.",
    protocollo: [
      "Scegli una competenza che il mercato paga già oggi e lavoraci ogni giorno per dodici mesi prima di permetterti di giudicare i risultati. Il criterio di scelta è semplice: deve esistere qualcuno che la sta già pagando, perché vendita, marketing, intelligenza artificiale applicata, sviluppo e i mestieri tecnici sfamano, mentre le passioni generiche aspettano. Dodici mesi sembrano tanti solo a chi non ha mai visto quanto poco diventa un anno quando lo guardi indietro.",
      "Trova un lavoro subito, anche umile, anche mentre studi. I soldi guadagnati male insegnano più dei corsi comprati bene, perché ti mostrano quanto costa un'ora della tua vita e ti tolgono per sempre il lusso di parlare di lavoro per sentito dire.",
      "Prima dei venticinque anni metti il tuo nome sopra qualcosa che esiste solo perché l'hai costruito tu: un'attività, un progetto, un risultato misurabile. Non deve essere grande, deve essere tuo e deve essere vero, perché sarà la risposta a chiunque ti chieda chi sei tu per parlare.",
      "Cancella “meritare” dal vocabolario e sostituiscilo con “guadagnare”. La domanda cambia da “perché non ce l'ho?” a “cosa devo portare?”, e quella singola sostituzione ti mette davanti al novanta per cento dei tuoi coetanei, perché loro stanno ancora aspettando il credito che il mondo non riconoscerà mai.",
      "Se studi, studia da costruttore. Una laurea vale se è ancorata a qualcosa che stai costruendo mentre la prendi; io studio diritto e mando avanti un'azienda nello stesso tempo, e ti garantisco che le due cose si rafforzano a vicenda invece di escludersi. Lo studio usato come rifugio per non cominciare è solo procrastinazione con un libretto universitario.",
    ],
    ancora:
      "“Chi non vuole lavorare, neppure mangi” (2 Tessalonicesi 3,10). San Paolo non lo dice ai disoccupati, lo dice ai capaci che non si muovono, ed è esattamente la differenza che conta.",
    errore:
      "Confondere la preparazione con il rinvio. C'è chi studia per costruire e chi studia per non cominciare mai, e da fuori sembrano identici per anni, finché il primo non lancia qualcosa e il secondo si iscrive all'ennesimo corso.",
  },
  {
    slug: "capitolo-2",
    number: 2,
    title: "Il corpo è il primo cantiere",
    tesi: "Disciplina fisica e disciplina spirituale sono lo stesso muscolo.",
    menzogna:
      "Ti hanno detto di ascoltare il tuo corpo, intendendo assecondarlo, e ti hanno venduto il comfort come diritto e la fatica come ingiustizia. Il risultato non è un'opinione ma un dato: secondo l'OCSE il 66% dei quindicenni italiani riporta disturbi ricorrenti legati al malessere psicologico, il dato più alto di tutta l'Unione Europea, e più di uno studente su due dichiara ansia o tristezza ricorrente. La generazione più comoda della storia è anche la più fragile, e le due cose non sono una coincidenza: sono causa ed effetto.",
    protocollo: [
      "Allenati ogni giorno. Pesi, corpo libero, corsa o uno sport da combattimento: lo strumento conta meno della frequenza, e il minimo di sopravvivenza è mezz'ora, perché nessuna giornata è davvero troppo piena per mezz'ora. Io ho scelto anche il kickboxing, e l'ho scelto proprio perché mi metteva paura: lo sport che ti spaventa è quello che ti allena due volte, nel corpo e nella testa.",
      "Dormi e svegliati a orari fissi. La disciplina del sonno è la madre di tutte le altre perché decide la qualità di ogni ora successiva, costa zero e non la pratica quasi nessuno, il che la rende il vantaggio competitivo più economico che esista.",
      "Taglia quello che ti dà piacere senza costo: pornografia, alcol, scroll infinito. Ogni piacere non guadagnato è un anticipo sulla tua volontà, e gli anticipi si pagano con gli interessi. Ma attento, perché togliere non basta: il vuoto lasciato dallo scroll va riempito con un libro, un allenamento o una preghiera, altrimenti lo scroll torna. Contro la lussuria in particolare ti dico quello che ho imparato combattendola io stesso, ogni giorno: è una battaglia quotidiana, si vince pregando di più e riempiendo le giornate di costruzione, e chi ti dice che si vince una volta per tutte non l'ha mai combattuta.",
      "Digiuna periodicamente. Chi comanda alla propria fame comanda a quasi tutto il resto, e non è un caso che il digiuno sia una pratica cristiana prima che una moda da biohacker.",
    ],
    ancora:
      "“Non sapete che il vostro corpo è tempio dello Spirito Santo?” (1 Corinzi 6,19). E la regola più antica d'Europa, quella dei monaci che l'hanno ricostruita dopo il crollo di Roma: ora et labora, prega e lavora, perché le due discipline si reggono a vicenda.",
    errore:
      "Il corpo come vetrina. Il fisico costruito per lo specchio è narcisismo con i pesi in mano, e si riconosce perché crolla appena nessuno guarda. Quello costruito come strumento serve la missione, la famiglia e la vecchiaia, e regge anche quando non lo fotografa nessuno.",
  },
  {
    slug: "capitolo-3",
    number: 3,
    title: "Fai soldi senza vergogna",
    tesi: "La povertà per pigrizia non è umiltà. È spreco.",
    menzogna:
      "Ti arriva da due fronti opposti che si tengono per mano. Il primo, quello di casa nostra, ti ha insegnato che l'ambizione è avidità, che i soldi sporcano e che accontentarsi è una virtù, e così ha cresciuto generazioni di capaci che si vergognano di provarci. Il secondo, quello dei guru, ti vende la ricchezza in trenta giorni dal divano, e quando fallisci ti lascia pure il senso di colpa. Tutti e due ti vogliono fermo: uno per moralismo, l'altro per abbonamento.",
    protocollo: [
      "Genera la prima entrata il prima possibile, anche piccola. Cento euro guadagnati con una competenza tua valgono più di mille ore di video motivazionali, perché dimostrano che il meccanismo funziona e trasformano il denaro da tabù a strumento. Un servizio a un'attività locale, un lavoro freelance, una competenza rivenduta: la porta d'ingresso conta poco, contare è entrare.",
      "Vendi una competenza, non il tuo tempo per sempre. Il lavoro dipendente è una scuola preziosa e va rispettato, ma è una scuola, non un progetto di vita: l'obiettivo è arrivare a possedere i tuoi strumenti, i tuoi clienti e il tuo futuro, perché la dipendenza è servitù con un altro nome, che il padrone sia un'azienda, uno Stato o un algoritmo.",
      "Niente scommesse travestite da strategie. Il trading da bar e le crypto-lotterie sono la slot machine di chi si crede furbo, e si riconoscono da una domanda sola: se non stai costruendo né una competenza né un asset, stai solo giocando d'azzardo con passaggi in più.",
      "Impara a vendere, perché ogni uomo che costruisce vende qualcosa: un prodotto, un servizio, un'idea, una visione a sua moglie e ai suoi figli. Chi ti dice che vendere è volgare vive del lavoro di chi vende, e in Italia questa ipocrisia è sport nazionale.",
      "Reinvesti prima di goderti quello che entra. L'ordine è strumenti, competenze, asset, e solo poi il resto, perché i primi soldi spesi in status sono semi mangiati invece che piantati.",
      "E ricorda perché lo fai: l'impresa serve la famiglia e la famiglia serve Dio, nell'ordine. Quando ti dicono che fare impresa da giovani in Italia è impossibile, rispondi che è soltanto raro, e che raro e impossibile non sono sinonimi.",
    ],
    ancora:
      "La parabola dei talenti (Matteo 25,14-30), dove l'unico condannato è il servo che ha seppellito quello che aveva ricevuto, per paura. E San Paolo: “Qualunque cosa facciate, fatela di buon animo, come per il Signore” (Colossesi 3,23). Costruire un'impresa onesta è un atto spirituale, non una deroga alla fede.",
    errore:
      "Inseguire i soldi come fine. Sono un mezzo per una famiglia, per la libertà, per opere che restano, e con il fine sbagliato arrivi ricco e vuoto, che è soltanto un altro modo di fallire, più comodo da fotografare.",
  },
  {
    slug: "capitolo-4",
    number: 4,
    title: "Impara il silenzio",
    tesi: "Nel Vangelo San Giuseppe non pronuncia una parola. E ha custodito Dio.",
    menzogna:
      "Ti hanno convinto che esisti solo se ti esponi, che ogni opinione va pubblicata e ogni emozione dichiarata, e che chi non commenta non conta. Ne è uscita una generazione che commenta tutto e non costruisce niente, sempre visibile e sempre irrilevante, perché la visibilità senza sostanza è solo rumore con la tua faccia sopra.",
    protocollo: [
      "Parla dei risultati dopo averli ottenuti, mai dei piani prima. L'annuncio brucia la spinta perché il cervello scambia gli applausi per il traguardo, mentre il risultato parla da solo e non ha bisogno del tuo megafono.",
      "Studia in silenzio, libri interi e non riassunti di riassunti. La profondità si accumula dove nessuno guarda, e quando poi apri bocca si sente in tre frasi chi ha letto davvero e chi ha letto i thread.",
      "Zero lamentele pubbliche. La lamentela è una preghiera rivolta a chi non può salvarti, e ogni minuto passato a lamentarti è un minuto sottratto all'unica persona che può cambiare la tua situazione, cioè tu.",
      "Custodisci la tua vita privata, perché non tutto quello che vivi è contenuto. Quello che è sacro va protetto anche dall'obiettivo della fotocamera: la tua preghiera, i tuoi affetti, i tuoi luoghi non devono diventare materiale per l'algoritmo.",
    ],
    ancora:
      "San Giuseppe, il padre putativo di Cristo, l'uomo a cui Dio ha affidato la cosa più preziosa della storia. Il Vangelo non gli attribuisce una sola parola, eppure lavora, protegge, decide e agisce, e ogni generazione di uomini da duemila anni può misurarsi con lui.",
    errore:
      "Scambiare il silenzio per passività. Il silenzio di Giuseppe è operoso, il silenzio del passivo è solo assenza: la differenza non è nel non parlare, è in quello che stai costruendo mentre non parli.",
  },
  {
    slug: "capitolo-5",
    number: 5,
    title: "La donna non è il premio",
    tesi: "Dio non ti deve nessuna persona in particolare. Costruisci per vocazione, non per baratto.",
    menzogna:
      "Anche qui due fronti. Il mondo ti dice che la moglie è un accessorio opzionale della carriera, qualcosa che eventualmente arriva dopo i trentacinque anni se avanza tempo. Certi ambienti ti dicono l'esatto contrario, cioè che se fai tutto giusto lei arriverà come ricompensa automatica, quasi fosse il premio di un programma fedeltà. È la stessa menzogna raccontata in due modi, perché tutte e due trattano una persona come un oggetto in palio invece che come una volontà libera davanti alla quale puoi solo diventare degno di essere scelto.",
    protocollo: [
      "Diventa esattamente il tipo di uomo che può attirare quel tipo di donna. Prima di stilare la lista di quello che pretendi da lei, chiediti con onestà se tu reggeresti la stessa lista rovesciata, perché una donna di fede, seria e ordinata sta cercando un uomo di fede, serio e ordinato, non un progetto da ristrutturare.",
      "Cercala dove vive la fede, non dove vive l'intrattenimento: la parrocchia, l'adorazione, i gruppi e gli ambienti coerenti con la vita che vuoi costruire. Nessuno trova una moglie dove tutti cercano una serata, e se la cerchi con criteri da serata non stupirti dei risultati da serata.",
      "Se una storia finisce, la missione resta. Il dolore è reale e non ti rende meno uomo, ma va attraversato senza anestesie: non cercare subito una sostituta, perché usare un'altra persona come antidolorifico ti farà sentire peggio e lo farà sentire peggio anche a lei. Si attraversa costruendo, pregando e lasciando che il tempo faccia il suo lavoro.",
      "E soprattutto, se il suo addio ti ha tolto anche Dio, fermati, perché quello è il segnale che non stavi amando una donna ma adorando un idolo. Dio non ti aveva promesso quella persona; le promesse di Dio non passano dalle tue certezze sentimentali, e il suo piano per te esiste anche il giorno dopo che lei se n'è andata.",
      "Quando ti sposi, Efesini 5 si legge intero: a lei è chiesta fiducia (5,22), a te è chiesta la vita (5,25), “come Cristo ha amato la Chiesa”. La metà più esigente del patto è la tua, ed è un onore, non una fregatura: guidare una famiglia significa portarne i pesi, non riscuoterne i privilegi.",
    ],
    ancora:
      "“Mariti, amate le vostre mogli, come anche Cristo ha amato la Chiesa e ha dato se stesso per lei” (Efesini 5,25).",
    errore:
      "Trasformare una ragazza nel piano di Dio. È l'errore più doloroso di tutti, perché sembra fede e invece è idolatria con il vestito buono, e quando crolla rischia di trascinarsi dietro anche la fede vera. Il piano esiste, ma è più grande di qualunque nome tu ci abbia scritto sopra.",
  },
  {
    slug: "capitolo-6",
    number: 6,
    title: "Sii un padre presente",
    tesi: "La famiglia è l'unica istituzione che lo Stato non ha creato. Si difende abitandola.",
    menzogna:
      "Ti hanno raccontato il padre come una figura opzionale, un bancomat con le chiavi di casa, e la famiglia come un costo da rimandare a tempo indeterminato. Il risultato è sotto gli occhi di tutti: nel 2024 in Italia sono nati 369.944 bambini, il numero più basso da quando esiste l'Italia unita, con 1,18 figli per donna. Non è un dato che si corregge con un bonus, perché il problema non è mai stato solo il portafoglio: si corregge con uomini che tornano a considerare la famiglia un'opera da costruire e non un imprevisto da gestire.",
    protocollo: [
      "Il tempo con i figli si misura in ore fisiche, non in “qualità” ritagliata tra due impegni. Si è presenti prima di tutto con il corpo, perché un figlio non registra le tue intenzioni ma la tua sedia vuota, e nessun discorso sul “tempo di qualità” ha mai sostituito un padre alla partita di domenica.",
      "Trasmetti un mestiere e una fede, perché sono le due eredità che nessuna crisi, nessuna inflazione e nessun governo possono confiscare. Tutto il resto che lascerai si può perdere; queste due cose camminano con lui.",
      "A tavola niente schermi, ed è una regola che vale prima di tutto per te. La cena è l'ora di catechesi più sottovalutata della settimana, il posto dove i figli imparano cosa pensa un uomo ascoltandolo pensare.",
      "Prega con i tuoi figli, non solo per loro. Quello che ti vedono fare pesa dieci volte quello che ti sentono dire, e un padre inginocchiato insegna più teologia di cento prediche delegate.",
    ],
    ancora:
      "San Giuseppe che insegna il mestiere a Cristo nella bottega di Nazareth. Dio stesso ha voluto imparare a lavorare dalle mani di un padre, e questo dice tutto quello che serve sapere sulla dignità del ruolo.",
    errore:
      "Delegare l'educazione alla scuola, allo schermo, perfino alla parrocchia da sola. Sono alleati preziosi, ma sono alleati, e un esercito di soli alleati senza comandante perde sempre. Il comandante sei tu.",
  },
  {
    slug: "capitolo-7",
    number: 7,
    title: "Servi qualcosa di più grande di te",
    tesi: "Un uomo senza missione diventa il pubblico della missione di qualcun altro.",
    menzogna:
      "Ti hanno venduto la libertà come assenza di vincoli, e adesso eccoti libero: da ogni appartenenza, da ogni comunità, da ogni scopo, libero e solo davanti a uno schermo. I numeri di questa liberazione parlano da soli: in vent'anni la pratica religiosa dei giovani italiani è crollata dal 37% al 12%, e oggi va a Messa circa l'8% dei ragazzi tra i 18 e i 24 anni. Ti hanno tolto Dio, la patria e l'appartenenza promettendoti in cambio la felicità, e la felicità non è arrivata.",
    protocollo: [
      "Scegli a cosa appartieni e dichiaralo: la fede, la famiglia, la patria. I vincoli non sono il contrario della libertà ma la sua struttura portante, e chi non sceglie i propri se li fa scegliere dall'algoritmo, che ha già pronta un'identità in saldo per lui.",
      "Dai una parte fissa del tuo tempo a qualcosa che non ti paga: la parrocchia, la comunità, un'opera concreta. Il conto della tua vita non lo salda il fatturato da solo, e il servizio è l'unico investimento che rende su entrambi i lati del cielo.",
      "Entra in una comunità reale, con facce e nomi, dove qualcuno si accorge se domenica non ci sei. Mille follower non ti portano una barella, e l'isolamento è la condizione che il sistema preferisce per te, perché un uomo solo si gestisce e un gruppo di uomini no.",
      "E guarda i segnali, perché la marea sta già girando: in Francia a Pasqua 2025 sono stati battezzati più di 17.800 catecumeni, con gli adulti in crescita del 45% in un anno, il dato più alto mai registrato dalla Conferenza episcopale francese. Una generazione cresciuta senza Dio lo sta cercando da sola, e tu puoi essere di quelli che aprono la porta o di quelli che guardano.",
    ],
    ancora:
      "“Chi vuole salvare la propria vita, la perderà; ma chi perderà la propria vita per causa mia, la troverà” (Matteo 16,25).",
    errore:
      "La missione come estetica, simboli nel profilo e zero opere. La bandiera che non ti costa niente non dice niente, e il sistema non teme chi posta: teme chi edifica.",
  },
  {
    slug: "capitolo-8",
    number: 8,
    title: "Inginocchiati solo davanti a Dio",
    tesi: "Ogni uomo si inginocchia davanti a qualcosa, che lo ammetta o no. La devozione è scegliere davanti a cosa.",
    menzogna:
      "Delle vergogne che hanno cucito addosso alla tua generazione, la prima e la più profonda riguarda proprio la fede: te l'hanno raccontata come superstizione da vecchi, come stampella per chi non ce la fa da solo, e ti hanno proposto in cambio la figura dello spirituale ma non religioso, che assaggia ogni tradizione e tiene solo i pezzi che non gli chiedono niente. Ma una fede senza pratica è un'opinione, e le opinioni non reggono un uomo nel giorno peggiore della sua vita. I capitoli precedenti ti hanno dato dei protocolli; questo ti dà la struttura che li tiene in piedi quando la motivazione finisce, perché la motivazione finisce sempre, mentre la devozione è fatta apposta per i giorni in cui non hai voglia.",
    protocollo: [
      "Messa ogni domenica, senza negoziazione. Non è il minimo sindacale del cattolico ma il perno attorno a cui si organizza la settimana, l'unico appuntamento che non si sposta per nessun cliente e per nessun allenamento. Arriva qualche minuto prima, resta qualche minuto dopo, ed entra da figlio e non da turista, perché quello che ricevi lì dentro non lo vende nessun altro posto al mondo.",
      "Preghiera quotidiana a orari fissi, al mattino prima del telefono e alla sera prima di dormire. Breve e fedele batte lunga e saltuaria, perché la preghiera funziona come l'allenamento: è la frequenza che costruisce, non l'intensità occasionale. Io la mia battaglia più dura la combatto così, ogni giorno, chiedendo aiuto a Gesù, a Maria e a San Giuseppe, e ti garantisco che la preghiera fatta per bisogno vero è un'altra cosa rispetto a quella recitata per abitudine.",
      "Confessione regolare, una volta al mese come punto di partenza. È l'unico posto al mondo dove si ricomincia davvero da zero, e l'orgoglio che ti tiene lontano dal confessionale è lo stesso orgoglio che ti tiene fermo in tutto il resto della vita: vincilo lì, e lo indebolisci ovunque.",
      "Un'ora di adorazione eucaristica quando puoi, anche una sola al mese per cominciare. È il silenzio del capitolo quattro portato alla sua forma più alta, un'ora senza telefono davanti a Ciò che conta davvero, e ti accorgerai che le decisioni più importanti diventano chiare proprio lì, dove nessuno ti sta vendendo niente.",
      "Scegli un santo e studialo come studieresti un maestro vivo. Io ho scelto San Giuseppe, il lavoratore silenzioso a cui Dio ha affidato la cosa più preziosa della storia, e non passa settimana senza che quella scelta mi corregga qualcosa: un santo studiato bene è un mentore che non ti manda fatture e non ti dice quello che vuoi sentirti dire.",
      "Leggi il Vangelo direttamente, un evangelista intero dall'inizio alla fine, non i versetti isolati che girano nelle immagini motivazionali. La Parola letta per intero ha un peso che nessun riassunto le può dare, e un uomo che costruisce la propria vita su un testo dovrebbe come minimo averlo letto.",
    ],
    ancora:
      "“Cercate invece, anzitutto, il regno di Dio e la sua giustizia, e tutte queste cose vi saranno date in aggiunta” (Matteo 6,33). È la promessa che tiene insieme tutta questa guida: mettere Dio al primo posto non ti toglie la competenza, i soldi, la donna o la famiglia, ma è l'unico ordine in cui tutte queste cose reggono.",
    errore:
      "Usare Dio come integratore. La preghiera trattata come tecnica di produttività, la Messa frequentata come rito scaramantico prima di una settimana importante, la fede indossata come estetica identitaria senza sacramenti: è consumo travestito da devozione, e il consumo l'hai già provato, non funzionava. Dio non è uno strumento del tuo protocollo, è il motivo per cui il protocollo esiste.",
  },
]

export const sources: Source[] = [
  {
    label: "Unioncamere: 153.000 imprese under 35 perse in dieci anni, 42 al giorno.",
    url: "https://www.unioncamere.gov.it/comunicazione/comunicati-stampa/giovani-imprenditori-ritirata-10-anni-153mila-attivita-meno-24",
  },
  {
    label:
      "OECD, Health at a Glance: Europe 2024: 66% dei quindicenni italiani con disturbi ricorrenti nel 2022, dato più alto dell'UE (media 52%).",
    url: "https://www.oecd.org/en/publications/health-at-a-glance-europe-2024_b3704e14-en/full-report/component-19.html",
  },
  {
    label:
      "Autorità Garante per l'Infanzia e l'Adolescenza: 51,4% degli studenti dichiara ansia o tristezza ricorrente.",
    url: "https://www.garanteinfanzia.org/salute-mentale-consultazione-agia-tra-gli-studenti-il-514-soffre-dansia-o-tristezza/",
  },
  {
    label: "ISTAT, Natalità e fecondità 2024: 369.944 nascite, 1,18 figli per donna.",
    url: "https://www.istat.it/comunicato-stampa/natalita-e-fecondita-della-popolazione-residente-anno-2024/",
  },
  {
    label: "Azione Cattolica su dati ISTAT: pratica religiosa dei giovani dal 37% (2001) al 12% (2022).",
    url: "https://azionecattolica.it/solo-1-su-5-va-a-messa/",
  },
  {
    label: "La Voce e il Tempo: circa 8% dei 18-24enni ai riti domenicali.",
    url: "https://vocetempo.it/quanti-vanno-oggi-a-messa/",
  },
  {
    label:
      "Conferenza episcopale francese, via CATT: 17.800+ battesimi di catecumeni a Pasqua 2025, +45% adulti sul 2024.",
    url: "https://catt.ch/newsi/francia-cifre-record-di-battesimi-di-adulti-in-forte-crescita-il-numero-di-giovani",
  },
]
