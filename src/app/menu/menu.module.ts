import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [HamburgerComponent, OverlayComponent],
  imports: [CommonModule],
  exports: [HamburgerComponent, OverlayComponent],
})
export class MenuModule {}
