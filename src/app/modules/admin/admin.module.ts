import { AdminEffects } from './store/effects/admin.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { StoreModule } from '@ngrx/store';
import { ShowTaskComponent } from './components/show-task/show-task.component';
import { AdminTasksService } from './services/admin-tasks.service';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { reducer, reducerSprint, reducerSprintDetail } from './store/reducers/';
import {
  ADMIN_FEATURE,
  SPRINT_DETAIL_FEATURE,
  SPRINT_FEATURE,
} from 'src/app/core/constants/authentication.constants';
import { PanelComponent } from './components/panel/panel.component';
import { ViewSprintComponent } from './components/view-sprint/view-sprint.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(ADMIN_FEATURE, reducer),
    StoreModule.forFeature(SPRINT_DETAIL_FEATURE, reducerSprintDetail),
    StoreModule.forFeature(SPRINT_FEATURE, reducerSprint),
    EffectsModule.forFeature([AdminEffects]),
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    AddTaskComponent,
    ShowTaskComponent,
    PanelComponent,
    ViewSprintComponent,
  ],
  providers: [AdminTasksService],
})
export class AdminModuleModule {}
