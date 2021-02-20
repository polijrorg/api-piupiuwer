import {
  Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

import Piu from '@modules/pius/infra/typeorm/entities/Piu';
import PiuLike from '@modules/pius/infra/typeorm/entities/PiuLike';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  about: string;

  @Column()
  photo: string;

  @Column()
  password: string;

  @OneToMany(() => Piu, (piu) => piu.user)
  pius: Piu[];

  @OneToMany(() => PiuLike, (piuLike) => piuLike.user)
  likes: PiuLike[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
