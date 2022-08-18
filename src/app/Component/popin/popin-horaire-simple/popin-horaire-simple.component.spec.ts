import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinHoraireSimpleComponent } from './popin-horaire-simple.component';

describe('PopinHoraireSimpleComponent', () => {
  let component: PopinHoraireSimpleComponent;
  let fixture: ComponentFixture<PopinHoraireSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinHoraireSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinHoraireSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
