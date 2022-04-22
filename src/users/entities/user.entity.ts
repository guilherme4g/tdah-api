export const roleTypeArray = ['admin', 'adult', 'child'] as const;
export type RoleType = typeof roleTypeArray[number];
export class User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: RoleType;
  password: string;
}
