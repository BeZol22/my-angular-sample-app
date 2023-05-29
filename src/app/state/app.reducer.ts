import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { authReducer, AuthState } from '../auth/state/auth.reducer';
import { SearchState, searchReducer } from './search.reducer';

export interface AppState {
  auth: AuthState;
  // cars: CarsState;
  search: SearchState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  // cars: _createStoreReducers,
  search: searchReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('STATE BEFORE ACTION: ', state);
    console.log('ACTION: ', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
