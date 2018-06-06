import { TestBed, inject } from '@angular/core/testing';

import { ProspectClientService } from './prospect-client.service';

describe('ProspectClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProspectClientService]
    });
  });

  it('should be created', inject([ProspectClientService], (service: ProspectClientService) => {
    expect(service).toBeTruthy();
  }));
});
