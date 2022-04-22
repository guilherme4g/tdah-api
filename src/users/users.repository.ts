import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersRepository {
  private Users:User[] = [];

  create(createUserDto: CreateUserDto): User {
    const user: User = {id:uuidv4(),...createUserDto};
    this.Users.push(user);
    return user;
  }

  list(): User[] {
    return this.Users;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const index = this.Users.findIndex((user)=>user.id == id)
    console.log(index)
    this.Users[index] = {
      id,
      email: this.Users[index].email,
      name:  updateUserDto.name??this.Users[index].name,
      phone: updateUserDto.phone??this.Users[index].phone,
      role: updateUserDto.role??this.Users[index].role,
      password: updateUserDto.password??this.Users[index].password,
    };
    return this.Users[index];
  }

  remove(id: string): void {
    const index = this.Users.findIndex((user)=>{user.id == id})
    this.Users.splice(index, 1)
  }
}
