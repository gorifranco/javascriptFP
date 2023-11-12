function validarTelefon(str) {
    return /^[6789]\d{8}$/.test(str)
}

function validarData(str) {
    return /^([0-2]\d|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(str)
}

function validarDNI(str) {
    if (str.length !== 9) return false;
    if (!(/^\d{8}$/.test(str.substring(0, 8)))) return false;
    return str.at(8) === ("TRWAGMYFPDXBNJZSQVHLCKET").at(str.substring(0, 8) % 23);
}

function validarObligatori(str) {
    return !(str === null || str === '');
}

window.onload = () => {
    document.getElementById("submit").onclick = () => {
        let missatge = "";

        let inputs = document.getElementsByTagName("input");
        for (let input of inputs) {
            if(!validarObligatori(input.value)){
                input.style.border =  "2px solid red";
                missatge += (input.name + " no pot estar buit.\n");
            }else{
                if(input.type === "tel" && !validarTelefon(input.value)) missatge += input.name + " incorrecte\n";
                if(input.type === "date" && !validarData(input.value)) missatge += input.name + " incorrecte\n";
            }
        }
        let textArea = document.getElementsByTagName("textarea")[0];
        if(!validarObligatori(textArea.value)){
            textArea.style.border =  "2px solid red";
        }
        let selectorSexe = document.getElementsByTagName("select")[0];
        if(selectorSexe.selectedIndex === 0){
            selectorSexe.style.border =  "2px solid red";
        }
        console.log(missatge);
        if(missatge !== "") alert(missatge);
    }
}

export {validarData, validarTelefon, validarDNI, validarObligatori}