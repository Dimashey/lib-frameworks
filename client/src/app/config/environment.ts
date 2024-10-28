import { InjectionToken } from '@angular/core';

export const ENVIRONMENT = {
  API_ENDPOINT: process.env['API_ENDPOINT'],
};

export const API_ENDPOINT = new InjectionToken('API_ENDPOINT');
