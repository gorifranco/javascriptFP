import {getDestacades} from "../js/servidor";

export default function cartelleraExercici(){
    window.onload = () => {

        //exercici 1

        let imatges = JSON.parse(getDestacades());
        document.getElementById("mostrador").src = imatges[0];


        //exercici 2

        let imatgeAct = 0;

        function canviarImatge() {
            imatgeAct++;
            if (imatgeAct >= imatges.length) imatgeAct = 0;
            document.getElementById("mostrador").src = imatges[imatgeAct];
        }

        setInterval(canviarImatge, 1500);
    }
}
