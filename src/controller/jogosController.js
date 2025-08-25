import * as repo from '../repository/repositoryjogos.js';
import { Router } from "express";
const endpoints = Router();

endpoints.get('/jogos', async(req, resp) => {
    let registros = await repo.listarJogos();
    resp.send(registros);
})

endpoints.post('/jogos', async (req, resp) => {
  let novoJogo = req.body;
  
  let id = await repo.inserirJogos(novoJogo);

  resp.send({
    novoId: id
  })
})