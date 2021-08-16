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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IntersectionObserverModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
