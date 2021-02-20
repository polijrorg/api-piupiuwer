import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreatePiuService from '@modules/pius/services/CreatePiuService';
import ListPiusService from '@modules/pius/services/ListPiusService';

class PiuController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { text } = request.body;
    const user_id = request.user.id;

    const createPiuService = container.resolve(CreatePiuService);

    const piu = await createPiuService.execute({ text, user_id });

    return response.status(201).json(classToClass(piu));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listPiusService = container.resolve(ListPiusService);

    const pius = await listPiusService.execute();

    return response.json(classToClass(pius));
  }
}

export default PiuController;
