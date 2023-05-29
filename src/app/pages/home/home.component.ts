import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedSearch$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.selectedSearch$ = this.store.select(
      (state) => state.search.selectedSearch
    );
  }
}
