import { createAction, props } from '@ngrx/store';

export const selectSearch = createAction(
  '[Search] Select Search',
  props<{ search: string }>()
);
