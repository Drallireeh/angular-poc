import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergieLineComponent } from './allergie-line.component';

describe('AllergieLineComponent', () => {
  let component: AllergieLineComponent;
  let fixture: ComponentFixture<AllergieLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllergieLineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AllergieLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
