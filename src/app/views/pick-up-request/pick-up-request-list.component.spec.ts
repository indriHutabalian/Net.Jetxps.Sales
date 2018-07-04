import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpRequestListComponent } from './pick-up-request-list.component';

describe('PickUpRequestListComponent', () => {
  let component: PickUpRequestListComponent;
  let fixture: ComponentFixture<PickUpRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
