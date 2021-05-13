import { LOGIN_USER } from './../../../store/actions/authentications.actions';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '../../../services/authentication.service';
import * as authActions from '../../../store/actions';
import { AuthState } from '../../../store/reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  wartosc: any;

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private store: Store<AuthState>,
    private serviceAuth: AuthenticationService
  ) {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    serviceAuth.getUserRemotely();
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  onSubmit() {
    this.store.dispatch(
      authActions.LOGIN_USER({
        email: this.email?.value,
        password: this.password?.value,
      })
    );
  }

  goToRegister() {
    this.router.navigate(['auth/register']);
  }

  ngOnInit() {}
}
