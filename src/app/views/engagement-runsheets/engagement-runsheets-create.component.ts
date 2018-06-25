import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  EngagementRunsheetService,
  ProspectClientService, AuthService
} from '../../services';
import {
  EngagementRunsheet,
  PageQuery,
  EngagementRunsheetItem,
  ProspectClient,
  Branch
} from '../../models';
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
      .subscribe(response => {
        if (response != null && typeof response == "object") {
          let item = new EngagementRunsheetItem(response);
debugger
          if (!this.data.engagementRunsheetItems.includes(item))
            this.data.engagementRunsheetItems.push(item);
        }
      });
  }

  save(data: EngagementRunsheet) {
    data.branchCode = this.currentBranch.code;
    data.branchName = this.currentBranch.name;

    this.engagementRunsheetService.create(data)
      .subscribe(res => {

      }, res => {
        let error = res.error;

        this.errors = error.errors;
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

  getProfile(email: string) {
    this.authService.getProfileByEmail(email)
      .then(res => {
        console.log(res);
      });
  }
}
