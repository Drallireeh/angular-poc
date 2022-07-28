import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinSimplesComponent } from './popin-simples.component';

describe('PopinSimplesComponent', () => {
  let component: PopinSimplesComponent;
  let fixture: ComponentFixture<PopinSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinSimplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
