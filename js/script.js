// creo la variabile che voglio sovrascrivere
const outputHtml = document.querySelector('.output');

// apro un ciclo for per creare un elenco da 1 a 100 a cui assegnerò un div
for (let i = 1; i <= 100; i++) {

    // assegno ai multipli di 3 e 5 una classe custom, li metto per primi per sovrascrivere gli altri
if (i % 3 === 0 && i % 5 === 0){ 
    outputHtml.innerHTML += `<div class="box tre-cinque">fizz</div>`

    // assegno ai multipli di 3  una classe custom con all'interno "fizz"
} else if (i % 3 === 0){
    outputHtml.innerHTML += `<div class="box tre">fizz</div>`

    // assegno ai multipli di 5  una classe custom con all'interno "buzz"
} else if (i % 5 === 0){
    outputHtml.innerHTML += `<div class="box cinque">buzz</div>`
} 

    // assegno a tutti i numero che non sono multipli ne di 3 ne di 5 con all'interno il valore della variabile, cioè il loro numero 
else{
    outputHtml.innerHTML += `<div class="box numero">${i}</div>`
}}