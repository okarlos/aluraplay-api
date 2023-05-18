import { conectaAPI } from "./conectaAPI.js";

async function buscaVideos (e) {
    e.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideos(dadosDePesquisa);
    console.log(busca);
}

const botaoDePesquisa = document.querySelector("[data-botao]");
const pesquisa = document.querySelector("[data-pesquisa]");

botaoDePesquisa.addEventListener("click", e => buscaVideos(e));

pesquisa.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        buscaVideos(e);
    }
});
