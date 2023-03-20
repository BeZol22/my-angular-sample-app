import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { CreateUser } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { AuthActions } from './action-types';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      map((action) => action.userToAdd),
      switchMap((credentials: CreateUser) => {
        return this.authService.register(credentials).pipe(
          map((res) => {
            console.log('RESPONSE FOR SUCCES: ', res);

            return AuthActions.registerSuccess();
          }),
          catchError(async (error) => {
            console.log('RESPONSE FOR ERROR: ', error);

            return AuthActions.registerFailure({
              errorMessage: error.error.message,
            });
          })
        );
      })
    )
  );
}
