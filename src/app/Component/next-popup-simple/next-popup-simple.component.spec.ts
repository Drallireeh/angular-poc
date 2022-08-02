import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPopupSimpleComponent } from './next-popup-simple.component';

describe('NextPopupSimpleComponent', () => {
  let component: NextPopupSimpleComponent;
  let fixture: ComponentFixture<NextPopupSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPopupSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPopupSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
