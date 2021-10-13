import { Controller, Get, Session, Render, Post, Body, Redirect } from "@nestjs/common";
import session from "express-session";
import { PrismaService } from "./prisma.service";

@Controller('/User')
export class DbUserController {
    constructor(private prisma: PrismaService) {}

    @Get('/')
    @Render('dbuser')
    getLoginStatus(@Session() session) {
        var logged_in = (session.username != null)
        return {
            logged_in,
            username: session.username
        };
    }

    @Post('/login')
    @Redirect('/user')
    async login(@Body() body, @Session() session) {
        var result = await this.prisma.user.findFirst({
            where: {
                username: body.login,
                password: body.password
            }
        });
        if (result == null) {

        } else {
            session.username = body.login;
        }
    }

    @Post('/register')
    @Redirect('/user')
    async register(@Body() body) {
        if (body.login == null || body.password == null) {
            return;
        }
        await this.prisma.user.create({
            data: {
                password: body.password,
                username: body.login
            }
        });
    }

    
}