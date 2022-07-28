import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinFooterComponent } from './popin-footer.component';

describe('PopinFooterComponent', () => {
  let component: PopinFooterComponent;
  let fixture: ComponentFixture<PopinFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
