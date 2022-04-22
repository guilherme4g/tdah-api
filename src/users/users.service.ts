import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

   create(createUserDto: CreateUserDto): User {
    const user =  this.usersRepository.create(createUserDto);
    return user;
  }

   findAll(): User[] {
    const users =  this.usersRepository.list();
    return users;
  }

   findOne(id: string): User {
    const [user] =  this.usersRepository.list();
    return user;
  }

   update(id: string, updateUserDto: UpdateUserDto): User {
    const user =  this.usersRepository.update(id, updateUserDto);
    return user;
  }

   remove(id: string): void {
     this.usersRepository.remove(id);
  }
}
