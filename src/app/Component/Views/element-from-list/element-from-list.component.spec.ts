import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFromListComponent } from './element-from-list.component';

describe('ElementFromListComponent', () => {
  let component: ElementFromListComponent;
  let fixture: ComponentFixture<ElementFromListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementFromListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementFromListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
