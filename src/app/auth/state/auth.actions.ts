import { createAction, props } from '@ngrx/store';
import { CreateUser, LoginCredentials } from '../models/user.model';

// REGISTER
export const register = createAction(
  '[AUTH] Register',
  props<{ userToAdd: CreateUser }>()
);
export const registerSuccess = createAction(
  '[AUTH] Register Success',
  props<{ successMessage: string }>()
);
export const registerFailure = createAction(
  '[AUTH] Register Failure',
  props<{ errorMessage: string }>()
);

// CONFIRM REGISTER
export const confirmRegister = createAction(
  '[AUTH] Confirm Register',
  props<{ token: string }>()
);
export const confirmRegisterSuccess = createAction(
  '[AUTH] Confirm Register Success',
  props<{ successMessage: string }>()
);
export const confirmRegisterFailure = createAction(
  '[AUTH] Confirm Register Failure',
  props<{ errorMessage: string }>()
);

// LOGIN
export const login = createAction(
  '[AUTH] Login',
  props<{ userToLogin: LoginCredentials }>()
);
export const loginSuccess = createAction(
  '[AUTH] Login Success',
  props<{ successMessage: string }>()
);
export const loginFailure = createAction(
  '[AUTH] Login Failure',
  props<{ errorMessage: string }>()
);
