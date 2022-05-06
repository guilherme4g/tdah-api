import { forwardRef, Module } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

import { UsersModule } from 'src/users/users.module';
import { TasksRepository } from './tasks.repository';

@Module({
  imports: [forwardRef(() => UsersModule)],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
  exports: [TasksService],
})
export class TasksModule {}
