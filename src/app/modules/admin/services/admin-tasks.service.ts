import { loadUser } from './../../authentication/store/actions/authentications.actions';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { from, of, Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import {
  IListSprints,
  ISprints,
} from 'src/app/core/interfaces/sprints.interface';
@Injectable({
  providedIn: 'root',
})
export class AdminTasksService {
  constructor(private db: AngularFireDatabase) {}

  createTask(name: any, desc: any, uid: string) {
    return from(
      this.db.database
        .ref(`tasks/${uid}/${name}`)
        .set({ name: name, desc: uid })
    ).pipe(first());
  }
  showSprints(): Observable<IListSprints[]> {
    return from(this.db.database.ref(`sprints/`).once('value')).pipe(
      first(),
      map((element) => {
        const toReturn: IListSprints[] = [];
        // console.log('el', element.val());
        toReturn.push(element.val());
        return toReturn;
      })
    );
  }
  detailSprints(name: any): Observable<ISprints[]> {
    const toReturn: ISprints[] = [];
    return from(this.db.database.ref(`sprints/`).once('value')).pipe(
      first(),
      map((element) => {
        // console.log('el', element.val().sprintsList);
        element.val().sprintsList.forEach((res: any) => {
          // console.log('el', res.name);
          if (res.name == name) {
            toReturn.push(res);
          }
        });
        console.log('ret', toReturn);
        return toReturn;
      })
    );
  }
}
