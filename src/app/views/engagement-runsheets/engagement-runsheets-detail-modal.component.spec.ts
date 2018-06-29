import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementRunsheetsDetailModalComponent } from './engagement-runsheets-detail-modal.component';

describe('EngagementRunsheetsDetailModalComponent', () => {
  let component: EngagementRunsheetsDetailModalComponent;
  let fixture: ComponentFixture<EngagementRunsheetsDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementRunsheetsDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementRunsheetsDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
