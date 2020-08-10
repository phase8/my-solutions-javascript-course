 // http://websamuraj.pl/examples/js/projekt11/

 var matches = document.getElementsByTagName("p");


 //

 let submit = document.getElementById("submit")
 let testo = document.getElementById("testo")
 //testo.addEventListener("click", stopFunction);





 //

 function stopFunction() {

     clearInterval(timerActivator)

 }

 const h1 = document.querySelector('h1');
 let number = 0

 function showTime() {
     function timer() {
         h1.textContent = number
         number++
         /*
         if (5 < number) {
             clearInterval(timerActivator)
             console.log(number)
         }
         */
         testo.onclick = stopFunction;

         function stopFunction() {

             clearInterval(timerActivator)
         }
         submit.onclick = start

         function start() {
             showTime()
             console.log("start")
         }


     }

     let timerActivator = setInterval(timer, 1000)
 }

 showTime()