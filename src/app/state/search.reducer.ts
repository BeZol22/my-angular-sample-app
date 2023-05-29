import { createReducer, on } from '@ngrx/store';
import { SearchActions } from './action-types';

export interface SearchState {
  selectedSearch: string;
}

export const initialState: SearchState = {
  selectedSearch: '',
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.selectSearch, (state, { search }) => ({
    ...state,
    selectedSearch: search,
  }))
);
