import { Injectable } from '@nestjs/common';
import { ListTaskDto } from './dto/list-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, StatusType } from './entities/task.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksRepository {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = { id: uuidv4(), ...createTaskDto };
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
      );

    return tasksFiltered;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const index = this.tasks.findIndex((task) => task.id == id);

    if (index > -1) {
      this.tasks[index] = {
        id,
        createdById: this.tasks[index].createdById,
        createdForId: this.tasks[index].createdForId,
        name: updateTaskDto.name ?? this.tasks[index].name,
        status: updateTaskDto.status ?? this.tasks[index].status,
        date: updateTaskDto.date ?? this.tasks[index].date,
        coins: updateTaskDto.coins ?? this.tasks[index].coins,
        days: updateTaskDto.days ?? this.tasks[index].days,
        type: updateTaskDto.type ?? this.tasks[index].type,
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

  // createRegistry(taskId: string, date: string) {
  //   const indexTask = this.tasks.findIndex((task) => task.id == taskId);
  //   if (indexTask > -1) {
  //     const indexRegistry = this.tasks[indexTask].registries.findIndex(
  //       (registry) => registry.date == date,
  //     );
  //     if (indexRegistry < 0) {
  //       this.tasks[indexTask].registries.push({
  //         date,
  //         status: 'ny',
  //       });
  //     }
  //   }
  //   return null;
  // }

//   updateRegistry(taskId: string, date: string, statusType: StatusType) {
//     const indexTask = this.tasks.findIndex((task) => task.id == taskId);
//     const indexRegistry = this.tasks[indexTask].registries.findIndex(
//       (registry) => registry.date == date,
//     );

//     this.tasks[indexTask].registries[indexRegistry].status = statusType;
//   }
}
