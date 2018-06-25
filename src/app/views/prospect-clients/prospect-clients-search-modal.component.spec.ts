import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectClientsSearchModalComponent } from './prospect-clients-search-modal.component';

describe('ProspectClientsSearchModalComponent', () => {
  let component: ProspectClientsSearchModalComponent;
  let fixture: ComponentFixture<ProspectClientsSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectClientsSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectClientsSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
