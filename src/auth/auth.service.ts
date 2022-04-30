import { Injectable } from '@nestjs/common';

import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateAuthDto } from './dto/login.dto';
import { DefaultException } from '../shared/exception/default.exception';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  login(createAuthDto: CreateAuthDto): User {
    const user = this.usersService.findByEmail(createAuthDto.email);

    if (!user) {
      throw new DefaultException('AuthService', 'Credenciais Invalidas');
    } else if (user.password !== createAuthDto.password) {
      throw new DefaultException('AuthService', 'Credenciais Invalidas');
    }

    return user;
  }
}
