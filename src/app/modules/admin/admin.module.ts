import { AdminEffects } from './store/effects/admin.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { StoreModule } from '@ngrx/store';

import { ShowTaskComponent } from './components/show-task/show-task.component';
import { AdminTasksService } from './services/admin-tasks.service';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducers/';
import { ADMIN_FEATURE } from 'src/app/core/constants/authentication.constants';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(ADMIN_FEATURE, reducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
  declarations: [AddTaskComponent, ShowTaskComponent],
  providers: [AdminTasksService],
})
export class AdminModuleModule {}
