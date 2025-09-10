/* Soli Deo Gloria */

function mudarModo() {
    let estilo = document.getElementById("EstiloPagina");
    let botao = document.getElementById("btnMudarModo");
    let codInicial = estilo.href.split("/");
    let codFinal = "";

    for(let i=0; i<(codInicial.length-1); i++) {
        codFinal += codInicial[i] + "/";
    }

    if(estilo.href.includes("ModoEscuro.css") ) {
        codFinal += "ModoClaro.css";
        botao.innerText = "Mudar para modo escuro";
    } else if(estilo.href.includes("ModoClaro.css") ) {
        codFinal += "ModoEscuro.css";
        botao.innerText = "Mudar para modo claro";
    }
    estilo.href = codFinal;
}