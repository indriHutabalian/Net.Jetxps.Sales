import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSalesJetIdComponent } from './report-sales-jet-id.component';

describe('ReportSalesJetIdComponent', () => {
  let component: ReportSalesJetIdComponent;
  let fixture: ComponentFixture<ReportSalesJetIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSalesJetIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSalesJetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
