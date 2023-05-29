import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearch } from 'src/app/state/search.actions';
import { SearchState } from 'src/app/state/search.reducer';

@Component({
  selector: 'app-product-selection-menubar',
  templateUrl: './product-selection-menubar.component.html',
  styleUrls: ['./product-selection-menubar.component.scss'],
})
export class ProductSelectionMenubarComponent {
  @Output() searchSelected: EventEmitter<string> = new EventEmitter<string>();
  public selectedSearch: string = '';

  constructor(private store: Store<SearchState>) {}

  // selectSearch(search: string): void {
  //   this.selectedSearch = search;
  // }

  selectSearch(search: string): void {
    this.store.dispatch(selectSearch({ search }));
    this.selectedSearch = search;
    this.searchSelected.emit(search);
  }
}
