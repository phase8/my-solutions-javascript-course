const names = ["walcz", "przemyś to jeszcze raz"];
const h1 = document.querySelector('h1')

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert("to już jest!!!!!!");
                return // here function ends. Code below won't be executed.
            }
        }
        names.push(newName);
        alert(`dodałes: ${newName}`);
        input.value = "";

    }

}
document.querySelector('.add').addEventListener('click', addName)

const showOptions = () => {
    let options = "";
    for (i = 0; i < names.length; i++) {
        options += names[i] + "---"
    }
    window.alert(options);

    //better alternative: alert(names.join("---"))
}

document.querySelector('.showOptions').addEventListener('click', showOptions)

const showAdvice = () => {
    const index = Math.floor(Math.random() * names.length)
    h1.textContent = names[index]
}

document.querySelector('.showAdvice').addEventListener('click', showAdvice)

const clean = (e) => {
    e.preventDefault();
    names.splice(2, names.length - 2) // better alternative: names.length = 0;
    document.querySelector('h1').textContent = ""
}

document.querySelector('.clean').addEventListener('click', clean)