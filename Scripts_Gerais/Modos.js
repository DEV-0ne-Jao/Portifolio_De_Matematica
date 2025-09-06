/* Soli Deo Gloria */

function mudarModo() {
    let estilo = document.getElementById("EstiloPagina");
    let botao = document.getElementById("btnMudarModo");

    if(estilo.href.includes("ModoEscuro.css") ) {
        estilo.href = "../CSS/ModoClaro.css";
        botao.innerText = "Mudar para modo escuro";
    } else if(estilo.href.includes("ModoClaro.css") ) {
        estilo.href = "../CSS/ModoEscuro.css";
        botao.innerText = "Mudar para modo claro";
    }
}