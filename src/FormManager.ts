import {FormUtility} from "./FormUtility";
import {TFormData} from "./types";

export class FormManager {
  public formElement: HTMLFormElement;
  public inputElementsList: HTMLFormControlsCollection;
  private formUtility: FormUtility;
  private isSubmitable: boolean;
  public formData: TFormData;

  constructor(formElRef: HTMLFormElement) {
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
        element.addEventListener("click", (e: MouseEvent) => {
          e.preventDefault();
          this.handleSubmit(e);
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
    }

    // ესე პირობა ვალიდურია როგორც ძირითადი ისე განმეორებითი პაროლის შეყვანისას
    if (target.type === "password") {
      if (target.id !== "signup-repeat-password") {
        const isPasswordValid = this.formUtility.passwordValidator(target.value);
        this.formData.password.value = target.value;
        this.formData.password.isValid = isPasswordValid;
      }
      this.formUtility.passwordValidator(target.value);
    }

    // ესე პირობა ვალიდურია განმეორებითი პაროლის შეყვანისას
    if (target.id === "signup-repeat-password") {
      const isRepeatValid = this.formUtility.repeatPasswordValidator(target.value, this.formData.password.value);
      this.formData.repeatPassword.value = target.value;
      this.formData.repeatPassword.isValid = isRepeatValid;
    }

    if (target.type === "text") {
      if (target.id === "signup-name") {
        const isNameValid = typeof target.value === "string" && target.value.length > 0;
        this.formData.name.value = target.value;
        this.formData.name.isValid = isNameValid;
      }
      if (target.id === "signup-surname") {
        const isSurnameValid = typeof target.value === "string" && target.value.length > 0;
        this.formData.surname.value = target.value;
        this.formData.surname.isValid = isSurnameValid;
      }
    }
  }

  handleIsSubmitable() {
    for (let key in this.formData) {
      // console.log(this.formData[key as keyof TFormData]);
    }
  }

  async handleSubmit(e: MouseEvent) {
    console.log("Handle form submit from generic FormManager class");
  }
}
