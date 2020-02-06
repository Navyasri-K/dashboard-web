import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { String } from 'typescript-string-operations';

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

    let emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (fControl.value != undefined && fControl.value != null && isNaN(fControl.value))
      controlValue = fControl.value.replace(/[()_-]/g, "");

    if (formControlName == "emailIdControl")
      return fControl.value == undefined ? { 'RequiredEmailId': true } : !String.IsNullOrWhiteSpace(fControl.value) && !emailRegExp.test(fControl.value) ? { 'InvalidEmailId': true } : null;

    if (formControlName == "passwwordControl")
      return fControl.value == undefined ? { 'RequiredPassword': true } : null;
  }
}
