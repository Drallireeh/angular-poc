import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsInsideListComponent } from './actions-inside-list.component';

describe('ActionsInsideListComponent', () => {
  let component: ActionsInsideListComponent;
  let fixture: ComponentFixture<ActionsInsideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionsInsideListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ActionsInsideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
