import { Component, OnInit } from "@angular/core";
import { UserProfileModel } from '../../models/user_profile.model';
import { PubSubService } from '../../pub-sub/pub_sub.service';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {

  userInfo: UserProfileModel;

  constructor(
    private _pubSubService: PubSubService) { }

  ngOnInit() {
    this.userInfo = new UserProfileModel();

    let user = new UserProfileModel();

    user.emailID = "navya@ajghh.com";

    this._pubSubService.setUserProfile(user);
    this.getUserDetails();
  }

  getUserDetails() {

    console.log(this._pubSubService.userInfo.getValue());

  }
}
