import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinChaRtComponent } from './vin-cha-rt.component';

describe('VinChaRtComponent', () => {
  let component: VinChaRtComponent;
  let fixture: ComponentFixture<VinChaRtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinChaRtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinChaRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
