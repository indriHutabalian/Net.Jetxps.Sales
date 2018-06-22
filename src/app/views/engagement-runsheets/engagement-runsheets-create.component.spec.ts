import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementRunsheetsCreateComponent } from './engagement-runsheets-create.component';

describe('EngagementRunsheetsCreateComponent', () => {
  let component: EngagementRunsheetsCreateComponent;
  let fixture: ComponentFixture<EngagementRunsheetsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementRunsheetsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementRunsheetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
