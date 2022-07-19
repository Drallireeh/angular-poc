import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAllergiesComponent } from './liste-allergies.component';

describe('ListeAllergiesComponent', () => {
  let component: ListeAllergiesComponent;
  let fixture: ComponentFixture<ListeAllergiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAllergiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAllergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
