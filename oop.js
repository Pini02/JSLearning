//Definizion superclasse
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
//Definizione classe
function Insegnante(nome,cognome,eta,genere,materia){
    Persona.call(this,nome,cognome,eta,genere)
    this.materia=materia
    this.bio = function(){
        console.log(`Buongiorno insegno ${this.materia}.`)
    }
}
//Definizione oggetti e utilizzo metodi
let persona1= new Persona("Davide","Rossi",22,"Maschio")
persona1.bio()
let ins = new Insegnante("Paolo","Rossi",30,"Maschio","Fisica")
ins.bio()