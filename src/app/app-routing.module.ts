import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'auth',
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./modules/navbar/navbar.module').then((mod) => mod.NavbarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
