import {
  authselector,
  selectLoggedUser,
} from './../../../authentication/store/selector/authentication.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBasicUser } from 'src/app/core/interfaces/user.interface';
import { AuthModuleState } from 'src/app/modules/authentication/store/reducer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss'],
})
export class ShowTaskComponent implements OnInit {
  currentUser$: Observable<IBasicUser>;
  constructor(private store: Store<AuthModuleState>) {
    this.currentUser$ = this.store
      .select(selectLoggedUser)
      .pipe(filter((res) => res !== null));
  }

  ngOnInit() {}
}
