let isOnline = true;
let nome = "Marco";

if(isOnline == true){
    console.log("Utente online");
    if(nome === "Marco"){
        console.log("Utente Marco")
    }
}else if(isOnline != true){
    console.log("Utente offline");
}else{
    console.log("Variabile non definita correttamente")
}
if(isOnline == true && nome == "Marco"){
    console.log("Marco online");
}else if(nome != "Marco" || !isOnline){
    console.log("Utente offline");
}else{
    console.log("Variabile non definita correttamente")
}

switch (isOnline){
    case true:
        console.log("Utente online");
        break;
    case false:
        console.log("Utente offline");
        break;
    default:
        console.log("Pippo");
        break;
}

(isOnline) ? console.log("Online"):console.log(offline);