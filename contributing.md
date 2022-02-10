# Linee Guida da adottare

## Protocollo

Usa HTTPS(https:) per immagini ed altri file multimediali.

## Struttura sito

Root
- Pagine (index.html, about.html, contatti.html, ecc)
- css (cartella contenete tutti i fogli stile)
- img (cartella contenete tutte le immagini)
- component Angular

## HTML

#### Minuscole

Tutto il codice deve essere in minuscolo: questo vale per i nomi degli elementi HTML, gli attributi, i valori degli attributi, i selettori CSS, le proprietà ed i valori.
Esempio:
Non consigliato:
colore : #E5E5E5;
Consigliato:
colore : #e5e5e5;

#### Codifica

Assicurati che il tuo editor utilizzi
`<meta charset="utf-8">`

#### Commenti

Usa i commenti il più possibile per spiegare il codice: a cosa serve, perché viene utilizzato.

#### Identazione

Per l'identazione utilizziamo due spazi.

#### Tag Chiusura elementi Void

Sebbene per gli elementi Void non sia obbligatorio un tag di chiusura, sarebbe opportuno non ometterli.
Esempio:
Non consigliato:
`<input....>`, `<img....>`
Consigliato:
`<input..../>`, `<img..../>`

#### Multimedia Fallback

Fornire contenuti alternativi per la multimedialità.
Per i contenuti multimediali, come immagini, video, assicurati di offrire un accesso alternativo. Per le immagini ciò significa l'uso di testo alternativo (alt) e per video ed audio, trascrizioni e didascalie ,se disponibili.
Esempio:
Non consigliato:
`<img src="gattini.png/>`
Consigliato:
`<img src="gattini.png" alt="foto di 3 gattini che dormono"/>`

## CSS

### Classi

Denominazione classi in inglese.

## GitHub e Git

### Branch

Quando crei un branch, é opportuno assegnare un nome che ne descriva il contenuto o la pagina di riferimento a cui si sta lavorando (es.contatti).
  
### Commit

Eseguendo il comando per effettuare un commit, é opportuno assegnare ad ogni commit un nome che descriva ciò che stiamo facendo.

### Pull Request

Quando hai terminato con i cambiamenti al tuo progetto, effettua una Pull Request. <br />
<strong>N.B. Il merge va fatto su develop e non su main!</strong>

##### Il team 3 ti ringrazia :tada: :tada: :tada:
