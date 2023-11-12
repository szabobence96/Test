import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  getPasswordStrength(password: string) {
    const passwordLength = password.length;

    let strength = 0;

    if (passwordLength == 0) { strength = 0 }
    if (passwordLength <= 5 && passwordLength >= 1) { strength = 1 }
    if (passwordLength >= 6 && passwordLength <= 16) {
      if (/^(?=.*[A-Z]).+$/.test(password)) {
        strength = 1;
      } else if (/^(?=.*[a-z]).+$/.test(password)) {
        strength = 1;
      } else if (/^(?=.*[0-9]).+$/.test(password)) {
        strength = 1;
      } else if (/^(?=.*[\W_]).+$/.test(password)) {
        strength = 1;
      }
    }
    if (passwordLength >= 6 && passwordLength <= 16) {
      if (/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)) {
        strength = 2;
      } else if (/^(?=.*[A-Z])(?=.*[0-9]).+$/.test(password)) {
        strength = 2;
      } else if (/^(?=.*[a-z])(?=.*[0-9]).+$/.test(password)) {
        strength = 2;
      } else if (/^(?=.*[a-z])(?=.*[\W_]).+$/.test(password)) {
        strength = 2;
      } else if (/^(?=.*[A-Z])(?=.*[\W_]).+$/.test(password)) {
        strength = 2;
      } else if (/^(?=.*[0-9])(?=.*[\W_]).+$/.test(password)) {
        strength = 2;
      }
    }
    if (passwordLength >= 6 && passwordLength <= 16) {
      if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).+$/.test(password)) {
        strength = 3;
      } else if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).+$/.test(password)) {
        strength = 3;
      } else if (/^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).+$/.test(password)) {
        strength = 3;
      } else if (/^(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).+$/.test(password)) {
        strength = 3;
      }
    }
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).+$/.test(password)) {
      strength = 4;
    }
    return strength;
  }
}
