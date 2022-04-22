import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateDailyTaskDto } from './create-daily-task.dto';

export class UpdateDailyTaskDto extends PartialType(
  OmitType(CreateDailyTaskDto, ['createdById'] as const),
) {}
