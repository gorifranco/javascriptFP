import {rutaAplicacio} from "../../js/url.js";

window.onload = () => {
    let llista = document.getElementById("llista");
    let ruta = rutaAplicacio + "/llengues";
    let llenguesPromise = consulta(ruta);

    llenguesPromise.then(llengues => {
        llengues.forEach(item => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(item.id));
            llista.appendChild(li);
        });
    }).catch(error => {
        console.error("Error al obtener idiomas:", error);
    });
}

export function consulta(rutaAplicacio, format = "json") {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.addEventListener("readystatechange", function () {
            console.log(rutaAplicacio + ": " + req.readyState)
            if (req.readyState === 4) {
                if (req.status >= 200 && req.status <= 299) {
                    let dades = ""
                    if (req.responseText !== "") {
                        dades = JSON.parse(req.responseText);
                    }
                    resolve(dades);
                } else {
                    reject(new Error(`Error de solicitud: ${req.status}`));
                }
            }
        });
        req.open("GET", rutaAplicacio);
        req.setRequestHeader("Accept", "application/" + format);
        req.send();
    });
}