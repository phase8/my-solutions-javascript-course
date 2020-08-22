 // http://websamuraj.pl/examples/js/projekt11/

 let test = 0
 let startTime = test + new Date().getTime(); // TUTAJ SKONCZYLES
 let second
 let millisecond
 let nowTime
 let stopPeriod = 0
 let playStop = document.getElementsByClassName("main")[0]
 let stop = document.querySelector(".reset")
 let show = document.querySelector(".show")
 let isActive = false
 let timerActivator = setInterval(timerMilliseconds, 40)
 clearInterval(timerActivator)
 let stopPeriodCount = setInterval(stopPeriod1, 1)
 clearInterval(stopPeriodCount)

 function stopPeriod1() {
     stopPeriod++
     // console.log(stopPeriod)
 }

 function timerMilliseconds() {
     nowTime = new Date().getTime();
     seconds = Math.floor((nowTime - startTime + stopPeriod) / 1000)
     milisecond = Math.floor((nowTime - startTime) % 60);
     let showSeconds = nowTime < 1000 ? 0 : seconds
     let showMiliseconds = milisecond > 9 ? milisecond : " " + milisecond
     show.textContent = showSeconds + "." + showMiliseconds
 }

 playStop.onclick = start

 function start() {
     if (isActive === false) {
         playStop.textContent = "Pauza"
         timerActivator = setInterval(timerMilliseconds, 40)
         clearInterval(stopPeriodCount)



         isActive = !isActive
     } else {
         playStop.textContent = "Start"
         stopPeriodCount = setInterval(stopPeriod1, 1)
         clearInterval(timerActivator)
         isActive = !isActive

     }
 }