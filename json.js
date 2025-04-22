//URL da cui ricare json.
URLjson = "https://jsonplaceholder.typicode.com/todos/1"
//Creazione di un oggetto per effettuare richieste.
let request = new XMLHttpRequest()

//Apertuta sito con tipo richiesta e URL.
request.open('GET',URLjson)
//Definizione tipo di risposta.
request.responseType="json"
//Invio richiesta.
request.send()
//Gestione risposta quando viene ricevuta.
request.addEventListener('load', () =>{
  let resp = request.response
  console.log(resp)
})