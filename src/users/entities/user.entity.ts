export class User {
  id: string;
  name: string;
  email: string;
  icon: string;
  phone?: string;
  parentId?: string;
  children?: User[];
  password: string;
}
