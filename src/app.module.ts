import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DailyTasksModule } from './daily-tasks/daily-tasks.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [UsersModule, AuthModule, DailyTasksModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
