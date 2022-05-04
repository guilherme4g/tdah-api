import { forwardRef, Module } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

import { UsersModule } from 'src/users/users.module';
import { TasksRepository } from './tasks.repository';

@Module({
  imports: [UsersModule],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
  exports: [TasksService, TasksRepository],
})
export class TasksModule {}
