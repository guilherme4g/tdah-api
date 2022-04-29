import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty } from 'class-validator';
import { statusTypeArray, StatusType } from '../entities/task.entity';
export class UpdateTaskStatusDto {
  @ApiProperty()
  @ApiProperty({ enum: statusTypeArray })
  @IsIn(statusTypeArray)
  @IsNotEmpty()
  status: StatusType;
}
