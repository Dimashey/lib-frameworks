import { Provider } from '@angular/core';
import { API_ENDPOINT, ENVIRONMENT } from 'config/environment';

export const API_ENDPOINT_PROVIDER: Provider = {
  provide: API_ENDPOINT,
  useValue: ENVIRONMENT.API_ENDPOINT,
};
