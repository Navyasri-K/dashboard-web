import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileModel } from '../../models/user_profile.model';
import { UserService } from '../../service/user.service';
import { ConstantValues } from '../../shared/constants/constant-values.const';
import { String } from 'typescript-string-operations';
import { PubSubService } from '../../pub-sub/pub_sub.service';
import { NotificationsService } from '../../service/notifications.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  userInfo = new UserProfileModel();
  passwordPolicy: string = "To break lines &#013; in a text, &#013; use the element., &#013; use the element., &#013; use the element.";
  confirmPwdPolicy: string = "To break lines<br>in a text,<br>use the br element.";

  acceptPolicy: boolean = false;
  showErrorPolicy: string;

  @ViewChild('signUpForm', { static: false }) form;

  constructor(private router: Router,
    private _userService: UserService,
    private _changeDetectRef: ChangeDetectorRef,
    private _pubSubServie: PubSubService,
    private _notificationUserIns: NotificationsService) {
  }

  ngOnInit() {

    //var tooltip = require('tooltip');

    //var config = {
    //  showDelay: 100,
    //  style: {
    //    padding: 5
    //  },
    //  className:"customtooltip"
    //}

    //tooltip(config)
  }

  ngOnDestroy() {
  }

  async signUpOkClick() {

    let emailRegExp = new RegExp(ConstantValues.emailIdFormat);
    let pwdRegExp = new RegExp(ConstantValues.passwordFormat);

    if (String.IsNullOrWhiteSpace(this.userInfo.firstName) || this.userInfo.firstName == undefined)
      this.form.controls['userFirstNameControl'].setErrors({ RequiredFirstName: true });
    else
      this.form.controls['userFirstNameControl'].setErrors(null);

    if (String.IsNullOrWhiteSpace(this.userInfo.lastName) || this.userInfo.lastName == undefined)
      this.form.controls['userLastNameControl'].setErrors({ RequiredLastName: true });
    else
      this.form.controls['userLastNameControl'].setErrors(null);

    if (String.IsNullOrWhiteSpace(this.userInfo.emailID) || this.userInfo.emailID == undefined)
      this.form.controls['emailIdControl'].setErrors({ RequiredEmailId: true });
    else if (!emailRegExp.test(this.userInfo.emailID))
      this.form.controls['emailIdControl'].setErrors({ InvalidEmailId: true });
    else
      this.form.controls['emailIdControl'].setErrors(null);

    if (String.IsNullOrWhiteSpace(this.userInfo.password) || this.userInfo.password == undefined)
      this.form.controls['regPasswordControl'].setErrors({ RequiredPassword: true });
    else if (!pwdRegExp.test(this.userInfo.password))
      this.form.controls['regPasswordControl'].setErrors({ InvalidRegPassword: true });
    else
      this.form.controls['regPasswordControl'].setErrors(null);

    if (String.IsNullOrWhiteSpace(this.userInfo.confirmPassword) || this.userInfo.password == undefined || this.userInfo.password != this.userInfo.confirmPassword)
      this.form.controls['confirmPasswordControl'].setErrors({ MismatchPasswordConfirmPassword: true });
    else
      this.form.controls['confirmPasswordControl'].setErrors(null);

    if (!this.acceptPolicy)
      this.showErrorPolicy = "Agree to the policy and sign up.";
    else
      this.showErrorPolicy = undefined;

    if (this.form.valid) {

      this.userInfo.userName = this.userInfo.firstName + ' ' + this.userInfo.lastName;

      let response = await this._userService.signUp(this.userInfo.userName, this.userInfo.emailID, this.userInfo.password, 0);

      if (response.isSuccess) {
        this._notificationUserIns.showNotification('top', 'right', 1, response.returnMessage);

        this.userInfo.userID = response.data.userID;

        let updatedUser = new UserProfileModel();

        updatedUser.cloneUserInfo(this.userInfo);

        await this._pubSubServie.setUserProfile(updatedUser);
        await this._pubSubServie.setToken(response.data.token);

        this.router.navigate(['/dashboard']);

        this.form.reset();

        this._changeDetectRef.detectChanges();
      }
      else {
        alert('Error in register user');
      }
    }
  }

  acceptPolicyClick() {
    this.acceptPolicy = !this.acceptPolicy;
  }
}
