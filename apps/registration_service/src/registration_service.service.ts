import {Inject, Injectable} from '@nestjs/common';
import {MailSenderClient} from "../client/MailSender.client";
import {Riskmanagement} from "../client/riskmanagement";

@Injectable()
export class RegistrationServiceService {

  @Inject(MailSenderClient)
  private readonly mailSenderClient: MailSenderClient;

  @Inject(Riskmanagement)
  private readonly Riskmanagement: Riskmanagement;

  async registration(user) {
    await new Promise(resolve => setTimeout(resolve, 3000));//traitement
   return  this.mailSenderClient.sendregistration(user)// mail sender
  }
}
