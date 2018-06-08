import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectClientsDetailComponent } from './prospect-clients-detail.component';

describe('ProspectClientsDetailComponent', () => {
  let component: ProspectClientsDetailComponent;
  let fixture: ComponentFixture<ProspectClientsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectClientsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectClientsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
