import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from '@coreServices/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apiService: ApiService) {}

  sendLoginForm = (form): Observable<any> => {
    return this.apiService.post(form);
  };
}
