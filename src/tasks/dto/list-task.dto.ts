import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString, IsBoolean, IsUUID } from 'class-validator';
import { StatusType, statusTypeArray, TaskType, taskTypeArray } from '../entities/task.entity';

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
  type?: TaskType;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  today?: Boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  date?: string;

  @ApiProperty({ enum: statusTypeArray, required: false })
  @IsIn(statusTypeArray)
  @IsOptional()
  status?: StatusType;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  createdById?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  createdForId?: string;
}
