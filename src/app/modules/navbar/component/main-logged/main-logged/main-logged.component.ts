import { refreshLoggedUser } from './../../../../authentication/store/selector/authentication.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IBasicUser } from 'src/app/core/interfaces/user.interface';
import { AuthModuleState } from 'src/app/modules/authentication/store/reducer';
import { selectLoggedUser } from 'src/app/modules/authentication/store/selector/authentication.selector';

@Component({
  selector: 'app-main-logged',
  templateUrl: './main-logged.component.html',
  styleUrls: ['./main-logged.component.scss'],
})
export class MainLoggedComponent implements OnInit {
  currentUser$: Observable<IBasicUser>;
  constructor(private store: Store<AuthModuleState>) {
    this.currentUser$ = this.store
      .select(selectLoggedUser)
      .pipe(filter((res) => res !== null));
    console.log(this.currentUser$);
    this.currentUser$.subscribe((res: any) => {
      console.log(res);
    });
  }

  ngOnInit() {
    const user: IBasicUser = JSON.parse(localStorage.getItem('user') || '{}');

    this.store.select(refreshLoggedUser);
  }
}
