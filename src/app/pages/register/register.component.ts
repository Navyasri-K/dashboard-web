import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileModel } from '../../models/user_profile.model';
import { UserService } from '../../service/user.service';
import { ConstantValues } from '../../shared/constants/constant-values.const';
import { String } from 'typescript-string-operations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  userInfo = new UserProfileModel();
  passwordPolicy: string ="To break lines &#013; in a text, &#013; use the element., &#013; use the element., &#013; use the element.";
  confirmPwdPolicy: string = "To break lines<br>in a text,<br>use the br element.";

  @ViewChild('signUpForm', { static: false }) form;

  constructor(private router: Router,
    private _userService: UserService,
    private _changeDetectRef: ChangeDetectorRef) {
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

    if (String.IsNullOrWhiteSpace(this.userInfo.confirmPassword) || this.userInfo.password == undefined || this.userInfo.password != this.userInfo.confirmPassword)
      this.form.controls['confirmPasswwordControl'].setErrors({ RequiredPassword: true });
    else
      this.form.controls['confirmPasswwordControl'].setErrors(null);

    if (this.form.valid) {

      let response = await this._userService.login(this.userInfo.emailID, this.userInfo.password);

      console.log(response);

      this.router.navigate(['/dashboard']);

      this.form.reset();

      this._changeDetectRef.detectChanges();

      this.router.navigate(['/login']);
    }
  }
}
