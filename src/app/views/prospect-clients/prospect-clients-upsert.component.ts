import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProspectClientService, BranchService, AuthService } from '../../services';
import { ProspectClient, Branch, PageQuery } from '../../models';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService,
    private prospectClientService: ProspectClientService
  ) { }

  @Input() code: string;

  public data: ProspectClient = new ProspectClient();

  public currentBranch: Branch = this.authService.getCurrentBranch();

  public errors;

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
      this.toastrService.success(`Success`);
      this.bsModalService.setDismissReason('reload');
      this.close();
    }, res => {
      let error = res.error;

      this.errors = error.errors;

      this.toastrService.error(error.message);
    });
  }

  getErrorValue(propName: string) {
    if (!this.errors)
      return '';

    return this.errors[propName];
  }
}