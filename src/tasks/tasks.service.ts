import { Injectable } from '@nestjs/common';

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

  create(createTaskDto: CreateTaskDto) {
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

    this.tasksRepository.create()

    return;
  }

  findAll(listTaskDto: ListTaskDto) {
    return `This action returns all tasks`;
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
