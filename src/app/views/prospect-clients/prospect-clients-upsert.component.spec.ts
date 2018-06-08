import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectClientsUpsertComponent } from './prospect-clients-upsert.component';

describe('ProspectClientsUpsertComponent', () => {
  let component: ProspectClientsUpsertComponent;
  let fixture: ComponentFixture<ProspectClientsUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectClientsUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectClientsUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
