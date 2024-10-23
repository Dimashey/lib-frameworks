import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;

  if (!port) {
    console.error('plz set up port in environment variables');
    process.exit(1);
  }

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
