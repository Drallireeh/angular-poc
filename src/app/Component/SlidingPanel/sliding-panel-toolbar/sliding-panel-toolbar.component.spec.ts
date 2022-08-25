import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingPanelToolbarComponent } from './sliding-panel-toolbar.component';

describe('SlidingPanelToolbarComponent', () => {
  let component: SlidingPanelToolbarComponent;
  let fixture: ComponentFixture<SlidingPanelToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingPanelToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingPanelToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
