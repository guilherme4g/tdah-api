import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(
  OmitType(CreateTaskDto, ['createdById', 'createdForId'] as const),
) {

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  done?: boolean

}
