import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreatePiuService from '@modules/pius/services/CreatePiuService';
import ListPiusService from '@modules/pius/services/ListPiusService';
import DeletePiuService from '@modules/pius/services/DeletePiuService';

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

  public async delete(req: Request, res: Response): Promise<Response> {
    const { piu_id } = req.body;

    const deletePiu = container.resolve(DeletePiuService);

    await deletePiu.execute({ piu_id });

    return res.status(204).json();
  }
}

export default PiuController;
