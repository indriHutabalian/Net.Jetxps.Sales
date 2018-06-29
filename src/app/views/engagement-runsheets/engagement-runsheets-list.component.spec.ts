import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementRunsheetsListComponent } from './engagement-runsheets-list.component';

describe('EngagementRunsheetsListComponent', () => {
  let component: EngagementRunsheetsListComponent;
  let fixture: ComponentFixture<EngagementRunsheetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementRunsheetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementRunsheetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
