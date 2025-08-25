import express from 'express'
const api = express();
api.use(express.json());
import { adicionarRotas } from './rotas.js';

adicionarRotas(api);

api.listen(5010, () => console.log('..: API subiu com sucesso!'));