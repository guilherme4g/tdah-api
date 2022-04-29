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

export const taskTypeArray = ['relationship', 'daily'] as const;
export type taskType = typeof taskTypeArray[number];

export const statusTypeArray = ['done', 'ny'] as const; //done or not yet
export type statusType = typeof taskTypeArray[number];

export class Task {
  id: string;
  name: string;
  coins: number;
  type: taskType;
  days: Day[];
  createdById: string;
  createdBy?: User;
  createdForId: string;
  createdFor?: User;
  registries: {
    date: string;
    status: statusType;
  }[];
}
