import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatProgressSpinner, AsyncPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  $profile!: Observable<User>

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.$profile = this.authService.getMe()
  }
}
