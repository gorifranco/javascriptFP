function maxim(array) {
    let max = array[0];
    for (let max1 of array) {
        if (max1 > max) max = max1;
    }
    return max;
}

function minim(array) {
    let min = array[0];
    for (let min1 of array) {
        if (min1 < min) min = min1;
    }
    return min;
}

function mitjana(array) {
    let total = 0;
    for (let arrayElement of array) {
        total += parseInt(arrayElement);
    }
    return total / array.length;
}

function total(array) {
    let total = 0;
    for (let arrayElement of array) {
        total += parseInt(arrayElement);
    }
    return total;
}

function copiarArray(array) {
    let copiaArray = [];
    array.copyTo(copiaArray);
    return copiaArray;
}

function moda(array) {
    let valors = [];
    let repeticions = [];

    for (let arrayElement of array) {
        if (valors.includes(array)) {
            repeticions[valors.findIndex(arrayElement)]++
        } else {
            valors.push(arrayElement);
            repeticions.push(1);
        }
    }
    return valors[repeticions.findIndex(maxim(repeticions))];
}

function toCamelCase(frase) {
    let copia = "";
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === ' ') {
            frase.charAt(i + 1).toUpperCase();
        } else {
            copia.concat(frase.charAt(i));
        }
    }
    return copia;
}

function llevarDuplicats(array) {
    let temp = [];
    for (let arrayElement of array) {
        if (!temp.includes(arrayElement)) temp.push(arrayElement);
    }
    return temp;
}
