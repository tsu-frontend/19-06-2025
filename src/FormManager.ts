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

type TFormField = {value: string | null; isValid: boolean};

type TFormData = {
  name: TFormField;
  surname: TFormField;
  email: TFormField;
  password: TFormField;
  repeatPassword: TFormField;
};

class FormManager {
  public formElement: HTMLFormElement;
  public inputElementsList: HTMLFormControlsCollection;
  private formUtility: FormUtility;
  private isSubmitable: boolean;
  private formData: TFormData;

  constructor(formElRef: HTMLFormElement, submitHandler: (formData: TFormData) => void) {
    this.formElement = formElRef;
    this.inputElementsList = this.formElement.elements;
    this.isSubmitable = false;
    this.formData = {
      password: {value: null, isValid: false},
      repeatPassword: {value: null, isValid: false},
      email: {value: null, isValid: false},
      name: {value: null, isValid: false},
      surname: {value: null, isValid: false},
    };

    this.formUtility = new FormUtility();

    this.setUpListeners();
    this.handleIsSubmitable();
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
      const isEmailValid = this.formUtility.emailValidator(target.value);
      this.formData.email.value = target.value;
      this.formData.email.isValid = isEmailValid;
      console.log(this.formData);
    }

    // ესე პირობა ვალიდურია როგორც ძირითადი ისე განმეორებითი პაროლის შეყვანისას
    if (target.type === "password") {
      if (target.id !== "signup-repeat-password") {
        const isPasswordValid = this.formUtility.passwordValidator(target.value);
        this.formData.password.value = target.value;
        this.formData.password.isValid = isPasswordValid;
        console.log(this.formData);
      }
      this.formUtility.passwordValidator(target.value);
    }

    // ესე პირობა ვალიდურია განმეორებითი პაროლის შეყვანისას
    if (target.id === "signup-repeat-password") {
      const isRepeatValid = this.formUtility.repeatPasswordValidator(target.value, this.formData.password.value);
      this.formData.repeatPassword.value = target.value;
      this.formData.repeatPassword.isValid = isRepeatValid;
      console.log(this.formData);
    }

    if (target.type === "text") {
      if (target.id === "signup-name") {
        const isNameValid = typeof target.value === "string" && target.value.length > 0;
        this.formData.name.value = target.value;
        this.formData.name.isValid = isNameValid;
        console.log(this.formData);
      }
      if (target.id === "signup-surname") {
        const isSurnameValid = typeof target.value === "string" && target.value.length > 0;
        this.formData.surname.value = target.value;
        this.formData.surname.isValid = isSurnameValid;
        console.log(this.formData);
      }
    }
  }

  handleIsSubmitable() {
    for (let key in this.formData) {
      console.log(this.formData[key as keyof TFormData]);
    }
  }

  handleSubmit() {}
}

const signUpForm = document.getElementById("signup-form");
const signInForm = document.getElementById("signin-form");
if (signUpForm && signUpForm instanceof HTMLFormElement) {
  const singUpManager = new FormManager(signUpForm, singInSubmitHandler);
}
if (signInForm && signInForm instanceof HTMLFormElement) {
  const singInManager = new FormManager(signInForm, singInSubmitHandler);
}

/*
Pseudocode SIGN-IN handler

უკვე გვაქვს მონაცემები
უნდა გააგზავნოს ავტორიზაციის მოთხოვნა Supabase თან
დავლოგოთ პასუხი

*/

async function singInSubmitHandler(formData: TFormData) {
  if (!formData.email.value || !formData.password.value) return;
  const singInData: {email: string; password: string} = {
    email: formData.email.value,
    password: formData.password.value,
  };

  const response = await fetch("singin ednpoint", {body: JSON.stringify(singInData)});
  const resData = await response.json();
  console.log(resData);
}
async function singUpSubmitHandler(formData: TFormData) {


  const response = await fetch("singin ednpoint", {body: JSON.stringify(formData)});
  const resData = await response.json();
  console.log(resData);
}
