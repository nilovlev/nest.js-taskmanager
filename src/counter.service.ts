import { Injectable } from "@nestjs/common";

@Injectable()
export class CounterService {
    counter = 0;

    increment() {
        this.counter += 1;
    }

    decrement() {
        this.counter -= 1;
    }

}
