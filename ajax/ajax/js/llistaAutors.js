import {rutaAplicacio} from "../../js/url.js";
import {consulta} from "./llengues.js";

window.onload = () => {
    const url = rutaAplicacio + "/autors"
    const llista = document.getElementById("llista")
    let autors = consulta(url, "json");

    autors.then(a => {
        let aut = JSON.parse(a)
        aut = aut.sort(function (a, b) {
            return a.nomAut -b.nomAut
        })
        aut.forEach( a2 =>{
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(a2.nomAut))
            llista.appendChild(li)
        })
    })

}
