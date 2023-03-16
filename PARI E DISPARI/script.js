// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Intro al gioco e creazione variabili contenenti una un numero scelto dall'utente, una un numero generato randomicamente ed una la somma tra i due precedenti numeri
alert("BENVENUTO! Ti verrà chiesto prima di inserire un numero, poi la IA genererà un numero a sua volta seguendo gli stessi parametri imposti a te. Verranno sommati i due numeri e notificato se la somma riporta un numero pari o dispari. Vincerai nel caso in cui il numero da te scelto sarà più grande di quello generato dalla IA.");

const userNum = parseInt(prompt("Scegli un numero compreso tra 1 e 5 (inclusi):"));
const aiNum = getRndInteger(1, 5);
const sumNums = userNum + aiNum

//Check sulla validità del numero inserito dall'utente (non NaN E compreso inclusivamente tra 1 e 5) con print nel log dell'esito del gioco
if (!isNaN(userNum) && (userNum >= 1 && userNum <= 5)){
    console.log("La tua scelta: " + userNum);
    console.log("La scelta della IA: " + aiNum);
    console.log("La somma tra i due numeri è: " + sumNums + ", un numero " + oddOrEven(sumNums));

    if (userNum == aiNum){
        console.log("PARITA'! Tu e la IA avete scelto lo stesso numero");
    }
    else if(userNum > aiNum){
        console.log("HAI VINTO! Il tuo numero è più grande di quello scelto dalla IA");
    }
    else{
        console.log("HAI PERSO! Il tuo numero è più piccolo di quello scelto dalla IA");
    }
}
else{
    console.log("La tua scelta non è un numero o non rispetta i parametri richiesti, ricarica la pagina e riprova.");
    console.log("La scelta della IA sarebbe stata: " + aiNum);
}

//Funzione che restituisce un numero random in un range da min a max (entrambi inclusi)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Funzione che restituisce una stringa esplicativa inerente all'essere PARI o DISPARI di un numero
function oddOrEven(number){
    if (number % 2 === 0){
        return "PARI";
    }
    else{
        return "DISPARI";
    }
}