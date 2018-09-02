import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportJetIdRevenueComponent } from './report-jet-id-revenue.component';

describe('ReportJetIdRevenueComponent', () => {
  let component: ReportJetIdRevenueComponent;
  let fixture: ComponentFixture<ReportJetIdRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportJetIdRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportJetIdRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
