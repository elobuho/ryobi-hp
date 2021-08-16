import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-more-arrow',
  templateUrl: './more-arrow.component.html',
  styleUrls: ['./more-arrow.component.scss'],
})
export class MoreArrowComponent {
  @Input()
  target!: string;

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

  onClick(ev: MouseEvent): void {
    ev.preventDefault();
    let el = this.documentRef.getElementById(this.target);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
