import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.scss'],
})
export class DropdownSearchComponent {
  @Input() placeholder: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() controlName: string = '';

  get control(): AbstractControl {
    return this.form.controls[this.controlName];
  }
}
