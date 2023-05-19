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
}

const botaoDePesquisa = document.querySelector("[data-botao]");
const pesquisa = document.querySelector("[data-pesquisa]");

botaoDePesquisa.addEventListener("click", e => buscaVideos(e));

pesquisa.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        buscaVideos(e);
    }
});
