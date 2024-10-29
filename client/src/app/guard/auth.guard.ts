import { Injectable } from '@angular/core';
import { CanActivate, GuardResult, MaybeAsync, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): MaybeAsync<GuardResult> {
    const token = this.authService.getAuthToken();

    if (token) {
      return true;
    }

    this.router.navigate(['login']);

    return false;
  }
}
