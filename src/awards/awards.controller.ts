import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AwardsService } from './awards.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { ListAwardDto } from './dto/list-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';


@ApiTags('Awards')
@Controller('awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'create a new Award' })
  create(@Body() createAwardDto: CreateAwardDto) {
    return this.awardsService.create(createAwardDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'get Awards by filter' })
  findAll(@Query() listAwardDto: ListAwardDto) {
    return this.awardsService.findAll(listAwardDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'get award by id' })
  findOne(@Param('id') id: string) {
    return this.awardsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'update user by id' })
  update(@Param('id') id: string, @Body() updateAwardDto: UpdateAwardDto) {
    return this.awardsService.update(id, updateAwardDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'delete Award by id' })
  remove(@Param('id') id: string) {
    return this.awardsService.remove(id);
  }
}
