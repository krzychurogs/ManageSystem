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
  uid: any;
  constructor(
    private db: AngularFireDatabase,
    private firebaseAuth: AngularFireAuth
  ) {}

  async registerUser(email: any, password: any) {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((response: any) => {
        // console.log(response.user.uid);
        this.db.database
          .ref(`users/${response.user.uid}`)
          .set({ role: 'Admin', email });
      });
  }
  async signIn(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.setPersistence(`local`).then(() => {
        this.firebaseAuth
          .signInWithEmailAndPassword(email, password)
          .then((user: any) => {
            // console.log('us', user);
            resolve(user);
          }).catch(e => {
            reject(e);
        });
      });
    });
  }

  getUserRemotely = (): Observable<IBasicUser> =>
    from(this.firebaseAuth.authState).pipe(
      first(),
      switchMap((fbUser: any) => {
        this.firebaseAuth.currentUser.then((res) => {
          this.firebaseAuth.idToken.subscribe((user: any) => {
            this.uid = user;
            // console.log('uid', user.uid);
            //  console.log('f', user);
          });
        });
        return from(
          this.db.database.ref(`users/${fbUser.uid}`).once('value')
        ).pipe(
          map((user) => ({
            uid: fbUser.uid,
            email: fbUser.email,
            role: user.val().role,
          }))
        );
      })
    );
  async logout() {
    await this.firebaseAuth.signOut();
  }
}
