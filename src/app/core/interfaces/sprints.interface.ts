import { roleEnum } from '../enums/role.enum';

export interface ISprints {
  name: string;
  date: any;
  desc: string;
}
export interface IListSprints {
  sprintsList: ISprints[];
}
