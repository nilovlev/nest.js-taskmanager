import { Controller, Get, Session, Render, Post, Body, Redirect} from "@nestjs/common";
import { User as UserModel } from "@prisma/client";
import { DbUserService } from "./dbuser.service";

@Controller('/User')
export class DbUserController {
    constructor(
        private userService: DbUserService,
    ) {}

    @Get('/')
    @Render('login')
    async getLoginStatus(@Session() session: Record<string, any>) {
        session.logged_in = (session.username != null)
        if (session.logged_in == false) {
            return;
        }
        
        let tasks = await this.userService.getTasksByUsername(session.username)
        
        return {
            logged_in: session.logged_in,
            username: session.username,
            tasks: tasks
        };
    }

    @Redirect("/user")
    @Post("/add_task")
    async addTask(@Session() session: Record<string, any>, @Body() body: any) {
        if (!session.logged_in) {
            return;
        }
    
        this.userService.addTask(session.username, body.input_task)
    }

    @Redirect("/user")
    @Post("delete_task")
    async deleteTask(@Session() session: Record<string, any>, @Body() body: any) {
        if (!session.logged_in) {
            return;
        }

        this.userService.deleteTask(Number(body.id))
    }

    @Post('/register')
    @Redirect('/user')
    async register(@Body() body: any): Promise<UserModel> {
        if (body.register_username == '' || body.register_password == '') {
            return;
        }
        
        let result = await this.userService.register(body.register_username, body.register_password)
        return result;
    }
    
    @Post('/login')
    @Redirect('/user')
    async login(@Body() body: any, @Session() session: Record<string, any>) {
        if (body.login_username == '' || body.login_password == '') {
            return;
        }

        let result = await this.userService.login(body.login_username, body.login_password)
        
        if (result != null) {
            session.username = result.username
        }
    }

    @Post('/logout')
    @Redirect('/user')
    logout(@Session() session: Record<string, any>) {
        session.username = null;
    }

}
