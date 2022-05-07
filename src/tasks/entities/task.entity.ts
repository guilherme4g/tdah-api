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

export class Task {
  id: string;
  name: string;
  coins: number;
  type: TaskType;
  days?: Day[];
  instructions?: string[];
  createdById: string;
  createdBy?: User;
  createdForId: string;
  createdFor?: User;
  date: string;
  done: boolean;
  document?: string;
}
