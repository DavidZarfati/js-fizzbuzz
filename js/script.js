// console.log("hello world");

//Progetto
// Stampa i numeri da 1 a 100
// se il numero è multiplo di 3,stampo Fizz (%3 con resto 0)
// se il numero è multiplo di 5,stampo Buzz (%5 con resto 0)
// se è multiplo di entrambi stampo FizzBuzz


//operazioni
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 3 == 0) {
//         console.log("Fizz")
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz")
//     }
//     else {
//         console.log(i)
//     }
// }
let risultato = 0
let limite = prompt("dammi un numero a tuo piacimento")
for (let i = 1; i <= limite; i++) {
    // if (i % 3 == 0 && i % 5 == 0) {
    if (i % 15 == 0) {
        risultato = "FizzBuzz"
    }
    else if (i % 3 == 0) {
        risultato = "Fizz"
    }
    else if (i % 5 == 0 && i % 100 != 0) {
        risultato = "Buzz"
    }
    else if (i % 100 == 0) {
        risultato = "FizzBuzzPremium"
    }
    else {
        risultato = i
    }
    if (i % 100 == 0) {
        console.error(risultato)
    }
    else if (i % 15 == 0) {
        console.warn(risultato)
    }
    else {
        console.log(risultato)
    }
}
