import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  AfterViewInit,
  OnDestroy,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MenuService } from '../menu.service';

@Component({
  selector: 'menu-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('l1,l3')
  lines!: QueryList<ElementRef>;
  animsIn: any[] = [];
  animsOut: any[] = [];
  menuSubscription!: Subscription;

  constructor(public menu: MenuService) {}

  ngOnInit(): void {
    this.menuSubscription = this.menu.isMenuVisible$
      .pipe(
        tap((isMenuVisible) => {
          if (isMenuVisible) {
            this.animsIn.forEach((anim) => {
              anim.beginElement();
            });
          } else {
            this.animsOut.forEach((anim) => {
              anim.beginElement();
            });
          }
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.lines.forEach((line) => {
      this.animsIn.push(...line.nativeElement.querySelectorAll('animate.in'));
      this.animsOut.push(...line.nativeElement.querySelectorAll('animate.out'));
    });
  }

  onMenuToggle(): void {
    this.menu.toggleMenu();
  }

  ngOnDestroy(): void {
    this.menuSubscription.unsubscribe();
  }
}
