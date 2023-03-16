// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userNum = parseInt(prompt("Scegli un numero pari o dispari compreso tra 1 e 5 (inclusi):"));
const aiNum = getRndInteger(1, 5);

if (!isNaN(userNum) && (userNum >= 1 && userNum <= 5)){
    console.log("La tua scelta: " + userNum);
    console.log("La scelta della IA: " + aiNum);
}
else{
    console.log("La tua scelta non è un numero o non rispetta i parametri richiesti.");
    console.log("La scelta della IA sarebbe stata: " + aiNum);
}

//Funzione che restituisce un numero random in un range da min a max (entrambi inclusi)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}