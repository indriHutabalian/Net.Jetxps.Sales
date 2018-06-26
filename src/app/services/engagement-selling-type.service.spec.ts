import { TestBed, inject } from '@angular/core/testing';

import { EngagementSellingTypeService } from './engagement-selling-type.service';

describe('EngagementSellingTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngagementSellingTypeService]
    });
  });

  it('should be created', inject([EngagementSellingTypeService], (service: EngagementSellingTypeService) => {
    expect(service).toBeTruthy();
  }));
});
