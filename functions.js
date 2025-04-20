//Estrazione elementi da html.
const button = document.querySelector("button");

//Funzione anonima.
    button.onclick = function(){
        helloWorld()
    }

let nome="Mario"

//Funzione.
function helloWorld(){
    let cognome = "Rossi"
    console.log(nome);
    console.log("Hello world");
}

//Funzinoe che richiede parametri.
function printNumber(num){
        console.log(num)
}

//Invocazione di funzione.
helloWorld()

//Le variabili interne ad una funzione non possono "viste" fuori da essa.
//console.log(cognome);

printNumber(2)