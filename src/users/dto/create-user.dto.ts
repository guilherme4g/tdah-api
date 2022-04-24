import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { RoleType, roleTypeArray } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty({example: "Samugod"})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({example: "samu.gatinho@hotmail.com"})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({example: "40028922"})
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ enum: roleTypeArray })
  @IsIn(roleTypeArray)
  @IsNotEmpty()
  role: RoleType;

  @ApiProperty()
  @IsUUID('4')
  @IsOptional()
  parentId: string;

  @ApiProperty({example: "senha123"})
  @IsString()
  @IsNotEmpty()
  password: string;
}
