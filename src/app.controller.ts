import { Controller, Get, Render} from '@nestjs/common';
import { AppService } from './app.service';
import { CounterService } from './counter.service';
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

  }
  
}
