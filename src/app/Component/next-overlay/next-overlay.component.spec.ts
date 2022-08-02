import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextOverlayComponent } from './next-overlay.component';

describe('NextOverlayComponent', () => {
  let component: NextOverlayComponent;
  let fixture: ComponentFixture<NextOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
