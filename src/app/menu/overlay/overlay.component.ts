import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'menu-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  animations: [
    trigger('enterLeaveAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class OverlayComponent implements OnInit {
  constructor(public menu: MenuService) {}

  ngOnInit(): void {}

  onMenuItemClick(event: MouseEvent): void {
    this.menu.toggleMenu();
  }
}
