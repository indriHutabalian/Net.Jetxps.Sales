import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSalesEngagementComponent } from './report-sales-engagement.component';

describe('ReportSalesEngagementComponent', () => {
  let component: ReportSalesEngagementComponent;
  let fixture: ComponentFixture<ReportSalesEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSalesEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSalesEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
