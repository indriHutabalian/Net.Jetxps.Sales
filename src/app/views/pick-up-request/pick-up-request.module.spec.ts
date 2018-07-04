import { PickUpRequestModule } from './pick-up-request.module';

describe('PickUpRequestModule', () => {
  let pickUpRequestModule: PickUpRequestModule;

  beforeEach(() => {
    pickUpRequestModule = new PickUpRequestModule();
  });

  it('should create an instance', () => {
    expect(pickUpRequestModule).toBeTruthy();
  });
});
