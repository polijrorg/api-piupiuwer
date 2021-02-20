import ICreatePiuLikeDTO from '../dtos/ICreatePiuLikeDTO';
import PiuLike from '../infra/typeorm/entities/PiuLike';

interface IPiusLikesRepository {
  save(data: PiuLike): Promise<PiuLike>;
  create(data: ICreatePiuLikeDTO): PiuLike;
  deleteByPiuAndUserId(user_id: string, piu_id: string): Promise<void>;
  findByPiuAndUserId(user_id: string, piu_id: string): Promise<PiuLike | undefined>;

}

export default IPiusLikesRepository;
