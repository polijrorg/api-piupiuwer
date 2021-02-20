import ICreatePiuDTO from '../dtos/ICreatePiuDTO';
import Piu from '../infra/typeorm/entities/Piu';

interface IPiusRepository {
  findAll(): Promise<Piu[]>;
  create(data: ICreatePiuDTO): Piu;
  save(data: Piu): Promise<Piu>;
}

export default IPiusRepository;
