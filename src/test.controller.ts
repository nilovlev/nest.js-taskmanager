import { Controller, Get, Session } from "@nestjs/common";
import session from "express-session";
import { CounterService } from "./counter.service";

@Controller('/test')
export class TestController {
    constructor(private counterService: CounterService) {}

    counter: number = 1;

    @Get('/')
    getTest(@Session() session: Record<string, any>): string {
        if (session.counter == null) {
            session.counter = 0;
        }
        return `Counter: ${session.counter}`
    }

    @Get('/increment')
    increment(@Session() session: Record<string, any>): string {
        if (session.counter == null) {
            session.counter = 0;
        }
        session.counter += 1;
        return 'Increment';
    }

    @Get('/decrement')
    decrement(): string {
        this.counterService.decrement();
        return 'Decrement';
    }

}
