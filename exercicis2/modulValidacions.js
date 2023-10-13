function sumar(a, b) {
    return Number(a) + Number(b);
}

function restar(a, b) {
    return Number(a) - Number(b);
}

function multiplicar(a, b) {
    return Number(a) * Number(b);
}

function dividir(a, b) {
    return Number(a) / Number(b);
}

function exponent(a, b) {
    return Number(a) ** Number(b)
}

function esEnter(str) {
    return /^[+-]?\d+$/.test(str);
}

function esEnterPositiu(str) {
    return /^\+?\d+$/.test(str);
}

function esEnterNegatiu(str) {
    return /^-\d+$/.test(str);
}

function esDecimal(str) {
    return /^[+-]?((\d+(\.0*[1-9]+\d*))|(\.0*[1-9]+\d*))$/.test(str);
}

function llegirEnter() {
    let a = "";
    while (true) {
        let a = prompt("Fica un enter: ")
        if (esEnter(a)) return Number(a);
    }
}

function validarMovil(str) {
    return /^[67]\d{8}$/.test(str)
}

function validarTelefon(str, tipus) {
    //0 - mòvil
    //1 - fixe
    if (tipus === 0) {
        return /^[67]\d{8}$/.test(str)
    } else if (tipus === 1) {
        return /^[89]\d{8}$/.test(str)
    }
    return false
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
    return !(str === '' || str === null);
}

export {validarObligatori, validarDNI, validarData, validarMovil, validarTelefon};