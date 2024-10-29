import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LogInResponse } from './dto/log-in.dto';
import { CredentialsGuard } from './guards/credentials.guard';
import { PublicUserModel } from 'src/models/user.model';
import { User } from 'src/decorators/user.decorator';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sing-up')
  public signUp(@Body() user: CreateUserDto) {
    return this.authService.singUp(user);
  }

  @UseGuards(CredentialsGuard)
  @Post('login')
  public login(@User() user: PublicUserModel): Promise<LogInResponse> {
    return this.authService.login(user);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  public getMe(@User() user: PublicUserModel): Promise<PublicUserModel> {
    return this.authService.getMe(user.id)
  }
}
