import { Injectable, Inject } from "@angular/core";
//import { IUserService } from './user.service_interface';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../app-config';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
import { BaseGatewayService } from '../shared/base-service/base-gateway.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseGatewayService {

  token: string;

  HttpOptions = {
    headers: new HttpHeaders(),
    params: new HttpParams()
  };

  constructor(httpClient: HttpClient,
    @Inject(APP_CONFIG) appConfig: any,
    autheService: AuthService,
    _translateService: TranslateService, ) {
    super(httpClient, appConfig, autheService, _translateService);
  }

  setConigValues() {
    if (!this.token)
      this.token = localStorage.getItem('token');

    let headers = new HttpHeaders();

    //headers = headers.set('Authorization', `Bearer ${this, this.token}`);

    if (this.HttpOptions)
      this.HttpOptions.headers = headers;
  }

  async login(emailId, password) {

    this.setConigValues();

    let body = {
      EmailId: emailId,
      Password: password
    };

    let params = new HttpParams();

    this.HttpOptions.params = params;

    let responseData = this.post('/api/auth/login', body, this.HttpOptions);

    if (responseData.statusCode == '200')
      return responseData.response;
  }
}
