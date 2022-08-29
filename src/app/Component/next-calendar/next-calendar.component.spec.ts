import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCalendarComponent } from './next-calendar.component';

describe('NextCalendarComponent', () => {
  let component: NextCalendarComponent;
  let fixture: ComponentFixture<NextCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
