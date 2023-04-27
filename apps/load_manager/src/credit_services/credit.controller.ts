import {Controller, Get, Inject, InternalServerErrorException,} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Controller('credit')
export class creditController {

  constructor(@Inject('REDIS') private client: ClientProxy) {
  }
  @Get("")
  registration() {
    try {
      return this.client.send("creditAgreementService","creditAgreementService")
    }
    catch (error) {
      console.error(error)
      throw new InternalServerErrorException(error);
    }
  }

}