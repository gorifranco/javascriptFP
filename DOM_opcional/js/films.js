import {getFilms} from "../servidor/servidor.js";

window.onload = () => {
    let films = JSON.parse(getFilms());
    let mostrador = document.getElementById("mostrador");
    films.forEach(a => mostrador.innerHTML += escriureObjecte(a))

    function escriureObjecte(objecte){
        let string = "<div><h2>";
        string += objecte.title;
        string += "</h2>"

        Object.entries(objecte).forEach(([key, value]) => {
            string +="<p><strong>"+ key+ "</strong>: " + value +"</p>"
        });
        string += "</div>"
        return string
    }
    document.getElementsByTagName("head")[0].innerHTML += "    <style>\n" +
        "        .resaltat{\n" +
        "            box-shadow: 0px 0px 5px 5px #437dcc;\n" +
        "        }\n" +
        "    </style>";

    document.getElementById("mostrador").childNodes.forEach(n => n.addEventListener("click", function (){
        if(n.classList.contains("resaltat")){
            n.classList.remove("resaltat")
        }  else{
            n.classList.add("resaltat")
        }
    }))

}

