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

  public static alphaStringReg: string = '^a-zA-Z+$';

  public static allowOnlyAlpha(evevnt: any) {

    const alpha = new RegExp(this.alphaStringReg);

    let inputChar = String.fromCharCode(evevnt.charCode);

    if (!alpha.test(inputChar)) {
      event.preventDefault();
      return;
    }
  }
}
