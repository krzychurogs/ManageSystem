import { selectLoggedUser } from './../../../authentication/store/selector/authentication.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBasicUser } from 'src/app/core/interfaces/user.interface';
import { AuthModuleState } from 'src/app/modules/authentication/store/reducer';
import { filter } from 'rxjs/operators';
import { AngularFireAuth, PERSISTENCE } from '@angular/fire/auth';
import { AdminModuleState } from '../../store/reducers';
import * as adminActions from '../../store/actions';
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss'],
})
export class ShowTaskComponent implements OnInit {
  // currentUser$: Observable<IBasicUser>;

  name: any;
  uid: any;
  constructor(
    private store: Store<AdminModuleState>,
    private firebaseAuth: AngularFireAuth
  ) {
    console.log('car', this.firebaseAuth.currentUser);

    // console.log('nam' + this.name);
    firebaseAuth.currentUser.then((res) => {
      console.log('cur', res);
      setTimeout(() => {
        console.log('curdel', res);
      }, 5000);
    });
  }

  ngOnInit() {}

  createTask() {
    this.store.dispatch(
      adminActions.CREATE_TASKS({
        name: 'nazwa',
        desc: 'opis,',
      })
    );
  }
}
