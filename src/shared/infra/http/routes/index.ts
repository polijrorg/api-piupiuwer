import { Router } from 'express';

// Users
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';
import followRoutes from '@modules/users/infra/http/routes/follow.routes';

// Pius
import piusRoutes from '@modules/pius/infra/http/routes/pius.routes';
import piusLikesRoutes from '@modules/pius/infra/http/routes/pius.likes.routes';

const routes = Router();

// Users
routes.use('', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/follow', followRoutes);

// Pius
routes.use('/pius', piusRoutes);
routes.use('/pius/like', piusLikesRoutes);

export default routes;
