import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinCalendarComponent } from './popin-calendar.component';

describe('PopinCalendarComponent', () => {
  let component: PopinCalendarComponent;
  let fixture: ComponentFixture<PopinCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
