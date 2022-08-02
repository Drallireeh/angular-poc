import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinButtonVirguleComponent } from './popin-button-virgule.component';

describe('PopinButtonVirguleComponent', () => {
  let component: PopinButtonVirguleComponent;
  let fixture: ComponentFixture<PopinButtonVirguleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinButtonVirguleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinButtonVirguleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
