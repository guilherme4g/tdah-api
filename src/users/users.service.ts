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
        instructions: ['Passo 1', 'Passo 2', 'Passo 3', 'Passo 4'],
        type: 'relationship',
        createdById: createUserDto.parentId,
        createdForId: user.id,
      });

      this.tasksService.create({
        coins: 200,
        name: 'Cubo Colorido',
        instructions: ['Passo 1', 'Passo 2', 'Passo 3', 'Passo 4'],
        type: 'relationship',
        createdById: createUserDto.parentId,
        createdForId: user.id,
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
