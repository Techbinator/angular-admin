import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SuccessLoginResponse } from 'src/app/shared/services/auth.type';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {}
  ngOnInit() {}

  onLogin(e: Event) {
    e.preventDefault();
    this.loading = true;

    // for local development so that we do not have to start auth sevice locally
    // if(environment.fakeLogin){
    //   this.router.navigate(['/dashboard']);
    // }

    // in case form is invalid
    if (this.loginForm.invalid) {
      this.snackBar.open('Validation error. Please check the field marked with red', 'close', {
        duration: 5000
      });
      this.loading = false;
      return;
    }

    this.authService.loginUser(this.loginForm.value).subscribe(
      (data: SuccessLoginResponse) => {
        this.loading = false;
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate([data.redirect]);
      },
      err => {
        console.log(err);
        this.loading = false;
        this.snackBar.open('Error trying to login user', 'close', {
          duration: 5000
        });
      }
    );
  }
}
