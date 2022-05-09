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
      id: uuidv4(),
      coins: 200,
      name: 'Montar Palito',
      done: false,
      instructions: [
        'Se vocês ainda não tem seus palitos coloridos, a missão de vocês é conseguir 22 palitos de picolé (mas também pode ser outro tipo de palito).',
        'Peguem os 22 palitos de picolé que vocês conseguiram e pintem 4 de roxo, 4 de amarelo, 4 de vermelho, 4 de azul, 4 de verde e 4 de bege.',
        'Agora o responsável pega dois palitos de cada cor e a criança também pega 2 palitos de cada cor.',
        'Imprimam as cartas que aparecem no link de mais detalhes sobre a atividade no final dessas instruções.',
        'Agora o jogo vai começar!',
        'Embaralhem as cartas e deixem elas juntas viradas para baixo como em um baralho.',
        'Cada um pega uma carta e bota ela do seu lado, ainda virada para baixo.',
        'Façam uma contagem de 1 até 3 e virem a carta ao mesmo tempo.',
        'Com os seus palitos, tentem reproduzir o desenho que aparecer na sua carta.',
        ' Quem acabar primeiro de reproduzir o desenho que aparece na sua carta, ganha a rodada!',
        ' Quem ganhar o maior número de rodadas é o vencedor!',
      ],
      type: 'relationship',
      date: '2022-05-05',
      createdById: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      createdForId: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
      document: 'https://shre.ink/qwV',
    },
    {
      id: uuidv4(),
      coins: 200,
      done: false,
      name: 'Cubo Colorido',
      instructions: [
        'Imprimam os cubos coloridos e os cubos com espaço vazio que aparecem no link de mais detalhes sobre a atividade no final dessas instruções.',
        'Agora o jogo vai começar!',
        'Cada um pega um cubo colorido e um cubo em branco.',
        'Seu desafio é replicar no seu cubo em branco exatamente as cores e as posições delas no cubo colorido que você pegou.',
        'Quem conseguir reproduzir o seu cubo colorido mais rápido e mais correto é o vencedor.',
      ],
      type: 'relationship',
      date: '2022-05-05',
      createdById: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      createdForId: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
      document: 'https://shre.ink/qwE',
    },
    {
      id: uuidv4(),
      coins: 20,
      name: 'Arrumar brinquedos',
      done: false,
      type: 'daily',
      date: '2022-05-05',
      days: ['thursday', 'friday', 'saturday'],
      createdById: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      createdForId: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
    },
    {
      id: uuidv4(),
      coins: 10,
      name: 'Escovar os dentes',
      done: false,
      type: 'daily',
      date: '2022-05-05',
      days: ['thursday', 'friday', 'saturday', 'monday'],
      createdById: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      createdForId: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
    },
    {
      id: uuidv4(),
      coins: 10,
      name: 'Arrumar quarto',
      done: false,
      type: 'daily',
      date: '2022-05-05',
      days: ['saturday'],
      createdById: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      createdForId: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
    },
    {
      id: uuidv4(),
      coins: 200,
      name: 'Montar Palito',
      done: false,
      instructions: [
        'Se vocês ainda não tem seus palitos coloridos, a missão de vocês é conseguir 22 palitos de picolé (mas também pode ser outro tipo de palito).',
        'Peguem os 22 palitos de picolé que vocês conseguiram e pintem 4 de roxo, 4 de amarelo, 4 de vermelho, 4 de azul, 4 de verde e 4 de bege.',
        'Agora o responsável pega dois palitos de cada cor e a criança também pega 2 palitos de cada cor.',
        'Imprimam as cartas que aparecem no link de mais detalhes sobre a atividade no final dessas instruções.',
        'Agora o jogo vai começar!',
        'Embaralhem as cartas e deixem elas juntas viradas para baixo como em um baralho.',
        'Cada um pega uma carta e bota ela do seu lado, ainda virada para baixo.',
        'Façam uma contagem de 1 até 3 e virem a carta ao mesmo tempo.',
        'Com os seus palitos, tentem reproduzir o desenho que aparecer na sua carta.',
        ' Quem acabar primeiro de reproduzir o desenho que aparece na sua carta, ganha a rodada!',
        ' Quem ganhar o maior número de rodadas é o vencedor!',
      ],
      type: 'relationship',
      date: '2022-05-05',
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: 'a9795b14-af93-4db0-89f2-9742ac9b6d13',
      document: 'https://shre.ink/qwV',
    },
    {
      id: uuidv4(),
      coins: 200,
      done: false,
      name: 'Cubo Colorido',
      instructions: [
        'Imprimam os cubos coloridos e os cubos com espaço vazio que aparecem no link de mais detalhes sobre a atividade no final dessas instruções.',
        'Agora o jogo vai começar!',
        'Cada um pega um cubo colorido e um cubo em branco.',
        'Seu desafio é replicar no seu cubo em branco exatamente as cores e as posições delas no cubo colorido que você pegou.',
        'Quem conseguir reproduzir o seu cubo colorido mais rápido e mais correto é o vencedor.',
      ],
      type: 'relationship',
      date: '2022-05-05',
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: 'a9795b14-af93-4db0-89f2-9742ac9b6d13',
      document: 'https://shre.ink/qwE',
    },
    {
      id: uuidv4(),
      coins: 20,
      name: 'Arrumar brinquedos',
      done: false,
      type: 'daily',
      date: '2022-05-05',
      days: ['thursday', 'friday', 'saturday'],
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: 'a9795b14-af93-4db0-89f2-9742ac9b6d13',
    },
    {
      id: uuidv4(),
      coins: 10,
      name: 'Escovar os dentes',
      done: false,
      type: 'daily',
      date: '2022-05-05',
      days: ['thursday', 'friday', 'saturday', 'monday'],
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: 'a9795b14-af93-4db0-89f2-9742ac9b6d13',
    },
    {
      id: uuidv4(),
      coins: 10,
      name: 'Arrumar quarto',
      done: false,
      type: 'daily',
      date: '2022-05-05',
      days: ['saturday'],
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: 'a9795b14-af93-4db0-89f2-9742ac9b6d13',
    },
    {
      id: uuidv4(),
      coins: 200,
      name: 'Montar Palito',
      done: false,
      instructions: [
        'Se vocês ainda não tem seus palitos coloridos, a missão de vocês é conseguir 22 palitos de picolé (mas também pode ser outro tipo de palito).',
        'Peguem os 22 palitos de picolé que vocês conseguiram e pintem 4 de roxo, 4 de amarelo, 4 de vermelho, 4 de azul, 4 de verde e 4 de bege.',
        'Agora o responsável pega dois palitos de cada cor e a criança também pega 2 palitos de cada cor.',
        'Imprimam as cartas que aparecem no link de mais detalhes sobre a atividade no final dessas instruções.',
        'Agora o jogo vai começar!',
        'Embaralhem as cartas e deixem elas juntas viradas para baixo como em um baralho.',
        'Cada um pega uma carta e bota ela do seu lado, ainda virada para baixo.',
        'Façam uma contagem de 1 até 3 e virem a carta ao mesmo tempo.',
        'Com os seus palitos, tentem reproduzir o desenho que aparecer na sua carta.',
        ' Quem acabar primeiro de reproduzir o desenho que aparece na sua carta, ganha a rodada!',
        ' Quem ganhar o maior número de rodadas é o vencedor!',
      ],
      type: 'relationship',
      date: '2022-05-05',
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: '19ec5f83-1c8c-4bf3-bdf8-018b51c3d72f',
      document: 'https://shre.ink/qwV',
    },
    {
      id: uuidv4(),
      coins: 200,
      done: false,
      name: 'Cubo Colorido',
      instructions: [
        'Imprimam os cubos coloridos e os cubos com espaço vazio que aparecem no link de mais detalhes sobre a atividade no final dessas instruções.',
        'Agora o jogo vai começar!',
        'Cada um pega um cubo colorido e um cubo em branco.',
        'Seu desafio é replicar no seu cubo em branco exatamente as cores e as posições delas no cubo colorido que você pegou.',
        'Quem conseguir reproduzir o seu cubo colorido mais rápido e mais correto é o vencedor.',
      ],
      type: 'relationship',
      date: '2022-05-05',
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: '19ec5f83-1c8c-4bf3-bdf8-018b51c3d72f',
      document: 'https://shre.ink/qwE',
    },
    {
      id: uuidv4(),
      coins: 20,
      name: 'Arrumar brinquedos',
      done: false,
      type: 'daily',
      date: '2022-05-05',
      days: ['thursday', 'friday', 'saturday'],
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: '19ec5f83-1c8c-4bf3-bdf8-018b51c3d72f',
    },
    {
      id: uuidv4(),
      coins: 10,
      name: 'Escovar os dentes',
      done: false,
      type: 'daily',
      date: '2022-05-05',
      days: ['thursday', 'friday', 'saturday', 'monday'],
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: '19ec5f83-1c8c-4bf3-bdf8-018b51c3d72f',
    },
    {
      id: uuidv4(),
      coins: 10,
      name: 'Arrumar quarto',
      done: false,
      type: 'daily',
      date: '2022-05-05',
      days: ['saturday'],
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: '19ec5f83-1c8c-4bf3-bdf8-018b51c3d72f',
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
    const index = this.tasks.findIndex((task) => task.id == id);
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
