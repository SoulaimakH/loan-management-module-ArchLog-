import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport} from '@nestjs/microservices';

import {MulterModule} from "@nestjs/platform-express";
import {RegistrationController} from "./manager/registration.controller";
import {agreementController} from "./credit_agreement/agreement.controller";
import {creditController} from "./credit_services/credit.controller";



let envFilePath = '.env.dev';

if(process.env.ENVIRONMENT ==='prod')
  envFilePath='.env.prod';
if(process.env.ENVIRONMENT ==='TEST')
  envFilePath='.env.test';

console.log("load manager");
@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: envFilePath,isGlobal: true}),
    MulterModule.register({
      dest: './uploads',
    }),
    ClientsModule.register([
      {
        name: 'REDIS',
        transport: Transport.REDIS,
        options: {
          host: process.env.REDIS_HOST,
          port: Number(process.env.REDIS_PORT), },
      },
    ]),
  ],
  controllers: [creditController,agreementController,RegistrationController,creditController],
  providers: [
  ],

})
export class AppModule {}
