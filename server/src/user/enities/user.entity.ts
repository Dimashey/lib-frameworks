import { UserModel } from 'src/models/user.model';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class UserEntity implements UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryColumn('varchar')
  username: string;

  @Column('varchar')
  password: string;
}
