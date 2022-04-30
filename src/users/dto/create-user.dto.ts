import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'samuel' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'samu@cin.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: false, example: '40028922' })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({ required: false })
  @IsUUID('4')
  @IsOptional()
  parentId?: string;

  @ApiProperty({ example: 'senha123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
