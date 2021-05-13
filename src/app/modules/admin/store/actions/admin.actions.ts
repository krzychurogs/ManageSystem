import {
  IListSprints,
  ISprints,
} from './../../../../core/interfaces/sprints.interface';
import { ITask } from './../../../../core/interfaces/task.interface';
import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';

export const CREATE_TASKS = createAction(
  '[Admin] Create Tasks',
  props<{ name: string; desc: string; userId: string }>()
);
export const CREATE_TASK_SUCCESS = createAction(
  '[Auth] Login success',
  props<{ task: ITask }>()
);
export const CREATE_TASKS_FAILURE = createAction('[Admin] Login User Failure');
export const LOAD_SPRINTS = createAction('[Admin] Load Sprints');
export const LOAD_SPRINTS_SUCCESS = createAction(
  '[Admin] Load Sprints SUCCESS',
  props<{ sprint: IListSprints[] }>()
);
export const LOAD_SPRINTS_DETAILS = createAction(
  '[Admin] Load Sprints DETAILS',
  props<{ name: string }>()
);
export const LOAD_SPRINTS_DETAILS_SUCCESS = createAction(
  '[Admin] Load Sprints DETAILS SUCCESS',
  props<{ sprintList: ISprints[] }>()
);
