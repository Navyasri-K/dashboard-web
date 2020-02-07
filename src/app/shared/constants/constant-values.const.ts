export class ConstantValues {

  /*email id format Ex:test@gmail.com*/
  public static emailIdFormat: string = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

  /* password format
   Should consists atleast one capital letter
   One small letter
   One number
   One special character
   minimum 15 digits*/
  public static passwordFormat: string = '^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\\W).*$';
}
