import { Component, OnInit, Input } from '@angular/core';
import { EngagementRunsheet } from '../../models';

@Component({
  selector: 'app-engagement-runsheets-list-item',
  templateUrl: './engagement-runsheets-list-item.component.html',
  styleUrls: ['./engagement-runsheets-list-item.component.scss']
})
export class EngagementRunsheetsListItemComponent implements OnInit {
  @Input() item: EngagementRunsheet;

  constructor() { }

  ngOnInit() {
  }

}
