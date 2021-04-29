import { IBasicUser } from './../../../../core/interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';

// Section 2
export const Create_USER = createAction('[Auth] Register', props<IBasicUser>());
export const LOGIN_USER = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);
export const Login_SUCCESS = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: IBasicUser }>()
);
export const loginUserSuccess = createAction(
  '[Auth] Login success',
  props<{ user: IBasicUser }>()
);
export const Login_Failure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);

export const loadUser = createAction('[Auth] Register fail');
