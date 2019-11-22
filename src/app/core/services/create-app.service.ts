import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreateAppService {
  constructor(private apiService: ApiService) {}

  getTechnologies(): Observable<any> {
    const { technologies } = environment;
    return this.apiService.get(technologies);
  }
}
