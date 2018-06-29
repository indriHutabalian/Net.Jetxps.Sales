import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementRunsheetsListItemComponent } from './engagement-runsheets-list-item.component';

describe('EngagementRunsheetsListItemComponent', () => {
  let component: EngagementRunsheetsListItemComponent;
  let fixture: ComponentFixture<EngagementRunsheetsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementRunsheetsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementRunsheetsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
