
//Estrazione componenti.
nomei = document.querySelector("#nome")
cognomei = document.querySelector("#cognome")
form = document.querySelector("form")


//Gestione eventi in 2 modi diversi.
nomei.addEventListener('focus', (e) =>{
    console.log("Focus nome");
})

nomei.onfocus= function(){
    console.log("Focus nome2")
}

form.onsubmit = function(e){
    if( nomei.value == "" || cognomei.value == ""){
        //Previene il comportamento di default di un evento.
        e.preventDefault()
        alert("I campi non sono corretti")
        //Ferma la propagazione dell'evento a questo componente e non arriva
        // ai componenti sottostanti.
        e.stopPropagation()
    }
}