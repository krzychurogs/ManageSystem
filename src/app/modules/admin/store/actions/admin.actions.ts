import { ITask } from './../../../../core/interfaces/task.interface';
import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';

export const CREATE_TASKS = createAction(
  '[Admin] Create Tasks',
  props<{ name: string; desc: string }>()
);
export const CREATE_TASK_SUCCESS = createAction(
  '[Auth] Login success',
  props<{ task: ITask }>()
);
export const CREATE_TASKS_FAILURE = createAction('[Admin] Login User Failure');
