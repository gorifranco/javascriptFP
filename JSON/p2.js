function crearAlumno2() {
    let alumno = {
        nombre: "Juan",
        apellidos: "Pérez López",
        cicle: "Desarrollo de Aplicaciones Web",
        numModulos: 6
    };
    return alumno;
}
function tornarCadena(json){
    return JSON.stringify(json);
}