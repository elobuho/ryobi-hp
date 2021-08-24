import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[socialLink]',
})
export class SocialLinkDirective {
  constructor(el: ElementRef) {
    const url = el.nativeElement.href;
    el.nativeElement.setAttribute('target', '_blank');
    el.nativeElement.setAttribute('rel', 'noreferrer');

    el.nativeElement.addEventListener('click', (ev: Event) => {
      ev.preventDefault();
      el.nativeElement.classList.add('click');
    });

    el.nativeElement.addEventListener('animationend', () => {
      window.open(url);
      el.nativeElement.classList.remove('click');
    });
  }
}
