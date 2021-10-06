import { Controller, Get, Post, Render, Session } from "@nestjs/common";
import session from "express-session";

@Controller('/auth')
export class AuthController {
    constructor() {}

    @Get('/')
    @Render('login')
    auth(@Session() session: Record<string, any>) {
        if (session.isLogin == null) {
            session.isLogin = false;
        }
        return {login_status: session.isLogin};
    }

    @Post('/login')
    @Render('login')
    login(@Session() session: Record<string, any>) {
        if (session.isLogin == null) {
            session.isLogin = false;
        }
        session.isLogin = true
        return {login_status: session.isLogin};
    }

    @Post('/logout')
    @Render('login')
    logout(@Session() session: Record<string, any>) {
        if (session.isLogin == null) {
            session.isLogin = false;
        }
        session.isLogin = false
        return {login_status: session.isLogin};
    }

}
