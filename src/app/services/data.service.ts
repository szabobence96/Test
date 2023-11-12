import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  leftHeader: string = 'Welcome to Acme.'
  leftTextH6: string = 'Create your account by filling the form bellow.'
  rightTextH2: string = 'Do you already have an account?';
  rightTextH4: string = 'That\'s awesome! You can login by clicking on the button below. To skip this next time, you can ask us to remember your login credentials.';
  acmeFooter: string = '@ 2015 Acme, inc.'
  terms: string = 'Terms'
  privacy: string = 'Privacy'
  rememberMeText: string = 'Remember me.'
  login: string = 'Log in'
  signUp: string = "Sign up"
  password: string = 'Password'
  email: string = 'Email'
}
