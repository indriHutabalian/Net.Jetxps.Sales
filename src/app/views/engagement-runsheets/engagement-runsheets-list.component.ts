import { Component, OnInit } from '@angular/core';
import { EngagementRunsheetService, AuthService } from '../../services';
import { PageQuery, EngagementRunsheet } from '../../models';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-engagement-runsheets-list',
  templateUrl: './engagement-runsheets-list.component.html',
  styleUrls: ['./engagement-runsheets-list.component.scss']
})
export class EngagementRunsheetsListComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService,
    private engagementRunsheetService: EngagementRunsheetService
  ) { }

  public loading: boolean;
  public engagementRunsheets: EngagementRunsheet[] = [];
  public pageQuery: PageQuery = new PageQuery();

  ngOnInit() {
    this.pageQuery.asc = false;
    this.getAll(this.pageQuery);
  }

  getAll(pageQuery: PageQuery) {
    this.loading = true;
    this.engagementRunsheetService.getAll(this.authService.getCurrentBranch().code, pageQuery)
      .subscribe(data => {
        this.loading = false;
        this.engagementRunsheets = data.result;
        this.pageQuery = data.query;
      }, res => {
        this.loading = false;
        let error = res.error;
        this.toastrService.error(error.message);
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

  openDetail(item: EngagementRunsheet) {
    this.router.navigate([`/engagement-runsheets/list/${item.code}`]);
  }
}
