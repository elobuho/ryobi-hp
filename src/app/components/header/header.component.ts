import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
} from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private scrollSub?: Subscription;

  constructor(
    private headerRef: ElementRef,
    @Inject(DOCUMENT) readonly documentRef: Document,
    @Inject(WINDOW) readonly windowRef: Window
  ) {}

  ngAfterViewInit(): void {
    this.scrollSub = fromEvent(this.documentRef, 'scroll').subscribe((res) =>
      console.log(res)
    );
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
  }
}
