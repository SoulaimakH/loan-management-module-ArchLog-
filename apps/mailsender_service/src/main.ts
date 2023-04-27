import { NestFactory } from '@nestjs/core';
import { appModule } from "./app.module";
import { Transport } from "@nestjs/microservices";
import { ValidationPipe } from "@nestjs/common";


async function bootstrap() {
  const app = await NestFactory.createMicroservice(appModule, {
    transport: Transport.REDIS,
    options: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT), },
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  console.log('MAILSENDER Microservice ');
  await app.listen();
}
bootstrap();