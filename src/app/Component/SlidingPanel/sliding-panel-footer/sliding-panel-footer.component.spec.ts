import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingPanelFooterComponent } from './sliding-panel-footer.component';

describe('SlidingPanelFooterComponent', () => {
  let component: SlidingPanelFooterComponent;
  let fixture: ComponentFixture<SlidingPanelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingPanelFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingPanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
