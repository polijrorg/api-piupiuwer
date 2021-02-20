import { Repository, getRepository } from 'typeorm';

import IPiusRepository from '@modules/pius/repositories/IPiusRepository';
import ICreatePiuDTO from '@modules/pius/dtos/ICreatePiuDTO';

import Piu from '../entities/Piu';

export default class PiusRepository implements IPiusRepository {
  private ormRepository: Repository<Piu>;

  constructor() {
    this.ormRepository = getRepository(Piu);
  }

  public async findAll(): Promise<Piu[]> {
    const pius = await this.ormRepository.find({
      relations: ['likes', 'likes.user'],
    });

    return pius;
  }

  public create(data: ICreatePiuDTO): Piu {
    const piu = this.ormRepository.create(data);

    return piu;
  }

  public async save(data: Piu): Promise<Piu> {
    const piu = await this.ormRepository.save(data);

    return piu;
  }
}
