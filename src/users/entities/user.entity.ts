export class User {
  id: string;
  name: string;
  email: string;
  gender: 'M' | 'F';
  phone?: string;
  parentId?: string;
  children?: User[];
  password: string;
}
