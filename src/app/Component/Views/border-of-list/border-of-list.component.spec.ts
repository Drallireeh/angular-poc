import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderOfListComponent } from './border-of-list.component';

describe('BorderOfListComponent', () => {
  let component: BorderOfListComponent;
  let fixture: ComponentFixture<BorderOfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderOfListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderOfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
