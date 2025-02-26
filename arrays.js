//Script in cui sono mostrati gli array e i metodi per gestirne la popolazione.
let cittaS = "Milano,Roma,Bologna,Firenze,Torino"
let citta = ["Milano","Roma","Bologna","Firenze","Torino"];

//Stampa array.
console.log("Stampa di tutto l'array: "+ citta);
console.log("Stampa lunghezze dell'array: "+ citta.length);
console.log("Stampa del terzo elemento:"+ citta[2]);

//Manipolazione stringhe e array.
console.log("Creazione di un'array da una stringa con un separatore. Stringa" + cittaS);
console.log(cittaS.split(","));
console.log("Creazione di una stringa da un'array utilizzando un separatore: "+ citta.join(","));

//Lavori in coda, aggiungendo o rimuovendo elementi.
citta.push("Ravenna");
console.log("Aggiunta di un elemento in coda:");
console.log(citta);
//O la coda o l'elemento passato come argomento.
citta.pop("Milano");
console.log("Rimosso un elemento in coda:");
console.log(citta);

//Lavori in testa, rimuovendo o aggiungendo elementi.
citta.shift()
console.log("Shift della testa all'elemento successivo:")
console.log(citta);

citta.unshift("Milano");
console.log("Unshift della testa:")
console.log(citta);