import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuModule } from './menu/menu.module';
import { VideoComponent } from './components/video/video.component';
import { IntroComponent } from './components/intro/intro.component';
import { CtaBtnDirective } from './directives/cta-btn.directive';
import { MoreArrowComponent } from './components/more-arrow/more-arrow.component';
import { AboutHPComponent } from './components/about-hp/about-hp.component';
import { LeadComponent } from './components/lead/lead.component';
import { CompactComponent } from './components/compact/compact.component';
import { ProdCompareComponent } from './components/prod-compare/prod-compare.component';
import { MENU_ITEMS } from './menu/menu.service';
import { BatteriesComponent } from './components/batteries/batteries.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLinkDirective } from './directives/social-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoComponent,
    IntroComponent,
    CtaBtnDirective,
    MoreArrowComponent,
    AboutHPComponent,
    LeadComponent,
    CompactComponent,
    ProdCompareComponent,
    BatteriesComponent,
    FooterComponent,
    SocialLinkDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IntersectionObserverModule,
    MenuModule,
  ],
  providers: [
    {
      provide: MENU_ITEMS,
      useValue: [
        { href: '#about-hp', caption: 'About HP One+' },
        { href: '#compact', caption: 'Compact design' },
        { href: '#batteries', caption: 'Batteries' },
      ],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
