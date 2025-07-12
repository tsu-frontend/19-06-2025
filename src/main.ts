import {FormManager} from "./FormManager";
import {ServiceManager} from "supabase-service-manager";

const supaAnonkey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supaURL = import.meta.env.VITE_SUPABASE_URL;
const supa_service_manager = new ServiceManager({supabase: {url: supaURL, anonKey: supaAnonkey}});

console.log(supa_service_manager);
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
