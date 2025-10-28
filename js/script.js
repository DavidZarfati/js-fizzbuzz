// console.log("hello world");

//Progetto
// Stampa i numeri da 1 a 100
// se il numero è multiplo di 3,stampo Fizz (%3 con resto 0)
// se il numero è multiplo di 5,stampo Buzz (%5 con resto 0)
// se è multiplo di entrambi stampo FizzBuzz


//operazioni
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}
