import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import PiusController from '../controller/PiusController';

const piusRoutes = Router();

const piusController = new PiusController();

piusRoutes.post('/', ensureAuthenticated, piusController.create);
piusRoutes.get('/', ensureAuthenticated, piusController.index);
piusRoutes.delete('/', ensureAuthenticated, piusController.delete);

export default piusRoutes;
