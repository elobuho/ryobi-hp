import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss'],
})
export class LeadComponent implements OnInit {
  @Input()
  variant: '' | 'inverted' = '';

  @HostBinding('class')
  get className() {
    return this.variant;
  }

  constructor() {}

  ngOnInit(): void {}
}
