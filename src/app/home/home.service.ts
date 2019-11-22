import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@coreServices/api.service';
import { Technology } from '@coreModels/technology';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private apiService: ApiService) {}

  getTechnologies(): Observable<Technology> {
    const { technologies } = environment;
    return this.apiService.get(technologies);
  }
}
