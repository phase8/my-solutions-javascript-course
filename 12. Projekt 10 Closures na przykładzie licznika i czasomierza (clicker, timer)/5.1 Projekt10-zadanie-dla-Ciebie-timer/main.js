const h1 = document.querySelector('h1');

const giveNumber = (number = 0) => {
    return number

}




const showTime = (NewNumber = giveNumber()) => {
    console.log(NewNumber)
    //let number = NewNumber
    h1.textContent = NewNumber
    let dwa = NewNumber++
    const xxx = () => {
        showTime(dwa)
    }

    return setTimeout(xxx, 1000)
}


showTime()