import { Controller, Get } from '@nestjs/common';
import { RiskManagementServieService } from './risk_management_servie.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class RiskManagementServieController {
  constructor(private readonly riskManagementServieService: RiskManagementServieService) {}

  @MessagePattern("riskmanagement")
  riskmanagement(user) {
    return this.riskManagementServieService.risquemanager(user)}
}
