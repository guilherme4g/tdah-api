import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty()
  @IsUUID('4')
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsUUID('4')
  @IsNotEmpty()
  status: string;
}
