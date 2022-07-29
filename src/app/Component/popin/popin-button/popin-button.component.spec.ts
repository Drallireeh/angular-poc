import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinButtonComponent } from './popin-button.component';

describe('PopinButtonComponent', () => {
  let component: PopinButtonComponent;
  let fixture: ComponentFixture<PopinButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
