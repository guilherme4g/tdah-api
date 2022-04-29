import { Injectable } from '@nestjs/common';

import { dayArray, Day, Task } from './entities/task.entity';

import { ListTaskDto } from './dto/list-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { UsersService } from 'src/users/users.service';
import { TasksRepository } from './tasks.repository';
import { DefaultException } from 'src/shared/exception/default.exception';

@Injectable()
export class TasksService {
  constructor(
    private readonly tasksRepository: TasksRepository,
    private readonly usersService: UsersService,
  ) {}

  create(createTaskDto: CreateTaskDto): Task {
    const parent = this.usersService.findOne(createTaskDto.createdById);
    if (!parent) {
      throw new DefaultException(
        'TaskService',
        'Responsável citado não foi encontrada',
      );
    }

    const [childAlreadyExists] = parent.children.filter(
      (child) => child.id === createTaskDto.createdForId,
    );
    if (!childAlreadyExists) {
      throw new DefaultException(
        'TaskService',
        'Criança citada não foi encontrada',
      );
    }

    const task = this.tasksRepository.create(createTaskDto);

    return task;
  }

  findAll(listTaskDto: ListTaskDto): Task[] {
    const tasks = this.tasksRepository.list(listTaskDto);
    return tasks;
  }

  findOne(id: string): Task {
    const [task] = this.tasksRepository.list({ id });
    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const taskAlreadyExists = this.findOne(id);
    if (!taskAlreadyExists) {
      throw new DefaultException('TaskService', 'Task não existe');
    }

    const task = this.tasksRepository.update(id, updateTaskDto);
    return task;
  }

  remove(id: string): void {
    this.tasksRepository.remove(id);
  }

  getTodayDayName(): Day {
    const date = new Date();
    const dayName = dayArray[date.getDay()];
    return dayName;
  }

  getDate(): string {
    const date = new Date();
    return `${date.getFullYear()}-${
      date.getMonth() < 9 ? '0' : ''
    }-${date.getDate()}`;
  }
}
