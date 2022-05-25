import express from "express"
import { uuid } from "uuidv4"
import postagem from "./database/postagem.js"

const rotas = express.Router()

rotas.get("/", function(requisicao, resposta) {
    postagem.Obter()
    .then(function(resultados) {
        //console.log(resultados)
        resposta.render("paginainicial.pug", { resultados })
    })
})

rotas.get("/perfil", function(requisicao, resposta) {
    resposta.render("paginaperfil.pug")
})

rotas.get("/postagem", function(requisicao, resposta) {
    resposta.render("paginapostagem.pug")
})

rotas.post("/postagem", function(requisicao, resposta) {
    const { autor, descricao, imagem } = requisicao.body
    postagem.Inserir(uuid(), autor, descricao, imagem)
    resposta.redirect("back")
})

export default rotas