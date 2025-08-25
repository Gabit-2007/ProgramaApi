import * as repo from '../repository/repositoryanimes.js';
import { Router } from "express";
const endpoints = Router();

endpoints.get('/animes', async (req, resp) => {
    let registros = await repo.listarAnimes();
    resp.send(registros);
})

endpoints.post('/animes', async (req, resp) => {
  let novoAnime = req.body;
  
  let id = await repo.inserirAnimes(novoAnime);

  resp.send({
    novoId: id
  })
})
