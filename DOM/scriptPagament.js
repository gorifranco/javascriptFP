function crearFormulariTargeta() {
    let down = false;

    let divExercici = document.querySelector("fieldset").nextElementSibling
    divExercici.hidden = ""

    while(divExercici.firstElementChild !== null){
        console.log(divExercici.firstElementChild);
        divExercici.removeChild(divExercici.firstElementChild)
    }

    let divNombre = document.createElement("div")
    divNombre.classList.add("col-md-8")

    let labelNombre = document.createElement("label")
    labelNombre.classList.add("form-label")
    labelNombre.textContent = "Nombre"
    labelNombre.for = "inputNombre"

    let inputNombre = document.createElement("input")
    inputNombre.classList.add("form-control")
    inputNombre.id = "inputNombre"
    inputNombre.type = "text"
    inputNombre.maxLength = 19

    inputNombre.addEventListener("keypress", function (evt) {
        if (down) evt.preventDefault()
        down = true
        if (!evt.key.match("[1234567890]|Backspace")) {
            evt.preventDefault()
        }
    })
    inputNombre.addEventListener("keyup", function (evt) {
        down = false
        if (evt.key === "Backspace" && (inputNombre.value.length === 4 || inputNombre.value.length === 8 || inputNombre.value.length === 9 || inputNombre.value.length === 14)) {
            inputNombre.value = inputNombre.value.substring(0, inputNombre.value.length - 1)
        }
        if (evt.key !== "Backspace" && (inputNombre.value.length === 4 || inputNombre.value.length === 9 || inputNombre.value.length === 14)) {
            inputNombre.value += "-"
        }
    })

    divNombre.appendChild(labelNombre)
    divNombre.appendChild(inputNombre)


    let divData = document.createElement("div")
    divData.classList.add("col-md-2")

    let labelData = document.createElement("label")
    labelData.classList.add("form-label")
    labelData.for = "inputData"
    labelData.textContent = "Data"

    let inputData = document.createElement("input")
    inputData.classList.add("form-control")
    inputData.id = "inputData"
    inputData.type = "text"
    inputData.maxLength = 5
    inputData.addEventListener("keypress", function (evt) {
        if (down) evt.preventDefault()
        down = true
        console.log(evt.key);
        if (!evt.key.match("[1234567890]|Backspace")) {
            evt.preventDefault()
        }
    })
    inputData.addEventListener("keyup", function (evt) {
        down = false
        if (evt.key === "Backspace" && inputData.value.length === 2) {
            inputData.value = inputData.value.charAt(0)
        }
        if (evt.key !== "Backspace" && inputData.value.length === 2) {
            inputData.value += "/"
        }
    })

    divData.appendChild(labelData)
    divData.appendChild(inputData)


    let divCVV = document.createElement("div")
    divCVV.classList.add("col-md-2")

    let labelCVV = document.createElement("label")
    labelCVV.classList.add("form-label")
    labelCVV.for = "inputCVV"
    labelCVV.textContent = "CVV"

    let inputCVV = document.createElement("input")
    inputCVV.classList.add("form-control")
    inputCVV.id = "inputCVV"
    inputCVV.type = "text"
    inputCVV.maxLength = 3
    inputCVV.addEventListener("keydown", function (evt) {
        console.log(evt.key);
        if (!evt.key.match("[1234567890]|Backspace")) {
            evt.preventDefault()
        }
    })

    divCVV.appendChild(labelCVV)
    divCVV.appendChild(inputCVV)

    divExercici.appendChild(divNombre)
    divExercici.appendChild(divData)
    divExercici.appendChild(divCVV)
}

function crearFormulariTransferencia(){

    let divExercici = document.querySelector("fieldset").nextElementSibling
    divExercici.hidden = ""
    while(divExercici.firstElementChild !== null){
        console.log(divExercici.firstElementChild);
        divExercici.removeChild(divExercici.firstElementChild)
    }

    let div1 = document.createElement("div")
    div1.classList.add("row")
    div1.classList.add("mt-2")

    let span = document.createElement("span");
    span.appendChild(document.createTextNode("Conta bancària: "))
    span.style.fontWeight = "bold";

    let pCC = document.createElement("p");
    pCC.appendChild(span); // Append the span element after setting its text content
    pCC.appendChild(document.createTextNode("ES6000491500051234567892"))
    div1.appendChild(pCC);


    let pMissatge = document.createElement("p")
    pMissatge.textContent = "En rebre la transferència li enviarem un correu amb la confirmació de la comanda."

    div1.appendChild(pMissatge)
    divExercici.appendChild(div1)

}