import { roleEnum } from '../enums/role.enum';

export interface IUserValues {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}
export interface IBasicUser {
  email: string;
  uid: string;
  role: string;
}
