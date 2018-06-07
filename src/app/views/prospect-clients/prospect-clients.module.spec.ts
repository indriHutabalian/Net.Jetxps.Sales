import { ProspectClientsModule } from './prospect-clients.module';

describe('ProspectClientsModule', () => {
  let prospectClientsModule: ProspectClientsModule;

  beforeEach(() => {
    prospectClientsModule = new ProspectClientsModule();
  });

  it('should create an instance', () => {
    expect(prospectClientsModule).toBeTruthy();
  });
});
