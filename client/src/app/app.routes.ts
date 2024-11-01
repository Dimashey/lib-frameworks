import { Routes } from '@angular/router';
import { LoginComponent } from 'app/auth/login/login.component';
import { SignUpComponent } from 'app/auth/sign-up/sign-up.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { AuthGuard } from 'guard/auth.guard';
import { NotAuthGuard } from 'guard/not-auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [NotAuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login'}
];
