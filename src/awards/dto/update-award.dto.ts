import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreateAwardDto } from './create-award.dto';

export class UpdateAwardDto extends PartialType(CreateAwardDto) {
    @ApiProperty({ example: 'Arrumar a Cama' })
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty({ example: 200 })
    @IsInt()
    @IsNotEmpty()  
    cost: number;
}
