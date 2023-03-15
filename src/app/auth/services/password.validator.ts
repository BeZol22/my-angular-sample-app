import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function passwordValidator(control: FormControl) {
  const password = control.value;
  const regex1 = /(?=.*[a-z])/; // Must contain at least one lowercase character
  const regex2 = /(?=.*[A-Z])/; // Must contain at least one uppercase character
  const regex3 = /(?=.*\d)/; // Must contain at least one digit
  const regex4 = /(?=.*[@$!%*?&])/; // Must contain at least one special character
  const regex5 = /^.{8,}$/; // Must be at least 8 characters long

  if (!regex1.test(password)) {
    return { regex1: true };
  }

  if (!regex2.test(password)) {
    return { regex2: true };
  }

  if (!regex3.test(password)) {
    return { regex3: true };
  }

  if (!regex4.test(password)) {
    return { regex4: true };
  }

  if (!regex5.test(password)) {
    return { regex5: true };
  }

  return null;
}

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ confirmPassword: true });
    return { confirmPassword: true };
  } else {
    confirmPassword?.setErrors(null);
    return null;
  }
};
