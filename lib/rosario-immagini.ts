// Un dipinto per ogni mistero, nello stesso ordine dei misteri in rosario.ts.
// Sono tutte opere antiche prese da Wikimedia Commons, di pubblico dominio o
// CC0: la licenza di ciascun file è stata verificata prima di scaricarlo, e
// "fonte" porta alla pagina del file su Commons.

import type { Serie } from "@/lib/rosario"

export type Immagine = {
  src: string
  larghezza: number
  altezza: number
  didascalia: string
  fonte: string
}

export const immagini: Record<Serie, Immagine[]> = {
  gaudiosi: [
    {
      src: "/misteri/gaudiosi-1.jpg",
      larghezza: 900,
      altezza: 888,
      didascalia: "Beato Angelico, Annunciazione",
      fonte: "https://commons.wikimedia.org/wiki/File:La_Anunciaci%C3%B3n,_by_Fra_Angelico,_from_Prado_in_Google_Earth.jpg",
    },
    {
      src: "/misteri/gaudiosi-2.jpg",
      larghezza: 678,
      altezza: 900,
      didascalia: "Pontormo, Visitazione",
      fonte: "https://commons.wikimedia.org/wiki/File:Pontormo-visitation-after-restorationRGB.jpg",
    },
    {
      src: "/misteri/gaudiosi-3.jpg",
      larghezza: 900,
      altezza: 740,
      didascalia: "Gerrit van Honthorst, Adorazione dei pastori",
      fonte: "https://commons.wikimedia.org/wiki/File:Gerard_van_Honthorst_-_Adoration_of_the_Shepherds_(1622).jpg",
    },
    {
      src: "/misteri/gaudiosi-4.jpg",
      larghezza: 629,
      altezza: 900,
      didascalia: "Ambrogio Lorenzetti, Presentazione di Gesù al tempio",
      fonte: "https://commons.wikimedia.org/wiki/File:Ambrogio_Lorenzetti_-_Presentazione_di_Ges%C3%B9_al_tempio_-_Google_Art_Project.jpg",
    },
    {
      src: "/misteri/gaudiosi-5.jpg",
      larghezza: 900,
      altezza: 477,
      didascalia: "Paolo Veronese, Gesù tra i dottori del tempio",
      fonte: "https://commons.wikimedia.org/wiki/File:Paolo_Veronese_-_Jesus_among_the_Doctors_-_WGA24816.jpg",
    },
  ],
  luminosi: [
    {
      src: "/misteri/luminosi-1.jpg",
      larghezza: 755,
      altezza: 900,
      didascalia: "Verrocchio e Leonardo, Battesimo di Cristo",
      fonte: "https://commons.wikimedia.org/wiki/File:Andrea_del_Verrocchio,_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
    },
    {
      src: "/misteri/luminosi-2.jpg",
      larghezza: 900,
      altezza: 603,
      didascalia: "Paolo Veronese, Nozze di Cana",
      fonte: "https://commons.wikimedia.org/wiki/File:Les_Noces_de_Cana_-_Paolo_Veronese_-_Mus%C3%A9e_du_Louvre_Peintures_INV_142_;_MR_384.jpg",
    },
    {
      src: "/misteri/luminosi-3.jpg",
      larghezza: 802,
      altezza: 900,
      didascalia: "Carl Bloch, Il discorso della montagna",
      fonte: "https://commons.wikimedia.org/wiki/File:Bloch-SermonOnTheMount.jpg",
    },
    {
      src: "/misteri/luminosi-4.jpg",
      larghezza: 597,
      altezza: 900,
      didascalia: "Raffaello, Trasfigurazione",
      fonte: "https://commons.wikimedia.org/wiki/File:Transfiguration_Raphael.jpg",
    },
    {
      src: "/misteri/luminosi-5.jpg",
      larghezza: 900,
      altezza: 469,
      didascalia: "Leonardo da Vinci, Ultima Cena",
      fonte: "https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_(1452-1519)_-_The_Last_Supper_(1495-1498).jpg",
    },
  ],
  dolorosi: [
    {
      src: "/misteri/dolorosi-1.jpg",
      larghezza: 900,
      altezza: 697,
      didascalia: "Andrea Mantegna, Orazione nell'orto",
      fonte: "https://commons.wikimedia.org/wiki/File:Mantegna,_Andrea_-_Agony_in_the_Garden_-_National_Gallery,_London.jpg",
    },
    {
      src: "/misteri/dolorosi-2.jpg",
      larghezza: 666,
      altezza: 900,
      didascalia: "Caravaggio, Flagellazione di Cristo",
      fonte: "https://commons.wikimedia.org/wiki/File:The_Flagellation_of_Christ-Caravaggio_(1607).jpg",
    },
    {
      src: "/misteri/dolorosi-3.jpg",
      larghezza: 900,
      altezza: 683,
      didascalia: "Caravaggio, Incoronazione di spine",
      fonte: "https://commons.wikimedia.org/wiki/File:Michelangelo_Merisi,_called_Caravaggio_-_The_Crowning_with_Thorns_-_Google_Art_Project.jpg",
    },
    {
      src: "/misteri/dolorosi-4.jpg",
      larghezza: 649,
      altezza: 900,
      didascalia: "Raffaello, Andata al Calvario, detta Spasimo di Sicilia",
      fonte: "https://commons.wikimedia.org/wiki/File:Christ_Falling_on_the_Way_to_Calvary_-_Raphael.jpg",
    },
    {
      src: "/misteri/dolorosi-5.jpg",
      larghezza: 603,
      altezza: 900,
      didascalia: "Diego Velázquez, Cristo crocifisso",
      fonte: "https://commons.wikimedia.org/wiki/File:Cristo_crucificado.jpg",
    },
  ],
  gloriosi: [
    {
      src: "/misteri/gloriosi-1.jpg",
      larghezza: 848,
      altezza: 900,
      didascalia: "Piero della Francesca, Resurrezione",
      fonte: "https://commons.wikimedia.org/wiki/File:Piero_della_Francesca_-_Resurrection_-_WGA17609.jpg",
    },
    {
      src: "/misteri/gloriosi-2.jpg",
      larghezza: 597,
      altezza: 900,
      didascalia: "Garofalo, Ascensione di Cristo",
      fonte: "https://commons.wikimedia.org/wiki/File:Benvenuto_Tisi_il_Garofalo,_Ascensione,_1525_circa._Galleria_Barberini_-FG.jpg",
    },
    {
      src: "/misteri/gloriosi-3.jpg",
      larghezza: 415,
      altezza: 900,
      didascalia: "El Greco, Pentecoste",
      fonte: "https://commons.wikimedia.org/wiki/File:Pentecost%C3%A9s_(El_Greco,_c._1600)_Prado.jpg",
    },
    {
      src: "/misteri/gloriosi-4.jpg",
      larghezza: 489,
      altezza: 900,
      didascalia: "Tiziano, Assunta",
      fonte: "https://commons.wikimedia.org/wiki/File:Tizian_041.jpg",
    },
    {
      src: "/misteri/gloriosi-5.jpg",
      larghezza: 680,
      altezza: 900,
      didascalia: "Gentile da Fabriano, Incoronazione della Vergine",
      fonte: "https://commons.wikimedia.org/wiki/File:Gentile_da_Fabriano_-_Coronation_of_the_Virgin.jpg",
    },
  ],
}
