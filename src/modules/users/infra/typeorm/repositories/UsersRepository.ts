import { Repository, getRepository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByUsernameWithRelations(username: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { username },
      relations: ['pius', 'likes'],
    });

    return user;
  }

  public async findByEmailWithRelations(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async findByEmailOrUsername(email: string, username: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: [{ email }, { username }],
    });

    return user;
  }

  public create(data: ICreateUserDTO): User {
    const user = this.ormRepository.create(data);

    return user;
  }

  public async save(data: User): Promise<User> {
    const user = await this.ormRepository.save(data);

    return user;
  }
}
