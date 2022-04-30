import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class ListAwardDto {
  @ApiProperty({ required: false })
  @IsUUID('4')
  @IsOptional()
  id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsUUID('4')
  @IsOptional()
  createdById?: string;

  @ApiProperty({ required: false })
  @IsUUID('4')
  @IsOptional()
  createdForId?: string;
}
