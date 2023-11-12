import {getActors} from "../js/servidor";

window.onload = () => {

    //Exercici 1

    let actors = JSON.parse(getActors());
    let array = [];


    actors.forEach(actor => array.push(actor.lastName + ", " + actor.firstName));
    array.forEach(item => document.getElementById("mNoms").innerText += item);

    //Exercici 2

    array.sort(function (a, b) {
        if (a < b) return 1;
        else if (a > b) return -1;
        else return 0;
    })

    array.forEach(a => document.getElementById("mOrdenats").innerHTML += a + " ");


    //Exercici 3

    array.filter(a => a.startsWith("G"));
    array.forEach(a => document.getElementById("mTriats").innerHTML += a + " ");


}


