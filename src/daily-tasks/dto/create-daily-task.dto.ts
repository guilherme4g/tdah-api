import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Day, dayArray } from '../entities/daily-task.entity';

export class CreateDailyTaskDto {
  @ApiProperty({ example: 'Arrumar a Cama' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 10 })
  @IsInt()
  @IsNotEmpty()
  award: number;

  @ApiProperty({ enum: dayArray, isArray: true, example: ['sunday', 'monday'] })
  @IsEnum(dayArray, { each: true })
  @IsNotEmpty()
  days: Day[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdById: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdForId: string;
}
