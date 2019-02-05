import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLogin(e: Event) {
    e.preventDefault();
    console.log(environment);
    localStorage.setItem('isLoggedin', 'true');
    // this.router.navigate(['/dashboard']);
  }
}
