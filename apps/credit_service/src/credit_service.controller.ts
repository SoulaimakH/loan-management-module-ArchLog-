import { Controller, Get } from '@nestjs/common';
import { CreditAgreementService } from './credit_service.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class CreditAgreementController {
  constructor(private readonly creditAgreementService: CreditAgreementService) {}


  @MessagePattern("creditAgreementService")
  sendfile(user) {
    return this.creditAgreementService.sendfile();
  }
}
