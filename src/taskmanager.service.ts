import { Injectable, Session } from "@nestjs/common";
import { AuthService } from "./auth.service";

export interface Task {
    name: string
    isDone: boolean
}

@Injectable()
export class TaskManagerService {
    constructor(private authService: AuthService) {}

    get_task_list(userName: string): Array<Task> {
        return this.authService.get_user_by_login(userName).taskList;
    }

    add_task(body: any, userName: string): Array<Task> {
        let taskList = this.authService.get_user_by_login(userName).taskList
        if (body.input_task == '') {
            return taskList;
        }
        let new_task: Task = { 
            name: body.input_task,
            isDone: false
        }
        taskList.push(new_task)
        return taskList;
    }

    delete_task(body: any, userName: string) {
        let taskList = this.authService.get_user_by_login(userName).taskList
        taskList.splice(body.task_number, 1)
        return taskList
    }

}
