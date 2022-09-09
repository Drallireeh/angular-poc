import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMedToAddAllergieComponent } from './liste-med-to-add-allergie.component';

describe('ListeMedToAddAllergieComponent', () => {
  let component: ListeMedToAddAllergieComponent;
  let fixture: ComponentFixture<ListeMedToAddAllergieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMedToAddAllergieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMedToAddAllergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
