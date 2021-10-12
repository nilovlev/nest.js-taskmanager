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
  @Render('login')
  root() {
    // return { 
    //   message: 'Hello world!',
    // };
  }
  
}
