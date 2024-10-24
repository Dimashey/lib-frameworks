import { Module, Provider } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import serverConfig from 'config/server';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JWT_SECRET } from './auth.token';

const jwtSecretTokenProvider: Provider = {
  provide: JWT_SECRET,
  useFactory: (configService: ConfigService) => {
    return configService.get('server.jwtSecret');
  },
  inject: [ConfigService],
};

@Module({
  imports: [
    UserModule,
    PassportModule,
    ConfigModule.forFeature(serverConfig),
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(serverConfig)],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('server.jwtSecret'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, jwtSecretTokenProvider, JwtStrategy],
})
export class AuthModule {}
