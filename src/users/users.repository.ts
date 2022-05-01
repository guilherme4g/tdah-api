import { Injectable } from '@nestjs/common';
import { ListUserDto } from './dto/list-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersRepository {
  private users: User[] = [
    {
      id: "87114373-b7de-4e48-b603-df97545a7482",
      name: "samuel",
      email: "samu@cin.com",
      phone: "40028922",
      password: "senha123"
    },
    {
      id: "a9795b14-af93-4db0-89f2-9742ac9b6d13",
      name: "samuel junior",
      email: "junin@cin.com",
      phone: "40028922",
      parentId: "87114373-b7de-4e48-b603-df97545a7482",
      password: "senha123"
    }  
  ];

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
