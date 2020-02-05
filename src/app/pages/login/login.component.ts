import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileModel } from '../../models/user_profile.model';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  userInfo=new UserProfileModel();
  public message: Subject<string> = new BehaviorSubject('');

  constructor(private router: Router,
    private _userService: UserService) {
  }

  ngOnInit() {

    //this.userInfo = new UserProfileModel();
  }

  ngOnDestroy() {
  }

  async signInOkClick() {

    this.message.next('Waiting for second factor.');

    let response = await this._userService.login(this.userInfo.emailId, this.userInfo.password);

    console.log(response);

    this.router.navigate(['/dashboard']);
  }

}
