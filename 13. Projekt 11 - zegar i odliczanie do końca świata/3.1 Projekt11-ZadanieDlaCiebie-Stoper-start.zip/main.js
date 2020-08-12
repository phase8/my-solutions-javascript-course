 // http://websamuraj.pl/examples/js/projekt11/

 var matches = document.getElementsByTagName("p");

 let playStop = document.getElementById("submit")
 let stop = document.getElementById("testo")

 //let playStop = document.getElementsByClassName("main")[0]
 //let stop = document.querySelector(".reset")
 let isActive = false



 const h1 = document.querySelector('h1');
 let number = 0

 //function showTime() {}

 playStop.onclick = start

 function start() {
     console.log("start")
     if (isActive = false) {
         playStop.textContent = "Pauza"

         function timer() {
             h1.textContent = number
             number++
             //stop.onclick = stopFunction;
             /*
                     function stopFunction() {
   
                         clearInterval(timerActivator)
                     }
            */
         }

         let timerActivator = setInterval(timer, 1000)
         isActive = !isActive
     } else {
         playStop.textContent = "Start"
         stopFunction()
         isActive = !isActive
     }
 }

 function stopFunction() {
     clearInterval(timerActivator)
 }