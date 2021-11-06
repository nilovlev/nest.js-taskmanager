import { Injectable, Session } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import {User, Task } from '@prisma/client';

@Injectable()
export class DbUserService {
    constructor(private prismaService: PrismaService) {}

    async getUserByUsername(username: string): Promise<User> {
        return await this.prismaService.user.findUnique({
            where: {
                username: username
            }
        });
    }

    async getTasksByUsername(username: string): Promise<Task[]> {
        let user = await this.prismaService.user.findUnique({
            where: {
                username: username
            },
            include: {
                tasks: true,
            }
        });

        return user.tasks
    }
    
    async addTask(username: string, task_name: string) {
        let user = await this.getUserByUsername(username);

        await this.prismaService.task.create({
            data: {
                done: false,
                text: task_name,
                ownerId: user.id
            }
        });
    }

    async deleteTask(task_id: number) {
        await this.prismaService.task.delete({
            where: {
                id: task_id
            }
        })
    }

    async register(login: string, password: string): Promise<User> {
        let result = this.prismaService.user.create({
            data: {
                username: login,
                password: password
            }
        });
        return result;
    }

    async login(login: string, password: string): Promise<User> {
        return this.prismaService.user.findFirst({
            where: {
                username: login,
                password: password
            }
        });
    }
    
}
