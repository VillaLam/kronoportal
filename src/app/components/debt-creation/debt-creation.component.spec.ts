import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtCreationComponent } from './debt-creation.component';

describe('DebtCreationComponent', () => {
  let component: DebtCreationComponent;
  let fixture: ComponentFixture<DebtCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
