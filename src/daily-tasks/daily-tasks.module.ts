import { Module } from '@nestjs/common';
import { DailyTasksController } from './daily-tasks.controller';
import { DailyTasksService } from './daily-tasks.service';
import { DailyTasksRepository } from './daily-tasks.repository';

@Module({
  controllers: [DailyTasksController],
  providers: [DailyTasksService, DailyTasksRepository],
})
export class DailyTasksModule {}
