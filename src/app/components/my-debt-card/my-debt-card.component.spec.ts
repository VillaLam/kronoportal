import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDebtCardComponent } from './my-debt-card.component';

describe('MyDebtCardComponent', () => {
  let component: MyDebtCardComponent;
  let fixture: ComponentFixture<MyDebtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDebtCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDebtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
