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
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  fixedClass = 'sticky-header';
  private scrollSub?: Subscription;
  private scrollYbefore = 0;
  private fixed$ = new BehaviorSubject(false);
  private fixedSub?: Subscription;

  constructor(
    @Inject(DOCUMENT) readonly documentRef: Document,
    @Inject(WINDOW) readonly windowRef: Window,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.scrollSub = fromEvent(this.documentRef, 'scroll')
      .pipe(
        debounceTime(500),
        tap((ev) => {
          const scrollYbefore = this.scrollYbefore;
          this.scrollYbefore = this.windowRef.scrollY;
          // On top
          if (this.windowRef.scrollY < this.windowRef.innerHeight) {
            this.fixed$.next(false);
            return;
          }

          // Detect scroll up
          if (this.windowRef.scrollY < scrollYbefore) {
            this.fixed$.next(true);
          } else {
            this.fixed$.next(false);
          }
        })
      )
      .subscribe();

    this.fixedSub = this.fixed$
      .pipe(distinctUntilChanged())
      .subscribe((isFixed) => {
        if (isFixed) {
          this.renderer.addClass(this.documentRef.body, this.fixedClass);
        } else {
          this.renderer.removeClass(this.documentRef.body, this.fixedClass);
        }
      });
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
    this.fixedSub?.unsubscribe();
  }
}
