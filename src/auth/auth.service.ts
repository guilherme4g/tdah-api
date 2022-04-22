import { Injectable } from '@nestjs/common';

import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateAuthDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  login(createAuthDto: CreateAuthDto): User {
    const user = this.usersService.findByEmail(createAuthDto.email);

    if (!user) {
      throw Error('Credenciais Invalidas');
    } else if (user.password !== createAuthDto.password) {
      throw Error('Credenciais Invalidas');
    }

    return user;
  }
}
