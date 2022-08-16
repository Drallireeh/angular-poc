import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingPanelContentComponent } from './sliding-panel-content.component';

describe('SlidingPanelContentComponent', () => {
  let component: SlidingPanelContentComponent;
  let fixture: ComponentFixture<SlidingPanelContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingPanelContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingPanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
