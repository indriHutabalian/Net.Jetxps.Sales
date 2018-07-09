import { Component, OnInit, Input } from '@angular/core';
import { EngagementRunsheetItem } from '../../models';

@Component({
  selector: 'engagement-runsheets-item',
  templateUrl: './engagement-runsheets-item.component.html',
  styleUrls: ['./engagement-runsheets-item.component.scss']
})
export class EngagementRunsheetsItemComponent implements OnInit {
  @Input() item: EngagementRunsheetItem;

  constructor() {
  }

  ngOnInit() {
  }

}
