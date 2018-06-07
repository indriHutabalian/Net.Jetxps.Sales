import { Component, OnInit } from '@angular/core';
import { ProspectClientService } from '../../services';
import { PageQuery, ProspectClient } from '../../models';

@Component({
  selector: 'app-prospect-clients-list',
  templateUrl: './prospect-clients-list.component.html',
  styleUrls: ['./prospect-clients-list.component.scss']
})
export class ProspectClientsListComponent implements OnInit {

  private prospectClients: ProspectClient[];
  private pageQuery: PageQuery = new PageQuery;

  constructor(
    private prospectClientService: ProspectClientService
  ) { }

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

}
