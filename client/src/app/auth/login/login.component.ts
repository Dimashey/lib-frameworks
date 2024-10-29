import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { AuthModule } from '../auth.module';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCardContent,
    MatLabel,
    FormsModule,
    AuthModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [],
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  login() {
    const data = { username: this.user, password: this.password };

    this.authService.login(data).subscribe({
      next: () => this.router.navigate(['profile']),
    });
  }
}
