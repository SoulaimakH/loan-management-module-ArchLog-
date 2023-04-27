import { Module } from '@nestjs/common';
import { MailsenderServiceController } from './controller/mailsender.controller';
import { MailsenderService } from "./service/mailsender.service";
import { HttpModule } from "@nestjs/axios";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { ConfigModule } from "@nestjs/config";


let envFilePath = '.env.dev';
console.log(`Running in ${process.env.ENVIRONMENT}`);
if(process.env.ENVIRONMENT ==='prod')
  envFilePath='.env.prod';
if(process.env.ENVIRONMENT ==='TEST')
  envFilePath='.env.test';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: envFilePath,isGlobal: true}),
    MailerModule.forRoot({
      transport: {
        host:process.env.MAILHOST,
        secure: false,
        auth: {
          user: process.env.MAILUSER,
          pass: process.env.MAILPASSWORD
        },
      },
      defaults: {
        from: '"Loan Management" <noreply@gmail.com>',
      },

      template: {
        dir:  __dirname + '/templates',
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
    HttpModule,
    ClientsModule.register([
      {
        name: 'MailSender',
        transport: Transport.REDIS,
        options: {
          host: process.env.REDIS_HOST,
          port: Number(process.env.REDIS_PORT),
        },
      }
    ])
  ],
  controllers: [MailsenderServiceController],
  providers: [MailsenderService],
})
export class appModule {}
