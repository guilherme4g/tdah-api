import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsUUID } from 'class-validator';

export class ListUserDto {
  @ApiProperty({ example: 'samu.gatinho@hotmail.com' })
  @IsUUID('4')
  @IsOptional()
  id?: string;

  @ApiProperty({ example: 'samu.gatinho@hotmail.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsUUID('4')
  @IsOptional()
  parentId?: string;

}
