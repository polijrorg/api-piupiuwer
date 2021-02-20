import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import PiusController from '../controller/PiusController';

const userRouter = Router();

const piusController = new PiusController();

userRouter.post('/', ensureAuthenticated, piusController.create);
userRouter.get('/', ensureAuthenticated, piusController.index);

export default userRouter;
