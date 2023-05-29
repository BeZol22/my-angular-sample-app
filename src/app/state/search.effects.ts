import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions) {}
}
