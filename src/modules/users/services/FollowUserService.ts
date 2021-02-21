import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  followed_id: string;
  user_id: string;
}

@injectable()
export default class ShowUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ user_id, followed_id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);
    const followed = await this.usersRepository.findById(followed_id);

    if (!user) throw new AppError('User not authenticated');
    if (!followed) throw new AppError('Followed person not found', 404);

    user.following.push(followed);
    followed.followers.push(user);

    await this.usersRepository.save(user);
    await this.usersRepository.save(followed);
  }
}
