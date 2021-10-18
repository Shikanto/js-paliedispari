function checkPalindromo (word) {

    let wordToCheck = prompt ("Scrivi la parola da controllare");
    console.log(wordToCheck);
    

    let spellingWord = wordToCheck.split('');
    console.log(spellingWord); 

    let reverseWord = spellingWord.reverse();
    console.log(reverseWord);

    let palindromeCheck = reverseWord.join('');
    console.log(palindromeCheck);

    if (palindromeCheck === wordToCheck) {
        alert (`${wordToCheck} è un palindromo`);
    } else {
        alert (`${wordToCheck} non è un palindromo`)
    }
} 

checkPalindromo();