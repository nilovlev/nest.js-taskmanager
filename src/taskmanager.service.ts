import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskManagerService {
    task_list = []

    add_task(task: string) {
        this.task_list.push(task)
    }

    delete_task(task_number: number) {
        this.task_list.splice(task_number, 1)
    }

    request(body: any) {
        if (body.input_task != undefined && body.input_task != '') {
            this.add_task(body.input_task)
        } else if (body.task != undefined){
            Object.keys(body).forEach(element => {
                if (element != 'task') {
                    this.delete_task(+element)
                }
            });
        }
        return this.task_list
    }
}
