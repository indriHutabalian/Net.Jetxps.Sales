import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ProspectClientService } from '../../services';
import { ProspectClient } from '../../models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prospect-clients-detail',
  templateUrl: './prospect-clients-detail.component.html',
  styleUrls: ['./prospect-clients-detail.component.scss']
})
export class ProspectClientsDetailComponent implements OnInit {
  constructor(
    private bsModalRef: BsModalRef,
    private toastrService: ToastrService,
    private prospectClientService: ProspectClientService
  ) { }

  @Input() code: string;
  public prospectClient: ProspectClient;
  public loading: boolean = false;

  ngOnInit() {
    if (!this.code)
      this.bsModalRef.hide();

    this.getData(this.code);
  }

  getData(code: string) {
    this.loading = true;
    this.prospectClientService.get(this.code)
      .subscribe(res => {
        this.loading = false;
        this.prospectClient = res;
      }, res => {
        this.loading = false;
        let error = res.error;
        this.toastrService.error(error.message);
        this.close();
      });
  }

  close() {
    this.bsModalRef.hide();
  }

}
