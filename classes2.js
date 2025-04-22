//Notazione per le classi da 2015.
class Persona{
    constructor(nome,cognome,eta){
        this.nome=nome
        this.cognome=cognome
        this.eta=eta
    }
    saluta(){
        console.log(`Ciao, sono ${this.nome}`)
    }
}

class Insegnante extends Persona{
    constructor(nome,cognome,eta,materia) {
        super(nome,cognome,eta);
        this.materia=materia
    }
    saluta(){
        console.log(`Buongiorno, insegno ${this.materia}`)
    }
    //Setters e getters vanno in coppia ed il parametro deve avere il _ come primo carattere
    get materia(){
        console.log(this._materia)
    }

    set materia(nuova){
        this._materia=nuova
    }

}