function maxim(array){
    let max = array[0];
    for (let max1 of array) {
        if(max1 > max) max = max1;
    }
    return max;
}
function minim(array){
    let min = array[0];
    for (let min1 of array) {
        if(min1 < min) min = min1;
    }
    return min;
}

function mitjana(array) {
    let total = 0;
    for (let arrayElement of array) {
        total += parseInt(arrayElement);
    }
    return total/array.length;
}
