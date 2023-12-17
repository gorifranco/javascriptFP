import {rutaAplicacio} from "../../js/url.js";
import {consulta} from "./llengues.js";

let pagina = 0
const urlBase = rutaAplicacio + "/autors/paginats/"
const llista = document.getElementById("llista")

window.onload = () => {
    afegirPaginador()
    refrescarLlista()
}
function afegirPaginador(){
    const head = document.getElementsByTagName("head")[0]
    let bt = document.createElement("link")
    bt.setAttribute('href', "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css")
    bt.setAttribute("rel", "stylesheet")
    bt.setAttribute("integrity", "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN")
    bt.setAttribute("crossorigin", "anonymous")
    head.appendChild(bt)

    let p = document.getElementById("links")
    let nav = document.createElement("nav")
    p.appendChild(nav)

    let ul = document.createElement("ul")
    ul.classList.add("pagination")
    nav.appendChild(ul)

    let li1 = document.createElement("li")
    li1.classList.add("page-item")
    let a1 = document.createElement("a")
    a1.innerText = "<"
    a1.classList.add("page-link")
    li1.appendChild(a1)
    ul.appendChild(li1)
    a1.onclick = () => {
        if(pagina>0) pagina--
        div.textContent = pagina.toString()
        refrescarLlista()
    }

    let li3 = document.createElement("li")
    li3.classList.add("page-item")
    let div = document.createElement("div")
    div.textContent = "0"
    div.classList.add("page-link")
    li3.appendChild(div)
    ul.appendChild(li3)

    let li2 = document.createElement("li")
    li2.classList.add("page-item")
    let a2 = document.createElement("a")
    a2.innerText = ">"
    a2.classList.add("page-link")
    li2.appendChild(a2)
    ul.appendChild(li2)
    a2.onclick = () => {
        pagina++
        div.textContent = pagina.toString()
        refrescarLlista()
    }

}

function refrescarLlista(){

    let url = urlBase + pagina + "-10"
    let autors = consulta(url, "json")
    while (llista.hasChildNodes()){
        llista.removeChild(llista.lastChild)
    }

    autors.then(a => {
        let aut = JSON.parse(a)
        aut = aut.content.sort(function (a, b) {
            return a.nomAut -b.nomAut
        })
        aut.forEach( a2 =>{
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(a2.nomAut))
            llista.appendChild(li)
        })
    })
}
