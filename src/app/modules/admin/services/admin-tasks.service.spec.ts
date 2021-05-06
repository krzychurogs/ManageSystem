/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminTasksService } from './admin-tasks.service';

describe('Service: ManageTasks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTasksService],
    });
  });

  it('should ...', inject([AdminTasksService], (service: AdminTasksService) => {
    expect(service).toBeTruthy();
  }));
});
