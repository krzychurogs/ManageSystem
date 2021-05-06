import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IBasicUser } from 'src/app/core/interfaces/user.interface';
import { AuthModuleState } from 'src/app/modules/authentication/store/reducer';
import { selectLoggedUser } from 'src/app/modules/authentication/store/selector/authentication.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
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
  ngOnInit() {}
}
