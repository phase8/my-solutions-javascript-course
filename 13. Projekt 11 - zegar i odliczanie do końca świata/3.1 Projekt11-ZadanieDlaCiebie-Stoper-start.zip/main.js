 // http://websamuraj.pl/examples/js/projekt11/

 let startTime = ""
 let second = 0
 let millisecond = 0
 let nowTime = ""

 let playStop = document.getElementsByClassName("main")[0]
 let stop = document.querySelector(".reset")
 let show = document.querySelector(".show")
 let isActive = false



 let timerActivator2 = setInterval(timerMilliseconds, 1)
 clearInterval(timerActivator2)

 function timerMilliseconds() {
     nowTime = new Date().getTime();
     seconds = Math.floor((nowTime - startTime) / 1000)
     milisecond = Math.floor((nowTime - startTime) % 60);
     let showMiliseconds = milisecond > 9 ? milisecond : " " + milisecond
     show.textContent = seconds + "." + showMiliseconds
 }

 playStop.onclick = start

 function start() {
     if (isActive === false) {
         playStop.textContent = "Pauza"
         timerActivator2 = setInterval(timerMilliseconds, 40)
         startTime = new Date().getTime();
         isActive = !isActive
     } else {
         playStop.textContent = "Start"
         clearInterval(timerActivator2)
         isActive = !isActive
     }
 }


 /* 
  // http://websamuraj.pl/examples/js/projekt11/


 */