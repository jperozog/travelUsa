import { TestBed } from '@angular/core/testing';

import { ComprasServicesService } from './compras-services.service';

describe('ComprasServicesService', () => {
  let service: ComprasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
