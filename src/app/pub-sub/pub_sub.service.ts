import { BehaviorSubject } from 'rxjs';
import { UserProfileModel } from '../models/user_profile.model';

export class PubSubService {

  public userInfo: BehaviorSubject<UserProfileModel> = new BehaviorSubject<UserProfileModel>(null);

  setUserProfile(value) {
    this.userInfo.next(value);
  }
}
