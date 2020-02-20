import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './shared/route-guards/router-reuse-strategy';
import { RoutingState } from './shared/route-guards/routing-state';
import { PubSubService } from './pub-sub/pub_sub.service';
import { PubSubModule } from './pub-sub/pub_sub.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/ui/', '.json');
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    PubSubModule.forRoot(),
    TextMaskModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent],
  providers: [
    //{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    RoutingState,
    PubSubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
