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
  @Input() passwordControl: FormControl | undefined;

  get control(): AbstractControl {
    return this.form.controls[this.controlName];
  }
}
