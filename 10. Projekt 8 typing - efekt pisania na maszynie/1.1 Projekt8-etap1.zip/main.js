const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

// Parametry
let indexText = 0;
const time = 40;

// Implementacja
const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}



const cursorAnimation = () => {
    spnCursor.classList.toggle('active') //object classList contains all classes. Toggle removes the specified class from an element but If the class does not exist, it is added to the element.
}
const indexTyping = setInterval(addLetter, time); // there is no need to call a function

setInterval(cursorAnimation, 400);





/*
simple version:
// Parametry
let indexText = 0;
const time = 40;

// Implementacja
const addLetter = () => {
    console.log("ok")
    indexText++;
    if (indexText === 200) clearInterval(indexTyping)
}
const indexTyping = setInterval(addLetter, time);
*/