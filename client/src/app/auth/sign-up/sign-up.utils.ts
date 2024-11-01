import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ISignUpForm } from './sign-up.model';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl<ISignUpForm>
): ValidationErrors | null => {
  return control.value.password === control.value.confirmPassword
    ? null
    : { PasswordNoMatch: true };
};
