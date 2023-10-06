import{validarTelefon, validarDNI} from "./modulValidacions.js";

    document.getElementById("valTf").innerHTML = "<p>Validat telèfon 123456789: " + validarTelefon("123456789") + "</p>";
    document.getElementById("valDNI").innerHTML = "Validat DNI 123456789F: " + validarDNI("123456789F");
