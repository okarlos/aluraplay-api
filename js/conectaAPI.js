async function listaVideos () {
    const conexao = await fetch ("http://localhost:3000");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos
}