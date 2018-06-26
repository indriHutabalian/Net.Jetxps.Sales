import { TestBed, inject } from '@angular/core/testing';

import { EngagementStatusService } from './engagement-status.service';

describe('EngagementStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngagementStatusService]
    });
  });

  it('should be created', inject([EngagementStatusService], (service: EngagementStatusService) => {
    expect(service).toBeTruthy();
  }));
});
