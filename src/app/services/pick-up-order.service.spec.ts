import { TestBed, inject } from '@angular/core/testing';

import { PickUpOrderService } from './pick-up-order.service';

describe('PickUpOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PickUpOrderService]
    });
  });

  it('should be created', inject([PickUpOrderService], (service: PickUpOrderService) => {
    expect(service).toBeTruthy();
  }));
});
