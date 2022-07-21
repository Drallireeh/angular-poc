import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinSimpleComponent } from './popin-simple.component';

describe('PopinSimpleComponent', () => {
  let component: PopinSimpleComponent;
  let fixture: ComponentFixture<PopinSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
