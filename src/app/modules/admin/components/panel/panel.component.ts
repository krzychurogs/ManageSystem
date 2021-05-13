import {
  IListSprints,
  ISprints,
} from 'src/app/core/interfaces/sprints.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminTasksService } from '../../services/admin-tasks.service';
import {
  AdminModuleState,
  AdminSprintModuleState,
  SprintState,
} from '../../store/reducers';
import * as adminActions from '../../store/actions';
import { Observable } from 'rxjs';
import { selectSprints } from 'src/app/modules/admin/store/selector/admin.selector';
import { LOAD_SPRINTS } from '../../store/actions';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  data$: Observable<SprintState>;
  listOfSprints: ISprints[] = [];
  constructor(
    service: AdminTasksService,
    private store: Store<AdminSprintModuleState>
  ) {
    this.data$ = this.store.select(selectSprints);
    this.store.select(selectSprints).subscribe((res) => {
      res.sprint[0]?.sprintsList.forEach((s) => this.listOfSprints.push(s));
    });
    console.log('fs', this.listOfSprints);
  }

  ngOnInit(): void {
    this.store.dispatch(LOAD_SPRINTS());
  }
}
