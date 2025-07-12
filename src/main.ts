import {FormManager} from "./FormManager";

class SignInForm extends FormManager {
  async handleSubmit(): Promise<void> {
    if (!this.formData.email.value || !this.formData.password.value) return;
    const singInData: {email: string; password: string} = {
      email: this.formData.email.value,
      password: this.formData.password.value,
    };

    const response = await fetch("singin ednpoint", {body: JSON.stringify(singInData)});
    const resData = await response.json();
  }
}
class SignUpForm extends FormManager {
  async handleSubmit(): Promise<void> {
    const response = await fetch("singin ednpoint", {body: JSON.stringify(this.formData)});
    const resData = await response.json();
    console.log("Sign Up form", this.formData);
  }
}

const signUpForm = document.getElementById("signup-form");
const signInForm = document.getElementById("signin-form");
if (signUpForm && signUpForm instanceof HTMLFormElement) {
  const singUpManager = new SignUpForm(signUpForm);
}
if (signInForm && signInForm instanceof HTMLFormElement) {
  const singInManager = new SignInForm(signInForm);
}
