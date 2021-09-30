import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { CounterService } from './counter.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private counterService: CounterService) {}

  @Get()
  @Render('index')
  getHello() {
    return { 
      message: this.appService.getHello(),
      counter: this.counterService.counter
    };
  }

  @Post('/submit')
  submit(@Body() body: any) {
    return `Text was: ${body.text}`;
  }

  

}
