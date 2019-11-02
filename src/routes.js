import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import AuthMiddleware from './app/middlewares/auth';
import ToolController from './app/controllers/ToolController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.get('/tools/:id', ToolController.show);
routes.put('/tools/:id', ToolController.update);
routes.delete('/tools/:id', ToolController.delete);

export default routes;
