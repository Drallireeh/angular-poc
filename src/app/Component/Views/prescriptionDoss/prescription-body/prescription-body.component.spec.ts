import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionBodyComponent } from './prescription-body.component';

describe('PrescriptionBodyComponent', () => {
  let component: PrescriptionBodyComponent;
  let fixture: ComponentFixture<PrescriptionBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
