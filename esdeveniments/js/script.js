function afegeixEsdeveniment(par1) {

    document.getElementsByTagName("div")[0].innerHTML = par1.target.id + ": " + par1.type + "<br/>" + document.getElementsByTagName("div")[0].innerHTML;

    document.getElementById("contador").innerText = ++contador;
}

let contador = 0;

window.onload = () => {
    const text = document.getElementById("inputText");

    text.addEventListener("copy", afegeixEsdeveniment)
    text.addEventListener("cut", afegeixEsdeveniment)
    text.addEventListener("paste", afegeixEsdeveniment)
    text.addEventListener("change", afegeixEsdeveniment)
    text.addEventListener("click", afegeixEsdeveniment)
    text.addEventListener("focus", afegeixEsdeveniment)
    text.addEventListener("blur", afegeixEsdeveniment)
    text.addEventListener("mouseleave", afegeixEsdeveniment)
    text.addEventListener("mouseover", afegeixEsdeveniment)

    const paragraf = document.getElementById("paragraf1");

    paragraf.addEventListener("copy", afegeixEsdeveniment)
    paragraf.addEventListener("cut", afegeixEsdeveniment)
    paragraf.addEventListener("paste", afegeixEsdeveniment)
    paragraf.addEventListener("change", afegeixEsdeveniment)
    paragraf.addEventListener("click", afegeixEsdeveniment)
    paragraf.addEventListener("focus", afegeixEsdeveniment)
    paragraf.addEventListener("blur", afegeixEsdeveniment)
    paragraf.addEventListener("mouseleave", afegeixEsdeveniment)
    paragraf.addEventListener("mouseover", afegeixEsdeveniment)
}