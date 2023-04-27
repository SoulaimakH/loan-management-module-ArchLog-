import { Controller } from '@nestjs/common';
import { MailsenderService } from "../service/mailsender.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class MailsenderServiceController {
  constructor(private readonly mailsenderServiceService: MailsenderService) {}

  @MessagePattern("sendregistration")
  sendregistration(user) {
    return this.mailsenderServiceService.sendregistration(user)
  }

  @MessagePattern("sendacceptation")
  sendacceptation(user) {
    return this.mailsenderServiceService.sendracceptation(user)
  }

  @MessagePattern("sendnotaccepted")
  sendnotaccepted(user) {
    return this.mailsenderServiceService.sendnotaccepted(user)
  }
}
