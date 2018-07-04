import { TestBed, inject } from '@angular/core/testing';

import { PickUpRequestService } from './pick-up-request.service';

describe('PickUpRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PickUpRequestService]
    });
  });

  it('should be created', inject([PickUpRequestService], (service: PickUpRequestService) => {
    expect(service).toBeTruthy();
  }));
});
