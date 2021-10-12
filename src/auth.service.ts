import { Body, Injectable } from "@nestjs/common";
import { Task } from "./taskmanager.service";

interface User {
    login: string;
    taskList: Array<Task>
}

@Injectable()
export class AuthService {
    constructor () {}

    users: Array<User> = [];

    login(@Body() body: any): User{
        let input_user_name = body.login_field;
        let user = this.users.find(user => user.login == input_user_name)
        if (user != undefined) {
            return user;
        } else {
            let new_user: User = {
                login: input_user_name,
                taskList: []
            }
            this.users.push(new_user);
            return new_user
        }
    }

    get_user_by_login(login: string): User {
        let user = this.users.find(user => user.login == login)
        return user
    }

}
