import { IBasicUser } from './../../../../core/interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import * as authActions from '../actions';
import { AdminTasksService } from '../../services/admin-tasks.service';
@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private adminServices: AdminTasksService
  ) {}
  addTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.CREATE_TASKS),
      switchMap((action) =>
        this.adminServices.createTask(action.name, action.desc).pipe(
          map((task) => {
            return authActions.CREATE_TASK_SUCCESS({ task });
          })
        )
      )
    );
  });
}
