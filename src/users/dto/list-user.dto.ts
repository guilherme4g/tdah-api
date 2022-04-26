import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsUUID } from 'class-validator';

export class ListUserDto {
  @ApiProperty()
  @IsUUID('4')
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsUUID('4')
  @IsOptional()
  parentId?: string;
}
