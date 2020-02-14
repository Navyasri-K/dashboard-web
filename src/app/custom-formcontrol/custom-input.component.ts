import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html'
})
export class CustomControlComponent implements OnChanges {
  @Input() labelText: string = '';
  @Input() formCtrlErrors: any | undefined;
  @Input() errorTypes: any;
  errorMessage: string = '';

  customErrorMessage: string;

  constructor(private _translate: TranslateService) { }

  ngOnChanges(changes: any) {

    let errors: any = changes.formCtrlErrors == undefined ? null : changes.formCtrlErrors.currentValue;

    this.errorMessage = '';

    if (errors) {
      Object.keys(this.errorTypes).some(key => {
        if (errors[key]) {
          this._translate.get(key, { value: this.customErrorMessage }).subscribe(res => {
            this.errorMessage = res;
          });
          return true;
        }
      });
    }
  }
}
