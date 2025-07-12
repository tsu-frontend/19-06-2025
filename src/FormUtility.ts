export class FormUtility {
  emailValidator(emailValue: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result: boolean = pattern.test(emailValue);

    if (result) console.log("%cVerified Email", "color: lightgreen");
    else console.log("%cNot good Email", "color: red");

    return result;
  }

  passwordValidator(passwordValue: string): boolean {
    // const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // const result = pattern.test(passwordValue);

    if (passwordValue.length >= 2) console.log("%cGood PASS!", "color: lightgreen");
    else console.log("%cNot good PASS", "color: red");

    return passwordValue.length >= 2;
  }

  // adjust as necessary
  repeatPasswordValidator(repeatPasswordValue: string, passwordInput: string | null): boolean {
    if (repeatPasswordValue == null || passwordInput == null) return false;
    const result: boolean = repeatPasswordValue === passwordInput;
    console.log(result);
    return result;
  }
}
