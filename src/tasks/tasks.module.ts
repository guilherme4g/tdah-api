import { Module } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
