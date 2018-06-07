import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectClientsListComponent } from './prospect-clients-list.component';

describe('ProspectClientsListComponent', () => {
  let component: ProspectClientsListComponent;
  let fixture: ComponentFixture<ProspectClientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectClientsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
