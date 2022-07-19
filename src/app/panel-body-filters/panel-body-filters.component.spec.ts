import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBodyFiltersComponent } from './panel-body-filters.component';

describe('PanelBodyFiltersComponent', () => {
  let component: PanelBodyFiltersComponent;
  let fixture: ComponentFixture<PanelBodyFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelBodyFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelBodyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
