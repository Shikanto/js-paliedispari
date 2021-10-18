function checkPalindromo (word) {


/* Inserisco la parola da controllare se è  un palindromo o no */

    let wordToCheck = prompt ("Scrivi la parola da controllare");
    console.log(wordToCheck);
    
/* Faccio lo spelling della parola da controllare */

    let spellingWord = wordToCheck.split('');
    console.log(spellingWord); 

/* Inverto l'ordine delle lettere dello spelling */

    let reverseWord = spellingWord.reverse();
    console.log(reverseWord);

/* Riformo con la parola con le lettere invertite */

    let palindromeCheck = reverseWord.join('');
    console.log(palindromeCheck);

/* Controllo se la parola inserita è uguale alla parola con le lettere invertite */

    if (palindromeCheck === wordToCheck) {
        alert (`${wordToCheck} è un palindromo`);
    } else {
        alert (`${wordToCheck} non è un palindromo`)
    }
} 

/* Invoco la funzione */

checkPalindromo();