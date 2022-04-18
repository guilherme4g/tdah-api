import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.create(createUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.list();
    return users;
  }

  async findOne(id: string): Promise<User> {
    const [user] = await this.usersRepository.list();
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.update(id, updateUserDto);
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.remove(id);
  }
}
