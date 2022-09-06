import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinDatepickerComponent } from './popin-datepicker.component';

describe('PopinDatepickerComponent', () => {
  let component: PopinDatepickerComponent;
  let fixture: ComponentFixture<PopinDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
