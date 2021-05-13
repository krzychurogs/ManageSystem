import {
  ISprints,
  IListSprints,
} from './../../../../core/interfaces/sprints.interface';
import { selectSprintDetail } from './../../store/selector/admin.selector';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  AdminSprintDetailModuleState,
  SprintDetailState,
} from '../../store/reducers';
import { LOAD_SPRINTS_DETAILS } from '../../store/actions';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-view-sprint',
  templateUrl: './view-sprint.component.html',
  styleUrls: ['./view-sprint.component.scss'],
})
export class ViewSprintComponent implements OnInit {
  listData!: MatTableDataSource<any>;
  data$: Observable<ISprints[]>;
  displayedColumns: string[] = ['name', 'date', 'lvl'];
  constructor(private store: Store<AdminSprintDetailModuleState>) {}
  ngOnInit(): void {
    this.store.dispatch(LOAD_SPRINTS_DETAILS({ name: 'Drugi Sprint' }));
    this.store.select(selectSprintDetail).subscribe((res) => {
      console.log('bbg', res);
    });
  }
}
