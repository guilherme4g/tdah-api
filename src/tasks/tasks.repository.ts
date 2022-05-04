import { Injectable } from '@nestjs/common';
import { ListTaskDto } from './dto/list-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { v4 as uuidv4 } from 'uuid';
import { dayArray, Day, Task } from './entities/task.entity';

@Injectable()
export class TasksRepository {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: uuidv4(),
      date: '',
      done: false,
      ...createTaskDto,
    };
    this.tasks.push(task);
    return task;
  }

  list(listTaskDto: ListTaskDto): Task[] {
    const {
      id = '',
      createdById = '',
      createdForId = '',
      name = '',
      today = '',
      type = '',
    } = listTaskDto;
    const tasksFiltered = this.tasks
      .filter((task) => task.id.toLowerCase().indexOf(id.toLowerCase()) !== -1)
      .filter(
        (task) =>
          task.createdById.toLowerCase().indexOf(createdById.toLowerCase()) !==
          -1,
      )
      .filter(
        (task) =>
          task.createdForId
            .toLowerCase()
            .indexOf(createdForId.toLowerCase()) !== -1,
      )
      .filter(
        (task) => task.name.toLowerCase().indexOf(name.toLowerCase()) !== -1,
      )
      .filter(
        (task) => task.type.toLowerCase().indexOf(type.toLowerCase()) !== -1,
      )
      .filter((task) => {
        const day = this.getTodayDayName();
        if (today && task.days && task.days.includes(day)) {
          return true;
        } else if (!today) {
          return true;
        } else if (task.type === 'relationship') {
          return true;
        } else {
          return false;
        }
      });

    return tasksFiltered;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const index = this.tasks.findIndex((task) => task.id == id);

    if (index > -1) {
      this.tasks[index] = {
        id,
        createdById: this.tasks[index].createdById,
        createdForId: this.tasks[index].createdForId,
        instrucoes: updateTaskDto.instrucoes ?? this.tasks[index].instrucoes,
        name: updateTaskDto.name ?? this.tasks[index].name,
        coins: updateTaskDto.coins ?? this.tasks[index].coins,
        days: updateTaskDto.days ?? this.tasks[index].days,
        type: updateTaskDto.type ?? this.tasks[index].type,
        date: updateTaskDto.done ? this.getDate() : this.tasks[index].date,
        done: updateTaskDto.done ?? this.tasks[index].done,
      };
      return this.tasks[index];
    }
    return null;
  }

  remove(id: string): void {
    const index = this.tasks.findIndex((task) => {
      task.id == id;
    });
    this.tasks.splice(index, 1);
  }

  getDate(): string {
    const date = new Date();
    return `${date.getFullYear()}-${
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
    }-${date.getDate()}`;
  }

  getTodayDayName(): Day {
    const date = new Date();
    const dayName = dayArray[date.getDay()];
    return dayName;
  }
}
