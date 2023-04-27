import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class MailSenderClient {
  constructor(@Inject('redis') private client: ClientProxy,){}

  async sendregistration(user) {

    try {
      return this.client.send('sendregistration',user);
    }
    catch (e) {
      throw new HttpException(e, HttpStatus.AMBIGUOUS);
    }
  }
}