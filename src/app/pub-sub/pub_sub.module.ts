import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CustomValidatorDirective } from '../custom-directives/custom-validator.directive';
import { CustomFormcontrolComponent } from '../custom-formcontrol/custom-input-withicon.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    CustomValidatorDirective,
    CustomFormcontrolComponent
  ],
  exports: [
    TranslateModule,
    CustomValidatorDirective,
    CustomFormcontrolComponent
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
