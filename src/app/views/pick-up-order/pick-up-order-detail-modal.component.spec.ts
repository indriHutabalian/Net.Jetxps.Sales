import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpOrderDetailModalComponent } from './pick-up-order-detail-modal.component';

describe('PickUpOrderDetailModalComponent', () => {
  let component: PickUpOrderDetailModalComponent;
  let fixture: ComponentFixture<PickUpOrderDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpOrderDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpOrderDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
