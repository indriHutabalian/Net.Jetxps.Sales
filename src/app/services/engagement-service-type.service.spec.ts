import { TestBed, inject } from '@angular/core/testing';

import { EngagementServiceTypeService } from './engagement-service-type.service';

describe('EngagementServiceTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngagementServiceTypeService]
    });
  });

  it('should be created', inject([EngagementServiceTypeService], (service: EngagementServiceTypeService) => {
    expect(service).toBeTruthy();
  }));
});
