import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { CreateUser, LoginCredentials } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { AuthActions } from './action-types';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      map((action) => action.userToLogin),
      switchMap((credentials: LoginCredentials) => {
        return this.authService.login(credentials).pipe(
          map((res) => {
            console.log('RESPONSE FOR LOGINSUCCES: ', res);

            const { role, jwtToken } = res.body;

            localStorage.setItem('role', role);
            localStorage.setItem('jwtToken', jwtToken);

            return AuthActions.loginSuccess({
              successMessage: res.body.message,
            });
          }),
          catchError(async (error) => {
            console.log('RESPONSE FOR LOGINERROR: ', error);
            return AuthActions.loginFailure({
              errorMessage: error.error.message,
            });
          })
        );
      })
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      map((action) => action.userToAdd),
      switchMap((credentials: CreateUser) => {
        return this.authService.register(credentials).pipe(
          map((res) => {
            // console.log('RESPONSE FOR SUCCES: ', res);

            return AuthActions.registerSuccess({
              successMessage: res.body.message,
            });
          }),
          catchError(async (error) => {
            // console.log('RESPONSE FOR ERROR: ', error);
            return AuthActions.registerFailure({
              errorMessage: error.error.message,
            });
          })
        );
      })
    )
  );

  confirmRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.confirmRegister),
      map((action) => action.token),
      switchMap((token: string) => {
        return this.authService.confirmRegistration(token).pipe(
          map((res) => {
            // console.log('RESPONSE FOR SUCCES: ', res);
            if (res.message === 'Invalid or expired confirmation link.') {
              return AuthActions.confirmRegisterFailure({
                errorMessage: res.message,
              });
            }
            return AuthActions.confirmRegisterSuccess({
              successMessage: res.message,
            });
          }),
          catchError(async (error) => {
            console.log('RESPONSE FOR ERROR: ', error);

            return AuthActions.confirmRegisterFailure({
              errorMessage: error.error.message,
            });
          })
        );
      })
    )
  );
}
