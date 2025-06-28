export class FormUtility {
  emailValidator(emailValue: string): boolean {
    const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const result = pattern.test(emailValue);
    if (result) console.log("%cVerified Email", "color: lightgreen");
    else console.log("%cVerified Email", "color: red");
    return result;
  }
  passwordValidator(passwordValue: string): boolean {
    return false;
  }
  repeatPasswordValidator(repeatPasswordValue: string): boolean {
    return false;
  }
}
