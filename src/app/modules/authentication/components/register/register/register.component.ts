import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private serviceAuth: AuthenticationService
  ) {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
  onSubmit() {
    const values = this.myForm.value;
    this.serviceAuth
      .registerUser(values.email, values.password)
      .then((response: any) => {
        this.router.navigate(['login']);
        alert('Udało się zalogować');
      });
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
  ngOnInit() {}
}
