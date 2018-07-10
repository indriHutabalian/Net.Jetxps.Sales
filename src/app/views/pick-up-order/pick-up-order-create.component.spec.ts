import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpOrderCreateComponent } from './pick-up-order-create.component';

describe('PickUpOrderCreateComponent', () => {
  let component: PickUpOrderCreateComponent;
  let fixture: ComponentFixture<PickUpOrderCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpOrderCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpOrderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
