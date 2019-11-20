import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isVisible = false;
  private visible = new BehaviorSubject<boolean>(false);
  visible$ = this.visible.asObservable();

  constructor() {}

  toggleVisibility = () => {
    this.isVisible = !this.isVisible;
    this.visible.next(this.isVisible);
  };
}
