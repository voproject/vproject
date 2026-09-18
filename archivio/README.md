# Archivio

## email-signup.tsx.txt

La sezione con il form Kit che raccoglieva le email prima di mandare le
persone nel canale. Messa da parte a settembre 2026, quando il sito ha
cominciato a portare direttamente al canale broadcast di Instagram.

L'estensione è `.txt` apposta: così il file resta nel repository ma non viene
compilato e non finisce nel sito.

Per rimetterlo in uso:

1. `git mv archivio/email-signup.tsx.txt components/email-signup.tsx`
2. Nelle pagine dove serve, importa `EmailSignup` al posto di
   `UniscitiBroadcast`. Le due sezioni hanno lo stesso `id="unisciti"` e le
   stesse due proprietà (`showClosingLine`, `standalone`), quindi i pulsanti
   che scorrono a `#unisciti` continuano a funzionare senza modifiche.

Cose da ricordare sul form:

- L'indirizzo a cui invia è `https://app.kit.com/forms/9765171/subscriptions`.
  Quel numero non è l'uid dello snippet di Kit (`cca8d8f843`): è stato letto
  dentro lo script del form.
- Dove finisce la persona dopo aver lasciato l'email si imposta dentro Kit, non
  nel codice: Form builder > Settings > General > "Redirect to another page
  upon subscription".
