export const roleTypeArray = ['admin', 'parent', 'child'] as const;
export type RoleType = typeof roleTypeArray[number];
export class User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: RoleType;
  parentId: string;
  children?: User[];
  password: string;
}
