// Testi latini delle preghiere del rosario, verificati sulle fonti.
// Compendio del Catechismo e Catechismo latino su vatican.va per le preghiere
// comuni, libretto vaticano del rosario 2013 per le Litanie, circolare della
// Sala Stampa del 2020 per le tre invocazioni aggiunte, Nova Vulgata per il
// salmo. Accenti di recitazione e legature ae/oe tolti, sempre "i" e mai "j".
//
// Due testi non hanno una fonte vaticana e sono segnalati qui: la preghiera di
// Fatima in latino, che la Chiesa non ha mai pubblicato, e "Ad te, beate
// Ioseph", che su vatican.va non compare per esteso.

import type { PreghieraCondivisa, PreghieraId, Testo } from "@/lib/rosario"

export const testiLa: Partial<Record<PreghieraId | PreghieraCondivisa, Testo>> = {
  segno: {
    titolo: "Signum crucis",
    paragrafi: [
      "In nomine Patris et Filii et Spiritus Sancti. Amen.",
    ],
  },
  credo: {
    titolo: "Symbolum Apostolicum",
    paragrafi: [
      "Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae, et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus et sepultus, descendit ad inferos, tertia die resurrexit a mortuis, ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos.",
      "Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen.",
    ],
  },
  padreNostro: {
    titolo: "Pater noster",
    paragrafi: [
      "Pater noster qui es in caelis: sanctificetur Nomen Tuum; adveniat Regnum Tuum; fiat voluntas Tua, sicut in caelo, et in terra. Panem nostrum cotidianum da nobis hodie; et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris; et ne nos inducas in tentationem; sed libera nos a Malo.",
    ],
  },
  aveMaria: {
    titolo: "Ave Maria",
    paragrafi: [
      "Ave, Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.",
    ],
  },
  gloria: {
    titolo: "Gloria Patri",
    paragrafi: [
      "Gloria Patri et Filio et Spiritui Sancto. Sicut erat in principio, et nunc et semper et in saecula saeculorum. Amen.",
    ],
  },
  fatima: {
    titolo: "Oratio Fatimae",
    paragrafi: [
      "Domine Iesu, dimitte nobis debita nostra, salva nos ab igne inferni, perduc in caelum omnes animas, praesertim eas, quae misericordiae tuae maxime indigent.",
    ],
  },
  salveRegina: {
    titolo: "Salve Regina",
    paragrafi: [
      "Salve, Regina, Mater misericordiae, vita, dulcedo et spes nostra, salve. Ad te clamamus, exsules filii Evae. Ad te suspiramus gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum benedictum fructum ventris tui, nobis, post hoc exsilium, ostende. O clemens, o pia, o dulcis Virgo Maria!",
    ],
    righe: [
      { v: "Ora pro nobis, sancta Dei Genetrix.", r: "Ut digni efficiamur promissionibus Christi." },
    ],
  },
  litanie: {
    titolo: "Litaniae Lauretanae",
    righe: [
      { v: "Kyrie, eleison.", r: "Kyrie, eleison." },
      { v: "Christe, eleison.", r: "Christe, eleison." },
      { v: "Kyrie, eleison.", r: "Kyrie, eleison." },
      { v: "Christe, audi nos.", r: "Christe, audi nos." },
      { v: "Christe, exaudi nos.", r: "Christe, exaudi nos." },
      { v: "Pater de caelis, Deus,", r: "miserere nobis." },
      { v: "Fili, Redemptor mundi, Deus,", r: "miserere nobis." },
      { v: "Spiritus Sancte, Deus,", r: "miserere nobis." },
      { v: "Sancta Trinitas, unus Deus,", r: "miserere nobis." },
      { v: "Sancta Maria,", r: "ora pro nobis." },
      { v: "Sancta Dei Genetrix,", r: "ora pro nobis." },
      { v: "Sancta Virgo virginum,", r: "ora pro nobis." },
      { v: "Mater Christi,", r: "ora pro nobis." },
      { v: "Mater Ecclesiae,", r: "ora pro nobis." },
      { v: "Mater misericordiae,", r: "ora pro nobis." },
      { v: "Mater divinae gratiae,", r: "ora pro nobis." },
      { v: "Mater spei,", r: "ora pro nobis." },
      { v: "Mater purissima,", r: "ora pro nobis." },
      { v: "Mater castissima,", r: "ora pro nobis." },
      { v: "Mater inviolata,", r: "ora pro nobis." },
      { v: "Mater intemerata,", r: "ora pro nobis." },
      { v: "Mater amabilis,", r: "ora pro nobis." },
      { v: "Mater admirabilis,", r: "ora pro nobis." },
      { v: "Mater boni consilii,", r: "ora pro nobis." },
      { v: "Mater Creatoris,", r: "ora pro nobis." },
      { v: "Mater Salvatoris,", r: "ora pro nobis." },
      { v: "Virgo prudentissima,", r: "ora pro nobis." },
      { v: "Virgo veneranda,", r: "ora pro nobis." },
      { v: "Virgo praedicanda,", r: "ora pro nobis." },
      { v: "Virgo potens,", r: "ora pro nobis." },
      { v: "Virgo clemens,", r: "ora pro nobis." },
      { v: "Virgo fidelis,", r: "ora pro nobis." },
      { v: "Speculum iustitiae,", r: "ora pro nobis." },
      { v: "Sedes sapientiae,", r: "ora pro nobis." },
      { v: "Causa nostrae laetitiae,", r: "ora pro nobis." },
      { v: "Vas spirituale,", r: "ora pro nobis." },
      { v: "Vas honorabile,", r: "ora pro nobis." },
      { v: "Vas insigne devotionis,", r: "ora pro nobis." },
      { v: "Rosa mystica,", r: "ora pro nobis." },
      { v: "Turris davidica,", r: "ora pro nobis." },
      { v: "Turris eburnea,", r: "ora pro nobis." },
      { v: "Domus aurea,", r: "ora pro nobis." },
      { v: "Foederis arca,", r: "ora pro nobis." },
      { v: "Ianua caeli,", r: "ora pro nobis." },
      { v: "Stella matutina,", r: "ora pro nobis." },
      { v: "Salus infirmorum,", r: "ora pro nobis." },
      { v: "Refugium peccatorum,", r: "ora pro nobis." },
      { v: "Solacium migrantium,", r: "ora pro nobis." },
      { v: "Consolatrix afflictorum,", r: "ora pro nobis." },
      { v: "Auxilium christianorum,", r: "ora pro nobis." },
      { v: "Regina angelorum,", r: "ora pro nobis." },
      { v: "Regina patriarcharum,", r: "ora pro nobis." },
      { v: "Regina prophetarum,", r: "ora pro nobis." },
      { v: "Regina apostolorum,", r: "ora pro nobis." },
      { v: "Regina martyrum,", r: "ora pro nobis." },
      { v: "Regina confessorum,", r: "ora pro nobis." },
      { v: "Regina virginum,", r: "ora pro nobis." },
      { v: "Regina sanctorum omnium,", r: "ora pro nobis." },
      { v: "Regina sine labe originali concepta,", r: "ora pro nobis." },
      { v: "Regina in caelum assumpta,", r: "ora pro nobis." },
      { v: "Regina sacratissimi rosarii,", r: "ora pro nobis." },
      { v: "Regina familiae,", r: "ora pro nobis." },
      { v: "Regina pacis,", r: "ora pro nobis." },
      { v: "Agnus Dei, qui tollis peccata mundi,", r: "parce nobis, Domine." },
      { v: "Agnus Dei, qui tollis peccata mundi,", r: "exaudi nos, Domine." },
      { v: "Agnus Dei, qui tollis peccata mundi,", r: "miserere nobis." },
      { v: "Ora pro nobis, sancta Dei Genetrix.", r: "Ut digni efficiamur promissionibus Christi." },
    ],
    chiusa: [
      "Oremus. Deus, cuius Unigenitus per vitam, mortem et resurrectionem suam nobis salutis aeternae praemia comparavit, concede, quaesumus: ut haec mysteria sacratissimo beatae Mariae Virginis Rosario recolentes, et imitemur quod continent, et quod promittunt assequamur. Per Christum Dominum nostrum. Amen.",
    ],
  },
  sanGiuseppe: {
    titolo: "Ad te, beate Ioseph",
    paragrafi: [
      "Ad te, beate Ioseph, in tribulatione nostra confugimus, atque, implorato Sponsae tuae sanctissimae auxilio, patrocinium quoque tuum fidenter exposcimus. Per eam, quaesumus quae te cum immaculata Virgine Dei Genetrice coniunxit, caritatem, perque paternum, quo Puerum Iesum amplexus es, amorem, supplices deprecamur, ut ad hereditatem, quam Iesus Christus acquisivit Sanguine suo, benignus respicias, ac necessitatibus nostris tua virtute et ope succurras.",
      "Tuere, o Custos providentissime divinae Familiae, Iesu Christi subolem electam; prohibe a nobis, amantissime Pater, omnem errorum ac corruptelarum luem; propitius nobis, sospitator noster fortissime, in hoc cum potestate tenebrarum certamine e caelo adesto; et sicut olim Puerum Iesum e summo eripuisti vitae discrimine, ita nunc Ecclesiam sanctam Dei ab hostilibus insidiis atque ab omni adversitate defende: nosque singulos perpetuo tege patrocinio, ut ad tui exemplar et ope tua suffulti, sancte vivere, pie emori, sempiternamque in caelis beatitudinem assequi possimus. Amen.",
    ],
  },
  sanMichele: {
    titolo: "Sancte Michael Archangele",
    paragrafi: [
      "Sancte Michael Archangele, defende nos in proelio; contra nequitiam et insidias diaboli esto praesidium. Imperet illi Deus, supplices deprecamur, tuque, Princeps militiae caelestis, Satanam aliosque spiritus malignos, qui ad perditionem animarum pervagantur in mundo, divina virtute, in infernum detrude. Amen.",
    ],
  },
  angeloDiDio: {
    titolo: "Angele Dei",
    paragrafi: [
      "Angele Dei, qui custos es mei, me, tibi commissum pietate superna, illumina, custodi, rege et guberna. Amen.",
    ],
  },
  defunti: {
    titolo: "De profundis",
    versi: [
      [
        "Canticum ascensionum.",
        "De profundis clamavi ad te, Domine;",
        "Domine, exaudi vocem meam.",
        "Fiant aures tuae intendentes",
        "in vocem deprecationis meae.",
      ],
      [
        "Si iniquitates observaveris, Domine,",
        "Domine, quis sustinebit?",
        "Quia apud te propitiatio est,",
        "ut timeamus te.",
      ],
      [
        "Sustinui te, Domine,",
        "sustinuit anima mea in verbo eius;",
        "speravit anima mea in Domino",
        "magis quam custodes auroram.",
      ],
      [
        "Magis quam custodes auroram",
        "speret Israel in Domino,",
        "quia apud Dominum misericordia,",
        "et copiosa apud eum redemptio.",
        "Et ipse redimet Israel",
        "ex omnibus iniquitatibus eius.",
      ],
    ],
    chiusa: [
      "Gloria Patri et Filio et Spiritui Sancto. Sicut erat in principio, et nunc et semper, et in saecula saeculorum. Amen.",
      "Requiem aeternam dona eis, Domine, et lux perpetua luceat eis. Requiescant in pace. Amen.",
    ],
  },
}
