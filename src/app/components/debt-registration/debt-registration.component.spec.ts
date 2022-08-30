import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtRegistrationComponent } from './debt-registration.component';

describe('DebtRegistrationComponent', () => {
  let component: DebtRegistrationComponent;
  let fixture: ComponentFixture<DebtRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
