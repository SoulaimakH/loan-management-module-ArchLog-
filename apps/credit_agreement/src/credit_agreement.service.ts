import {Injectable} from '@nestjs/common';

@Injectable()
export class CreditAgreementService {

    sendfile(){
        return {"link":"assets\\downloads\\amortizationtable.pdf"}
    }

}
