import * as Funcions from './modulValidacions';

document.getElementById("valTf").innerHTML = "<p>Validat telèfon 123456789: " + Funcions.validarTelefon("123456789") + "</p>";
document.getElementById("valDNI").innerHTML = "Validat DNI 123456789F: " + Funcions.validarDNI("123456789F");
