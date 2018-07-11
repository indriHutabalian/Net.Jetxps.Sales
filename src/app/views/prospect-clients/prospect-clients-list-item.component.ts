import { Component, OnInit, Input } from '@angular/core';
import { ProspectClient } from '../../models';

@Component({
  selector: 'prospect-clients-list-item',
  templateUrl: './prospect-clients-list-item.component.html',
  styleUrls: ['./prospect-clients-list-item.component.scss']
})
export class ProspectClientsListItemComponent implements OnInit {
  @Input() item: ProspectClient;

  constructor() { }

  ngOnInit() {
  }

}
