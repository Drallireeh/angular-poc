import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinButtonGommeComponent } from './popin-button-gomme.component';

describe('PopinButtonGommeComponent', () => {
  let component: PopinButtonGommeComponent;
  let fixture: ComponentFixture<PopinButtonGommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinButtonGommeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinButtonGommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
