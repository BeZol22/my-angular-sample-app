import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedSearch$: Observable<string>;
  public searchForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.selectedSearch$ = this.store.select(
      (state) => state.search.selectedSearch
    );
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      make: [''],
      model: [''],
      yearFrom: [''],
      yearTo: [''],
      mileageFrom: [''],
      mileageTo: [''],
      priceFrom: [''],
      priceTo: [''],
    });
  }

  // Getters for form controls
  get make(): FormControl {
    return this.searchForm.get('make') as FormControl;
  }

  get model(): FormControl {
    return this.searchForm.get('model') as FormControl;
  }

  get yearFrom(): FormControl {
    return this.searchForm.get('yearFrom') as FormControl;
  }

  get yearTo(): FormControl {
    return this.searchForm.get('yearTo') as FormControl;
  }

  get mileageFrom(): FormControl {
    return this.searchForm.get('mileageFrom') as FormControl;
  }

  get mileageTo(): FormControl {
    return this.searchForm.get('mileageTo') as FormControl;
  }

  get priceFrom(): FormControl {
    return this.searchForm.get('priceFrom') as FormControl;
  }

  get priceTo(): FormControl {
    return this.searchForm.get('priceTo') as FormControl;
  }

  // When the form is submitted, navigate to the search results page
  onSubmit(): void {
    if (this.searchForm.invalid) {
      return;
    }

    const searchQuery = {
      make: this.make.value,
      model: this.model.value,
      yearFrom: this.yearFrom.value,
      yearTo: this.yearTo.value,
      mileageFrom: this.mileageFrom.value,
      mileageTo: this.mileageTo.value,
      priceFrom: this.priceFrom.value,
      priceTo: this.priceTo.value,
    };

    this.router.navigate(['/search'], {
      // queryParams: searchQuery,
    });
  }
}
