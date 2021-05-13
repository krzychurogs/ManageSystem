import { createSelector } from '@ngrx/store';
import {
  AdminSprintModuleState,
  AdminModuleState,
  SprintDetailState,
  AdminSprintDetailModuleState,
} from '../reducers/admin.reducer';

export const sprintSelector = (state: AdminSprintModuleState) => state;
export const selectSprints = createSelector(
  sprintSelector,
  (state: AdminSprintModuleState) => state.sprint
);

export const sprintDetailSelector = (state: AdminSprintDetailModuleState) => state;
export const selectSprintDetail = createSelector(
  sprintDetailSelector,
  (state: AdminSprintDetailModuleState) => state.sprint
);
