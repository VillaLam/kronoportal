import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDebtViewComponent } from './admin-debt-view.component';

describe('AdminDebtViewComponent', () => {
  let component: AdminDebtViewComponent;
  let fixture: ComponentFixture<AdminDebtViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDebtViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDebtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
