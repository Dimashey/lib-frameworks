import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';
import { UserModel } from 'src/models/user.model';

export class CreateUserDto implements Pick<UserModel, 'password' | 'username'> {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  password: string;
}

export class CreateUserResponse {
  message: string;
  userId: string;
  accessToken: string;
}
