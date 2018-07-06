import { Component, OnInit, OnDestroy } from '@angular/core';
import { SalesService, DataService } from '../../services';
import { EngagementRunsheetItem, PageQuery } from '../../models';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-engagement-runsheets-items-active',
  templateUrl: './engagement-runsheets-items-active.component.html',
  styleUrls: ['./engagement-runsheets-items-active.component.scss']
})
export class EngagementRunsheetsItemsActiveComponent implements OnInit {

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private dataService: DataService,
    private salesService: SalesService
  ) { }

  private sharedSubject$: Subscription;

  public loading: boolean = false;
  public items: EngagementRunsheetItem[] = [];
  public pageQuery: PageQuery = new PageQuery();

  ngOnInit() {
    this.sharedSubject$ = this.dataService.subject$.subscribe(value => {
      if (value)
        this.getAll(this.pageQuery);
    });

    this.getAll(this.pageQuery);
  }

  ngOnDestroy() {
    this.sharedSubject$.unsubscribe();
  }

  getAll(pageQuery: PageQuery) {
    this.loading = true;
    this.salesService.getActiveEngagementRunsheetItems(pageQuery)
      .subscribe(data => {
        this.loading = false;
        this.items = data.result;
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

  openRealization(item: EngagementRunsheetItem) {
    this.router.navigate([`/engagement-runsheets/active/${item.engagementRunsheetCode}/realization/${item.prospectClientCode}`]);
  }

}
