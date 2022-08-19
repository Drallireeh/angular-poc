import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsAsRadioComponent } from './btns-as-radio.component';

describe('BtnsAsRadioComponent', () => {
  let component: BtnsAsRadioComponent;
  let fixture: ComponentFixture<BtnsAsRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnsAsRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnsAsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
