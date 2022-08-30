import { TestBed } from '@angular/core/testing';

import { OrganicRouteService } from './organic-route.service';

describe('OrganicRouteService', () => {
  let service: OrganicRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganicRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
