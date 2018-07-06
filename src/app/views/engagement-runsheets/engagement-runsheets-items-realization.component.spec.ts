import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementRunsheetsItemsRealizationComponent } from './engagement-runsheets-items-realization.component';

describe('EngagementRunsheetsItemsRealizationComponent', () => {
  let component: EngagementRunsheetsItemsRealizationComponent;
  let fixture: ComponentFixture<EngagementRunsheetsItemsRealizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementRunsheetsItemsRealizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementRunsheetsItemsRealizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
