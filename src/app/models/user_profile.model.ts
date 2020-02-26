export class UserProfileModel {
  userID: number;
  emailID: string;
  password: string;
  confirmPassword: string;
  ipAddress: string;
  userName: string;
  firstName: string;
  lastName: string;
  mobileNumber: number;
  address: string;
  countryCode: string;
  stateCode: string;
  city: string;
  zipCode: string;
  aboutMe: string;
  designation: string;
  profilePic: string;

  /**
   * copy user details
   * @param user
   */
  cloneUserInfo(user) {

    this.userID = user.userID;
    this.emailID = user.emailID;
    this.password = user.password;
    this.confirmPassword = user.confirmPassword;
    this.ipAddress = user.ipAddress;
    this.userName = user.userName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.mobileNumber = user.mobileNumber;
    this.address = user.address;
    this.countryCode = user.countryCode;
    this.stateCode = user.stateCode;
    this.city = user.city;
    this.zipCode = user.zipCode;
    this.aboutMe = user.aboutMe;
    this.designation = user.designation;
    this.profilePic = user.profilePic;
  }

  cloneUserResponse(user) {

    this.userID = user.userID;
    this.emailID = user.emailID;
    this.password = user.password;
    this.confirmPassword = user.confirmPassword;
    this.ipAddress = user.ipAddress;
    this.userName = user.userName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.mobileNumber = user.mobileNumber;
    this.address = user.address;
    this.countryCode = user.countryCode;
    this.stateCode = user.stateCode;
    this.city = user.city;
    this.zipCode = user.zipCode;
    this.aboutMe = user.aboutMe;
    this.designation = user.designation;
    this.profilePic = user.profilePic;
  }
}
