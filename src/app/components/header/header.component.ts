import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { MenuService } from 'src/app/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private fixedClass = 'sticky-header';
  private scrollSub?: Subscription;
  private scrollYbefore = 0;

  private overlayClass = 'overlay';
  private overlaySub?: Subscription;

  constructor(
    @Inject(DOCUMENT) readonly documentRef: Document,
    @Inject(WINDOW) readonly windowRef: Window,
    private renderer: Renderer2,
    public menu: MenuService
  ) {}

  ngAfterViewInit(): void {
    this.scrollSub = fromEvent(this.documentRef, 'scroll')
      .pipe(
        debounceTime(500),
        // Check if header should be fixed, return boolean
        map(() => {
          // On top
          if (this.windowRef.scrollY < this.windowRef.innerHeight) {
            return false;
          }
          // Detect scroll up
          // Add some margin for content jumping on overlay display
          if (this.windowRef.scrollY < this.scrollYbefore + 50) {
            return true;
          } else {
            return false;
          }
        }),
        // Save current scroll position for later checks
        tap(() => {
          this.scrollYbefore = this.windowRef.scrollY;
        }),
        // Do nothing if status didn't change
        distinctUntilChanged(),
        // Switch css class
        tap((isFixed) => {
          if (isFixed) {
            this.renderer.addClass(this.documentRef.body, this.fixedClass);
          } else {
            this.renderer.removeClass(this.documentRef.body, this.fixedClass);
          }
        })
      )
      .subscribe();

    this.overlaySub = this.menu.isMenuVisible$.subscribe((isMenuVisible) => {
      if (isMenuVisible) {
        this.renderer.addClass(this.documentRef.body, this.overlayClass);
      } else {
        this.renderer.removeClass(this.documentRef.body, this.overlayClass);
      }
    });
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
    this.overlaySub?.unsubscribe();
  }
}
