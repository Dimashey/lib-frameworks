import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCard, MatCardContent, MatFormField, MatLabel, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor() {}

  login(): void {
    console.log(this.user, this.password)
  }
}
