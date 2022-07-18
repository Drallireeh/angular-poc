import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAppNameComponent } from './header-app-name.component';

describe('HeaderAppNameComponent', () => {
  let component: HeaderAppNameComponent;
  let fixture: ComponentFixture<HeaderAppNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAppNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAppNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
