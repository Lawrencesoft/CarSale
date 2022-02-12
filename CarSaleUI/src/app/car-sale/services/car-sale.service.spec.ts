import { TestBed } from '@angular/core/testing';

import { CarSaleService } from './car-sale.service';

describe('CarSaleService', () => {
  let service: CarSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
