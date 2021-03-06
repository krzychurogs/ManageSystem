import { IBasicUser } from './../../../../core/interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';

// Section 2
export const Create_USER = createAction('[Auth] Register', props<IBasicUser>());
export const LOGIN_USER = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const LOGIN_USER_SUCCESS = createAction(
  '[Auth] Login success',
  props<{ user: IBasicUser }>()
);
export const REFRESH_USER = createAction(
  '[Auth] Refresh User',
  props<{ user: IBasicUser }>()
);
export const Login_Failure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);


export const loadUser = createAction('[Auth] Load user');

export const loadUserSuccess = createAction('[Auth] Load user success');
