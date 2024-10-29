import { Injectable } from '@angular/core';
import { CanActivate, GuardResult, MaybeAsync, Router } from '@angular/router';
import { AuthService } from 'app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): MaybeAsync<GuardResult> {
    const token = this.authService.getAuthToken();

    if (!token) {
      return true;
    }

    this.router.navigate(['profile']);

    return false;
  }
}
