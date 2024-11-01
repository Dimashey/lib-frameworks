import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { confirmPasswordValidator } from './sign-up.utils';
import { AuthService } from 'app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  user: string = '';
  password: string = '';
  confirmPassword: string = '';

  signUpForm: FormGroup = new FormGroup(
    {
      username: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required]),
    },
    { validators: confirmPasswordValidator }
  );

  constructor(private authSevice: AuthService, private router: Router) {}

  signUp() {
    const data = this.signUpForm.value;

    this.authSevice.signUp(data).subscribe({
      next: () => this.router.navigate(['login']),
    });
  }
}
