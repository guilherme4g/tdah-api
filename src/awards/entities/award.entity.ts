import { User } from 'src/users/entities/user.entity';
 
export class Award {
    id: string;
    name: string;
    cost: number;
    createdById: string;
    createdBy?: User;
    createdForId: string;
    createdFor?: User;
}
