import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinHeaderComponent } from './popin-header.component';

describe('PopinHeaderComponent', () => {
  let component: PopinHeaderComponent;
  let fixture: ComponentFixture<PopinHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
