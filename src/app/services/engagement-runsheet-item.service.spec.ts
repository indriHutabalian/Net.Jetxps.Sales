import { TestBed, inject } from '@angular/core/testing';

import { EngagementRunsheetItemService } from './engagement-runsheet-item.service';

describe('EngagementRunsheetItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngagementRunsheetItemService]
    });
  });

  it('should be created', inject([EngagementRunsheetItemService], (service: EngagementRunsheetItemService) => {
    expect(service).toBeTruthy();
  }));
});
