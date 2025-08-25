import * as repo from '../repository/repositorySeries.js';
import { Router } from "express";
const endpoints = Router();

endpoints.get('/series', async (req, resp) => {
    let registros = await repo.listarSeries();
    resp.send(registros);
})

endpoints.post('/series', async (req, resp) => {
  let novaSerie = req.body;
  
  let id = await repo.inserirSeries(novaSerie);

  resp.send({
    novoId: id
  })
})