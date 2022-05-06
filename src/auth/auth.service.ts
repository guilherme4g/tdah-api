import { Injectable } from '@nestjs/common';

import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateAuthDto } from './dto/login.dto';
import { DefaultException } from '../shared/exception/default.exception';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  login(createAuthDto: CreateAuthDto): User {
    const userAlreadyExists = this.usersService.findByEmail(
      createAuthDto.email,
    );

    if (!userAlreadyExists) {
      throw new DefaultException('AuthService', 'Credenciais Invalidas');
    } else if (userAlreadyExists.password !== createAuthDto.password) {
      throw new DefaultException('AuthService', 'Credenciais Invalidas');
    }

    const user = this.usersService.findOne(userAlreadyExists.id);

    return user;
  }
}
