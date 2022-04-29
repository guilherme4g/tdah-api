import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString, IsBoolean, IsUUID } from 'class-validator';
import { taskType, taskTypeArray } from '../entities/task.entity';

export class ListTaskDto {
  @ApiProperty({ required: false })
  @IsUUID('4')
  @IsOptional()
  id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ enum: taskTypeArray, required: false })
  @IsIn(taskTypeArray)
  @IsOptional()
  type?: taskType;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  today?: Boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  createdById?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  createdForId?: string;
}
