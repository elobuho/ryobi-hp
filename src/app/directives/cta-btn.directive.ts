import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ctaBtn]',
})
export class CtaBtnDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('btn', 'btn-brand');
  }
}
