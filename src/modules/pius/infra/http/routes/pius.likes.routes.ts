import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import PiusLikesController from '../controller/PiusLikesController';

const userRouter = Router();

const piusLikesController = new PiusLikesController();

userRouter.post('/', ensureAuthenticated, piusLikesController.create);

export default userRouter;
