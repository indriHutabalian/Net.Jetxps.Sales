import { EngagementRunsheetsModule } from './engagement-runsheets.module';

describe('EngagementRunsheetsModule', () => {
  let engagementRunsheetsModule: EngagementRunsheetsModule;

  beforeEach(() => {
    engagementRunsheetsModule = new EngagementRunsheetsModule();
  });

  it('should create an instance', () => {
    expect(engagementRunsheetsModule).toBeTruthy();
  });
});
