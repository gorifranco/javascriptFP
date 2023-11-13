window.onload = () => {
    window.addEventListener("resize", function () {
        document.getElementById("illa").value = "Mallorca";
        document.getElementById("nom").focus()
    })

    document.getElementById("formulari").addEventListener("mouseleave", function (){
        document.getElementById("reset").click();
    })
    document.getElementsByTagName("form")[0].addEventListener("paste", function (){
        document.getElementById("submit").click();
    })

    document.getElementById("formulari").addEventListener("reset", function (evt){
        let confirmar = confirm("Segur que vols fer resset?");
        if(confirmar){
            document.getElementById("reset").click();
        } else{
            evt.preventDefault();
        }
    })

    document.getElementById("illa").addEventListener("blur", function (){
        document.getElementById("poblacio").hidden = true;
        document.getElementById("pobSel").hidden = false;

            })

}
function validar(){
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
