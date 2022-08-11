import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPopupComponent } from './next-popup.component';

describe('NextPopupComponent', () => {
  let component: NextPopupComponent;
  let fixture: ComponentFixture<NextPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextPopupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NextPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
