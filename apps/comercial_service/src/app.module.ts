import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";

import { ClientsModule, Transport } from "@nestjs/microservices";
import { HttpModule } from "@nestjs/axios";

import {ComercialServiceController} from "./comercial_service.controller";
import {ComercialServiceService} from "./comercial_service.service";

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
  controllers: [ComercialServiceController],
  providers: [ComercialServiceService],
})
export class AppModule {}
