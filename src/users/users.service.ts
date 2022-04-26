import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

import { ListUserDto } from './dto/list-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto): User {
    const userAlreadyExists = this.findByEmail(createUserDto.email);
    if (userAlreadyExists) {
      throw Error('Usuário já existe');
    }

    const user = this.usersRepository.create(createUserDto);
    return user;
  }

  findAll(listUserDto: ListUserDto): User[] {
    const users = this.usersRepository.list(listUserDto);
    return users;
  }

  findOne(id: string): User {
    const [user] = this.usersRepository.list({ id });
    return user;
  }

  findByEmail(email: string): User {
    const [user] = this.usersRepository.list({ email });
    return user;
  }

  findByParentId(parentId: string): User {
    const [user] = this.usersRepository.list({ parentId });
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const userAlreadyExists = this.findOne(id);
    if (!userAlreadyExists) {
      throw Error('Usuário não existe');
    }

    const user = this.usersRepository.update(id, updateUserDto);
    return user;
  }

  remove(id: string): void {
    this.usersRepository.remove(id);
  }
}
