// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony




// notice that height of body is 100vh!!! without that, js code doesn't work;

document.body.addEventListener('click', function (e) {

    console.log(e.clientX, e.clientY);
    if (e.clientX % 2 === 0 & e.clientY % 2 === 0) {
        document.body.style.backgroundColor = "red"
    } else if (e.clientX % 2 !== 0 & e.clientY % 2 !== 0) {
        document.body.style.backgroundColor = "blue"
    } else {
        document.body.style.backgroundColor = "green"
    }

})


//REMEMBER THAT screenY !== clientY