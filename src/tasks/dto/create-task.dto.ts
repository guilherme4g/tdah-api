import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import {
  Day,
  dayArray,
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

  @ApiProperty({ enum: dayArray, isArray: true, example: ['sunday', 'monday'], required: false })
  @IsEnum(dayArray, { each: true })
  @IsOptional()
  days?: Day[];

  @ApiProperty({example: "87114373-b7de-4e48-b603-df97545a7482"})
  @IsString()
  @IsNotEmpty()
  createdById: string;

  @ApiProperty({ example: "a9795b14-af93-4db0-89f2-9742ac9b6d13"})
  @IsString()
  @IsNotEmpty()
  createdForId: string;
}
