import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';

import { DailyTask } from './entities/daily-task.entity';
import { CreateDailyTaskDto } from './dto/create-daily-task.dto';
import { UpdateDailyTaskDto } from './dto/update-daily-task.dto';

@Injectable()
export class DailyTasksRepository {
  private DailyTasks: DailyTask[] = [];

  create(createDailyTaskDto: CreateDailyTaskDto): DailyTask {
    const dailyTask: DailyTask = { id: uuidv4(), ...createDailyTaskDto };
    this.DailyTasks.push(dailyTask);
    return dailyTask;
  }

  list(id?: string): DailyTask[] {
    if (id) {
      return [this.DailyTasks.find((user) => user.id == id)];
    }
    return this.DailyTasks;
  }

  update(id: string, updateDailyTaskDto: UpdateDailyTaskDto): DailyTask {
    const index = this.DailyTasks.findIndex((user) => user.id == id);
    console.log(index);
    this.DailyTasks[index] = {
      id,
      createdById: this.DailyTasks[index].createdById,
      name: updateDailyTaskDto.name ?? this.DailyTasks[index].name,
      award: updateDailyTaskDto.award ?? this.DailyTasks[index].award,
      days: updateDailyTaskDto.days ?? this.DailyTasks[index].days,
      createdForId:
        updateDailyTaskDto.createdForId ?? this.DailyTasks[index].createdForId,
    };
    return this.DailyTasks[index];
  }

  remove(id: string): void {
    const index = this.DailyTasks.findIndex((user) => {
      user.id == id;
    });
    this.DailyTasks.splice(index, 1);
  }
}