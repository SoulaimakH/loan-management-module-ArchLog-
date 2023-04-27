import {Injectable} from '@nestjs/common';

@Injectable()
export class CreditAgreementService {

    sendfile(){
        return {"link":"assets\\downloads\\credit_agreement.pdf"}
    }

}
