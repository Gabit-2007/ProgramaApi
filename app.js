import * as repo from "./repositorycurso.js"
import express from 'express'
const api = express();
api.use(express.json());

api.get('/curso', async (req, resp) => {
  let registros = await repo.listarCursos();
  resp.send(registros);
})

api.get('/curso/filtrar', async (req, resp) => {
  let registros = await repo.filtrarPorNome(nome);
  resp.send(registros);
})

api.get('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await repo.consultarCurso(id);
  resp.send(registros);
})

api.post('/curso', async (req, resp) => {
  let novoCurso = req.body;
  
  let id = await repo.inserirCurso(novoCurso);

  resp.send({
    novoId: id
  })
})

api.put('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await repo.alterarCurso(id, novosDados);
  resp.send();
})

api.delete('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  await repo.deletarCurso(id);
  resp.send();
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