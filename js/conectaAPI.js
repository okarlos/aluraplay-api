/* Iniciando a API:
npm init
json-server --watch db.json
*/

async function buscaVideos (termoDeBusca) {
    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function listaVideos () {
    const conexao = await fetch ("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideo (titulo, descricao, url, imagem) {
    const conexao = await fetch ("http://localhost:3000/video", {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if(!conexao.ok) {
        throw new Error("Não foi possível subir o video!");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

export const conectaAPI = {
    listaVideos,
    criaVideo,
    buscaVideos
}