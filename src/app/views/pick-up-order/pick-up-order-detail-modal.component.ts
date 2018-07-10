import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { PickUpOrderService } from '../../services';
import { PickUpOrder } from '../../models';

@Component({
  selector: 'app-pick-up-order-detail-modal',
  templateUrl: './pick-up-order-detail-modal.component.html',
  styleUrls: ['./pick-up-order-detail-modal.component.scss']
})
export class PickUpOrderDetailModalComponent implements OnInit {

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;

  public isModalShown: boolean = true;
  private code: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private pickUpOrderService: PickUpOrderService
  ) {
    let params = this.activatedRoute.snapshot.params;
    this.code = params.code;
  }
  public loading: boolean = false;

  public data: PickUpOrder;

  ngOnInit() {
    this.getData(this.code);
  }

  getData(code: string) {
    this.loading = true;

    this.pickUpOrderService.get(code)
      .subscribe(res => {
        this.loading = false;

        this.data = res;
      }, res => {
        this.loading = false;

        let error = res.error;
      });
  }

  closeModal() {
    // giring 
    this.router.navigate(['pick-up-orders/list']);
  }

  onHidden() {
    this.router.navigate(['pick-up-orders/list']);
  }
}
