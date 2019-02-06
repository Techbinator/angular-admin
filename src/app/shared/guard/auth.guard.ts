import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  async canActivate() {
    const seaTool = localStorage.getItem('seaTool');
    if (!seaTool || !JSON.parse(seaTool)) {
      this.router.navigate(['/login']);
      return false;
    }
    const lsData = JSON.parse(seaTool);

    try {
      await this.authService.renewToken(lsData.token).subscribe();
      return true;
    } catch (e) {
      console.log('error renewing token for', lsData.username);
      return false;
    }
  }
}
