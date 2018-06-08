import { Component, OnInit } from '@angular/core';
import { ProspectClientService } from '../../services';
import { PageQuery, ProspectClient } from '../../models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ProspectClientsUpsertComponent } from './prospect-clients-upsert.component';
import { ProspectClientsDetailComponent } from './prospect-clients-detail.component';

@Component({
  selector: 'app-prospect-clients-list',
  templateUrl: './prospect-clients-list.component.html',
  styleUrls: ['./prospect-clients-list.component.scss']
})
export class ProspectClientsListComponent implements OnInit {

  constructor(
    private bsModalService: BsModalService,
    private prospectClientService: ProspectClientService
  ) { }

  private bsModalRef: BsModalRef;

  private prospectClients: ProspectClient[];
  private pageQuery: PageQuery = new PageQuery;

  ngOnInit() {
    this.getAll(this.pageQuery);
  }

  getAll(pageQuery: PageQuery) {
    this.prospectClientService.getAll(pageQuery)
      .subscribe(data => {
        this.prospectClients = data.result;
        this.pageQuery = data.query;
      });

  }

  delete(data) {
    if (confirm(`Are you sure want to delete this data?`)) {

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

  openModalUpsert(code: string) {
    this.bsModalService.onHide
      .subscribe(e => {
        if (e == 'reload')
          this.getAll(this.pageQuery);
      });
    this.bsModalRef = this.bsModalService.show(ProspectClientsUpsertComponent, { initialState: { code: code } });
  }

  openModalDetail(code: string) {
    this.bsModalService.onHide
      .subscribe(e => {
        if (e == 'reload')
          this.getAll(this.pageQuery);
      });
    this.bsModalRef = this.bsModalService.show(ProspectClientsDetailComponent, { initialState: { code: code } });
  }

}
