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
    const result = pattern.test(emailValue);

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
  repeatPasswordValidator(repeatPasswordValue: string): boolean {
    return false;
  }
}

class FormManager {
  public formElement: HTMLFormElement;
  public inputElementsList: HTMLFormControlsCollection;
  private formUtility: any;
  private isSubmitable: boolean;

  constructor(formElRef: HTMLFormElement) {
    this.formElement = formElRef;
    this.inputElementsList = this.formElement.elements;
    this.isSubmitable = false;

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
    console.dir(target, "Changed!");
        if (target.type === "email") this.formUtility.emailValidator(target.value);
        if (target.type === "password") this.formUtility.passwordValidator(target.value);
        // Add `repeatPasswordValidator `
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
