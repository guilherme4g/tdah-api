import { Injectable } from '@nestjs/common';
import { CreateAwardDto } from './dto/create-award.dto';
import { ListAwardDto } from './dto/list-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from './entities/award.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AwardsRepository {
  private awards: Award[] = [];

  create(createAwardDto: CreateAwardDto): Award {
    const award: Award = { id: uuidv4(), ...createAwardDto };
    this.awards.push(award);
    return award;
  }

  list(listAwardDto: ListAwardDto): Award[] {
    return this.awards;
  }

  update(id: string, updateAwardDto: UpdateAwardDto): Award {
    const index = this.awards.findIndex((Award) => Award.id == id);
    console.log(index);
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
    const index = this.awards.findIndex((Award) => {
      Award.id == id;
    });
    this.awards.splice(index, 1);
  }
}
