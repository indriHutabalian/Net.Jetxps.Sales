import { TestBed, inject } from '@angular/core/testing';

import { EngagementProductTypeService } from './engagement-product-type.service';

describe('EngagementProductTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngagementProductTypeService]
    });
  });

  it('should be created', inject([EngagementProductTypeService], (service: EngagementProductTypeService) => {
    expect(service).toBeTruthy();
  }));
});
