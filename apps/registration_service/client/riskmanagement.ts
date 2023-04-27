import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class Riskmanagement {
  constructor(@Inject('redis') private client: ClientProxy,){}

  async riskmanagement(user) {

    try {
      return this.client.send('riskmanagement',user);
    }
    catch (e) {
      throw new HttpException(e, HttpStatus.AMBIGUOUS);
    }
  }
}