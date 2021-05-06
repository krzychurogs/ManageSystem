import { ITask } from './../../../../core/interfaces/task.interface';

import { createReducer, on, Action } from '@ngrx/store';
import * as adminActions from '../actions';

export interface AdminModuleState {
  auth: AdminState;
}
export interface AdminState {
  user: ITask;
  error: any;
}
export const initialState: AdminState = {
  user: {
    name: '',
    uid: '',
    desc: '',
  },
  error: null,
};
const ADMIN_REDUCER = createReducer(
  initialState,
  on(adminActions.CREATE_TASK_SUCCESS, (state, action) => ({
    ...state,
    task: action.task,
    error: null,
  })),
  on(adminActions.CREATE_TASKS, (state, action) => ({
    ...state,
    name: action.name,
    desc: action.desc,
    error: null,
  })),
  on(adminActions.CREATE_TASKS_FAILURE, (state, action) => ({
    ...state,
    user: {
      name: '',
      uid: '',
      desc: '',
    },
  }))
);

export function reducer(state: AdminState | undefined, action: Action) {
  return ADMIN_REDUCER(state, action);
}
