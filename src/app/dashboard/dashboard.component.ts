import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { PasswordService } from '../services/password.service';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private apiService: ApiService,
    private passwordService: PasswordService,
    private authService: AuthService,
    public dataService: DataService,
  ) { }

  email: string = '';
  password: string = '';

  hidePassword: boolean = true;
  rememberMe: boolean = false;
  passwordStrength: number = 0;

  eyeIconPath: string = './assets/fa-eyes/fa-eye@3x.png';

  ngOnInit() {
    const userData = this.authService.loadUserData();
    if (userData) {
      this.email = userData.email;
      this.password = userData.password;
      this.rememberMe = true;
    }
  }

  signIn() {
    this.apiService.signIn(this.email, this.password).subscribe(
      (response) => {
        console.log(response);
        if (this.rememberMe) {
          this.authService.storeUserData(this.email, this.password);
        } else {
          this.authService.clearUserData();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
    this.eyeIconPath = this.hidePassword ? './assets/fa-eyes/fa-eye@3x.png' : './assets/fa-eyes/fa-eye-slash@3x.png';
  }

  checkPasswordStrength() {
    this.passwordStrength = this.passwordService.getPasswordStrength(this.password);
  }

}
