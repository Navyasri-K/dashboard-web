import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;
  private redirectUrl: string;

  constructor(private router: Router) { }

  public setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  public auth(login: string, password: string): void {
    console.log(login);
    console.log(password);
    if (login === 'navyasri@gmail.com' && password === 'Password') {
      this.authenticated = true;
      this.redirectUrl = this.redirectUrl === undefined ? '/' : this.redirectUrl;
      this.router.navigate([this.redirectUrl]);
    }
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }
}
