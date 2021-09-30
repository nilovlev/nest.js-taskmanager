import { Controller, Get } from "@nestjs/common";
import { CounterService } from "./counter.service";

@Controller('/test')
export class TestController {
    constructor(private counterService: CounterService) {}

    counter: number = 1;

    @Get('/')
    getTest(): string {
        return `Counter: ${this.counterService.counter}`
    }

    @Get('/increment')
    increment(): string {
        this.counterService.increment();
        return 'Increment';
    }

    @Get('/decrement')
    decrement(): string {
        this.counterService.decrement();
        return 'Decrement';
    }

}
