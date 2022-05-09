import { forwardRef, Inject, Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

import { ListUserDto } from './dto/list-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RedeemUserDto } from './dto/redeem-user.dto';

import { DefaultException } from '../shared/exception/default.exception';
import { TasksService } from 'src/tasks/tasks.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    @Inject(forwardRef(() => TasksService))
    private readonly tasksService: TasksService,
  ) {}

  create(createUserDto: CreateUserDto): User {
    const userAlreadyExists = this.findByEmail(createUserDto.email);
    if (userAlreadyExists) {
      throw new DefaultException('UserService', 'Usuário já existe');
    }

    const user = this.usersRepository.create(createUserDto);

    if (createUserDto.parentId) {
      this.tasksService.create({
        coins: 200,
        name: 'Montar Palito',
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
        createdById: createUserDto.parentId,
        createdForId: user.id,
        document: 'https://shre.ink/qwV',
      });

      this.tasksService.create({
        coins: 200,
        name: 'Cubo Colorido',
        instructions: [
          'Imprimam os cubos coloridos e os cubos com espaço vazio que aparecem no link de mais detalhes sobre a atividade no final dessas instruções.',
          'Agora o jogo vai começar!',
          'Cada um pega um cubo colorido e um cubo em branco.',
          'Seu desafio é replicar no seu cubo em branco exatamente as cores e as posições delas no cubo colorido que você pegou.',
          'Quem conseguir reproduzir o seu cubo colorido mais rápido e mais correto é o vencedor.',
        ],
        type: 'relationship',
        createdById: createUserDto.parentId,
        createdForId: user.id,
        document: 'https://shre.ink/qwE',
      });

      this.tasksService.create({
        coins: 50,
        name: 'Escovar os dentes',
        type: 'daily',
        days: ['thursday', 'friday', 'saturday', 'monday'],
        createdById: createUserDto.parentId,
        createdForId: user.id,
      });

      this.tasksService.create({
        coins: 50,
        name: 'Arrumar a cama',
        type: 'daily',
        days: ['thursday', 'friday', 'saturday', 'monday'],
        createdById: createUserDto.parentId,
        createdForId: user.id,
      });
    }

    return user;
  }

  findAll(listUserDto: ListUserDto): User[] {
    const users = this.usersRepository.list(listUserDto);
    return users;
  }

  findOne(id: string): User {
    const [user] = this.usersRepository.list({ id });
    const children = this.findAll({ parentId: user.id });
    return {
      ...user,
      children,
    };
  }

  findByEmail(email: string): User {
    const [user] = this.usersRepository.list({ email });
    return user;
  }

  findByParentId(parentId: string): User {
    const [user] = this.usersRepository.list({ parentId });
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto & { coins?: number }): User {
    const userAlreadyExists = this.findOne(id);
    if (!userAlreadyExists) {
      throw new DefaultException('UserService', 'Usuário não existe');
    }

    const user = this.usersRepository.update(id, updateUserDto);
    return user;
  }

  redeem(id: string, redeemUserDto: RedeemUserDto): User {
    const userAlreadyExists = this.findOne(id);
    if (!userAlreadyExists) {
      throw new DefaultException('UserService', 'Usuário não existe');
    }

    if (userAlreadyExists.coins < redeemUserDto.coins) {
      throw new DefaultException(
        'UserService',
        'Não é possível debitar esse valor',
      );
    }

    const user = this.usersRepository.update(id, {
      coins: userAlreadyExists.coins - redeemUserDto.coins,
    });

    return user;
  }

  remove(id: string): void {
    this.usersRepository.remove(id);
  }
}
