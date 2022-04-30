import { Injectable } from '@nestjs/common';
import { ListUserDto } from './dto/list-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersRepository {
  private users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const user: User = { id: uuidv4(), ...createUserDto };
    this.users.push(user);
    return user;
  }

  list(listUserDto: ListUserDto): User[] {
    const { id = '', email = '', parentId } = listUserDto;
    const usersFiltered = this.users
      .filter((user) => user.id.toLowerCase().indexOf(id.toLowerCase()) !== -1)
      .filter(
        (user) => user.email.toLowerCase().indexOf(email.toLowerCase()) !== -1,
      )
      .filter((user) => {
        if (!parentId) return true;
        if (parentId && user.parentId) {
          return (
            user.parentId?.toLowerCase().indexOf(parentId.toLowerCase()) !== -1
          );
        }
        return false;
      });

    return usersFiltered;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const index = this.users.findIndex((user) => user.id == id);
    console.log(index);
    this.users[index] = {
      id,
      email: this.users[index].email,
      name: updateUserDto.name ?? this.users[index].name,
      phone: updateUserDto.phone ?? this.users[index].phone,
      parentId: updateUserDto.parentId ?? this.users[index].parentId,
      password: updateUserDto.password ?? this.users[index].password,
    };
    return this.users[index];
  }

  remove(id: string): void {
    const index = this.users.findIndex((user) => {
      user.id == id;
    });
    this.users.splice(index, 1);
  }
}
