import { createSelector } from '@ngrx/store';
import { AuthModuleState, AuthState } from '../reducer/authentications.reducer';

export const authselector = (state: AuthModuleState) => state.auth;
export const selectLoggedUser = createSelector(
  authselector,
  (state: AuthState) => state.user
);
export const refreshLoggedUser = createSelector(
  authselector,
  (state: AuthState) => state.user
);
