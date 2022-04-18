import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  create(createUserDto: CreateUserDto): Promise<User> {
    return null;
  }

  list(): Promise<User[]> {
    return null;
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return null;
  }

  remove(id: string): Promise<void> {
    return null;
  }
}
