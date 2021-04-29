import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './store/reducers/simple.reducer';
import { ShowTaskComponent } from './components/show-task/show-task.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [AddTaskComponent, ShowTaskComponent],
})
export class AdminModuleModule {}
