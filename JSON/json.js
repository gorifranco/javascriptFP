import {Alumne, Modul} from "../Objectes_definits/Ex4Classes";
export function crearObjecte() {
let al1 = new Alumne("gori", "Franco", 1);
al1.afegirModul(new Modul("as", 1, 1));
    al1.afegirModul(new Modul("as2", 2, 1));
    al1.afegirModul(new Modul("as3", 3, 1));
    return al1;
}
export function crearAlumno() {
    let alumno = {
        nombre: "Juan",
        apellidos: "Pérez López",
        cicle: "Desarrollo de Aplicaciones Web",
        numModulos: 6
    };

    return alumno;
}