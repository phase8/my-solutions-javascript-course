// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']
const time = 100;
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
    if (3 > addd) {
        indexText = 0;
        testowa()
    }
}

let testowa = () => {
    addd += 1
    if (2 >= addd) {
        setTimeout(addLetter, 2000);
        setTimeout(myFunction2, 2000)
    }
}

// Implementacja
let addLetter = () => {
    setTimeout(myFunction(addd), 4000);
}

addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);