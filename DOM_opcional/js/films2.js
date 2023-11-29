import {getFilms} from "../servidor/servidor";

window.onload = () => {
    let films = JSON.parse(getFilms());
    let mostrador = document.getElementById("mostrador");

    films.forEach(f => mostrador.innerHTML += "<div><h2>f.title</h2></div>")


    function crearDiv(titol) {
        let div = document.createElement("div")
        div.innerHTML = "<h2>titol</h2>"
        div.addEventListener("click", function () {

        })
    }
}