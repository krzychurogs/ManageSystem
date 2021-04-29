import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { AuthenTicationEffects } from './store/effects/authentications.effects';

import { reducer } from './store/reducer';
import { AUTHENTICATION_FEATURE } from 'src/app/core/constants/authentication.constants';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    StoreModule.forFeature(AUTHENTICATION_FEATURE, reducer),
    EffectsModule.forFeature([AuthenTicationEffects]),
  ],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
