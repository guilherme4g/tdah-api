export class User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  parentId?: string;
  children?: User[];
  password: string;
}
