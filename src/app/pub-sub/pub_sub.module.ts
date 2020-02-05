import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
  ]
})
export class PubSubModule  {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: PubSubModule,
      providers: [
      ]
    }
  }
}
