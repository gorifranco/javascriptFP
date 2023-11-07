function crearObjecte() {
    return {
        nom: "Gori",
        llinatges: "Franco Nicolau",
        curs: "1r",
        moduls: 5
    };
}
function tornarJSON(objecte){
    return JSON.stringify(objecte);
}
function tornarObjecte(json){
    return JSON.stringify(json);
}
function tornarCadena(json) {
    return tornarObjecte(json).toString();
}
function tornarArrayDObjectes(array){
    let cadena = "";
    array.forEach(a => cadena += tornarJSON(a));
    return cadena;
}