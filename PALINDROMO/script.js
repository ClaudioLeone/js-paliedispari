// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

//Richiesta di input all'utente
const userWord = prompt("Inserisci una parola per sapere se è palindroma oppure no:");
//Invocazione della funzione di inversione lettura della parola inserita dall'utente
const invertedUserWrd = invertWord(userWord);

//Check sul risultato della lettura inversa della parola (palindroma o non palindroma) + print in 'console.log()'
if(userWord == invertedUserWrd){
    console.log('Palindroma!');
  } else {
    console.log('Non palindroma..');
}

//Funzione che inverte la lettura di una parola scritta dall'utente
function invertWord(string){
  let invertedUserWrd = '';

  for (let i = (string.length - 1); i >= 0; i--){
    invertedUserWrd += string[i];
  }

  return invertedUserWrd;
}