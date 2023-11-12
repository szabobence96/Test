import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private storageKey = 'rememberMeData';

  // Adatok tárolása
  storeUserData(email: string, password: string) {
    const userData = { email, password };
    localStorage.setItem(this.storageKey, JSON.stringify(userData));
  }

  // Adatok betöltése
  loadUserData(): { email: string, password: string } | null {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : null;
  }

  // Adatok törlése
  clearUserData() {
    localStorage.removeItem(this.storageKey);
  }
}
