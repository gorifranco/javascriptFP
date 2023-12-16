import {rutaAplicacio} from "../../js/url.js";

window.onload = () => {

escriureNacionalitats()
    const formulari = document.getElementById("formAutor")
formulari.action = rutaAplicacio +"/autors"

}

function escriureNacionalitats(){
    const selectNacionalitats = document.getElementById("nacionalitat")
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status <= 299) {
               let dades = req.responseText;
let nacionalitats = JSON.parse(dades)
                nacionalitats.forEach( n => {
                    let option = document.createElement("option")
                    option.value = n.id
                    option.appendChild(document.createTextNode(n.id))
                    selectNacionalitats.appendChild(option)
                })
            }

            }
    })
    req.open("GET", rutaAplicacio + "/nacionalitats");
    req.setRequestHeader("Accept", "application/json");
    req.send();
}

function ferInsert(){
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", function () {
        if (req.readyState === 4) {
            if (req.status >= 200 && req.status <= 299) {
                console.log(req.responseText)
            }
        }
    })
    req.open("POST", rutaAplicacio + "/autors");
    req.setRequestHeader("Accept", "application/json");
    req.send();
}