import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserDataComponent } from './header-user-data.component';

describe('HeaderUserDataComponent', () => {
  let component: HeaderUserDataComponent;
  let fixture: ComponentFixture<HeaderUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
