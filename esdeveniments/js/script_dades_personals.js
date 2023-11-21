window.onload = () => {

    let arrayPoblacions = new Map();
    arrayPoblacions.set("Mallorca", ["Inca", "Santa Maria"]);
    arrayPoblacions.set("Menorca", ["Mao", "Ciutadella"])


    window.addEventListener("resize", function () {
        document.getElementById("illa").value = "Mallorca";
        document.getElementById("nom").focus()
    })

    document.getElementById("formulari").addEventListener("mouseleave", function () {
        document.getElementById("reset").click();
    })
    document.getElementsByTagName("form")[0].addEventListener("paste", function () {
        document.getElementById("submit").click();
    })

    document.getElementById("formulari").addEventListener("reset", function (evt) {
        let confirmar = confirm("Segur que vols fer resset?");
        if (confirmar) {
            document.getElementById("reset").click();
        } else {
            evt.preventDefault();
        }
    })

    let select = document.getElementById("illa")
    let poblacio = document.getElementById("poblacio")
    select.addEventListener("change", function () {
        while (poblacio.options.length > 0) {
            poblacio.options.remove(0)
        }

        let a = arrayPoblacions.get(select.value);
        for (let aElement of a) {
            let x = document.createElement("option")
            x.value = aElement;
            x.text = aElement;
            document.getElementById("poblacio").options.add(x);
        }

    })


}

function validar() {
    let missatge = "";

    let inputs = document.getElementsByTagName("input");
    for (let input of inputs) {
        if (!validarObligatori(input.value)) {
            input.style.border = "2px solid red";
            missatge += (input.name + " no pot estar buit.\n");
        } else {
            if (input.type === "tel" && !validarTelefon(input.value)) missatge += input.name + " incorrecte\n";
            if (input.type === "date" && !validarData(input.value)) missatge += input.name + " incorrecte\n";
        }
    }
    let textArea = document.getElementsByTagName("textarea")[0];
    if (!validarObligatori(textArea.value)) {
        textArea.style.border = "2px solid red";
    }
    let selectorSexe = document.getElementsByTagName("select")[0];
    if (selectorSexe.selectedIndex === 0) {
        selectorSexe.style.border = "2px solid red";
    }
    console.log(missatge);
    if (missatge !== "") alert(missatge);
}

function validarTelefon(str) {
    return /^[6789]\d{8}$/.test(str)
}

function validarData(str) {
    return /^([0-2]\d|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(str)
}

function validarObligatori(str) {
    return !(str === null || str === '');
}
