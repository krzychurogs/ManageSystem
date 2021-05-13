import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { PanelComponent } from './components/panel/panel.component';
import { ShowTaskComponent } from './components/show-task/show-task.component';

/**
 * Main routes
 */

const routes: Routes = [
  { path: '**', redirectTo: 'paneltask', pathMatch: 'full' },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'showtask', component: ShowTaskComponent },
  { path: 'paneltask', component: PanelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
