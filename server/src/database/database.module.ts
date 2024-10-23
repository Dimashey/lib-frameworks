import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from 'config/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTITIES } from 'src/constants/entities';

const useFactory = (configService: ConfigService) => {
  const config = configService.get('database');

  return {
    type: 'postgres',
    entities: ENTITIES,
    synchronize: true,
    ...config,
  };
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      useFactory,
      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class DatabaseModule {}
