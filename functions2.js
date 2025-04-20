//Estrazione componenti richieste.
const ciaoButton = document.querySelector('button')
const parag = document.querySelector('p');
const input = document.querySelector('input')

//Funzione che modifica il valore del componente p usando la stringa in accenti gravi.
function hello(name){
    parag.innerHTML=`Ciao ${name}`
}

//Aggiunta di event listener per evento click in bottone.
ciaoButton.addEventListener('click', ()=> {
    hello(input.value)
})
