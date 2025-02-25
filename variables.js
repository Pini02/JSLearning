//inizializzazione di variabile con valore di tipo string
let nomeUtente = "Macro";
//inizializzazione di variabile con valore di tipo intera
let numInt = 34;
//inizializzazione di variabile con valore di tipo float
let numFP = 34.12;
//inizializzazione di variabile con valore di tipo bool
let bool = true;
//inizializzazione di array
let arr = [1,2,3,4];
//inizializzazione di oggetto con 2 attributi
let persona = {
    nome: "Fabio",
    cognome: "Rossi"
};
//inizializzazione di costante
const pi = 3.1452;

//stampa delle variabili
console.log(nomeUtente);
//stampa di una stringa
console.log("Hello world ");
//Modifica del valore
nomeUtente = "Marco";
//stampa di due stringhe
console.log("Hello World "+ nomeUtente);
console.log(numInt);
console.log(numFP);
console.log(bool);
//stampa array
console.log(arr);
//stampa oggetto
console.log(persona);
//stampa attributo
console.log(persona.nome);
//stampa tipo della variabile
console.log(typeof persona.nome);

console.log(pi);