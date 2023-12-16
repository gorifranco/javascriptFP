import {consulta} from "./llengues.js";
import {rutaAplicacio} from "../../js/url.js";

window.onload = () => {
    let select = document.getElementById("sLlengues")
    const parser = new DOMParser()
    const ruta1 = rutaAplicacio + "/llengues"
    const ruta2 = rutaAplicacio + "/llibres/perLlengua/"
    let llenguesPromise = consulta(ruta1, "xml")
    let llibreria = document.getElementById("llibreria")

    llenguesPromise.then(llengues => {
        console.log(llengues);
        let dades = parser.parseFromString(llengues, "text/xml")
        let items = dades.getElementsByTagName("item")

        for (const item of items) {
            let option = document.createElement("option")
            option.appendChild(document.createTextNode(item.firstElementChild.textContent))
            option.value = item.firstElementChild.textContent
            select.appendChild(option)
        }
    }).catch(error => {
        console.error("Error al obtener idiomas:", error);
    });

    select.addEventListener("change", function () {
        while (llibreria.hasChildNodes()) llibreria.removeChild(llibreria.lastChild)
        if (select.value !== "") {

            let ruta = ruta2 + select.value

            let llibresPromise = consulta(ruta, "xml")
            llibresPromise.then(llibres => {

                let dades = parser.parseFromString(llibres, "text/xml")
                let items = dades.getElementsByTagName("item")
                for (const item of items) {
                    let div = document.createElement("div")
                    div.classList.add("divLlibre")
                    let p1 = document.createElement("p")
                    p1.appendChild(document.createTextNode("ID: " + item.firstChild.firstChild.textContent))
                    div.appendChild(p1)

                    let p2 = document.createElement("p")
                    p2.appendChild(document.createTextNode("TITOL: " + item.firstChild.nextSibling.firstChild.textContent))
                    div.appendChild(p2)

                    let text = item.lastChild.firstChild
                    if(text != null){
                        let p3 = document.createElement("p")
                        p3.appendChild(document.createTextNode("ISBN: " + text.textContent))
                        div.appendChild(p3)
                    }

                    llibreria.appendChild(div)
                }
            }).catch(error => {
                console.error("Error al obtener libros:", error);
            });
        }
    });
}