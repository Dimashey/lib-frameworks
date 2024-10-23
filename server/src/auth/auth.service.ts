import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto, CreateUserResponse } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { CredentialsDto, LogInResponse } from './dto/log-in.dto';
import { validatePassword } from 'utils/hash';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private async generateAccessToken(username: string): Promise<string> {
    return this.jwtService.signAsync({
      username: username,
    });
  }

  public async singUp(user: CreateUserDto): Promise<CreateUserResponse> {
    const existingUser = await this.userService.findByUsername(user.username);

    if (existingUser) {
      throw new BadRequestException('User with this username already exist');
    }

    const newUser = await this.userService.create(user);

    const accessToken = await this.generateAccessToken(user.username);

    return {
      message: 'User created successfully',
      userId: newUser.id,
      accessToken,
    };
  }

  public async login(credentials: CredentialsDto): Promise<LogInResponse> {
    const user = await this.userService.findByUsername(credentials.username);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValidPassword = await validatePassword(
      credentials.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.generateAccessToken(user.username);

    return { userId: user.id, accessToken };
  }
}
