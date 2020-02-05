import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
import { Observable, timer, of, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { APP_CONFIG } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endSession: string;
  private redirectUri: string;
  private clientId: string;

  public token = new BehaviorSubject('');

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: any | undefined) {

    this.setConfigValues();
  }

  public setToken(token: string) {
    this.token.next(token);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.clear();

    window.location.assign('Home/Logout');
  }

  setConfigValues() {
    this.endSession = this.appConfig == undefined ? '' : this.appConfig.endSeesion;
    this.redirectUri = this.appConfig == undefined ? '' : this.appConfig.redirectUri;
    this.clientId = this.appConfig == undefined ? '' : this.appConfig.clientiId;

    if (this.endSession || this.redirectUri || this.clientId) {
      localStorage.setItem('endSession', this.endSession);
      localStorage.setItem('redirectUri', this.redirectUri);
      localStorage.setItem('clientId', this.clientId);
    }
  }

  getConfigValues() {

    this.endSession = localStorage.getItem('endSession');
    this.redirectUri = localStorage.getItem('redirectUri');
    this.clientId = localStorage.getItem('clientId');
  }
}
