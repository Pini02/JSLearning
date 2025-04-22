
function Persona(nome,cognome,eta,genere){
    this.nome = nome
    this.cognome = cognome
    this.eta=eta
    this.genere=genere
    this.bio = function(){
        console.log(` ${this.nome} e' ${this.genere} e ha ${this.eta} anni. `)
    }
    this.saluta = function() {
        console.log(`Ciao, sono ${this.nome}`)
    }
}

let persona1= new Persona("Davide","Rossi",22,"Maschio")
persona1.bio()