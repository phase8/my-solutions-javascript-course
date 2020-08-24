 // http://websamuraj.pl/examples/js/projekt11/

 let time = 0
 let playStop = document.getElementsByClassName("main")[0]
 let stop = document.querySelector(".reset")
 let show = document.querySelector(".show")
 let isActive = false
 let timerActivator

 function timerMilliseconds() {
     time++
     show.textContent = (time / 100).toFixed(2); //  "toFixed" converts a number into a string, rounding the number to keep only two decimals:
 }

 const stopFunction = () => {
     time = 0;
     show.textContent = "---"
     isActive = !isActive
     clearInterval(timerActivator)
 }

 function start() {

     if (!isActive) {
         playStop.textContent = "Pauza"
         timerActivator = setInterval(timerMilliseconds, 50)
         isActive = !isActive
     } else {
         playStop.textContent = "Start"
         clearInterval(timerActivator)
         isActive = !isActive
     }
 }

 playStop.addEventListener('click', start);
 stop.onclick = stopFunction

 /*

UNFINISHED SOLUTION:

 let startTime = 0
 let second
 let millisecond
 let nowTime
 let stopPeriod = 0
 let timeWhenStop = 0
 let timeWhenStart = 0
 let begin = 0
 let playStop = document.getElementsByClassName("main")[0]
 let stop = document.querySelector(".reset")
 let show = document.querySelector(".show")
 let isActive = false
 let timerActivator = setInterval(timerMilliseconds, 40)
 clearInterval(timerActivator)


 function timerMilliseconds() {
     nowTime = new Date().getTime();
     let stopTimePeriod = timeWhenStart - timeWhenStop;
     //console.log(stopTimePeriod)
     seconds = Math.floor(((((nowTime) - (startTime + stopTimePeriod)) / 1000)))
     console.log(startTime)
     milisecond = Math.floor((nowTime - startTime) % 1000);
     let showSeconds = startTime < 1000 ? 0 : seconds
     let showMiliseconds = milisecond > 9 ? milisecond : " " + milisecond
     show.textContent = showSeconds + "." + showMiliseconds
 }

 playStop.onclick = start

 function start() {

     if (isActive === false) {
         timeWhenStart = new Date().getTime();
         startTime = startTime == 0 ? new Date().getTime() : startTime
         new Date().getTime();
         begin =
             playStop.textContent = "Pauza"
         timerActivator = setInterval(timerMilliseconds, 50)
         //console.log(timeWhenStart)

         isActive = !isActive
     } else {
         timeWhenStop = new Date().getTime();
         playStop.textContent = "Start"

         clearInterval(timerActivator)
         isActive = !isActive
         //console.log(timeWhenStop)


     }
 }
 */