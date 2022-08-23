import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAllergieComponent } from './update-allergie.component';

describe('UpdateAllergieComponent', () => {
  let component: UpdateAllergieComponent;
  let fixture: ComponentFixture<UpdateAllergieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAllergieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAllergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
