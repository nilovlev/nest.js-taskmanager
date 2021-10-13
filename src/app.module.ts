import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DbUserController } from './dbuser.constroller';
import { PrismaService } from './prisma.service';
import { TaskManagerController } from './taskmanager.controller';
import { TaskManagerService } from './taskmanager.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController, TaskManagerController, DbUserController],
  providers: [AppService, TaskManagerService, AuthService, PrismaService],
})

export class AppModule {}
