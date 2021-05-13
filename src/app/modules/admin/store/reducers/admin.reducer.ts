import { ISprints } from './../../../../core/interfaces/sprints.interface';
import { IListSprints } from 'src/app/core/interfaces/sprints.interface';
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
export interface AdminSprintModuleState {
  sprint: SprintState;
}
export interface SprintState {
  sprint: IListSprints[];
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
export const initialStateSprint: SprintState = {
  sprint: [],
  error: null,
};

export interface AdminSprintDetailModuleState {
  sprint: SprintDetailState;
}
export interface SprintDetailState {
  sprint: ISprints[];
  error: any;
}
export const initialStateSprintDetail: SprintDetailState = {
  sprint: [],
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
    uid: action.userId,
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

const Sprint_REDUCER = createReducer(
  initialStateSprint,
  on(adminActions.LOAD_SPRINTS_SUCCESS, (state, { sprint }) => ({
    ...state,
    sprint: sprint,
    error: null,
  }))
);

const Sprint_DETAIL_REDUCER = createReducer(
  initialStateSprintDetail,
  on(adminActions.LOAD_SPRINTS_DETAILS_SUCCESS, (state, { sprintList }) => ({
    ...state,
    sprint: sprintList,
    error: null,
  }))
);
export function reducer(state: AdminState | undefined, action: Action) {
  return ADMIN_REDUCER(state, action);
}
export function reducerSprint(state: SprintState | undefined, action: Action) {
  return Sprint_REDUCER(state, action);
}
export function reducerSprintDetail(
  state: SprintDetailState | undefined,
  action: Action
) {
  return Sprint_DETAIL_REDUCER(state, action);
}
