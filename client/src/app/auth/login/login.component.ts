import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { AuthModule } from '../auth.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
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

  constructor(private readonly authService: AuthService) {}

  login() {
    const data = { username: this.user, password: this.password };

    this.authService.login(data).subscribe((d) => console.log(d));
  }
}
