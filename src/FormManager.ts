// class FormManager {
//   public formElement: HTMLElement | null;
//   public inputElementsList: HTMLFormControlsCollection;
//   private isSubmitable: boolean;

//   constructor(formElRef: HTMLElement | null) {
//     this.formElement = formElRef;
//     if ( !(formElRef instanceof HTMLFormElement)) {
//       throw new Error('')
//     }
//   this.inputElementsList = this.formElement?.elements;

//     this.isSubmitable = false;
//   }
// }

// const signUpForm = document.getElementById("signup-form");
// const singUpManager = new FormManager(signUpForm);

class FormUtility {
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

    if (passwordValue.length >= 8) console.log("%cGood PASS!", "color: lightgreen");
    else console.log("%cNot good PASS", "color: red");

    return passwordValue.length >= 8;
  }

  // adjust as necessary
  repeatPasswordValidator(repeatPasswordValue: string, passwordInput: string): boolean {
    const result: boolean = repeatPasswordValue === passwordInput;
    console.log(result);
    return result;
  }
}
// interface IFormDataSignIn {
//   email: string;
//   password: string;
// }

// type RFormData = Record<string, string>;
// type RFormData = Record<'email' | 'password', string> & Partial<Record<'name' | 'surname', string>>;

// interface TFormDataSignUp extends TFormDataSignIn{
//   name: string
//   surname: string
// }
// type TFormDataSignUp = {
//   name: string;
//   surname: string;
// };
// type TFormData = TFormDataSignUp & IFormDataSignIn;

type TFormData = {
  name?: string | null;
  surname?: string | null;
  email: string | null;
  password: string | null;
};

class FormManager {
  public formElement: HTMLFormElement;
  public inputElementsList: HTMLFormControlsCollection;
  private formUtility: any;
  private isSubmitable: boolean;
  private formData: TFormData;

  constructor(formElRef: HTMLFormElement) {
    this.formElement = formElRef;
    this.inputElementsList = this.formElement.elements;
    this.isSubmitable = false;
    this.formData = {
      password: null,
      email: null,
      name: null,
      surname: null,
    };

    this.formUtility = new FormUtility();

    this.setUpListeners();
  }

  setUpListeners() {
    [...this.inputElementsList].forEach((element) => {
      if (element instanceof HTMLButtonElement) {
        element.addEventListener("click", () => {
          console.log("clicked!");
        });
      } else {
        element.addEventListener("change", (e) => {
          const target = e.target;
          if (target instanceof HTMLInputElement) this.inputReader(target);
        });
      }
    });
  }

  inputReader(target: HTMLInputElement) {
    if (target.type === "email") {
      this.formUtility.emailValidator(target.value);
      this.formData.email = target.value;
    }

    // ესე პირობა ვალიდურია როგორც ძირითადი ისე განმეორებითი პაროლის შეყვანისას
    if (target.type === "password") {
      if (target.id !== "signup-repeat-password") {
        this.formData.password = target.value;
      }
      this.formUtility.passwordValidator(target.value);
    }

    // ესე პირობა ვალიდურია განმეორებითი პაროლის შეყვანისას
    if (target.id === "signup-repeat-password") {
      this.formUtility.repeatPasswordValidator(target.value, this.formData.password);
    }

    if (target.type === "text") {
      if (target.id === "singup-name") this.formData.name = target.value;
      if (target.id === "singup-surname") this.formData.surname = target.value;
    }
  }
}

const signUpForm = document.getElementById("signup-form");
const signInForm = document.getElementById("signin-form");
if (signUpForm && signUpForm instanceof HTMLFormElement) {
  const singUpManager = new FormManager(signUpForm);
}
if (signInForm && signInForm instanceof HTMLFormElement) {
  const singInManager = new FormManager(signInForm);
}
