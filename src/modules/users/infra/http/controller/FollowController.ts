import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FollowUserService from '@modules/users/services/FollowUserService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      followed_id,
    } = req.body;

    const { id: user_id } = req.user;

    const followUser = container.resolve(FollowUserService);

    await followUser.execute({ followed_id, user_id });

    return res.status(204).json();
  }
}
