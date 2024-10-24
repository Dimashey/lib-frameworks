import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto, CreateUserResponse } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { LogInResponse } from './dto/log-in.dto';
import { validatePassword } from 'utils/hash';
import { PublicUserModel } from 'src/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private async generateAccessToken(user: PublicUserModel): Promise<string> {
    return this.jwtService.signAsync(user);
  }

  public async singUp(user: CreateUserDto): Promise<CreateUserResponse> {
    const existingUser = await this.userService.findByUsername(user.username);

    if (existingUser) {
      throw new BadRequestException('User with this username already exist');
    }

    const newUser = await this.userService.create(user);

    const { password, ...result } = newUser;

    const accessToken = await this.generateAccessToken(result);

    return {
      message: 'User created successfully',
      userId: newUser.id,
      accessToken,
    };
  }

  public async validateUser(
    username: string,
    password: string,
  ): Promise<PublicUserModel | null> {
    const user = await this.userService.findByUsername(username);

    if (!user) return null;

    const isValidPassword = await validatePassword(password, user.password);

    if (!isValidPassword) return null;

    const { password: p, ...result } = user;

    return result;
  }

  public async login(user: PublicUserModel): Promise<LogInResponse> {
    const accessToken = await this.generateAccessToken(user);

    return { userId: user.id, accessToken };
  }
}
