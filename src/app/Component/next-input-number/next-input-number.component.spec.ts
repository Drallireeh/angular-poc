import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextInputNumberComponent } from './next-input-number.component';

describe('NextInputNumberComponent', () => {
  let component: NextInputNumberComponent;
  let fixture: ComponentFixture<NextInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextInputNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
