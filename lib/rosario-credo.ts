// Il Credo lungo, niceno-costantinopolitano, nelle due lingue.
// Italiano dal Messale Romano, terza edizione italiana 2020 (Rito della Messa
// con il popolo): la 2020 non ha cambiato il Simbolo. Latino dai libretti
// delle liturgie papali su vatican.va, senza accenti di recitazione e con le
// legature ae/oe sciolte.
// La Chiesa non prescrive quale dei due Simboli usare nel rosario: alla croce
// la forma tradizionale è quella apostolica, ma anche il niceno è legittimo.

import type { Lingua, Testo } from "@/lib/rosario"

export const credoNiceno: Partial<Record<Lingua, Testo>> = {
  it: {
    titolo: "Credo niceno-costantinopolitano",
    paragrafi: [
      "Credo in un solo Dio, Padre onnipotente, creatore del cielo e della terra, di tutte le cose visibili e invisibili.",
      "Credo in un solo Signore, Gesù Cristo, unigenito Figlio di Dio, nato dal Padre prima di tutti i secoli: Dio da Dio, Luce da Luce, Dio vero da Dio vero; generato, non creato, della stessa sostanza del Padre; per mezzo di lui tutte le cose sono state create. Per noi uomini e per la nostra salvezza discese dal cielo, e per opera dello Spirito Santo si è incarnato nel seno della Vergine Maria e si è fatto uomo. Fu crocifisso per noi sotto Ponzio Pilato, morì e fu sepolto. Il terzo giorno è risuscitato, secondo le Scritture, è salito al cielo, siede alla destra del Padre. E di nuovo verrà, nella gloria, per giudicare i vivi e i morti, e il suo regno non avrà fine.",
      "Credo nello Spirito Santo, che è Signore e dà la vita, e procede dal Padre e dal Figlio. Con il Padre e il Figlio è adorato e glorificato, e ha parlato per mezzo dei profeti. Credo la Chiesa, una santa cattolica e apostolica. Professo un solo Battesimo per il perdono dei peccati. Aspetto la risurrezione dei morti e la vita del mondo che verrà. Amen.",
    ],
  },
  la: {
    titolo: "Symbolum Nicaenum-Constantinopolitanum",
    paragrafi: [
      "Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium.",
      "Et in unum Dominum Iesum Christum, Filium Dei unigenitum, et ex Patre natum ante omnia saecula. Deum de Deo, lumen de lumine, Deum verum de Deo vero, genitum, non factum, consubstantialem Patri: per quem omnia facta sunt. Qui propter nos homines et propter nostram salutem descendit de caelis. Et incarnatus est de Spiritu Sancto ex Maria Virgine, et homo factus est. Crucifixus etiam pro nobis sub Pontio Pilato; passus et sepultus est, et resurrexit tertia die, secundum Scripturas, et ascendit in caelum, sedet ad dexteram Patris. Et iterum venturus est cum gloria, iudicare vivos et mortuos, cuius regni non erit finis.",
      "Et in Spiritum Sanctum, Dominum et vivificantem: qui ex Patre Filioque procedit. Qui cum Patre et Filio simul adoratur et conglorificatur: qui locutus est per prophetas. Et unam, sanctam, catholicam et apostolicam Ecclesiam. Confiteor unum baptisma in remissionem peccatorum. Et exspecto resurrectionem mortuorum, et vitam venturi saeculi. Amen.",
    ],
  },
}
