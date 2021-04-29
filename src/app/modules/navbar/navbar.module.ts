import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainLoggedComponent } from './component/main-logged/main-logged/main-logged.component';
import { NavbarRoutingModule } from './navbar-rounting.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavbarRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  declarations: [NavbarComponent, MainLoggedComponent],
})
export class NavbarModule {}
