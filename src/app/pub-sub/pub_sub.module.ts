import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CustomValidatorDirective } from '../custom-directives/custom-validator.directive';
import { CustomFormcontrolComponent } from '../custom-formcontrol/custom-input-withicon.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomControlComponent } from '../custom-formcontrol/custom-input.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    HttpClientModule,
    NgbModule,
    TextMaskModule,
  ],
  declarations: [
    CustomValidatorDirective,
    CustomFormcontrolComponent,
    CustomControlComponent
  ],
  exports: [
    TranslateModule,
    CustomValidatorDirective,
    CustomFormcontrolComponent,
    CustomControlComponent
  ]
})
export class PubSubModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: PubSubModule,
      providers: [
      ]
    }
  }
}
