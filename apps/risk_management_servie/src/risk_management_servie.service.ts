import {Inject, Injectable, InternalServerErrorException} from '@nestjs/common';
import {MailSenderClient} from "./client/MailSender.client";

@Injectable()
export class RiskManagementServieService {
  private score="4558"

  @Inject(MailSenderClient)
  private readonly mailSenderClient: MailSenderClient;

  risquemanager(user) {

    if(user.score-this.scorecalcule()>0)
    {
      return this.mailSenderClient.sendacceptation(user)
    }
      else{
        return  this.mailSenderClient.sendnotaccepted(user)
      throw new InternalServerErrorException();
    }
  }

  scorecalcule(){
    const min=0;
    const max=100
    return Math.random()*(max-min)+min
  }
}
