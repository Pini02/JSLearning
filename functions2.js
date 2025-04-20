//Estrazione componenti richieste.
const ciaoButton = document.querySelector('#nomeb',)
const paragc = document.querySelector('#nomep');
const inputc = document.querySelector('#nomei')

const cubob = document.querySelector('#cubob')
const cubop = document.querySelector('#cubop')
const cuboi = document.querySelector('#cuboi')
//Funzione che modifica il valore del componente p usando la stringa in accenti gravi.
function hello(name){
    paragc.innerHTML=`Ciao ${name}`
}

function cubo(value){
    return value*value*value
}

//Aggiunta di event listener per evento click in bottone.
ciaoButton.addEventListener('click', ()=> {
    hello(inputc.value)
})

cubob.addEventListener('click', () =>{
    cubop.innerHTML=cubo(cuboi.value)
})
