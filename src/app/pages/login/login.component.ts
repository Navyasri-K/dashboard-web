import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileModel } from '../../models/user_profile.model';
import { UserService } from '../../service/user.service';
import { String } from 'typescript-string-operations';
import { ConstantValues } from '../../shared/constants/constant-values.const';
import { PubSubService } from '../../pub-sub/pub_sub.service';
import { NotificationsService } from '../../service/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  userInfo = new UserProfileModel();

  @ViewChild('loginForm', { static: false }) form;

  constructor(private router: Router,
    private _userService: UserService,
    private _changeDetectRef: ChangeDetectorRef,
    private _pubSubServie: PubSubService,
    private _notificationUserIns: NotificationsService,) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  async signInOkClick() {

    let emailRegExp = new RegExp(ConstantValues.emailIdFormat);

    if (String.IsNullOrWhiteSpace(this.userInfo.emailID) || this.userInfo.emailID == undefined)
      this.form.controls['emailIdControl'].setErrors({ RequiredEmailId: true });
    else if (!emailRegExp.test(this.userInfo.emailID))
      this.form.controls['emailIdControl'].setErrors({ InvalidEmailId: true });
    else
      this.form.controls['emailIdControl'].setErrors(null);

    if (String.IsNullOrWhiteSpace(this.userInfo.password) || this.userInfo.password == undefined)
      this.form.controls['passwordControl'].setErrors({ RequiredPassword: true });
    else
      this.form.controls['passwordControl'].setErrors(null);

    if (this.form.valid) {

      let response = await this._userService.login(this.userInfo.emailID, this.userInfo.password);

      if (response.isSuccess) {

        this._notificationUserIns.showNotification('top', 'right', 1, response.returnMessage);

        let updatedUser = new UserProfileModel();

        updatedUser.cloneUserResponse(response.data.userInfo);
        this._pubSubServie.setUserProfile(updatedUser);
        this._pubSubServie.setToken(response.data.token);

        this.router.navigate(['/dashboard']);

        this.form.reset();

        this._changeDetectRef.detectChanges();
      }
      else {
        alert('Error in register user');
      }

      this.form.reset();

      this._changeDetectRef.detectChanges();
    }
  }
}
