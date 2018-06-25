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

  private prospectClients: ProspectClient[];
  private pageQuery: PageQuery = new PageQuery();

  private currentBranch: Branch = this.authService.getCurrentBranch();

  ngOnInit() {
    this.pageQuery.size = 8;
    this.getAll(this.pageQuery);
  }

  getAll(pageQuery: PageQuery) {
    this.prospectClientService.getAll(this.authService.getCurrentBranch().code, pageQuery)
      .subscribe(data => {
        this.prospectClients = data.result;
        this.pageQuery = data.query;
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
