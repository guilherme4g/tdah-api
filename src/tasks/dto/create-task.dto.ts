import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';
import {
  Day,
  dayArray,
  StatusType,
  statusTypeArray,
  TaskType,
  taskTypeArray,
} from '../entities/task.entity';

export class CreateTaskDto {
  @ApiProperty({ example: 'Arrumar a Cama' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 10 })
  @IsInt()
  @IsNotEmpty()
  coins: number;

  @ApiProperty({ enum: taskTypeArray })
  @IsIn(taskTypeArray)
  @IsNotEmpty()
  type: TaskType;

  @ApiProperty({ enum: dayArray, isArray: true, example: ['sunday', 'monday'] })
  @IsEnum(dayArray, { each: true })
  @IsNotEmpty()
  days: Day[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({ enum: statusTypeArray })
  @IsIn(statusTypeArray)
  @IsNotEmpty()
  status: StatusType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdById: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdForId: string;
}
