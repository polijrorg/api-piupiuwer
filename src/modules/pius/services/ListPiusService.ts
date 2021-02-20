import { injectable, inject } from 'tsyringe';

import Piu from '../infra/typeorm/entities/Piu';
import IPiusRepository from '../repositories/IPiusRepository';

@injectable()
export default class ListPiusService {
  constructor(
    @inject('PiusRepository')
    private piusRepository: IPiusRepository,
  ) { }

  public async execute(): Promise<Piu[]> {
    const pius = await this.piusRepository.findAll();

    return pius;
  }
}
