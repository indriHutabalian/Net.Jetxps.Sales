import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpOrderListComponent } from './pick-up-order-list.component';

describe('PickUpOrderListComponent', () => {
  let component: PickUpOrderListComponent;
  let fixture: ComponentFixture<PickUpOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
