import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { first, map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public firebaseAuth: AngularFireAuth) {}

  async registerUser(email: any, password: any) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  async loginUser(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }
  async logout() {
    await this.firebaseAuth.signOut();
  }
}
