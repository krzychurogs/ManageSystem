import { Login_Failure } from './../actions/authentications.actions';
import { roleEnum } from './../../../../core/enums/role.enum';
import { Action, createReducer, on, State } from '@ngrx/store';
import { IBasicUser } from 'src/app/core/interfaces/user.interface';
import { Create_USER } from '../actions/authentications.actions';
import * as authActions from '../actions';

export interface AuthModuleState {
  auth: AuthState;
}
export interface AuthState {
  user: IBasicUser;
  error: any;
}
export const initialState: AuthState = {
  user: {
    email: '',
    uid: '',
    role: '',
  },
  error: null,
};

const AUTH_REDUCER = createReducer(
  initialState,
  on(authActions.LOGIN_USER, (state) => ({
    ...state,
  })),
  on(
    authActions.LOGIN_USER_SUCCESS,
    authActions.REFRESH_USER,
    (state, { user }) => ({
      ...state,
      user: user,
      error: null,
    })
  ),
  on(authActions.Login_Failure, (state, action) => ({
    ...state,
    user: {
      email: '',
      uid: '',
      role: '',
    },
  }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return AUTH_REDUCER(state, action);
}
