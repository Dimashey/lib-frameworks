import { Injectable, NotFoundException } from '@nestjs/common';
import { PublicUserModel, UserModel } from 'src/models/user.model';
import { Repository } from 'typeorm';
import { UserEntity } from './enities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'utils/hash';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public async getUser(id: string): Promise<PublicUserModel> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  public async create(
    user: Pick<UserModel, 'password' | 'username'>,
  ): Promise<UserModel> {
    const password = await hashPassword(user.password);

    return this.userRepository.save({ ...user, password });
  }

  public async findByUsername(username: string): Promise<UserModel | null> {
    return this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.username = :username', { username })
      .getOne();
  }
}
