import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProspectClientService, BranchService, AuthService } from '../../services';
import { ProspectClient, Branch, PageQuery } from '../../models';

@Component({
  selector: 'app-prospect-clients-upsert',
  templateUrl: './prospect-clients-upsert.component.html',
  styleUrls: ['./prospect-clients-upsert.component.scss']
})
export class ProspectClientsUpsertComponent implements OnInit {
  constructor(
    private bsModalRef: BsModalRef,
    private bsModalService: BsModalService,
    private authService: AuthService,
    private prospectClientService: ProspectClientService
  ) { }

  @Input() code: string;

  private data: ProspectClient = new ProspectClient();

  private currentBranch: Branch = this.authService.getCurrentBranch();

  private errors;

  ngOnInit() {
    if (this.code)
      this.prospectClientService.get(this.code)
        .subscribe(data => {
          this.data = data;
        });
  }

  close() {
    this.bsModalRef.hide();
  }

  save(data) {
    data.engagementBranchCode = this.currentBranch.code;

    let save$ = (data.id) ?
      this.prospectClientService.update(data.code, data)
      : this.prospectClientService.create(data);

    save$.subscribe(res => {
      this.bsModalService.setDismissReason('reload');
      this.close();
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
}