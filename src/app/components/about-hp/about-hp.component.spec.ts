import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHPComponent } from './about-hp.component';

describe('AboutHPComponent', () => {
  let component: AboutHPComponent;
  let fixture: ComponentFixture<AboutHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
