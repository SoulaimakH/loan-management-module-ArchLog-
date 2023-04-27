import { Injectable } from '@nestjs/common';
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class MailsenderService {
  constructor(private mailerService: MailerService) {}

  async sendregistration(user) {
   return  await this.mailerService.sendMail({
      to:user.email,
      subject: 'Loan manager',
      template: './passwordReinitialisation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: user.prenom,

      },
    });
  }

    async sendracceptation(user) {
        return  await this.mailerService.sendMail({
            to:user.email,
            subject: 'Loan manager',
            template: './success.hbs', // `.hbs` extension is appended automatically
            context: { // ✏️ filling curly brackets with content
                name: user.prenom,

            },
        });
    }
    async sendnotaccepted(user) {
        return await this.mailerService.sendMail({
            to: user.email,
            subject: 'Loan manager',
            template: './notsuccess.hbs', // `.hbs` extension is appended automatically
            context: { // ✏️ filling curly brackets with content
                name: user.prenom,

            },
        });
    }
}
