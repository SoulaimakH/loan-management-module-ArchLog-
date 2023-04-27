import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import {ValidationPipe} from "@nestjs/common";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    name: 'redis',
    transport: Transport.REDIS,
    options: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    },
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  console.log('agreement Microservice ');
  await app.listen();
}
bootstrap();
