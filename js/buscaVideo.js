import { conectaAPI } from "./conectaAPI.js";
import montaCard from "./mostraVideos.js";

async function buscaVideos (e) {
    e.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideos(dadosDePesquisa);
    const lista = document.querySelector("[data-lista]")   
    
    lista.innerHTML = ''
    
    busca.forEach(e => lista.appendChild(
        montaCard(e.titulo, e.descricao, e.url, e.imagem)));

    if (busca.length === 0) {
        lista.innerHTML = 
        `
        <h2 class="mensagem__titulo">Oops... não existem vídeos com esse termo!</h2><br>
        <button onclick="location.reload()" class="centro formulario__botao">Recarregar</button>
        `
    }
}

const botaoDePesquisa = document.querySelector("[data-botao]");
const pesquisa = document.querySelector("[data-pesquisa]");

botaoDePesquisa.addEventListener("click", e => buscaVideos(e));

pesquisa.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        buscaVideos(e);
    }
});
