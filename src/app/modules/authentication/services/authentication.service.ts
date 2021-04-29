import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { User, UserCredential } from '@firebase/auth-types';
import { first, map, switchMap } from 'rxjs/operators';
import {
  IBasicUser,
  IUserValues,
} from 'src/app/core/interfaces/user.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private db: AngularFireDatabase,
    private firebaseAuth: AngularFireAuth
  ) {}

  async registerUser(email: any, password: any) {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((response: any) => {
        console.log(response.user.uid);
        this.db.database
          .ref(`users/${response.user.uid}`)
          .set({ role: 'Admin', email: email });
      });
  }

  signIn = (
    email: string,
    password: string
  ): Observable<User | UserCredential> =>
    from(this.firebaseAuth.signInWithEmailAndPassword(email, password)).pipe(
      first()
    );

  getUserRemotely = (): Observable<IBasicUser> =>
    from(this.firebaseAuth.authState).pipe(
      first(),
      switchMap((fbUser: any) =>
        from(this.db.database.ref(`users/${fbUser.uid}`).once('value')).pipe(
          map((user) => ({
            uid: fbUser.uid,
            email: user.val().email,
            role: user.val().role,
          }))
        )
      )
    );
  async logout() {
    await this.firebaseAuth.signOut();
  }
}
