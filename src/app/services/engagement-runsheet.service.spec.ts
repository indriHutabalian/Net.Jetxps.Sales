import { TestBed, inject } from '@angular/core/testing';

import { EngagementRunsheetService } from './engagement-runsheet.service';

describe('EngagementRunsheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngagementRunsheetService]
    });
  });

  it('should be created', inject([EngagementRunsheetService], (service: EngagementRunsheetService) => {
    expect(service).toBeTruthy();
  }));
});
