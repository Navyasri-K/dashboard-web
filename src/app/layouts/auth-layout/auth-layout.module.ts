import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { PubSubModule } from '../../pub-sub/pub_sub.module';
import { ResetpasswordComponent } from '../../pages/resetpassword/resetpassword.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    PubSubModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent
  ]
})
export class AuthLayoutModule { }
