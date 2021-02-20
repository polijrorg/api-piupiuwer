import { Request, Response } from 'express';
import { container } from 'tsyringe';

import LikePiuService from '@modules/pius/services/LikePiuService';

class PiusLikesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { piu_id } = request.body;
    const { id: user_id } = request.user;

    const likePiuService = container.resolve(LikePiuService);

    const operation = await likePiuService.execute({ piu_id, user_id });

    return response.json(operation);
  }
}

export default PiusLikesController;
