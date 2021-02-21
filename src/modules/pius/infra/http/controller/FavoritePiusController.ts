import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FavoritePiuService from '@modules/pius/services/FavoritePiuService';
import UnfavoritePiuService from '@modules/pius/services/UnfavoritePiuService';

class PiusLikesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { piu_id } = request.body;
    const { id: user_id } = request.user;

    const favoritePiu = container.resolve(FavoritePiuService);

    await favoritePiu.execute({ piu_id, user_id });

    return response.status(204).json();
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { piu_id } = request.body;
    const { id: user_id } = request.user;

    const unfavoritePiu = container.resolve(UnfavoritePiuService);

    await unfavoritePiu.execute({ piu_id, user_id });

    return response.status(204).json();
  }
}

export default PiusLikesController;
