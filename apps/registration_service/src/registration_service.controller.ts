import { Controller, Get } from '@nestjs/common';
import { RegistrationServiceService } from './registration_service.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class RegistrationServiceController {
  constructor(private readonly registrationServiceService: RegistrationServiceService) {}

  @MessagePattern("testregistration")
  registration(user) {
    return this.registrationServiceService.registration(user);
  }
}
