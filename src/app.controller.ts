import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('ui/index')
  getHello(): any {
    return { message: 'HBS works!' };
  }
  @Get('msg')
  getMessage(): string {
    return "Message from message route with '/msg'";
  }

}
