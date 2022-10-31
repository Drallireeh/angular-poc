import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinDateApproxComponent } from './popin-date-approx.component';

describe('PopinDateApproxComponent', () => {
  let component: PopinDateApproxComponent;
  let fixture: ComponentFixture<PopinDateApproxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinDateApproxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinDateApproxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
