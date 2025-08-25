import * as repo from '../repository/repositoryaluno.js';
import { Router } from "express";
const endpoints = Router();

endpoints.get('/alunoss', async (req, resp) => {
  let registros = await repo.listarAlunos();
  resp.send(registros)
})

endpoints.get('/alunoss/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await repo.filtrarPorNome1(nome);
  resp.send(registros);
})

endpoints.get('/alunoss/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await repo.consultarAlunos(id);
  resp.send(registros);
})

endpoints.post('/alunoss', async (req, resp) => {
  let novoAluno = req.body;

  let id = await repo.inserirAlunos(novoAluno);

  resp.send({
    novoId: id
  })
})

endpoints.put('/alunoss/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await repo.alterarAlunos(id, novosDados);
  resp.send();
})
