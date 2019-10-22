import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.userService.isAuthenticated();
  }
}
