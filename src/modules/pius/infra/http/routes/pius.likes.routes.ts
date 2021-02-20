import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import PiusLikesController from '../controller/PiusLikesController';

const piusLikesRouter = Router();

const piusLikesController = new PiusLikesController();

piusLikesRouter.post('/', ensureAuthenticated, piusLikesController.create);

export default piusLikesRouter;
