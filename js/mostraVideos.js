import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");
const erro = document.querySelector("[data-erro]");

export default function montaCard (titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = 
    `
        <iframe width="100%" height="72%" src="${url}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;

    return video;
}

async function listaVideos() {
    try {
        const listaApi = await conectaAPI.listaVideos();
        listaApi.forEach(element => lista.appendChild(
            montaCard(element.titulo, element.descricao, element.url, element.imagem)));
    } catch {
        erro.innerHTML = 
        `
        <h2 class="mensagem__titulo">Oops... não existem vídeos aqui!</h2><br>
        <button onclick="location.reload()" class="centro formulario__botao">Tenar novamente</button>
        `
        erro.classList.remove("sumir");
    }
}

listaVideos()