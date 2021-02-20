import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPiusRepository from '../repositories/IPiusRepository';

interface IRequest {
  piu_id: string;
}

@injectable()
export default class DeletePiuService {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,
  ) { }

  public async execute({ piu_id }: IRequest): Promise<void> {
    const piu = await this.piusRepository.findById(piu_id);

    if (!piu) throw new AppError('Piu not found', 404);

    await this.piusRepository.delete(piu);
  }
}
