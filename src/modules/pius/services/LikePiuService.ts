import { inject, injectable } from 'tsyringe';

import IPiusLikesRepository from '../repositories/IPiusLikesRepository';

interface IRequest {
  user_id: string;
  piu_id: string;
}

interface IResponse {
  operation: string;
}

@injectable()
export default class LikePiuService {
  constructor(
    @inject('PiusLikesRepository')
    private piusLikesRepository: IPiusLikesRepository,
  ) { }

  public async execute({ user_id, piu_id }: IRequest): Promise<IResponse> {
    const piuLiked = await this.piusLikesRepository.findByPiuAndUserId(user_id, piu_id);

    if (piuLiked) {
      await this.piusLikesRepository.deleteByPiuAndUserId(user_id, piu_id);

      return { operation: 'unlike' };
    }
    const createdLike = this.piusLikesRepository.create({ user_id, piu_id });

    await this.piusLikesRepository.save(createdLike);

    return { operation: 'like' };
  }
}
