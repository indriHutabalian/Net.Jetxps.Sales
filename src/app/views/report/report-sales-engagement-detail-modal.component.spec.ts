import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSalesEngagementDetailModalComponent } from './report-sales-engagement-detail-modal.component';

describe('ReportSalesEngagementDetailModalComponent', () => {
  let component: ReportSalesEngagementDetailModalComponent;
  let fixture: ComponentFixture<ReportSalesEngagementDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSalesEngagementDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSalesEngagementDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
