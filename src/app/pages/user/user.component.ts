import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { UserProfileModel } from '../../models/user_profile.model';
import { PubSubService } from '../../pub-sub/pub_sub.service';
import { UserService } from '../../service/user.service';
import { ConstantValues } from '../../shared/constants/constant-values.const';
import { String } from 'typescript-string-operations';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {

  @ViewChild('signUpForm', { static: false }) form;

  userInfo: UserProfileModel = new UserProfileModel();

  constructor(
    private _userService: UserService,
    private _changeDetectRef: ChangeDetectorRef,
    private _pubSubService: PubSubService) { }

  ngOnInit() {    
    this.getUserDetails();
  }

  getUserDetails() {
    this._pubSubService.userInfo.subscribe(res => {

      this.userInfo = res;
      console.log(this.userInfo);
    });
  }

  async saveUserProfile() {

    if (String.IsNullOrWhiteSpace(this.userInfo.userName) || this.userInfo.userName == undefined)
      this.form.controls['userNameControl'].setErrors({ RequiredUserName: true });
    else
      this.form.controls['userNameControl'].setErrors(null);

    if (String.IsNullOrWhiteSpace(this.userInfo.firstName) || this.userInfo.firstName == undefined)
      this.form.controls['firstNameCtrl'].setErrors({ RequiredFirstName: true });
    else
      this.form.controls['firstNameCtrl'].setErrors(null);

    if (String.IsNullOrWhiteSpace(this.userInfo.lastName) || this.userInfo.lastName == undefined)
      this.form.controls['lastNameCtrl'].setErrors({ RequiredLastName: true });
    else
      this.form.controls['lastNameCtrl'].setErrors(null);

    if (String.IsNullOrWhiteSpace(this.userInfo.aboutMe) || this.userInfo.aboutMe == undefined)
      this.form.controls['aboutMeCtrl'].setErrors({ RequiredAboutMe: true });
    else
      this.form.controls['aboutMeCtrl'].setErrors(null);

    if (this.form.valid) {

      let response = await this._userService.updateUserProfile(this.userInfo);

      if (response.isSuccess) {
        alert(response.returnMessage);
        this.userInfo.userID = response.data.userID;
        this._pubSubService.setUserProfile(this.userInfo);
        this._pubSubService.setToken(response.data.token);

        this.form.reset();

        this._changeDetectRef.detectChanges();
      }
      else {
        alert('Error in update user profile');
      }
    }
  }

  allowOnlyAlpha(event) {
   return ConstantValues.allowOnlyAlpha(event);
  }
}
