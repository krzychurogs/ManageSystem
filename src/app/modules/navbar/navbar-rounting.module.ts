import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLoggedComponent } from './component/main-logged/main-logged/main-logged.component';

const routes: Routes = [
  {
    component: MainLoggedComponent,
    path: '',
    loadChildren: () =>
      import('../admin/admin.module').then((mod) => mod.AdminModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}
