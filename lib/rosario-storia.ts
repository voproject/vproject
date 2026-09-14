// Storia del rosario e quindici promesse, verificate sulle fonti.
// Storia: Catholic Encyclopedia, Leone XIII (Supremi apostolatus officio),
// Treccani, bolla Consueverunt Romani Pontifices, Diocesi di Roma,
// Rosarium Virginis Mariae. San Domenico è presentato come tradizione, perché
// così lo trattano gli storici.
// Promesse: 30Giorni (2007) e Donboscoland per la 6 e la 7, che 30Giorni omette.

export type Momento = { anno: string; titolo: string; testo: string }

export const momenti: Momento[] = [
  {
    anno: "XI-XIII secolo",
    titolo: "Le origini medievali",
    testo: "Nel Medioevo i fedeli contavano Padre Nostro e Ave Maria su cordicelle di grani, chiamate «paternoster». Chi non poteva recitare i 150 salmi ripeteva 150 Ave Maria, il cosiddetto «Salterio della Vergine».",
  },
  {
    anno: "1214 circa, secondo la tradizione",
    titolo: "San Domenico",
    testo: "Secondo una pia tradizione, la Madonna donò il Rosario a san Domenico durante la predicazione contro gli albigesi. Gli storici, però, collocano la forma sviluppata del Rosario in un'epoca successiva.",
  },
  {
    anno: "1470 circa",
    titolo: "Alano della Rupe e le confraternite",
    testo: "Il domenicano bretone Alano della Rupe, morto nel 1475, diffuse il Rosario e la tradizione di san Domenico. Nel 1470 fondò la prima Confraternita del Rosario, a cui seguì presto quella di Colonia.",
  },
  {
    anno: "1569",
    titolo: "San Pio V fissa il Rosario",
    testo: "Con la bolla Consueverunt Romani Pontifices del 17 settembre 1569, san Pio V stabilì la forma del Rosario per tutta la Chiesa. Erano 150 Ave Maria divise in decine, ciascuna preceduta dal Padre Nostro.",
  },
  {
    anno: "1571-1573",
    titolo: "Lepanto e la festa del Rosario",
    testo: "Dopo la vittoria di Lepanto del 7 ottobre 1571, san Pio V istituì la festa di Santa Maria della Vittoria. Nel 1573 Gregorio XIII la dedicò alla Madonna del Rosario.",
  },
  {
    anno: "2002",
    titolo: "I misteri della luce",
    testo: "Il 16 ottobre 2002 san Giovanni Paolo II pubblicò la lettera apostolica Rosarium Virginis Mariae. In essa propose i cinque misteri della luce, dedicati alla vita pubblica di Gesù.",
  },
]

export const promesse: string[] = [
  "A tutti quelli che reciteranno devotamente il mio Rosario, io prometto la mia protezione speciale e grandissime grazie.",
  "Colui che persevererà nella recitazione del mio Rosario riceverà qualche grazia insigne.",
  "Il Rosario sarà una difesa potentissima contro l'inferno; distruggerà i vizi, libererà dal peccato, dissiperà le eresie.",
  "Il Rosario farà fiorire le virtù e le buone opere e otterrà alle anime le più abbondanti misericordie divine; sostituirà nei cuori l'amore di Dio all'amore del mondo, elevandoli al desiderio dei beni celesti ed eterni.",
  "Colui che si affida a me con il Rosario non perirà.",
  "Colui che reciterà devotamente il mio Rosario, meditando i suoi misteri, non sarà oppresso dalla disgrazia: se è peccatore si convertirà, se è giusto crescerà in grazia e diverrà degno della vita eterna.",
  "I veri devoti del mio Rosario non moriranno senza i Sacramenti della Chiesa.",
  "Coloro che recitano il mio Rosario troveranno durante la loro vita e alla loro morte la luce di Dio, la pienezza delle sue grazie e parteciperanno dei meriti dei beati.",
  "Libererò molto prontamente dal purgatorio le anime devote del mio Rosario.",
  "I veri figli del mio Rosario godranno di una grande gloria in cielo.",
  "Quello che chiederete con il mio Rosario, lo otterrete.",
  "Coloro che diffonderanno il mio Rosario saranno soccorsi da me in tutte le loro necessità.",
  "Io ho ottenuto da mio Figlio che tutti i membri della Confraternita del Rosario abbiano per fratelli durante la vita e nell'ora della morte i santi del cielo.",
  "Coloro che recitano fedelmente il mio Rosario sono tutti miei figli amatissimi, fratelli e sorelle di Gesù Cristo.",
  "La devozione al mio Rosario è un grande segno di predestinazione.",
]

export const notaPromesse =
  "Queste promesse vengono dalla tradizione legata ad Alano della Rupe. Sono una rivelazione privata e non un dogma: nessun documento della Chiesa ne ha confermato l'autenticità."

export const quadro = {
  src: "/sassoferrato-madonna-del-rosario.jpg",
  width: 900,
  height: 1740,
  alt: "La Madonna col Bambino in trono consegna il rosario a San Domenico e a Santa Caterina da Siena",
  didascalia: "Sassoferrato, Madonna del Rosario, 1643. Basilica di Santa Sabina, Roma.",
  credito: "Sailko, CC BY 3.0",
  pagina: "https://commons.wikimedia.org/wiki/File:Sassoferrato,_madonna_del_rosario,_1643,_01.jpg",
}
