import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSalesJetIdCreatedComponent } from './report-sales-jet-id-created.component';

describe('ReportSalesJetIdCreatedComponent', () => {
  let component: ReportSalesJetIdCreatedComponent;
  let fixture: ComponentFixture<ReportSalesJetIdCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSalesJetIdCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSalesJetIdCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
