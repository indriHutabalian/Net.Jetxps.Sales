import { Component, OnInit } from '@angular/core';
import { ProspectClientService, AuthService } from '../../services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Branch, ProspectClient, PageQuery } from '../../models';

@Component({
  selector: 'app-prospect-clients-search-modal',
  templateUrl: './prospect-clients-search-modal.component.html',
  styleUrls: ['./prospect-clients-search-modal.component.scss']
})
export class ProspectClientsSearchModalComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef,
    private bsModalService: BsModalService,
    private authService: AuthService,
    private prospectClientService: ProspectClientService
  ) { }

  public loading: boolean = false;
  public prospectClients: ProspectClient[] = [];
  public pageQuery: PageQuery = new PageQuery();

  public currentBranch: Branch = this.authService.getCurrentBranch();

  ngOnInit() {
    this.pageQuery.size = 8;
    this.getAll(this.pageQuery);
  }

  getAll(pageQuery: PageQuery) {
    this.loading = true;
    this.prospectClientService.getAllIncomplete(this.authService.getCurrentBranch().code, pageQuery)
      .subscribe(data => {
        this.loading = false;
        this.prospectClients = data.result;
        this.pageQuery = data.query;
      }, res => {
        this.loading = false;
        let error = res.error;

      });
  }

  search() {
    this.pageQuery.page = 1;

    this.getAll(this.pageQuery);
  }

  pageChanged(event: any) {
    this.pageQuery.page = event.page;

    this.getAll(this.pageQuery);
  }

  selectClient(client: ProspectClient) {
    this.bsModalService.onHide.next(client);
    this.bsModalRef.hide();
  }
}
