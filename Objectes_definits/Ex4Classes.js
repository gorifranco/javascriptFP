export class Alumne {

    constructor(nom, llinatges, curs) {
        this.nom = nom;
        this.llinatges = llinatges;
        this.curs = curs;
        this.moduls = new Set;
    }

    afegirModul (modul){
        this.moduls.add(modul);
    }

    eliminarModul(modul){
        this.moduls.delete(modul);
    }

    nomComplet(){
        return this.llinatges + " " + this.nom;
    }
}

export class Modul{
    constructor(nom, codi, curs) {
    this.nom = nom;
    this.codi = codi;
    this.curs = curs;
    }
}
