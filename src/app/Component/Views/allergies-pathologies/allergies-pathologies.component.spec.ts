import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergiesPathologiesComponent } from './allergies-pathologies.component';

describe('AllergiesPathologiesComponent', () => {
  let component: AllergiesPathologiesComponent;
  let fixture: ComponentFixture<AllergiesPathologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergiesPathologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllergiesPathologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
