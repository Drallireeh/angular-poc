import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderInsideListComponent } from './border-inside-list.component';

describe('BorderOfListComponent', () => {
  let component: BorderInsideListComponent;
  let fixture: ComponentFixture<BorderInsideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorderInsideListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BorderInsideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
