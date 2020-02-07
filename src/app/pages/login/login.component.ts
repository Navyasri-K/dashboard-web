import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileModel } from '../../models/user_profile.model';
import { UserService } from '../../service/user.service';
import { String } from 'typescript-string-operations';
import { ConstantValues } from '../../shared/constants/constant-values.const';

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
    private _changeDetectRef: ChangeDetectorRef) {
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
      this.form.controls['passwwordControl'].setErrors({ RequiredPassword: true });
    else
      this.form.controls['passwwordControl'].setErrors(null);

    if (this.form.valid) {

      let response = await this._userService.login(this.userInfo.emailID, this.userInfo.password);

      this.router.navigate(['/dashboard']);

      this.form.reset();

      this._changeDetectRef.detectChanges();
    }
  }
}
