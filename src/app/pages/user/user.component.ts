import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { UserProfileModel } from '../../models/user_profile.model';
import { PubSubService } from '../../pub-sub/pub_sub.service';
import { UserService } from '../../service/user.service';
import { ConstantValues } from '../../shared/constants/constant-values.const';
import { String } from 'typescript-string-operations';
import { NotificationsService } from '../../service/notifications.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {

  @ViewChild('userProfile', { static: false }) form;

  userInfo: UserProfileModel = new UserProfileModel();

  constructor(
    private _userService: UserService,
    private _changeDetectRef: ChangeDetectorRef,
    private _pubSubService: PubSubService,
    private _notificationUserIns: NotificationsService) { }

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
        this._notificationUserIns.showNotification('top', 'right', 1, response.returnMessage);

        this.userInfo.userID = response.data.userID;

        let updatedUser = new UserProfileModel();

        updatedUser.cloneUserInfo(this.userInfo);

        await this._pubSubService.setUserProfile(updatedUser);
        await this._pubSubService.setToken(response.data.token);

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

  imagBase64: any;
  decryptedImagBase64: any;

  updateProfilePic(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagBase64 = reader.result;
      
      let data = this.imagBase64.replace("data:image/jpeg;base64,", "");
      console.log(data);
    
      this.encrytpImage(data);
    };

    reader.onerror = function (error) {
      
    };
  }

  key = CryptoJS.enc.Utf8.parse('95847852376254S257M57I63S527M415'); // to have highly secure add 32 bytes. Key should be same as the encrypted key
  iv = CryptoJS.enc.Utf8.parse('95847852376254S257M57I63S527M415');// always have 16 bytes

  encrytpImage(data) {

    var encryptedText = CryptoJS.AES.encrypt(data, this.key,
      {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });


    this.userInfo.profileImageBase64 = encryptedText.toString();
    console.log(this.userInfo.profileImageBase64);

    this.decrytpImage(encryptedText)
  }

  decrytpImage(encryptedText) {

    var decryptedTxt = CryptoJS.AES.decrypt(encryptedText, this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    let decryptedText = "";

    decryptedText = decryptedTxt.toString(CryptoJS.enc.Utf8);

    

    this.userInfo.profilePic = decryptedText;
  }
}
