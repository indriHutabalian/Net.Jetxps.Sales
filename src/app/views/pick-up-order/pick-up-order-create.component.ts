import { Component, OnInit } from '@angular/core';
import { PickUpOrderService, AuthService, ProductService, AccountService } from '../../services';
import { PickUpOrder, Product } from '../../models';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-up-order-create',
  templateUrl: './pick-up-order-create.component.html',
  styleUrls: ['./pick-up-order-create.component.scss']
})
export class PickUpOrderCreateComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private accountService: AccountService,
    private pickUpOrderService: PickUpOrderService,
    private productService: ProductService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  public products: Product[];

  public errors = [];
  public loading: boolean = false;
  public data: PickUpOrder = new PickUpOrder();

  ngOnInit() {
    this.data.branchCode = this.authService.getCurrentBranch().code;
    this.data.pickUpTime = new Date();
    this.data.pickUpItemCount = 1;

    this.getProducts();
  }

  getProducts() {
    this.productService.getAll({ size: -1 })
      .subscribe(res => {
        this.products = res.data;
      });
  }

  save(data: PickUpOrder) {
    this.errors = [];

    this.loading = true;

    this.pickUpOrderService.create(data)
      .subscribe(res => {
        this.loading = false;
        this.toastrService.success(`Success`);
        this.router.navigate(['pick-up-orders/list']);
      }, res => {
        this.loading = false;
        let error = res.error;
        this.toastrService.error(error.message || 'An error has occurred');
        this.errors = error.errors;
      });
  }

  public loadingSearchJetID: boolean = false;
  public validJetID: boolean = false;

  searchJetID(value: string) {
    if (!value) return false;

    this.loadingSearchJetID = true;

    this.accountService.getProfileByEmail(value)
      .then(res => {
        this.loadingSearchJetID = false;

        if (res) {
          this.validJetID = true;
          this.data.name = res.username;
          this.data.address = res.address;
          this.data.phoneNumber = res.phoneNumber;
          this.data.email = res.email;
        }
        else {
          this.toastrService.error('Jet ID not found');
        }
      }, res => {
        this.loadingSearchJetID = false;
        this.validJetID = false;
        let error = res.error;
      });
  }

  removeJetID() {
    this.validJetID = false;
    this.data.jetIDCode = '';
  }

  onKey(event: any) {
    if (event.key == 'Enter')
      this.searchJetID(this.data.jetIDCode);

    return false;
  }
}
