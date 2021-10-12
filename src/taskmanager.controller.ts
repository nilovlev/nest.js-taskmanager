import { Body, Controller, Get, Post, Render, Session } from "@nestjs/common";
import { TaskManagerService } from "./taskmanager.service";

@Controller('/task_manager')
export class TaskManagerController {
    constructor(private taskManagerService: TaskManagerService) {}

    @Get('/')
    @Render('taskmanager')
    manager(@Session() session: Record<string, any>) {
      return {
        tasks: this.taskManagerService.get_task_list(session.userName)
      };
    }

    @Post('/add_task')
    @Render('taskmanager')
    add_task(@Body() body: any, @Session() session: Record<string, any>) {
      let taskList = this.taskManagerService.add_task(body, session.userName);
      return {
        tasks: taskList
      };
    }

    @Post('/delete_task')
    @Render('taskmanager')
    delete_task(@Body() body: any, @Session() session: Record<string, any>) {
      let taskList = this.taskManagerService.delete_task(body, session.userName);
      return {
        tasks: taskList
      };
    }

}
