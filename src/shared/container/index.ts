import { container } from 'tsyringe';

import './providers';

// Users
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// Pius
import IPiusRepository from '@modules/pius/repositories/IPiusRepository';
import PiusRepository from '@modules/pius/infra/typeorm/repositories/PiusRepository';
import IPiusLikesRepository from '@modules/pius/repositories/IPiusLikesRepository';
import PiusLikesRepository from '@modules/pius/infra/typeorm/repositories/PiusLikesRepository';

// Users
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

// Pius
container.registerSingleton<IPiusRepository>('PiusRepository', PiusRepository);
container.registerSingleton<IPiusLikesRepository>('PiusLikesRepository', PiusLikesRepository);
