import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOngletsComponent } from './navigation-onglets.component';

describe('NavigationOngletsComponent', () => {
  let component: NavigationOngletsComponent;
  let fixture: ComponentFixture<NavigationOngletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationOngletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationOngletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
