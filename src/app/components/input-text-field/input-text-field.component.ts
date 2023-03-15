import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text-field',
  templateUrl: './input-text-field.component.html',
  styleUrls: ['./input-text-field.component.scss'],
})
export class InputTextFieldComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() label: string = '';
  @Input() controlName: string = '';
  @Input() type: string = 'text';
  @Input() minLength: number = 0;
  @Input() maxLength: number = Infinity;
  @Input() pattern: RegExp | undefined;

  constructor() {
    window.addEventListener('resize', this.handleErrorStyle.bind(this)); // without this the handleErrorStyle() would apply after view resize only if I click again inside the input field
  }

  get control(): AbstractControl {
    return this.form.controls[this.controlName];
  }

  handleErrorStyle(): string {
    const errorExists =
      this.control.hasError('regex1') ||
      this.control.hasError('regex2') ||
      this.control.hasError('regex3') ||
      this.control.hasError('regex4') ||
      this.control.hasError('regex5');

    if (errorExists) {
      return window.innerWidth > 389 ? '' : 'margin-bottom: 24px;';
    } else {
      return '';
    }
  }
}
