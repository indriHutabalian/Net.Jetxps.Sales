import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementRunsheetsItemsActiveComponent } from './engagement-runsheets-items-active.component';

describe('EngagementRunsheetsItemsActiveComponent', () => {
  let component: EngagementRunsheetsItemsActiveComponent;
  let fixture: ComponentFixture<EngagementRunsheetsItemsActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementRunsheetsItemsActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementRunsheetsItemsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
