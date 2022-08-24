import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSlidingButtonComponent } from './cancel-sliding-button.component';

describe('CancelSlidingButtonComponent', () => {
  let component: CancelSlidingButtonComponent;
  let fixture: ComponentFixture<CancelSlidingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelSlidingButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelSlidingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
