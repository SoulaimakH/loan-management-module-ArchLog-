import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";

import { ClientsModule, Transport } from "@nestjs/microservices";
import { HttpModule } from "@nestjs/axios";
import {RiskManagementServieController} from "./risk_management_servie.controller";
import {RiskManagementServieService} from "./risk_management_servie.service";
import {MailSenderClient} from "./client/MailSender.client";

let envFilePath = '.env.dev';
console.log(`Running in ${process.env.ENVIRONMENT}`);
if(process.env.ENVIRONMENT ==='prod')
  envFilePath='.env.prod';
if(process.env.ENVIRONMENT ==='TEST')
  envFilePath='.env.test';
@Module({
  imports: [
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
  controllers: [RiskManagementServieController],
  providers: [MailSenderClient,RiskManagementServieService],
})
export class AppModule {}
