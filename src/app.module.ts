import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CounterService } from './counter.service';
import { TaskManagerController } from './taskmanager.controller';
import { TaskManagerService } from './taskmanager.service';
import { TestController } from './test.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController, AuthController, TaskManagerController],
  providers: [AppService, CounterService, TaskManagerService, AuthService],
})
export class AppModule {}
