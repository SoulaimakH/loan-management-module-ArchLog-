import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";

import { ClientsModule, Transport } from "@nestjs/microservices";
import { HttpModule } from "@nestjs/axios";

import {RegistrationServiceController} from "./registration_service.controller";
import {RegistrationServiceService} from "./registration_service.service";
import {TypeOrmConfigService} from "./typorem/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MailSenderClient} from "../client/MailSender.client";
import {Riskmanagement} from "../client/riskmanagement";

let envFilePath = '.env.dev';
console.log(`Running in ${process.env.ENVIRONMENT}`);
if(process.env.ENVIRONMENT ==='prod')
  envFilePath='.env.prod';
if(process.env.ENVIRONMENT ==='TEST')
  envFilePath='.env.test';
@Module({
  imports: [
    /*TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),*/
ConfigModule.forRoot({envFilePath: envFilePath,isGlobal: true}),

    ClientsModule.register([
      {
        name: 'redis',
        transport: Transport.REDIS,
        options: {
          host: process.env.REDIS_HOST,
          port: Number(process.env.REDIS_PORT),
        },
      }
    ]),HttpModule],
  controllers: [RegistrationServiceController],
  providers: [Riskmanagement,MailSenderClient,RegistrationServiceService],
})
export class AppModule {}
