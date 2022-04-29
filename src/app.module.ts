import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { AwardsModule } from './awards/awards.module';

@Module({
  imports: [UsersModule, AuthModule, TasksModule, AwardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
