import { ISprints } from './../../../../core/interfaces/sprints.interface';
import { IBasicUser } from './../../../../core/interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import * as adminActions from '../actions';
import { AdminTasksService } from '../../services/admin-tasks.service';
import { LOAD_SPRINTS } from '../actions';
import { IListSprints } from 'src/app/core/interfaces/sprints.interface';
@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private adminServices: AdminTasksService
  ) {}
  addTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(adminActions.CREATE_TASKS),
      switchMap((action) =>
        this.adminServices
          .createTask(action.name, action.desc, action.userId)
          .pipe(
            map((task) => {
              return adminActions.CREATE_TASK_SUCCESS({ task });
            })
          )
      )
    );
  });
  loadSprints$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(adminActions.LOAD_SPRINTS),
      switchMap(() =>
        this.adminServices.showSprints().pipe(
          map((data) => {
            return adminActions.LOAD_SPRINTS_SUCCESS({ sprint: data });
          })
        )
      )
    );
  });

  loadSprintDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(adminActions.LOAD_SPRINTS_DETAILS),
      switchMap((action) =>
        this.adminServices.detailSprints(action.name).pipe(
          map((sprintList: ISprints[]) => {
            return adminActions.LOAD_SPRINTS_DETAILS_SUCCESS({ sprintList });
          })
        )
      )
    );
  });
}
