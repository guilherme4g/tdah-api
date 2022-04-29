import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAwardDto {
  @ApiProperty({ example: 'ir ao cinema' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 200 })
  @IsInt()
  @IsNotEmpty()  
  cost: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdById: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdForId: string;
}
