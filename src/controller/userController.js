import * as repo from '../repository/repositoryuser.js';
import { Router } from "express";
const endpoints = Router();

endpoints.get('/user', async (req, resp) =>{
  let registros = await repo.listarUsers();
  resp.send(registros);
})

endpoints.post('/user', async (req, resp) =>{
  let novoUsers = req.body;
  let id = await repo.inserirUsers(novoUsers);

  resp.send({
    novoId: id
  })
})