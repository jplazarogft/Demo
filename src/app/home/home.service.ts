import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@coreServices/api.service';
import { Technology } from '@coreModels/technology';
import { environment } from '../../environments/environment';
import { NavigationTypes } from '../core/enums/navigation-type.enum';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private apiService: ApiService) {}

  getTechnologies(): Observable<Technology> {
    const { technologiesApi } = environment;
    return this.apiService.get(technologiesApi);
  }

  getImages(): Observable<string[]> {
    const { imagesApi } = environment;
    return this.apiService.get(imagesApi);
  }

  get navigationTypes(): any[] {
    return Object.keys(NavigationTypes).map(navType => ({
      type: navType,
      label: NavigationTypes[navType],
    }));
  }

  sendForm(form): Observable<any> {
    const { projectApi } = environment;
    return this.apiService.post(projectApi, form);
  }
}
