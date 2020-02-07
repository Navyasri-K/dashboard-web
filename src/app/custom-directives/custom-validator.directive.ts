import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { String } from 'typescript-string-operations';
import { ConstantValues } from '../shared/constants/constant-values.const';

@Directive({
  selector: '[appCustomValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorDirective,
      multi: true
    }
  ]
})
export class CustomValidatorDirective implements Validator {

  constructor() { }

  validate(fControl: FormControl): { [key: string]: any } {

    console.log(fControl.value);

    let formGroup = fControl.parent.controls;
    let formControlName = Object.keys(formGroup).filter(name => fControl === formGroup[name])[0];

    let controlValue = "";

    let emailRegExp = new RegExp(ConstantValues.emailIdFormat);
    let pwdRegExp = new RegExp(ConstantValues.passwordFormat);

    console.log(emailRegExp);

    if (fControl.value != undefined && fControl.value != null && isNaN(fControl.value))
      controlValue = fControl.value.replace(/[()_-]/g, "");

    if (formControlName == "emailIdControl" && fControl.value != undefined)
      return String.IsNullOrWhiteSpace(fControl.value) ? { 'RequiredEmailId': true } : !emailRegExp.test(fControl.value) ? { 'InvalidEmailId': true } : null;

    if (formControlName == "passwwordControl" && fControl.value != undefined)
      return String.IsNullOrWhiteSpace(fControl.value) ? { 'RequiredPassword': true } /*: !pwdRegExp.test(fControl.value) ? { 'InvalidPassword': true }*/ : null;
  }
}
