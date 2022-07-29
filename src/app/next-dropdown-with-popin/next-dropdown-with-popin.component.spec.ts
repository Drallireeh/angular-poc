import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDropdownWithPopinComponent } from './next-dropdown-with-popin.component';

describe('NextDropdownWithPopinComponent', () => {
  let component: NextDropdownWithPopinComponent;
  let fixture: ComponentFixture<NextDropdownWithPopinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextDropdownWithPopinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextDropdownWithPopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
