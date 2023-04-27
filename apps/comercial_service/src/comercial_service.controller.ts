import { Controller, Get } from '@nestjs/common';
import { ComercialServiceService } from './comercial_service.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class ComercialServiceController {
  constructor(private readonly comercialServiceService: ComercialServiceService) {}

  @MessagePattern("scorecommercial")
  scorecommercial() {
    const min=0;
    const max=100
     return Math.random()*(max-min)+min
  }

}
