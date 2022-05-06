import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class RedeemUserDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  coins: number;
}
