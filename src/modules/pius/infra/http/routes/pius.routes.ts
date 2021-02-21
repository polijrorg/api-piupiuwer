import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import PiusController from '../controller/PiusController';
import FavoritePiusController from '../controller/FavoritePiusController';

const piusRoutes = Router();

const piusController = new PiusController();
const favoritePiusController = new FavoritePiusController();

piusRoutes.post('/', ensureAuthenticated, piusController.create);
piusRoutes.post('/favorite', ensureAuthenticated, favoritePiusController.create);
piusRoutes.post('/unfavorite', ensureAuthenticated, favoritePiusController.delete);
piusRoutes.get('/', ensureAuthenticated, piusController.index);
piusRoutes.delete('/', ensureAuthenticated, piusController.delete);

export default piusRoutes;
