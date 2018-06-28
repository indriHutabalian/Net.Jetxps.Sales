import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  EngagementRunsheetService,
  ProspectClientService,
  AuthService,
  AccountService
} from '../../services';
import {
  EngagementRunsheet,
  PageQuery,
  EngagementRunsheetItem,
  ProspectClient,
  Branch
} from '../../models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProspectClientsSearchModalComponent } from '../prospect-clients/prospect-clients-search-modal.component';

@Component({
  selector: 'app-engagement-runsheets-create',
  templateUrl: './engagement-runsheets-create.component.html',
  styleUrls: ['./engagement-runsheets-create.component.scss']
})
export class EngagementRunsheetsCreateComponent implements OnInit {
  constructor(
    private bsModalService: BsModalService,
    private toastr: ToastrService,
    private accountService: AccountService,
    private authService: AuthService,
    private engagementRunsheetService: EngagementRunsheetService,
    private prospectClientService: ProspectClientService
  ) { }

  private bsModalRef: BsModalRef;
  private currentBranch: Branch = this.authService.getCurrentBranch();

  public loadingGetProfile: boolean = false;
  public data: EngagementRunsheet = new EngagementRunsheet();
  public errors: any = {};

  ngOnInit() {
    this.bsModalService.onHide
      .subscribe(response => {
        if (response != null && typeof response == "object") {
          let item = new EngagementRunsheetItem(response);

          if (!this.data.engagementRunsheetItems.find(t => t.prospectClientCode == item.prospectClientCode))
            this.data.engagementRunsheetItems.push(item);
        }
      });
  }

  save(data: EngagementRunsheet) {
    this.errors = {};

    data.branchCode = this.currentBranch.code;
    data.branchName = this.currentBranch.name;

    if (data.engagementRunsheetItems.length == 0) {
      this.toastr.error(`There are no selected clients`);

      return;
    }

    this.engagementRunsheetService.create(data)
      .subscribe(res => {
        this.toastr.success(`Engagement Runsheet has been created successfully`);

        this.data = new EngagementRunsheet();

        // print dialog
      }, res => {
        let error = res.error;

        this.errors = error.errors;
      });
  }

  getErrorValue(propName: string) {
    if (!this.errors)
      return ``;

    return this.errors[propName];
  }

  openModalSearchProspectClients() {
    this.bsModalRef = this.bsModalService.show(ProspectClientsSearchModalComponent, { class: 'modal-lg' });
  }

  getProfile(email: string) {
    this.loadingGetProfile = true;
    this.accountService.getProfileByEmail(email)
      .then(res => {
        this.data.salesCode = res.userId;
        this.data.salesName = res.email;
      });
  }

  removeItem(item) {
    this.data.engagementRunsheetItems = this.data.engagementRunsheetItems.filter(t => t.prospectClientCode !== item.prospectClientCode);
  }

  swap(a, b) {
    [this.data.engagementRunsheetItems[a], this.data.engagementRunsheetItems[b]] = [this.data.engagementRunsheetItems[b], this.data.engagementRunsheetItems[a]]
  }
}
