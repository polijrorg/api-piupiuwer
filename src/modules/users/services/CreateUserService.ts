import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  about: string;
  photo: string;
  password: string;
}
@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) { }

  public async execute({
    username, first_name, last_name, email, about, photo, password,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmailOrUsername(email, username);

    if (userAlreadyExists) throw new AppError('User with same name, phone or cpf already exists');

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = this.usersRepository.create({
      username,
      password: hashedPassword,
      about,
      first_name,
      last_name,
      email,
      photo,
    });

    await this.usersRepository.save(user);

    return user;
  }
}
