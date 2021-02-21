import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import FollowController from '../controller/FollowController';

const followRoutes = Router();

const followController = new FollowController();

followRoutes.post('/', ensureAuthenticated, followController.create);

export default followRoutes;
