import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelHeadingComponent } from './panel-heading.component';

describe('PanelHeadingComponent', () => {
  let component: PanelHeadingComponent;
  let fixture: ComponentFixture<PanelHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
