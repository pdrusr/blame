import conexao from "./conexao.js"

async function Obter() {
    const comando = "SELECT * FROM postagem;"
    const resultado = await conexao.query(comando)
    return resultado.rows
} 

async function Inserir(codigo, autor, descricao, imagem) {
    const comando = "INSERT INTO postagem VALUES($1, $2, $3, $4);"
    const resultado = await conexao.query(comando, [ codigo, autor, descricao, imagem ])
    return resultado
}

export default { Obter, Inserir }