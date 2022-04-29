import { Module } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { AwardsController } from './awards.controller';
import { TasksModule } from 'src/tasks/tasks.module';
import { AwardsRepository } from './awards.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AwardsController],
  providers: [AwardsService, AwardsRepository],
  imports: [TasksModule, UsersModule]
})
export class AwardsModule {}
