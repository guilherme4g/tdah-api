export const roleTypeArray = ['admin', 'common'] as const;
export type RoleType = typeof roleTypeArray[number];
export class User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: RoleType;
  parentId?: string;
  children?: User[];
  password: string;
}
