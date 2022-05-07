import { Injectable } from '@nestjs/common';
import { CreateAwardDto } from './dto/create-award.dto';
import { ListAwardDto } from './dto/list-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from './entities/award.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AwardsRepository {
  private awards: Award[] = [
    {
      id: '9abc1452-085d-41fa-a3f4-223029654ab0',
      name: 'Ir ao Cinema',
      cost: 600,
      createdById: '87114373-b7de-4e48-b603-df97545a7482',
      createdForId: '19ec5f83-1c8c-4bf3-bdf8-018b51c3d72f',
    },
    {
      id: '096627a8-861d-4af6-b9ca-ce9c4fd1378c',
      name: 'Jogar Video Game',
      cost: 800,
      createdById: 'a698fe53-92a9-4e06-9b09-93d2dd9fe804',
      createdForId: '7f196a2c-0c05-4e83-99f3-dfd6c73533fb',
    },
  ];

  create(createAwardDto: CreateAwardDto): Award {
    const award: Award = { id: uuidv4(), ...createAwardDto };
    this.awards.push(award);
    return award;
  }

  list(listAwardDto: ListAwardDto): Award[] {
    const {
      id = '',
      name = '',
      createdById = '',
      createdForId = '',
    } = listAwardDto;

    const tasksFiltered = this.awards
      .filter((user) => user.id.toLowerCase().indexOf(id.toLowerCase()) !== -1)
      .filter(
        (user) => user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1,
      )
      .filter(
        (user) =>
          user.createdById.toLowerCase().indexOf(createdById.toLowerCase()) !==
          -1,
      )
      .filter(
        (user) =>
          user.createdForId
            .toLowerCase()
            .indexOf(createdForId.toLowerCase()) !== -1,
      );

    return tasksFiltered;
  }

  update(id: string, updateAwardDto: UpdateAwardDto): Award {
    const index = this.awards.findIndex((Award) => Award.id == id);
    this.awards[index] = {
      id,
      name: updateAwardDto.name ?? this.awards[index].name,
      cost: updateAwardDto.cost ?? this.awards[index].cost,
      createdById: this.awards[index].createdById,
      createdForId: this.awards[index].createdForId,
    };
    return this.awards[index];
  }

  remove(id: string): void {
    const index = this.awards.findIndex((Award) => Award.id == id);
    this.awards.splice(index, 1);
  }
}
