import {
  Body,
  Controller,
  Get,
  Inject,
  InternalServerErrorException,
  Param,
  Post, Query,
  Req, UploadedFile, UploadedFiles,
   UseInterceptors
} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";

@Controller('registration')
export class RegistrationController {

  constructor(@Inject('REDIS') private client: ClientProxy){}


  @Get("test")
  registration() {
    try {
      return this.client.send("testregistration","ok")
    }
    catch (error) {
      console.error(error)
      throw new InternalServerErrorException(error);
    }
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  async handleLoanRequest(
      @UploadedFiles() files: Express.Multer.File[],
      @Body() formData
  ) {
    try {
      let user={
        "prenom": formData.firstName,
           "email":formData.email,
        "score":""
      }

      await this.client.send("testregistration",user).forEach(event => {
        console.log(event)
      }) // commercial service // service manager

      await this.client.send('scorecommercial', "user").forEach(score => {
        user.score = score
      }) // commercial service
      console.log(user)
      return this.client.send('riskmanagement',user); // risk management service

    }
    catch (error) {
      console.error(error)
      throw new InternalServerErrorException(formData);
    }
  }
}