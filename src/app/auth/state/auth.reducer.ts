import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { AuthActions } from './action-types';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
};

export const authReducer = createReducer(
  initialAuthState,

  // REGISTER
  on(AuthActions.register, (state) => {
    return {
      ...state,
      errorMessage: null,
    };
  }),
  on(AuthActions.registerSuccess, (state) => {
    return {
      ...state,
      errorMessage: null,
    };
  }),
  on(AuthActions.registerFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.errorMessage,
    };
  }),

  // LOGIN
  on(AuthActions.login, (state) => {
    return {
      ...state,
      errorMessage: null,
    };
  }),
  on(AuthActions.loginSuccess, (state) => {
    return {
      ...state,
      errorMessage: null,
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.errorMessage,
    };
  })
);

// export const getErrorMessage = (state: AuthState) => state.errorMessage;
