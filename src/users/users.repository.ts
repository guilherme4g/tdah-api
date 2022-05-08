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
      id: '87114373-b7de-4e48-b603-df97545a7482',
      email: 'samu@cin.com',
      name: 'samuel',
      icon: '2',
      phone: '40028922',
      password: 'senha123',
    },
    {
      id: 'a9795b14-af93-4db0-89f2-9742ac9b6d13',
      email: 'junin@cin.com',
      name: 'samuel junior',
      icon: '2',
      phone: '40028922',
      parentId: '87114373-b7de-4e48-b603-df97545a7482',
      coins: 0,
      password: 'senha123',
    },
    {
      id: '19ec5f83-1c8c-4bf3-bdf8-018b51c3d72f',
      email: 'maria@cin.com',
      name: 'maria',
      icon: '3',
      phone: '40028922',
      parentId: '87114373-b7de-4e48-b603-df97545a7482',
      coins: 0,
      password: 'senha123',
    },
    {
      id: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      email: 'cami.menezes@yahoo.com.br',
      name: 'Camila Menezes Torres Cândido',
      icon: '3',
      phone: '81 997220651',
      password: 'senha123',
    },
    {
      id: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
      email: 'menezescael@gmail.com',
      name: 'Cael Menezes Bagetti',
      icon: '3',
      phone: '81 997220651',
      parentId: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      coins: 0,
      password: 'senha123',
    },
  ];

  create(createUserDto: CreateUserDto): User {
    const user: User = { id: uuidv4(), ...createUserDto, coins: 0 };
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

  update(id: string, updateUserDto: UpdateUserDto & { coins?: number }): User {
    const index = this.users.findIndex((user) => user.id == id);
    this.users[index] = {
      id,
      email: this.users[index].email,
      name: updateUserDto.name ?? this.users[index].name,
      icon: updateUserDto.icon ?? this.users[index].icon,
      coins: updateUserDto.coins ?? this.users[index].coins,
      phone: updateUserDto.phone ?? this.users[index].phone,
      parentId: updateUserDto.parentId ?? this.users[index].parentId,
      password: updateUserDto.password ?? this.users[index].password,
    };
    return this.users[index];
  }

  remove(id: string): void {
    const index = this.users.findIndex((user) => user.id == id);
    this.users.splice(index, 1);
  }
}
