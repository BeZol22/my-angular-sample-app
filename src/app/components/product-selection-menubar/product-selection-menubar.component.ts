import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import { selectSearch } from 'src/app/state/search.actions';

@Component({
  selector: 'app-product-selection-menubar',
  templateUrl: './product-selection-menubar.component.html',
  styleUrls: ['./product-selection-menubar.component.scss'],
})
export class ProductSelectionMenubarComponent implements OnInit {
  @Output() searchSelected: EventEmitter<string> = new EventEmitter<string>();
  public selectedSearch: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.search.selectedSearch)
      .subscribe((selectedSearch) => {
        this.selectedSearch = selectedSearch;
      });
  }

  // selectSearch(search: string): void {
  //   this.selectedSearch = search;
  // }

  selectSearch(search: string): void {
    this.store.dispatch(selectSearch({ search }));
    this.selectedSearch = search;
    this.searchSelected.emit(search);
  }
}
