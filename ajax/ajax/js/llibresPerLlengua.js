import {consulta} from "./llengues.js";
import {rutaAplicacio} from "../../js/url.js";

window.onload = () => {
    let select = document.getElementById("sLlengues")
    const ruta1 = rutaAplicacio + "/llengues"
    const ruta2 = rutaAplicacio + "/llibres/perLlengua/"
    let llenguesPromise = consulta(ruta1, "json")
    let llibreria = document.getElementById("llibreria")

    llenguesPromise.then(llengues => {
        llengues.forEach(item => {
            let option = document.createElement("option")
            option.appendChild(document.createTextNode(item.id))
            option.value = item.id
            select.appendChild(option)
        });
    }).catch(error => {
        console.error("Error al obtener idiomas:", error);
    });

    select.addEventListener("change", function () {
        while (llibreria.hasChildNodes()) llibreria.removeChild(llibreria.lastChild)

        if (select.value !== "") {

            let ruta = ruta2 + select.value
            let llibresPromise = consulta(ruta, "json")
            llibresPromise.then(llibres => {
                llibres.forEach(item => {
                    let div = document.createElement("div")
                    div.classList.add("divLlibre")
                    let p1 = document.createElement("p")
                    p1.appendChild(document.createTextNode("ID: " + item.id))
                    div.appendChild(p1)

                    let p2 = document.createElement("p")
                    p2.appendChild(document.createTextNode("TITOL: " + item.titol))
                    div.appendChild(p2)

                    let p3 = document.createElement("p")
                    p3.appendChild(document.createTextNode("ISBN: " + item.isbn))
                    div.appendChild(p3)

                    llibreria.appendChild(div)
                })
            }).catch(error => {
                console.error("Error al obtener libros:", error);
            });
        }
    })
}