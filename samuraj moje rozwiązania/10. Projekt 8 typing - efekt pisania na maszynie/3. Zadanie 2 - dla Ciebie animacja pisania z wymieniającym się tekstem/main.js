// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['DZIEŃ DOBRY!!! ', 'FAJNIE ŻE JESTEŚ :) ', 'ZACZYNAMY ... ']
const time = 100; // there is connection betwen this variable and sum of the settimeout functions below. 
let indexText = 0;
let addd = 0

function myFunction2() {
    spnText.textContent = ""
}

function myFunction(addd) {
    const addLetterOld = () => {
        spnText.textContent += txt[addd][indexText];
        indexText++;
        if (indexText === txt[addd].length) clearInterval(indexTyping);
    }
    const indexTyping = setInterval(addLetterOld, time)
    testowa()
}

let testowa = () => {
    indexText = 0;
    addd += 1
    if (2 >= addd) {
        setTimeout(addLetter, 5000);
        setTimeout(myFunction2, 5000)
    }
}

// Implementacja
let addLetter = () => {
    setTimeout(myFunction(addd), 5000);
}

addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);

/*
SOLUTION OF AUTHOR OF THE COURSE:



let activeLetter = -15;
let activeText = 0;


// Implementacja
const addLetter = () => {
 // Użyj w środku setTimeout
 if (activeLetter >= 0) {
  spnText.textContent += txt[activeText][activeLetter];
 }
 activeLetter++;
 if (activeLetter === txt[activeText].length) {

  activeText++;
  if (activeText === txt.length) return; // RETURN ENDS FUNCTION

  return setTimeout(() => {
   activeLetter = -15;
   spnText.textContent = '';
   addLetter();
  }, 2000)


 }
 setTimeout(addLetter, 100)

}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);
*/