//Array da stampare.
let arr = [2,2,3,4,5];

//Ciclo for in cui si dichiarano inizializzazione, condizione di terminazione e incremento.
for(let i = 0; i< arr.length; i++){
    //Stampa solo se il numero è pari.
    if (arr[i]%2 == 0) {
        console.log(arr[i]);

    }else{

        //Salta istruzioni e vai all'iterazione successiva.
        continue;

        //Esci dal ciclo.
        //break;
    }
}

let i=0;

//Ciclo while.
while(i<arr.length){
    console.log(arr[i]);
    i+=1;
}

//i gia' dichiarata.
i =0;

//Ciclo do while(prima esegue poi controlla la condizione).
do{
    console.log(arr[i]);
    i+=1;
}while(i<arr.length)