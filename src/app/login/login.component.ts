import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {}
  loading = false;
  ngOnInit() {}

  onLogin(e: Event) {
    e.preventDefault();
    this.loading = true;
    console.log(environment);
    this.authService.loginUser().subscribe(
      data => {
        console.log(data);
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
        this.snackBar.open('Error trying to login user', 'close', {
          duration: 5000
        });
      }
    );
    // if(environment.fakeLogin){
    //   this.router.navigate(['/dashboard']);
    // }
    // localStorage.setItem('isLoggedin', 'true');
    // this.router.navigate(['/dashboard']);
  }
}
