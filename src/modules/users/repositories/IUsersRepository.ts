import User from '../infra/typeorm/entities/User';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByUsernameWithRelations(username: string): Promise<User | undefined>;
  findByEmailWithRelations(email: string): Promise<User | undefined>;
  findByEmailOrUsername(email: string, username: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): User;
  save(data: User): Promise<User>;
}

export default IUsersRepository;
