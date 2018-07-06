import { ProspectClientModule } from './prospect-client.module';

describe('ProspectClientModule', () => {
  let prospectClientModule: ProspectClientModule;

  beforeEach(() => {
    prospectClientModule = new ProspectClientModule();
  });

  it('should create an instance', () => {
    expect(prospectClientModule).toBeTruthy();
  });
});
