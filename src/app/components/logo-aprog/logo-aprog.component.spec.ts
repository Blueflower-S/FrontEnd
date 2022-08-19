import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAProgComponent } from './logo-aprog.component';

describe('LogoAProgComponent', () => {
  let component: LogoAProgComponent;
  let fixture: ComponentFixture<LogoAProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAProgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
