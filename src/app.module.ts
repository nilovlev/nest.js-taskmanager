import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth.controller';
import { CounterService } from './counter.service';
import { TaskManagerService } from './taskmanager.service';
import { TestController } from './test.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController, AuthController],
  providers: [AppService, CounterService, TaskManagerService],
})
export class AppModule {}
