import { IBasicUser } from './../../../../core/interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

import * as authActions from '../actions';
@Injectable()
export class AuthenTicationEffects {
  constructor(
    private actions$: Actions,
    private authenTicationServices: AuthenticationService
  ) {}
  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.LOGIN_USER),
      switchMap((action) =>
        this.authenTicationServices
          .signIn(action.email, action.password)
          .then((user: any) => {
            // console.log('usr', user);

            return authActions.loadUser();
          })
      )
    );
  });

  loadUserLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.loadUser),
      switchMap(() =>
        this.authenTicationServices.getUserRemotely().pipe(
          map((user: IBasicUser) => {
            if (user === null) {
              throw Error('User not found');
            }

            // console.log('us' + user.uid);
            //localStorage.setItem('user', JSON.stringify(user));
            return authActions.LOGIN_USER_SUCCESS({ user });
          })
        )
      )
    );
  });
}
