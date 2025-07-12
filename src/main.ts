import {FormManager} from "./FormManager";
import {ServiceManager} from "supabase-service-manager";

const supaAnonkey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supaURL = import.meta.env.VITE_SUPABASE_URL;
const supa_service_manager = new ServiceManager({supabase: {url: supaURL, anonKey: supaAnonkey}});

console.log(supa_service_manager);
class SignInForm extends FormManager {
  async handleSubmit(): Promise<void> {
    if (!this.formData.email.value || !this.formData.password.value) return;
    const email = this.formData.email.value;
    const password = this.formData.password.value;
    const response = await supa_service_manager.signIn(email, password);
    console.log(response);
  }
}
class SignUpForm extends FormManager {
  async handleSubmit(): Promise<void> {
    console.log(this.formData.email.value as string, this.formData.password.value as string);
    const response = await supa_service_manager.signUp(this.formData.email.value as string, this.formData.password.value as string, {});
    console.log(response);
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
