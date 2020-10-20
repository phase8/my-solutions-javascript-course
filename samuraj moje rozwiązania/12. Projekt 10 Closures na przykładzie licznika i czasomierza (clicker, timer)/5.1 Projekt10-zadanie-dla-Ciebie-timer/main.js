const h1 = document.querySelector('h1');

function giveNumber() {
    let number = 0
    return number
}

function showTime(number = giveNumber()) {
    function timer() {
        const h1 = document.querySelector('h1');
        h1.textContent = number
        //number = number++ | bad example of code, it won't work
        number++
        //if (number > 10) {
        //     return
        // }
    }
    setInterval(timer, 1000) // | IMPORTANT!!! timer HAS ACCES TO VARIABLE number IN LINE 4!!! THIS VARIABLE STORES CURRENT NUMBER.
}
showTime()

/*
SOLUTION OF THE AUTHOR OF THE CODE:
const clock = () => {
 let seconds = 0;
 document.body.textContent = 0 + " sekund";

 const timer = () => {
  seconds++;
  document.body.textContent = seconds + " sekund";
 }

 return timer
}

const start = clock();

setInterval(start, 1000); | IMPORTANT!!! START HAS ACCES TO VARIABLE seconds IN LINE 25 !!! THIS VARIABLE STORES CURRENT NUMBER. 
*/