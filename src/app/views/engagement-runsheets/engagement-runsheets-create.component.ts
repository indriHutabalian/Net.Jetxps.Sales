import { Component, OnInit } from '@angular/core';
import { EngagementRunsheetService } from '../../services';
import { EngagementRunsheet, PageQuery } from '../../models';

@Component({
  selector: 'app-engagement-runsheets-create',
  templateUrl: './engagement-runsheets-create.component.html',
  styleUrls: ['./engagement-runsheets-create.component.scss']
})
export class EngagementRunsheetsCreateComponent implements OnInit {

  constructor(
    private EngagementRunsheetService: EngagementRunsheetService
  ) { }

  private salesEmail: string;

  private data: EngagementRunsheet = new EngagementRunsheet();

  private errors;


  ngOnInit() {
  }

  save(data) {

  }

  getErrorValue(propName: string) {
    if (!this.errors)
      return '';

    return this.errors[propName];
  }
}
