import { Component, OnInit, OnDestroy } from '@angular/core';
import { SalesService, DataService } from '../../services';
import { EngagementRunsheetItem, PageQuery } from '../../models';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-active',
  templateUrl: './task-active.component.html',
  styleUrls: ['./task-active.component.scss']
})
export class TaskActiveComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private dataService: DataService,
    private salesService: SalesService
  ) { }

  private sharedSubject$: Subscription;

  public items: EngagementRunsheetItem[];
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
    this.salesService.getActiveEngagementRunsheetItems(pageQuery)
      .subscribe(data => {
        this.items = data.result;
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

  openRealization(item: EngagementRunsheetItem) {
    this.router.navigate([`/tasks/active/${item.engagementRunsheetCode}/realization/${item.prospectClientCode}`]);
  }

}
