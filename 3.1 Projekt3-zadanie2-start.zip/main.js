let size = 10;
let orderElement = 1;

const init = () => {
    // tutaj kod
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    btn.innerText = "Dodaj 10 elementów listy";
}

const createLiElements = () => {

    for (x = 0; x < 10; x++) {
        var board = document.createElement('li');
        let ulMain = document.querySelector("ul")
        ulMain.appendChild(board);

    }

    let liMain = document.querySelectorAll("li")
    //let ten = liMain.slice(1, 2)

    for (x = 0; x < liMain.length; x++) {

        const divyArray = Array.from(liMain)
        let ten = divyArray.slice(-10)
        console.log(ten)
        ten[x].innerText = "Element nr " + orderElement;
        ten[x].style.listStyle = "none";
        ten[x].style.fontSize = size + "px";
        orderElement++
        size += 1
    }





    // tutaj kod
}

document.addEventListener("click", createLiElements)



init()