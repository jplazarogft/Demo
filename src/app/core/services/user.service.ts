import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  // todo -> change when services are done!
  get isAuthenticated(): boolean {
    return false;
  }
}
