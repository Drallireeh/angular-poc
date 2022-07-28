import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinBaseComponent } from './popin-base.component';

describe('PopinBaseComponent', () => {
  let component: PopinBaseComponent;
  let fixture: ComponentFixture<PopinBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
