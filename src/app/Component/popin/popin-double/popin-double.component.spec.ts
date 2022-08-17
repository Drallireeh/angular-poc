import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinDoubleComponent } from './popin-double.component';

describe('PopinDoubleComponent', () => {
  let component: PopinDoubleComponent;
  let fixture: ComponentFixture<PopinDoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinDoubleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
