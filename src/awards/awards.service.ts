import { Injectable } from '@nestjs/common';
import { AwardsRepository } from 'src/awards/awards.repository';
import { DefaultException } from 'src/shared/exception/default.exception';
import { UsersService } from 'src/users/users.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { ListAwardDto } from './dto/list-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from './entities/award.entity';

@Injectable()
export class AwardsService {
  constructor(
    private readonly awardsRepository: AwardsRepository,
    private readonly usersService: UsersService,
  ) {}

  create(createAwardDto: CreateAwardDto): Award {
    const parent = this.usersService.findOne(createAwardDto.createdById);
    if (!parent) {
      throw new DefaultException(
        'AwardService',
        'Responsável citado não foi encontrada',
      );
    }

    const [childAlreadyExists] = parent.children.filter(
      (child) => child.id === createAwardDto.createdForId,
    );
    if (!childAlreadyExists) {
      throw new DefaultException(
        'AwardService',
        'Criança citada não foi encontrada',
      );
    }

    const award = this.awardsRepository.create(createAwardDto);
    return award;
  }

  findAll(listAwardDto: ListAwardDto): Award[] {
    const awards = this.awardsRepository.list(listAwardDto);
    return awards;
  }

  findOne(id: string): Award {
    const [award] = this.awardsRepository.list({ id });
    return award;
  }

  update(id: string, updateAwardDto: UpdateAwardDto) {
    const awardAlreadyExists = this.findOne(id);
    if (!awardAlreadyExists) {
      throw new DefaultException('AwardService', 'Award não existe');
    }

    const award = this.awardsRepository.update(id, updateAwardDto);
    return award;
  }

  remove(id: string) {
    this.awardsRepository.remove(id);
  }
}
