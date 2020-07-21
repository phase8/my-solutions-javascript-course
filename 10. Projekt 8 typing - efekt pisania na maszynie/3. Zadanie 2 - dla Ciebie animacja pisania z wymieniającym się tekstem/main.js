// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let indexText = 0;
const time = 200;
let indexText2 = 0;



function myFunction2() {
    spnText.textContent = ""
}

function myFunction() {
    const addLetterOld = () => {
        spnText.textContent += txt[0][indexText];
        indexText++;
        if (indexText === txt[0].length) clearInterval(indexTyping);
        setTimeout(myFunction2, 2000);

    }
    const indexTyping = setInterval(addLetterOld, time);

}





// Implementacja
const addLetter = () => {
    setTimeout(myFunction, 1000);
}




addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);