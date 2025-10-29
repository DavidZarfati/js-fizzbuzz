// Riga di test commentata per verificare il funzionamento di console.log
// console.log("hello world");

/* 
 * PROGETTO FIZZBUZZ PERSONALIZZATO
 * Descrizione: Implementazione del classico gioco FizzBuzz con funzionalità aggiuntive
 * - Stampa numeri da 1 fino a un limite scelto dall'utente
 * - Se il numero è multiplo di 3, stampa "Fizz" (resto della divisione per 3 è 0)
 * - Se il numero è multiplo di 5, stampa "Buzz" (resto della divisione per 5 è 0)  
 * - Se è multiplo di entrambi (3 e 5), stampa "FizzBuzz"
 * - AGGIUNTA PERSONALIZZATA: Se è multiplo di 100, stampa "FizzBuzzPremium"
 */

/* 
 * VERSIONE BASE COMMENTATA (implementazione classica del FizzBuzz)
 * Questo è il codice originale che funziona per i numeri da 1 a 100
 */
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {        // Controlla se è multiplo sia di 3 che di 5
//         console.log("FizzBuzz")              // Stampa FizzBuzz per multipli di entrambi
//     }
//     else if (i % 3 == 0) {                  // Controlla se è multiplo solo di 3
//         console.log("Fizz")                  // Stampa Fizz per multipli di 3
//     }
//     else if (i % 5 == 0) {                  // Controlla se è multiplo solo di 5
//         console.log("Buzz")                  // Stampa Buzz per multipli di 5
//     }
//     else {                                   // Per tutti gli altri numeri
//         console.log(i)                       // Stampa il numero stesso
//     }
// }

// VERSIONE AVANZATA CON INPUT UTENTE E FUNZIONALITÀ EXTRA

// Variabile per memorizzare il risultato di ogni iterazione (stringa o numero)
let risultato = 0;

// Chiede all'utente di inserire un numero limite e lo converte da stringa a intero
// prompt() restituisce sempre una stringa, parseInt() la converte in numero intero
let limite = parseInt(prompt("dammi un numero a tuo piacimento"));

// Verifica che l'input dell'utente sia un numero valido
// isNaN() controlla se il valore NON è un numero, quindi !isNaN() verifica che SIA un numero
if (!isNaN(limite)) {

    // Ciclo for che itera da 1 fino al numero limite inserito dall'utente
    // i viene inizializzato a 1, continua finché i <= limite, e si incrementa di 1 ad ogni iterazione
    for (let i = 1; i <= limite; i++) {

        // SEZIONE: DETERMINAZIONE DEL RISULTATO
        // Controlla le condizioni in ordine per determinare cosa stampare

        // Versione ottimizzata: i % 15 == 0 equivale a (i % 3 == 0 && i % 5 == 0)
        // Multiplo di 15 significa multiplo sia di 3 che di 5
        if (i % 15 == 0) {
            risultato = "FizzBuzz";  // Assegna "FizzBuzz" per multipli di 15
        }
        // Controlla se il numero è multiplo di 3 (resto della divisione per 3 è 0)
        else if (i % 3 == 0) {
            risultato = "Fizz";      // Assegna "Fizz" per multipli di 3
        }
        // Controlla se è multiplo di 5 MA non di 100 
        // Condizione aggiuntiva && i % 100 != 0 esclude i multipli di 100 da questa regola
        else if (i % 5 == 0 && i % 100 != 0) {
            risultato = "Buzz";      // Assegna "Buzz" per multipli di 5 (esclusi quelli di 100)
        }
        // FUNZIONALITÀ EXTRA: Controlla se il numero è multiplo di 100
        else if (i % 100 == 0) {
            risultato = "FizzBuzzPremium";  // Assegna "FizzBuzzPremium" per multipli di 100
        }
        // Per tutti gli altri numeri che non rientrano nelle condizioni sopra
        else {
            risultato = i;           // Assegna il numero stesso
        }

        // SEZIONE: VISUALIZZAZIONE DEL RISULTATO
        // Usa diversi tipi di console per evidenziare i risultati speciali

        // Per i multipli di 100: usa console.error (colore rosso, priorità alta)
        if (i % 100 == 0) {
            console.error(risultato);    // Stampa in rosso per "FizzBuzzPremium"
        }
        // Per i multipli di 15: usa console.warn (colore giallo/arancione, priorità media)
        else if (i % 15 == 0) {
            console.warn(risultato);     // Stampa in giallo per "FizzBuzz"
        }
        // Per tutti gli altri casi: usa console.log normale (colore standard)
        else if (i % 5 == 0) {
            console.log('%c' + risultato, 'color: red');
        }
        else if (i % 3 == 0) {
            console.log('%c' + risultato, 'color: green');
        }
        else {
            console.log('%c' + risultato, 'color: blue');
        }
    }
}
