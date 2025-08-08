import { listarCursos, inserirCurso, listarTenis, inserirTenis, listarAnimes, inserirAnimes, inserirSeries, listarSeries, listarFilmes, inserirFilmes } from "./repository.js"
import express from 'express'
const api = express();
api.use(express.json());

api.get('/curso', async (req, resp) => {
  let registros = await listarCursos();
  resp.send(registros);
})

api.post('/curso', async (req, resp) => {
  let novoCurso = req.body;
  
  let id = await inserirCurso(novoCurso);

  resp.send({
    novoId: id
  })
})

api.get('/tenis', async (req, resp) => {
    let registros = await listarTenis();
    resp.send(registros);
})

api.post('/tenis', async (req, resp) => {
  let novoTenis = req.body;
  
  let id = await inserirTenis(novoTenis);

  resp.send({
    novoId: id
  })
})

api.get('/animes', async (req, resp) => {
    let registros = await listarAnimes();
    resp.send(registros);
})

api.post('/animes', async (req, resp) => {
  let novoAnime = req.body;
  
  let id = await inserirAnimes(novoAnime);

  resp.send({
    novoId: id
  })
})

api.get('/series', async (req, resp) => {
    let registros = await listarSeries();
    resp.send(registros);
})

api.post('/series', async (req, resp) => {
  let novaSerie = req.body;
  
  let id = await inserirSeries(novaSerie);

  resp.send({
    novoId: id
  })
})

api.get('/filmes', async (req, resp) => {
    let registros = await listarFilmes();
    resp.send(registros);
})

api.post('/filmes', async (req, resp) => {
  let novoFilme = req.body;
  
  let id = await inserirFilmes(novoFilme);

  resp.send({
    novoId: id
  })
})

api.listen(5010, () => console.log('..: API subiu com sucesso!'));