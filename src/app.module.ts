import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CounterService } from './counter.service';
import { TestController } from './test.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, CounterService],
})
export class AppModule {}
