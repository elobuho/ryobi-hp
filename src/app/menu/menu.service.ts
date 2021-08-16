import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private isMenuVisible = new BehaviorSubject(false);
  isMenuVisible$ = this.isMenuVisible.asObservable();

  constructor() {}

  toggleMenu() {
    this.isMenuVisible.next(!this.isMenuVisible.value);
  }
}
