import { PickUpOrderModule } from './pick-up-order.module';

describe('PickUpOrderModule', () => {
  let pickUpOrderModule: PickUpOrderModule;

  beforeEach(() => {
    pickUpOrderModule = new PickUpOrderModule();
  });

  it('should create an instance', () => {
    expect(pickUpOrderModule).toBeTruthy();
  });
});
