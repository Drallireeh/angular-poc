import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingPanelHeaderComponent } from './sliding-panel-header.component';

describe('SlidingPanelHeaderComponent', () => {
  let component: SlidingPanelHeaderComponent;
  let fixture: ComponentFixture<SlidingPanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingPanelHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
