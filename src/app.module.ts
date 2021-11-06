import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbUserController } from './dbuser.constroller';
import { DbUserService } from './dbuser.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, DbUserController],
  providers: [AppService, PrismaService, DbUserService],
})

export class AppModule {}
