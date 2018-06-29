import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectClientsListItemComponent } from './prospect-clients-list-item.component';

describe('ProspectClientsListItemComponent', () => {
  let component: ProspectClientsListItemComponent;
  let fixture: ComponentFixture<ProspectClientsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectClientsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectClientsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
