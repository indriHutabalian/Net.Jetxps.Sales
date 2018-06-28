import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRealizationComponent } from './task-realization.component';

describe('TaskRealizationComponent', () => {
  let component: TaskRealizationComponent;
  let fixture: ComponentFixture<TaskRealizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRealizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRealizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
