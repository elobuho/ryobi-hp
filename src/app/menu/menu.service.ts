import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _menuItems: MenuItem[] = [];
  private isMenuVisible = new BehaviorSubject(false);
  isMenuVisible$ = this.isMenuVisible.asObservable();
  get menuItems() {
    return this._menuItems;
  }

  constructor(@Optional() @Inject(MENU_ITEMS) providedMenuItems: MenuItem[]) {
    if (providedMenuItems) {
      this._menuItems = [...this.menuItems, ...providedMenuItems];
    }
  }

  toggleMenu() {
    this.isMenuVisible.next(!this.isMenuVisible.value);
  }
}

export const MENU_ITEMS = new InjectionToken<MenuItem[]>('Menu items list.');

export interface MenuItem {
  href: string;
  caption: string;
}
