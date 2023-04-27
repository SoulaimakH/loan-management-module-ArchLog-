import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class MailSenderClient {
  constructor(@Inject('redis') private client: ClientProxy,){}

  async sendacceptation(user) {

    try {
      return this.client.send('sendacceptation',user);
    }
    catch (e) {
      throw new HttpException(e, HttpStatus.AMBIGUOUS);
    }
  }

  sendnotaccepted(user){
    try {
      return this.client.send('sendnotaccepted',user);
    }
    catch (e) {
      throw new HttpException(e, HttpStatus.AMBIGUOUS);
    }
  }
}