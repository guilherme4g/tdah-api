import { Injectable } from '@nestjs/common';
import { ListTaskDto } from './dto/list-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksRepository {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = { id: uuidv4(), registries: [], ...createTaskDto };
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
      .filter(
        (task) => task.type.toLowerCase().indexOf(type.toLowerCase()) !== -1,
      );

    return tasksFiltered;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const index = this.tasks.findIndex((task) => task.id == id);
    console.log(index);
    this.tasks[index] = {
      id,
      createdById: this.tasks[index].createdById,
      createdForId: this.tasks[index].createdForId,
      registries: this.tasks[index].registries,
      name: updateTaskDto.name ?? this.tasks[index].name,
      coins: updateTaskDto.coins ?? this.tasks[index].coins,
      days: updateTaskDto.days ?? this.tasks[index].days,
      type: updateTaskDto.type ?? this.tasks[index].type,
    };
    return this.tasks[index];
  }

  remove(id: string): void {
    const index = this.tasks.findIndex((task) => {
      task.id == id;
    });
    this.tasks.splice(index, 1);
  }
}
