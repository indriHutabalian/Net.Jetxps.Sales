import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpRequestCreateComponent } from './pick-up-request-create.component';

describe('PickUpRequestCreateComponent', () => {
  let component: PickUpRequestCreateComponent;
  let fixture: ComponentFixture<PickUpRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpRequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
