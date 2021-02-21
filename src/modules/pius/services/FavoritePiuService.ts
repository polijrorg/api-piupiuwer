import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import IPiusRepository from '../repositories/IPiusRepository';

interface IRequest {
  piu_id: string;
  user_id: string;
}

@injectable()
export default class FavoritePiuService {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ piu_id, user_id }: IRequest): Promise<void> {
    const piu = await this.piusRepository.findById(piu_id);
    const user = await this.usersRepository.findById(user_id);

    if (!piu) throw new AppError('Piu not found', 404);
    if (!user) throw new AppError('User not found', 404);

    const piuAlreadyFavorite = user.favorites.findIndex((v) => v.id === piu.id);

    if (piuAlreadyFavorite !== -1) throw new AppError('Piu already favorited');

    user.favorites.push(piu);

    await this.usersRepository.save(user);
  }
}
