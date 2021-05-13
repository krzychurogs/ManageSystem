import { StoreModule, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  message$?: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  ngOnInit() {}
}
