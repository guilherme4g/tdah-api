import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsIn, IsOptional, IsString, IsBoolean, IsUUID } from 'class-validator';
import { TaskType, taskTypeArray } from '../entities/task.entity';

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

  @Transform(({value}) => {  return value === 'true' || value === true  })
  @ApiProperty({ required: false})
  @IsBoolean()
  @IsOptional()
  today?: Boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  date?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  done?: boolean

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  createdById?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  createdForId?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  document?: string;
}
