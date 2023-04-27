import { Injectable } from '@nestjs/common';

@Injectable()
export class ComercialServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
