import { Component, OnInit, TemplateRef } from '@angular/core';
import { EngagementRunsheetService, ProspectClientService, AuthService } from '../../services';
import { EngagementRunsheet, PageQuery, EngagementRunsheetItem, ProspectClient, Branch } from '../../models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ProspectClientsSearchModalComponent } from '../prospect-clients/prospect-clients-search-modal.component';

@Component({
  selector: 'app-engagement-runsheets-create',
  templateUrl: './engagement-runsheets-create.component.html',
  styleUrls: ['./engagement-runsheets-create.component.scss']
})
export class EngagementRunsheetsCreateComponent implements OnInit {
  constructor(
    private bsModalService: BsModalService,
    private authService: AuthService,
    private engagementRunsheetService: EngagementRunsheetService,
    private prospectClientService: ProspectClientService
  ) { }

  private bsModalRef: BsModalRef;

  private salesEmail: string;

  private data: EngagementRunsheet = new EngagementRunsheet();

  private currentBranch: Branch = this.authService.getCurrentBranch();

  private errors;

  ngOnInit() {
    this.bsModalService.onHide
      .subscribe(data => {
        if (data != null)
          this.data.engagementRunsheetItems.push(new EngagementRunsheetItem(data));
      });
  }

  save(data: EngagementRunsheet) {
    data.branchCode = this.currentBranch.code;
    data.branchName = this.currentBranch.name;

    this.engagementRunsheetService.create(data)
      .subscribe(response => {

      });
  }

  getErrorValue(propName: string) {
    if (!this.errors)
      return '';

    return this.errors[propName];
  }

  openModalSearchProspectClients() {
    this.bsModalRef = this.bsModalService.show(ProspectClientsSearchModalComponent, { class: 'modal-lg' });
  }
}
