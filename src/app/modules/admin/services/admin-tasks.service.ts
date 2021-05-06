import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { from, of, Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AdminTasksService {
  constructor(private db: AngularFireDatabase) {}

  createTask(name: any, desc: any) {
    return from(
      this.db.database.ref(`tasks`).set({ name: name, desc: desc })
    ).pipe(first());
  }
}
