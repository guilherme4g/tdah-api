import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DailyTasksService } from './daily-tasks.service';
import { CreateDailyTaskDto } from './dto/create-daily-task.dto';
import { UpdateDailyTaskDto } from './dto/update-daily-task.dto';

@ApiTags('Daily Tasks')
@Controller('daily-tasks')
export class DailyTasksController {
  constructor(private readonly dailyTasksService: DailyTasksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'create a new daily task' })
  create(@Body() createDailyTaskDto: CreateDailyTaskDto) {
    return this.dailyTasksService.create(createDailyTaskDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'get daily task by filter' })
  findAll() {
    return this.dailyTasksService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'get daily task by id' })
  findOne(@Param('id') id: string) {
    return this.dailyTasksService.findOne(id);
  }

  @Get(':type')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'get daily task by type(relationship or daily)' })
  findByType(@Param('type') type: string) {
    return this.dailyTasksService.findByType(type);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'update daily task by id' })
  update(
    @Param('id') id: string,
    @Body() updateDailyTaskDto: UpdateDailyTaskDto,
  ) {
    return this.dailyTasksService.update(id, updateDailyTaskDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'delete daily task by id' })
  remove(@Param('id') id: string) {
    return this.dailyTasksService.remove(id);
  }
}
