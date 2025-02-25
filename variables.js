//Script in cui vengono mostrati i valori che possono assumere le variabili in js.
//Inizializzazione di variabile con valore di tipo string.
let nomeUtente = "Macro";

//Inizializzazione di variabile con valore di tipo intera.
let numInt = 34;

//Inizializzazione di variabile con valore di tipo float.
let numFP = 34.12;

//Inizializzazione di variabile con valore di tipo bool.
let bool = true;

//Inizializzazione di array.
let arr = [1,2,3,4];

//Inizializzazione di oggetto con 2 attributi.
let persona = {
    nome: "Fabio",
    cognome: "Rossi"
};

//Inizializzazione di costante.
const pi = 3.1452;

//Stampa delle variabili.
console.log(nomeUtente);

//Stampa di una stringa.
console.log("Hello world ");

//Modifica del valore.
nomeUtente = "Marco";

//Stampa di due stringhe concatenate.
console.log("Hello World "+ nomeUtente);

//Stampa numeri e booleano.
console.log(numInt);
console.log(numFP);
console.log(bool);

//Stampa array.
console.log(arr);

//Stampa oggetto.
console.log(persona);

//Stampa attributo.
console.log(persona.nome);

//Stampa tipo della variabile.
console.log(typeof persona.nome);

//Stampa costante.
console.log(pi);