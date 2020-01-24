import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { UserProfileModel } from '../../models/user_profile.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
    private _authService: AuthService) {
  }

  userInfo:UserProfileModel;

  ngOnInit() {

    this.userInfo = new UserProfileModel();
  }
  ngOnDestroy() {
  }

  async signInOkClick() {

    await this._authService.auth(this.userInfo.emailId, this.userInfo.password);

    this.router.navigate(['/dashboard']);
  }

}
