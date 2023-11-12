import {getActors} from "../js/servidor";


//Exercici 1

let actors = JSON.parse(getActors());


//Exercici 2

function treureActor(actor_id) {
    let actorTret;

    for (let actor of actors) {
        if (actor.actorId === actor_id) actorTret = actor;
    }
    document.getElementById("mostrador").innerHTML += "Id: " + actorTret.actorId + "<br/>";
    document.getElementById("mostrador").innerHTML += "Nom: " + actorTret.firstName + "<br/>";
    document.getElementById("mostrador").innerHTML += "Llinatge: " + actorTret.lastName + "<br/>";
}

export default function actorsExercici() {
    window.onload = () => {
        treureActor(20);
    }
}
