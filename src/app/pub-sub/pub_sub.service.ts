import { BehaviorSubject } from 'rxjs';
import { UserProfileModel } from '../models/user_profile.model';

export class PubSubService {

  public userInfo: BehaviorSubject<UserProfileModel> = new BehaviorSubject<UserProfileModel>(null);

  public token: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  /**
   * set and share user details
   * @param value
   */
  setUserProfile(value) {
    console.log(value);
    this.userInfo.next(value);
  }

  /**
   * set and share token value
   * @param value
   */
  setToken(value) {
    this.token.next(value);
  }
}
