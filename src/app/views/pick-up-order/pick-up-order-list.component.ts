import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PickUpOrderService, AuthService } from '../../services';
import { PickUpOrder, PageQuery } from '../../models';

@Component({
  selector: 'app-pick-up-order-list',
  templateUrl: './pick-up-order-list.component.html',
  styleUrls: ['./pick-up-order-list.component.scss']
})
export class PickUpOrderListComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService,
    private pickUpOrderService: PickUpOrderService
  ) { }

  public loading: boolean;
  public pickUpOrders: PickUpOrder[] = [];
  public pageQuery: PageQuery = new PageQuery();

  ngOnInit() {
    this.pageQuery.asc = false;
    this.getAll(this.pageQuery);
  }

  getAll(pageQuery: PageQuery) {
    this.loading = true;
    this.pickUpOrderService.getAllHistory(this.authService.getCurrentBranch().code, pageQuery)
      .subscribe(data => {
        this.loading = false;
        this.pickUpOrders = data.result;
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

  openDetail(item: PickUpOrder) {
    this.router.navigate([`/pick-up-orders/list/${item.code}`]);
  }

}
