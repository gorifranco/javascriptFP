function setCookie(c_name, value, exdays, domain, path) {
    let exdate = new Date();
//expirarà d'avui a exdays dies
    exdate.setDate(exdate.getDate() + exdays);
    let c_value = encodeURI(value)
        + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString())
        + ((domain == null) ? "" : "; domain=" + encodeURI(domain))
        + ((path == null) ? "" : "; path=" + encodeURI(path));
    document.cookie = c_name + "=" + c_value;
}

function getCookie(nomCookie) {
    let galletes = document.cookie.split(";");
    for (let i = 0; i < galletes.length; i++) {
        let parts = galletes[i].split("=");
        let nom = parts[0];
        let valor = parts[1];
        nom = nom.replace(/^\s+|\s+$/g, ""); // trim del nom
        if (nom === nomCookie) {
            return decodeURI(valor);
        }
    }
}

function deleteCookie(nom) {
    setCookie(nom, "", -1);
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

// Itera sobre cada cookie y elimínala configurando una fecha de caducidad en el pasado
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}