
/*  Creo funzione per generare un numero casuale per il pc da 1 a 5 */

function randomNumber() {
   
    let randomNumberPc = Math.floor(Math.random()*5) + 1;
    alert(`il numero del computer è ${randomNumberPc}`);
    return randomNumberPc;

} 

/* Creo funzione per controllare se il numero è pari e dispari e far ritornare un valore per controllare se l'utente ha indovinato */

function pariDispari(number) {

/*  Definisco delle variabili per il check finale  */

    let pari = "";
    let dispari = "";

/* Controllo se sia stato inserito un numero */

    if (isNaN(number))
    {
      alert(`${number} non è un numero!`);
      return;
    }

/* Controllo se il numero è pari */    
    
    let checkPari = number % 2;

/* Se è pari ritorna la variabile pari per il check finale  */

    if (checkPari === 0) {
        alert(`${number}  è un numero Pari!`);
        pari += "pari";
        console.log(pari);
        return pari;

/* Se è dispari ritorna la variabile dispari per il check finale  */

    } else {
        alert(`${number}  è un numero Dispari!`);
        dispari += "dispari"
        console.log(dispari);
        return dispari;
    }
}


/* Scelgo tra pari e dispari */

let makeYourChoice = prompt("Indovina se sarà un numero Pari o Dispari");

/* Controllo se l'utente scrive correttamente pari o dispari */

function checkYourChoice (makeYourChoice) {
    
    while (makeYourChoice != "pari" && makeYourChoice != "dispari"){
   
        alert("hai sbagliato a scrivere, digita la parola 'pari' o 'dispari'");
        
        let makeYourChoiceAgain = prompt("scegli pari o dispari");

        if (makeYourChoiceAgain === "pari" || makeYourChoiceAgain === "dispari") {
            makeYourChoice = makeYourChoiceAgain;
        }
    
    }
    return makeYourChoice;
}    

let makeYourChoiceCorrect = checkYourChoice(makeYourChoice);

/* Genero numeor casuale per l'utente */

const randomNumberUtente = Math.floor(Math.random()*5) + 1;
alert(`il numero dell'utente è ${randomNumberUtente}`);
console.log(randomNumberUtente);

/* Invoco funzione per generare numero casuale computer */

let randomNumberPc = randomNumber();
console.log(randomNumberPc);

/* Funzione per sommare i due numeri casualmente creati */

function sommaAndCheck(randomNumberUtente, randomNumberPc) {

    const sommaNumbers = randomNumberUtente + randomNumberPc;

    console.log(sommaNumbers);

    return sommaNumbers;
}

/* invoco funzione per la somma */

let sommaNumbers = sommaAndCheck(randomNumberUtente, randomNumberPc);

/* invoco funzione per il final check */

let finalResult = pariDispari(sommaNumbers);
console.log(finalResult);

/* Alert per l'utente per vedere se ha vinto o no */

if (makeYourChoiceCorrect === finalResult) {
    alert("Complimenti! Hai Indovinato!")
} else {
    alert("Mi dispiace, ma ha vinto il computer")
}



