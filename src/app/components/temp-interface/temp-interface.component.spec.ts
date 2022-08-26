import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempInterfaceComponent } from './temp-interface.component';

describe('TempInterfaceComponent', () => {
  let component: TempInterfaceComponent;
  let fixture: ComponentFixture<TempInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
