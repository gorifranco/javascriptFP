function Aplicacio(nom, tipus, descripcio, preu) {
    this.nom = nom;
    this.tipus = tipus;
    this.descripcio = descripcio;
    this.preu = preu;
    this.descarregues = 0;
}

Aplicacio.prototype.toString = function () {
    return "Nom: " + this.nom + ", Tipus: " + this.tipus + ", Descripció: " + this.descripcio +
        ", Preu: " + this.preu + ", Descàrregues totals: " + this.descarregues;
}

