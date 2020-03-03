import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { APP_CONFIG } from '../../app-config';
import { catchError } from 'rxjs/operators';
import { ResponseData } from './handle-response';
import { throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseGatewayService {

  baseGateway_url: string;

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: any | undefined,
    private authService: AuthService,
    private _translateService: TranslateService) {

  }

  async getJson(relativeUrl: string, _httpOptions?: any) {

    var response = await this.http.get(relativeUrl, _httpOptions)
      .pipe(
        catchError(error => this.handleRequiredErrorResponse(error))
      ).toPromise();

    var responseData = new ResponseData();

    responseData.statusCode = "200";
    responseData.response = response;

    return responseData;
  }

  async get(relativeUrl: string, _httpOptions?: any) {
    if (!this.baseGateway_url)
      this.setBaseUrl();

    this.baseGateway_url = "https://localhost:44335";

    var response = await this.http.get(this.baseGateway_url + relativeUrl, _httpOptions)
      .pipe(
        catchError(error => this.handleRequiredErrorResponse(error))
      ).toPromise();

    var responseData = new ResponseData();

    responseData.statusCode = "200";
    responseData.response = response;

    return responseData;
  }

  async post(relativeUrl: string, body: any, _httpOptions?: any) {
    if (!this.baseGateway_url)
      this.setBaseUrl();

    this.baseGateway_url = "https://localhost:44335";

    var response = await this.http.post(this.baseGateway_url + relativeUrl, body, _httpOptions)
      .pipe(
        catchError(error => this.handleRequiredErrorResponse(error))
      ).toPromise();

    var responseData = new ResponseData();

    responseData.statusCode = "200";
    responseData.response = response;

    return responseData;
  }



  async put(relativeUrl: string, body: any, _httpOptions?: any) {
    if (!this.baseGateway_url)
      this.setBaseUrl();

    this.baseGateway_url = "https://localhost:44335";

    var response = await this.http.put(this.baseGateway_url + relativeUrl, body, _httpOptions)
      .pipe(
        catchError(error => this.handleRequiredErrorResponse(error))
      ).toPromise();

    var responseData = new ResponseData();

    responseData.statusCode = "200";
    responseData.response = response;

    return responseData;
  }



  async delete(relativeUrl: string, _httpOptions?: any) {
    if (!this.baseGateway_url)
      this.setBaseUrl();

    this.baseGateway_url = "https://localhost:44335";

    var response = await this.http.delete(this.baseGateway_url + relativeUrl, _httpOptions)
      .pipe(
        catchError(error => this.handleRequiredErrorResponse(error))
      ).toPromise();

    var responseData = new ResponseData();

    responseData.statusCode = "200";
    responseData.response = response;

    return responseData;
  }

  handleRequiredErrorResponse(errorResponse: HttpErrorResponse) {

    console.log(errorResponse);

    var response = new ResponseData();

    if (errorResponse.status == 400 || errorResponse.status == 401 || errorResponse.status == 404) {
      response.statusCode = errorResponse.status.toString();
      response.response = errorResponse.error;
    }
    else {
      this.handleError(errorResponse);
    }

    if (errorResponse.status == 401) {
      this.autherizationExceptionHandling(response);

      this.handleError(errorResponse);
    }

    return throwError(response);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent)
      console.error('An error occured', error.error.message);
    else
      console.error(
        `Back-end returned code ${error.status}, ` +
        `body was: ${error.error}`);

    return throwError('Something bad happened,, please try again later.');
  }

  setBaseUrl() {
    this.baseGateway_url = this.appConfig == undefined ? '' : this.appConfig.myGateway;

    if (this.baseGateway_url)
      localStorage.setItem('baseGateway_url', this.baseGateway_url);
    else
      this.getBaseUrl();
  }

  getBaseUrl() {
    this.baseGateway_url = localStorage.getItem('getBaseUrl');
  }

  autherizationExceptionHandling(response) {

    if (response.response && (response.response == 'Token is either or is not yet valid' || response.response.indexOf('expired') > -1)) {

      let message = this._translateService.instant('');

      this.authService.logout();
    }
  }
}
