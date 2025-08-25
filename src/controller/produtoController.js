import * as repo from '../repository/repositoryprodutos.js';
import { Router } from "express";
const endpoints = Router();

endpoints.get('/produ', async (req, resp) =>{
  let registros = await repo.listarProdutos();
  resp.send(registros);
})

endpoints.post('/produ', async (req, resp) =>{
  let novoProduto = req.body;
  let id = await repo.inserirProdutos(novoProduto);

  resp.send({
    novoId: id
  })
})