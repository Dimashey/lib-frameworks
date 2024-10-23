import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import serverConfig from 'config/server';

@Module({
  imports: [
    UserModule,

    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(serverConfig)],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('server.jwtSecret'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
