import { Injectable } from '@nestjs/common';

import { DailyTask } from './entities/daily-task.entity';
import { DailyTasksRepository } from './daily-tasks.repository';
import { CreateDailyTaskDto } from './dto/create-daily-task.dto';
import { UpdateDailyTaskDto } from './dto/update-daily-task.dto';

@Injectable()
export class DailyTasksService {
  constructor(private readonly dailyTasksRepository: DailyTasksRepository) {}

  create(createDailyTaskDto: CreateDailyTaskDto): DailyTask {
    return this.dailyTasksRepository.create(createDailyTaskDto);
  }

  findAll(): DailyTask[] {
    const dailyTasks = this.dailyTasksRepository.list();
    return dailyTasks;
  }

  findOne(id: string): DailyTask {
    const [dailyTask] = this.dailyTasksRepository.list(id);
    return dailyTask;
  }

  update(id: string, updateDailyTaskDto: UpdateDailyTaskDto): DailyTask {
    const dailyTask = this.dailyTasksRepository.update(id, updateDailyTaskDto);
    return dailyTask;
  }

  remove(id: string): void {
    this.dailyTasksRepository.remove(id);
  }
}
