import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CounterService } from './counter.service';
import { Response } from 'express';
import { TaskManagerService } from './taskmanager.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private counterService: CounterService,
    private taskManagerService: TaskManagerService
  ) {}

  @Get()
  @Render('index')
  root() {
    return { 
      message: 'Hello world!',
      counter: this.counterService.counter 
    };
  }

  @Post('/')
  add_task(@Res() res: Response, @Body() body: any) {
    this.taskManagerService.request(body)
      return res.render(
      'index',
      { 
        message: body.input_task,
        tasks: this.taskManagerService.task_list
      }
    )
  }
  
}
