import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { API_ENDPOINT_PROVIDER } from '../providers/environment';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, API_ENDPOINT_PROVIDER],
})
export class AuthModule {}
