import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'custom-input-withicon',
  templateUrl: './custom-input-withicon.component.html'
})
export class CustomFormcontrolComponent implements OnChanges {
  @Input() iconStyle: string;
  @Input() labelText: string = '';
  @Input() formControlErrors: any | undefined;
  @Input() errorTypes: any;
  errorMessage: string = '';

  customErrorMessage: string;

  constructor(private _translate: TranslateService) { }

  ngOnChanges(changes: any) {

    console.log(changes.prop);

    let errors: any = changes.formControlErrors == undefined ? null : changes.formControlErrors.currentValue;

    this.errorMessage = '';

    console.log(errors);

    if (errors) {
      Object.keys(this.errorTypes).some(key => {
        if (errors[key]) {
          console.log(key);

          console.log(this._translate.instant(key));
          this._translate.get(key, { value: this.customErrorMessage }).subscribe(res => {
            console.log(res)
            this.errorMessage = res;
          });
          return true;
        }
      });
    }
  }
}
