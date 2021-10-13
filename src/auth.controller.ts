import { Body, Controller, Get, Post, Render, Res, Session } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from 'express';


@Controller('')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('/')
    @Render('/login')
    auth() {

    }

    @Post('login')
    @Render('login')
    login(@Res() res: Response, @Session() session: Record<string, any>, @Body() body: any) {
        session.userName = this.authService.login(body).login;
        return res.redirect('/task_manager');
    }

    @Post('/logout')
    @Render('login')
    logout(@Session() session: Record<string, any>) {
        session.userName = undefined
        return {userName: session.userName};
    }

}
