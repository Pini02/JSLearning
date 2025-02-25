/*Script in cui vengono mostrate la operazioni coi numeri eseguibili in js tra cui operazioni matematiche fondamentali, incrementi,
 assegnazioni e confronti.*/
let numero = 3.145245;
let numeroStr = "20";
let a=2;
let b=3;
console.log(numero);

//Rimozione dei valori dopo la virgola. Se venisse passato un numero n come argomento verrebbero inseriti n numeri dopo la virgola. 
numero=numero.toFixed();
console.log(numero);
console.log("Il tipo della variabile numeroStr e': "+ typeof numeroStr + " e il suo valore e' "+ numeroStr + " quindi e' un numero sottoforma di stringa.");

//Casting e somma di una stringa con al suo interno un numero con un valore numerico.
console.log("Casting di una numeroStr in un numero e somma di questo:" + (Number(numeroStr)+3));

//Operazioni fondamentali.
console.log("Operazioni fondamentali tra a di valore: "+a+ " e b di valore:"+b);
console.log("Somma: "+ (a+b));
console.log("Differenza: "+(a-b));
console.log("Prodotto: "+(a*b));
console.log("Divisione: "+(a/b));
console.log("Resto: "+(a%b));
console.log("Potenza: "+(a**b));

//Incremento e decremento.
let inc = 10;
let dec = 20;
console.log("Valore da incrementare: "+inc);
inc++;
console.log(inc);
console.log("Valore da decrementare: "+dec);
dec--;
console.log(dec);

//Assegnazioni.
console.log("Operatori di assegnazione:")
let ass=10;
console.log("Valore iniziale: "+ ass);
ass+=10;
console.log("Addizione: "+ ass);
ass-=10;
console.log("Sottrazione: "+ ass);
ass*=10;
console.log("Moltiplicazione: "+ass);
ass/=10;
console.log("Divisione: "+ass);

//Confronti.
console.log("Operatori di comparazione dati a di valore: "+ a +" e b di valore: "+b);
console.log("a < b ? "+ a<b);
console.log("a > b ? "+ a>b);
console.log("a <= b ? "+ a<=b);
console.log("a >= b ? "+ a>=b);
console.log("a == b ? "+ a==b);
console.log("a != b ? "+ a!=b);
console.log("a === b ? "+ a===b);
console.log("a !== b ? "+ a!==b);
console.log("Gli ultimi due operatori confontano anche il tipo dei valori confrontati");