import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import ShowUserService from '@modules/users/services/ShowUserService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      first_name, last_name, email, photo, about, password, username,
    } = request.body;

    const createUser = container.resolve(CreateUserService);

    return response.status(201).json(
      await createUser.execute({
        about,
        email,
        first_name,
        last_name,
        password,
        photo,
        username,
      }),
    );
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const username = request.query.username as string;

    const showUser = container.resolve(ShowUserService);

    const user = await showUser.execute({ username });

    return response.json(user);
  }
}
