import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CredentialsDto } from './dto/log-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sing-up')
  public signUp(@Body() user: CreateUserDto) {
    return this.authService.singUp(user);
  }

  @Post('login')
  public login(@Body() credentials: CredentialsDto) {
    return this.authService.login(credentials);
  }
}
