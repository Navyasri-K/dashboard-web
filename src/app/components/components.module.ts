import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TextMaskModule } from 'angular2-text-mask';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    TextMaskModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }
