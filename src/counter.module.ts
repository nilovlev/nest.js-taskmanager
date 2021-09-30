import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { TestController } from './test.controller';

@Module({
    imports: [],
    controllers: [TestController],
    providers: []
})
export class CounterModel {}
