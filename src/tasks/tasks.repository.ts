import { Injectable } from '@nestjs/common';
import { ListTaskDto } from './dto/list-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { v4 as uuidv4 } from 'uuid';
import { dayArray, Day, Task } from './entities/task.entity';

@Injectable()
export class TasksRepository {
  private tasks: Task[] = [
    {
      id: '7799ad80-de50-48c1-97a6-09ae0c480eee',
      coins: 50,
      name: 'Montar Palito',
      done: false,
      instructions: ['Passo 1', 'Passo 2', 'Passo 3', 'Passo 4'],
      type: 'relationship',
      date: '2022-05-05',
      days: ['thursday', 'friday', 'saturday'],
      createdById: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      createdForId: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
    },
    {
      id: '3765a2ce-84e2-4fed-82c7-9d1f1604f2e2',
      coins: 50,
      name: 'Arrumar brinquedos',
      done: false,
      instructions: [],
      type: 'daily',
      date: '2022-05-05',
      days: ['thursday', 'friday', 'saturday'],
      createdById: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      createdForId: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
    },
    {
      id: '2072a89b-f6af-4980-8fbb-192ab16c7f05',
      coins: 100,
      name: 'Escovar os dentes',
      done: false,
      instructions: [],
      type: 'daily',
      date: '2022-05-05',
      days: ['thursday', 'friday', 'saturday', 'monday'],
      createdById: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      createdForId: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
    },
  ];

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
        instructions:
          updateTaskDto.instructions ?? this.tasks[index].instructions,
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
