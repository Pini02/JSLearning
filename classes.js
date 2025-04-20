const persona ={
    nome : "Paolo",
    cognome :"Pini",
    indirizzo : {
        via : "piazza roma",
        numero : "21"
    },
    saluta : function(){
      console.log(`Ciao sono ${this.nome}`)
    }
}
persona.saluta()
console.log(persona.nome)
persona.nome = "Luca"
console.log(persona['nome'])
