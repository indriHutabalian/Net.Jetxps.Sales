import { Component, OnInit } from '@angular/core';
import { AuthService, ProspectClientService } from '../../services';
import { PageQuery, ProspectClient } from '../../models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ProspectClientsUpsertComponent } from './prospect-clients-upsert.component';
import { ProspectClientsDetailComponent } from './prospect-clients-detail.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospect-clients-list',
  templateUrl: './prospect-clients-list.component.html',
  styleUrls: ['./prospect-clients-list.component.scss']
})
export class ProspectClientsListComponent implements OnInit {

  constructor(
    private bsModalService: BsModalService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private prospectClientService: ProspectClientService
  ) { }

  private bsModalRef: BsModalRef;

  public loading: boolean = false;
  public prospectClients: ProspectClient[] = [];
  public pageQuery: PageQuery = new PageQuery();

  ngOnInit() {
    this.bsModalService.onHide
      .subscribe(e => {
        if (e == 'reload')
          this.getAll(this.pageQuery);
      });

    this.getAll(this.pageQuery);
  }

  getAll(pageQuery: PageQuery) {
    this.loading = true;
    this.prospectClientService.getAll(this.authService.getCurrentBranch().code, pageQuery)
      .subscribe(data => {
        this.loading = false;
        this.prospectClients = data.result;
        this.pageQuery = data.query;
      }, res => {
        this.loading = false;
        let error = res.error;
        this.toastrService.error(error.message);
      });
  }

  delete(data) {
    if (confirm(`Are you sure want to delete this data?`)) {
      this.prospectClientService.delete(data.code)
        .subscribe(data => {
          this.toastrService.success(`Deleted`);
          this.getAll(this.pageQuery);
        });
    }
  }

  search() {
    this.pageQuery.page = 1;

    this.getAll(this.pageQuery);
  }

  pageChanged(event: any) {
    this.pageQuery.page = event.page;

    this.getAll(this.pageQuery);
  }

  openModal(isUpsert: boolean, code: string = '') {
    this.bsModalRef = this.bsModalService.show(isUpsert ? ProspectClientsUpsertComponent : ProspectClientsDetailComponent, { initialState: { code: code } });
  }

  setOpen(code: string) {
    this.prospectClientService.setOpen(code)
      .subscribe(res => {
        this.toastrService.success(`Updated`);
        this.getAll(this.pageQuery);
      })
  }

  setClose(code: string) {
    this.prospectClientService.setClose(code)
      .subscribe(res => {
        this.toastrService.success(`Updated`);
        this.getAll(this.pageQuery);
      })
  }
}
