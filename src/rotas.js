import {alunoController} from './controller/alunoController.js';
import {animeController} from './controller/animesController.js';
import {cursoController} from './controller/cursoController.js';
import {filmesController} from './controller/filmesController.js';
import {jogosController} from './controller/jogosController.js';
import {livroController} from './controller/livroController.js';
import {produtoController} from './controller/produtoController.js';
import {seriesController} from './controller/seriesController.js';
import {tenisController} from './controller/tenisController.js';
import {userController} from './controller/userController.js';


export function adicionarRotas(api) {
    api.use(alunoController);
    api.use(animeController);
    api.use(cursoController);
    api.use(filmesController);
    api.use(jogosController);
    api.use(livroController);
    api.use(produtoController);
    api.use(seriesController);
    api.use(tenisController);
    api.use(userController);
}