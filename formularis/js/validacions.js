function validarTelefon(str) {
    return /^[6789]\d{8}$/.test(str)
}

function validarData(str) {
    return /^(?:(?:(?:(?:0[1-9]|1[0-9]|2[0-8])-(?:0[1-9]|1[012]))|(?:(?:29|30|31)-(?:0[13578]|1[02]))|(?:(?:29|30)-(?:0[4,6,9]|11)))-(?:19|[2-9][0-9])\d\d)|(?:29-02-(?:19|[2-9][0-9])(?:00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96))$/.test(str)
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