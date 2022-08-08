import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsFromListComponent } from './actions-from-list.component';

describe('ActionsFromListComponent', () => {
  let component: ActionsFromListComponent;
  let fixture: ComponentFixture<ActionsFromListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsFromListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsFromListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
