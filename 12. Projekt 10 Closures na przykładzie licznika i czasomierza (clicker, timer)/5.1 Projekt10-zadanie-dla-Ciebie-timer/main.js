const h1 = document.querySelector('h1');

function giveNumber(number = 0) {
    //console.log("ok")
    // let nextNumber = number++
    h1.textContent = number
    return number
}

function showTime(NewNumber = giveNumber()) {
    let number = NewNumber

    // console.log(number)

    function test() {
        const h1 = document.querySelector('h1');
        //number = number++
        number++
        //if (number > 10) {
        //     return
        // }
        h1.textContent = number
        // console.log(number)
    }

    setInterval(test, 1000)
}

showTime()