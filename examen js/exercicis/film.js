//Exercici 1

function Pelicula(titol, descripcio, durada_minuts, any_estrena) {

    this.titol = titol;
    this.descripcio = descripcio;
    this.durada_minuts = durada_minuts;
    this.any_estrena = any_estrena;
    this.llista_actors = new Set;


}

Pelicula.prototype.afegir_actor = function (actor) {
    this.llista_actors.add(actor);
}
Pelicula.prototype.eliminar_actor = function (actor) {
    this.llista_actors.delete(actor);
}

//Exercici 2

window.onload = () => {
    let pelicula1 = new Pelicula("platoon", "pelicula de bregues",
        125, 1995);

    pelicula1.afegir_actor("actor1");
    pelicula1.afegir_actor("actor2");
    pelicula1.eliminar_actor("actor2");

    document.getElementById("mTitol").innerText = pelicula1.titol;
    document.getElementById("mDescripcio").innerText = pelicula1.descripcio;
    document.getElementById("mDurada").innerText += pelicula1.durada_minuts;
    document.getElementById("mAny").innerText += pelicula1.any_estrena;
    pelicula1.llista_actors.forEach(actor => document.getElementById("mActors").innerText += actor + " ");

}
