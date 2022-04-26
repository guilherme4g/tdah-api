import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsUUID } from 'class-validator';

export class ListUserDto {
  @ApiProperty({ required: false })
  @IsUUID('4')
  @IsOptional()
  id?: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ required: false })
  @IsUUID('4')
  @IsOptional()
  parentId?: string;
}
