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
export type TaskType = typeof taskTypeArray[number];

export const statusTypeArray = ['done', 'ny'] as const; //done or not yet
export type StatusType = typeof statusTypeArray[number];

export class Task {
  id: string;
  name: string;
  coins: number;
  type: TaskType;
  days: Day[];
  createdById: string;
  createdBy?: User;
  createdForId: string;
  createdFor?: User;
  date: string;
  status: StatusType;  
}
