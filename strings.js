//Script in cui vengono mostrati le varie stringhe e le differenze tra apici.

//Differenze tra apici.
let stringa = "Stringa con doppi apici. Non serve l'escape per '.";
let stringa2 = 'Stringa con apici singoli. Mettere escape per \'. ';

//Concatenazioni.
let concatenazione = stringa + stringa2;
console.log(concatenazione);
console.log(" Se vengono sommate una stringa ed un intero il risultato sarà una stringa.\n Per esempio: ");
console.log("Pippo"+56);
let varnum = 56;
console.log("Casting in stringa di un numero: "+ varnum.toString());

//Uso del backtick che permette l'utilizzo di apici singoli.
let nome="Marco";
let component = `<h1>${"Qui possono essere inserite variabili e snippet"}</h1>`;
document.body.innerHTML = component ;


//Manipolazione stringhe tramite metodi.
stringa = "Questa e' una stringa da manipolare";
console.log(stringa);
console.log("Lunghezza della stringa: "+ stringa.length);
console.log("Estrazione del carattere 3 dalla stringa:" + stringa[2]);
console.log("La parola stringa inizia al carattere numero:"+ stringa.indexOf("stringa"));
console.log("Separazione stringa: " + stringa.slice(stringa.indexOf("stringa")) );
console.log("Stringa tutta maiuscola: "+ stringa.toUpperCase());
console.log("Stringa tutta minuscola: "+ stringa.toLowerCase());
console.log("Sostituzione della parola stringa con pizza: "+ stringa.replace("stringa","pizza"));