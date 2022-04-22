import { User } from 'src/users/entities/user.entity';

export const dayArray = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as const;
export type Day = typeof dayArray[number];

export class DailyTask {
  id: string;
  name: string;
  award: number;
  days: Day[];
  createdById: string;
  createdBy?: User;
  createdForId: string;
  createdFor?: User;
}
