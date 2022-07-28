import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextInputWithPopinComponent } from './next-input-with-popin.component';

describe('NextInputWithPopinComponent', () => {
  let component: NextInputWithPopinComponent;
  let fixture: ComponentFixture<NextInputWithPopinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextInputWithPopinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextInputWithPopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
